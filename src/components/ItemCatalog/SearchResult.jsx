import React from "react";
import { Grid } from "@mui/material";
import { CssBaseline } from "@mui/material";
import Products from "./Products/Products";
import { getItems } from "../../Services/services";
import LinearProgress from "@mui/material/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";

const SearchResult = () => {
  const [products, setProducts] = React.useState([]);
  const getProds = async () => {
    console.log("getting items");
    const res = await getItems();
    if (res.status == 200) {
      console.log("got items");
      console.log(res.data);
      setProducts(res.data);
    }
  };
  if (!products.length) getProds();

  const useStyles = makeStyles({
    loading: {
      padding: "60px",
      textAlign: "center",
      background: "#888888",
      color: "white",
      fontSize: "30px"
    }
  });
  const classes = useStyles();

  if (!products.length)
    return (
      <>
        <p className={classes.loading}>Loading...</p>
        <LinearProgress />
        <CssBaseline />
      </>
    );
  return (
    <>
      <Grid>
        <Products products={products} />
      </Grid>

      <CssBaseline />
    </>
  );
};

export default SearchResult;
