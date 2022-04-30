import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Product from "../Product/Product";
import { CssBaseline } from "@mui/material";
import useStyles from "./styles";
import { products } from "./ProductsList";
import { useLocation } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@mui/material";
const Products = () => {
  const classes = useStyles();
  const { state } = useLocation();
  const searchValue = state.value;

  const [priceSorted, setpriceSorted] = useState(false);
  const [ratingSorted, setratingSorted] = useState(false);

  const handlePriceClicked = () => {
    if (priceSorted == true) {
      setpriceSorted(false);
    } else {
      setpriceSorted(true);
    }
  };
  const handleRatingClicked = () => {
    if (ratingSorted == true) {
      setratingSorted(false);
    } else {
      setratingSorted(true);
    }
  };
  if (!products.length) return <p>Loading...</p>;
  return (
    <main className={classes.content}>
      {/* <div className={classes.toolbar} /> */}
      <Grid container spacing={4} justify="space-around">
        <Grid item xs={0}>
          <AppBar
            position="static"
            sx={{
              backgroundColor: "#212121 !important ",
              borderRadius: 8,
            }}
            style={{ border: "solid white 0.1px" }}
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
                onClick={handlePriceClicked}
              >
                filter by price
              </Button>
              <Button
                className={classes.btn}
                sx={{ m: 2, textTransform: "capitalize" }}
                variant="outlined"
                size="small"
                // onClick={handleLoginClicked}
              >
                filter by price range
              </Button>
              <Button
                className={classes.btn}
                sx={{ m: 2, textTransform: "capitalize" }}
                variant="outlined"
                size="small"
                onClick={handleRatingClicked}
              >
                filter by rating
              </Button>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid>
          {priceSorted ? (
            <Grid container justify="center" spacing={4}>
              {products
                .filter((product) => {
                  if (searchValue == "") {
                    return product;
                  } else if (
                    product.name
                      .toLowerCase()
                      .includes(searchValue.toLowerCase())
                  ) {
                    return product;
                  }
                })
                .map((product) => (
                  <Grid item key={product.id} xs={12} sm={6} ms={4} lg={3}>
                    <Product product={product} />
                  </Grid>
                ))}
            </Grid>
          ) : (
            <Grid container justify="center" spacing={4}>
              {products
                .sort(function (a, b) {
                  return parseInt(a.price) - parseInt(b.price);
                })
                .filter((product) => {
                  if (searchValue == "") {
                    return product;
                  } else if (
                    product.name
                      .toLowerCase()
                      .includes(searchValue.toLowerCase())
                  ) {
                    return product;
                  }
                })
                .map((product) => (
                  <Grid item key={product.id} xs={12} sm={6} ms={4} lg={3}>
                    <Product product={product} />
                  </Grid>
                ))}
            </Grid>
          )}
          {/* {ratingSorted ? (
            <Grid container justify="center" spacing={4}>
              {products
                .filter((product) => {
                  if (searchValue == "") {
                    return product;
                  } else if (
                    product.name
                      .toLowerCase()
                      .includes(searchValue.toLowerCase())
                  ) {
                    return product;
                  }
                })
                .map((product) => (
                  <Grid item key={product.id} xs={12} sm={6} ms={4} lg={3}>
                    <Product product={product} />
                  </Grid>
                ))}
            </Grid>
          ) : (
            <Grid container justify="center" spacing={4}>
              {products
                .sort(function (a, b) {
                  return parseInt(a.rating) - parseInt(b.rating);
                })
                .filter((product) => {
                  if (searchValue == "") {
                    return product;
                  } else if (
                    product.name
                      .toLowerCase()
                      .includes(searchValue.toLowerCase())
                  ) {
                    return product;
                  }
                })
                .map((product) => (
                  <Grid item key={product.id} xs={12} sm={6} ms={4} lg={3}>
                    <Product product={product} />
                  </Grid>
                ))}
            </Grid>
          )} */}
          <Grid container justify="center" spacing={4}></Grid>
        </Grid>
      </Grid>
      <CssBaseline />
    </main>
  );
};

export default Products;
