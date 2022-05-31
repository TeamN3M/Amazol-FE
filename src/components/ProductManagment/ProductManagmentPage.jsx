import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { CssBaseline } from "@mui/material";
import ItemGrid from "./ItemGrid/ItemGrid";
import { getItems } from "../../Services/services";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  header: {
    padding: "20px",
    textAlign: "center",
    background: "#888888",
    color: "white",
    fontSize: "5rem"
  }
});

const ProductManagmentPage = () => {
  const [products, setProducts] = useState([]);

  const getProds = async () => {
    const res = await getItems();
    if (res.status == 200) {
      setProducts(res.data);
    }
  };

  const classes = useStyles();
  if (!products.length) getProds();

  return (
    <>
      <Grid>
        <Typography
          color={"white"}
          variant='h1'
          sx={{ alignItems: "center" }}
          class={classes.header}
        >
          Product Managment
        </Typography>

        <ItemGrid products={products} />
      </Grid>
      <CssBaseline />
    </>
  );
};

export default ProductManagmentPage;
