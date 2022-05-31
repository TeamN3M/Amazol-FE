import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Item from "../Item/Item";
import NewItem from "../NewItem/NewItem";
import { CssBaseline } from "@mui/material";
import useStyles from "./styles";

import Animation from "../../Animation";
import Loading from "../../../assets/gaming.json";

const ItemGrid = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  const classes = useStyles();

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
        <Grid className={classes.grid}>
          <Grid item key={0}>
            <NewItem />
          </Grid>
          {props.products.map((product) => (
            <Grid item key={product._id}>
              <Item product={product} className={classes.grid} />
            </Grid>
          ))}
        </Grid>
      )}
      <CssBaseline />
    </>
  );
};

export default ItemGrid;
