import React from "react";
import { Grid } from "@material-ui/core";
import Product from "../Product/Product";
import { CssBaseline } from "@mui/material";
import useStyles from "./styles";

const products = [
  {
    id: 1,
    name: " dildo1",
    description: "For shuving up yo pussy",
    price: "100",
    rating: "1",
    quantity: "100",
    image: "../images/home page/promoted_items/item_3.jpg",
    time: "1",
  },
  {
    id: 2,
    name: " dildo2",
    description: "For shuving up yo ass",
    price: "100",
    rating: "2",
    quantity: "50",
    image: "../images/home page/promoted_items/item_4.jpg",
    time: "2",
  },
  {
    id: 3,
    name: " dildo3",
    description: "For shuving up yo mouth",
    price: "100",
    rating: "2",
    quantity: "0",
    image: "../images/home page/promoted_items/item_5.jpg",
    time: "2",
  },
  {
    id: 4,
    name: " dildo2",
    description: "For shuving up yo nose",
    price: "100",
    rating: "2",
    quantity: "50",
    image: "../images/home page/promoted_items/item_6.jpg",
    time: "2",
  },
  {
    id: 5,
    name: " dildo2",
    description: "For shuving up yo ear canal",
    price: "100",
    rating: "2",
    quantity: "50",
    image: "../images/home page/promoted_items/item_1.jpg",
    time: "2",
  },
  {
    id: 6,
    name: " dildo2",
    description: "For shuving up yo nose",
    price: "100",
    rating: "2",
    quantity: "0",
    image: "../images/home page/promoted_items/item_2.jpg",
    time: "2",
  },
  {
    id: 7,
    name: " dildo2",
    description: "For shuving up yo ear canal",
    price: "100",
    rating: "2",
    quantity: "50",
    image: "../images/home page/promoted_items/item_3.jpg",
    time: "2",
  },
];

const Products = () => {
  const classes = useStyles();
  if (!products.length) return <p>Loading...</p>;
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} ms={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
      <CssBaseline />
    </main>
  );
};

export default Products;
