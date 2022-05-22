import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Grid
} from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import Rating from "@mui/material/Rating";
import { AddShoppingCart, Favorite } from "@material-ui/icons";
import useStyles from "./styles";
import { addItemToCart } from "../../../Services/services";
//import MainTheme from "../../../themes/MainTheme";
import MySnackBar from "../../Alerts/MySnackBar";
import { useSelector } from "react-redux";
import { getUser } from "../../../store/StateUser";
import { useState, useEffect } from "react";

const Product = ({ product }) => {
  const state = useSelector((s) => s);
  const user = getUser(state);

  const [cartUpdated, setCartUpdated] = useState(false);

  const classes = useStyles();

  const handleAddToCart = async (id, item) => {
    console.log("Adding item to cart");
    const res = await addItemToCart(id, item);
    if (res.status == 200) {
      // console.log("added item ", item);

      setCartUpdated(true);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCartUpdated(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [cartUpdated]);

  const inStock =
    parseInt(product.item_quantity) > 0
      ? "✅ In-stock (" + product.item_quantity + ")"
      : "❌ Not in-stock";
  return (
    <Card className={classes.root}>
      <MySnackBar
        open={cartUpdated}
        timeout={2000}
        severity='success'
        message='Added The product to the cart.'
      />
      <CardActions disableSpacing className={classes.cardFavButt}>
        <IconButton aria-label='Example'>
          <Favorite />
        </IconButton>
      </CardActions>
      <CardMedia
        className={classes.media}
        image={product.item_pictures}
        title={product.item_name}
      />
      <CardContent>
        <div className={classes.CardContent}>
          <Grid
            alignItems='center'
            container
            justifyContent='space-between'
            direction='row'
          >
            <Typography gutterBottom component='h2' className={classes.name}>
              {product.item_name}
            </Typography>
            <Typography
              className={classes.price}
              style={{ alignContent: "right" }}
              gutterBottom
              component='h2'
              align='right'
            >
              ${product.item_price}
            </Typography>
          </Grid>
          <Grid
            alignItems='center'
            container
            justifyContent='space-between'
            direction='row'
          >
            <Rating
              name='read-only'
              precision={0.5}
              value={parseInt(product.item_rating) / 2}
              readOnly
              className={classes.rating}
            />
            <span className={classes.stock}>{inStock}</span>
          </Grid>
        </div>
        {/* <Typography variant='h2' color='textSecondary'>
          {product.description}
        </Typography> */}
        <Typography
          dangerouslySetInnerHTML={{ __html: product.item_description }}
          variant='body2'
          color='textSecondary'
          component='p'
        />
        <Typography
          dangerouslySetInnerHTML={{ __html: product.category }}
          variant='body2'
          color='textSecondary'
          component='p'
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton
          aria-label='Example'
          onClick={() => {
            handleAddToCart(user._id, product);
          }}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
