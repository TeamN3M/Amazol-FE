import React from 'react';
import {
  Card,
  //   CardContent
  // Typography,
  Grid,
} from '@material-ui/core';
// import Box from "@mui/material/Box";
// import IconButton from "@mui/material/IconButton";
// import Rating from "@mui/material/Rating";
// import { AddShoppingCart } from '@material-ui/icons';
// import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
// import useStyles from './styles';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
// import TextField from "@mui/material/TextField";
// import { Grid } from "@mui/material";
// import CheckBoxIcon from "@mui/icons-material/CheckBox";
// import { updateItemById } from "../../../Services/services";
// import SimpleImageSlider from "react-simple-image-slider";
// import Chip from "@mui/material/Chip";

import { Divider, Rating } from '@mui/material';

const Review = ({ review }) => {
  console.log('Review Here');
  console.log(review);

  //   const classes = useStyles();

  return (
    <Card sx={{ display: 'flex' }}>
      <Grid container>
        <Grid item xs={12}>
          <Grid container direction='row' justifyContent='space-between'>
            <Grid item sm={6}>
              <b>{review.customer_name + ':'}</b>
              <i>{' (' + review.date + ')'}</i>
            </Grid>

            <Grid
              item
              xl={2}
              lg={3}
              sm={10}
              justifyContent='flex-end'
              sx={{ margin: '0', padding: '0', borderColor: 'grey.500' }}
            >
              <Rating value={review.rating / 2} readOnly precision={0.5} />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Divider
            variant='middle'
            flexItem
            color='gray'
            sx={{
              borderBottomWidth: 1,
            }}
          />
        </Grid>
        <Grid item sm={12}>
          {review.review}
        </Grid>
      </Grid>
    </Card>
  );
};

export default Review;
