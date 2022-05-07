import React, { useReducer, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Product from "../Product/Product";
import { CssBaseline } from "@mui/material";
import useStyles from "./styles";
import { useLocation } from "react-router-dom";
import { AppBar, Toolbar, Button, Slider, Box } from "@mui/material";

function reducer(state, action) {
  return [...state, ...action];
}
function valuetext(value) {
  return `${value}°C`;
}
const Products = (props) => {
  const classes = useStyles();
  const { state } = useLocation();
  const searchValue = state.value;

  const [sortedProducts, setSortedProducts] = useReducer(reducer, []);
  useEffect(() => {
    console.log(sortedProducts);
  }, [sortedProducts]);
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const sortResults = (e, val) => {
    e.preventDefault();
    let sortedResults = props.products.sort((a, b) => {
      if (val === "price") {
        return parseInt(a.item_price) - parseInt(b.item_price);
      } else if (val === "rating") {
        return parseFloat(b.item_rating) - parseFloat(a.item_rating);
      } else if (val === "pricerange") {
        return b.TotalRecovered - a.TotalRecovered;
      }
    });
    console.log(sortedResults);
    setSortedProducts(sortedResults);
  };
  if (!props.products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      {/* <div className={classes.toolbar} /> */}
      <Grid container spacing={2} justify="center">
        <Grid item>
          <AppBar
            position="static"
            sx={{
              backgroundColor: "#212121 !important ",
              borderRadius: 8,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              // width: "min",
              // margin: "auto",
            }}
            style={{
              border: "solid white 0.1px",
            }}
          >
            <Toolbar>
              <Button
                className={classes.btn}
                sx={{
                  m: 2,
                  textTransform: "capitalize",
                }}
                variant="outlined"
                size="small"
                //onClick={handleCategoryClicked}
              >
                filter by category
              </Button>
              <Button
                className={classes.btn}
                sx={{ m: 2, textTransform: "capitalize" }}
                variant="outlined"
                size="small"
                onClick={(e) => sortResults(e, "price")}
              >
                filter by price
              </Button>
              {/* <Button
                className={classes.btn}
                sx={{ m: 2, textTransform: "capitalize" }}
                variant="outlined"
                size="small"
                // onClick={handleLoginClicked}
              >
                filter by price range
              </Button> */}
              <Button
                className={classes.btn}
                sx={{ m: 2, textTransform: "capitalize" }}
                variant="outlined"
                size="small"
                onClick={(e) => sortResults(e, "rating")}
              >
                filter by rating
              </Button>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid>
          <AppBar
            position="static"
            sx={{
              backgroundColor: "#212121 !important ",
              borderRadius: 8,
            }}
            style={{ border: "solid white 0.1px" }}
          >
            <Box sx={{ width: 300 }}>
              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
              <Button
                className={classes.btn}
                sx={{ m: 2, textTransform: "capitalize" }}
                variant="outlined"
                size="small"
                onClick={(e) => sortResults(e, "pricerange")}
              >
                filter by Price Range
              </Button>
            </Box>
          </AppBar>
        </Grid>

        <Grid>
          <Grid container justify="center" spacing={4}>
            {props.products

              .filter((product) => {
                if (searchValue == "") {
                  return product;
                } else if (
                  product.item_name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
                ) {
                  return product;
                }
              })
              .map((product) => (
                <Grid item key={product._id} xs={12} sm={6} ms={4} lg={3}>
                  <Product product={product} />
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
      <CssBaseline />
    </main>
  );
};

export default Products;
