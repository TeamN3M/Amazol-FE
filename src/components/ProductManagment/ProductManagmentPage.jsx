import React from "react";
import { Grid, Typography } from "@mui/material";
// import { ThemeProvider } from '@mui/material/styles';
// import MainTheme from '../../themes/MainTheme';
import { CssBaseline } from "@mui/material";
import ItemGrid from "./ItemGrid/ItemGrid";
import { getItems } from "../../Services/services";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  header: {
    padding: "60px",
    textAlign: "center",
    background: "#888888",
    color: "white",
    fontSize: "5rem",
  },
});

const ProductManagmentPage = () => {
  const [products, setProducts] = React.useState([]);
  const getProds = async () => {
    console.log("getting items");
    const res = await getItems();
    if (res.status == 200) {
      console.log("got items");
      console.log(res.data);
      setProducts(res.data);
    } else {
      console.log("no sex fuck u");
    }
  };
  const classes = useStyles();
  if (!products.length) getProds();
  return (
    <>
      <Grid>
        <br />
        <Typography
          color={"white"}
          variant="h1"
          sx={{ alignItems: "center" }}
          class={classes.header}
        >
          Product Managment
        </Typography>

        <ItemGrid products={products /*, addToCart, removeFromCart */} />
      </Grid>
      <CssBaseline />
    </>
  );
};

export default ProductManagmentPage;
