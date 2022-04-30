import React from "react";
import { Grid } from "@material-ui/core";
import Product from "../Product/Product";
import { CssBaseline } from "@mui/material";
import useStyles from "./styles";
import { products } from "./ProductsList";

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
