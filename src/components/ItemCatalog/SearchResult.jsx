import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { CssBaseline } from "@mui/material";
import Products from "./Products/Products";
import { getItems } from "../../Services/services";

import Animation from "../Animation";
import Loading from "../../assets/gaming.json";

const SearchResult = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Grid
          container
          justifyContent='center'
          style={{ color: "white", marginBottom: 30 }}
        >
          <Animation title='Loading...' LottieCmp={Loading} />
        </Grid>
      ) : (
        <Grid>
          <Products products={products} />
        </Grid>
      )}

      <CssBaseline />
    </>
  );
};

export default SearchResult;
