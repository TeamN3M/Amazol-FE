import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  //   Grid,
} from '@material-ui/core';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
// import { AddShoppingCart } from '@material-ui/icons';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Divider from '@mui/material/Divider';
import useStyles from './styles';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
//import MainTheme from "../../../themes/MainTheme";

// const styleForPaper = {
//   width: '96vw',
//   height: '20vh',
//   margin: 20,
//   textAlign: 'center',
//   display: 'inline-block',
// };

const styleForButton = {
  marginTop: '9vh',
};
const styleForIcon = {
  width: '2vw',
  height: '3vh',
};
// const styleForPrice = {
//   font: '5rem',
// };
const Product = ({ product }) => {
  const [count, setCount] = React.useState(parseInt(product.count));
  const [itemVisible, setItemVisible] = React.useState(true);
  const classes = useStyles();
  const inStock =
    parseInt(product.quantity) > 0
      ? '✅ In-stock (' + product.quantity + ')'
      : '❌ Not in-stock';
  if (itemVisible != true) return <></>;
  return (
    <Card className={classes.root} sx={{ display: 'flex' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          border: 'solid 1px grey',
        }}
      >
        <CardMedia
          className={classes.media}
          image={product.image}
          title={product.name}
          component='img'
          height={'25%'}
          width={'25%'}
          align={'left'}
        />
        <CardContent>
          <div className={classes.CardContent}>
            {/* <Grid
              alignItems='center'
              container
              justifyContent='space-between'
              direction='row'
            > */}

            {/* </Grid> */}
            {/* <Grid
              alignItems='center'
              container
              justifyContent='space-between'
              direction='row'
            > */}

            {/* </Grid> */}
          </div>
          {/* <Typography variant='h2' color='textSecondary'>
          {product.description}
        </Typography> */}
          <Typography component='h2' className={classes.name}>
            {product.name}
          </Typography>
          <Rating
            name='read-only'
            value={product.rating}
            readOnly
            className={classes.rating}
          />

          <span className={classes.stock}>{inStock}</span>
          <Typography
            dangerouslySetInnerHTML={{ __html: product.description }}
            variant='body2'
            color='textSecondary'
            component='p'
          />
        </CardContent>
        <Divider orientation='vertical' variant='middle' flexItem />
        <CardContent>
          <Box>
            {' '}
            <Typography
              className={classes.price}
              style={{ alignContent: 'right', fontSize: '3rem' }}
              gutterBottom
            >
              ${product.price}
            </Typography>
            <ButtonGroup className={classes.amount}>
              <Button
                variant='text'
                className={classes.amount}
                aria-label='reduce'
                onClick={() => {
                  setCount(Math.max(count - 1, 0));
                }}
              >
                <RemoveIcon fontSize='large' />
              </Button>
              <Button variant='text' disabled>
                <Typography
                  className={classes.amount}
                  style={{ alignContent: 'center', fontSize: '1.5rem' }}
                  gutterBottom
                >
                  {' '}
                  {count}
                </Typography>
              </Button>
              <Button
                variant='text'
                className={classes.amount}
                aria-label='increase'
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                <AddIcon fontSize='large' />
              </Button>
            </ButtonGroup>
          </Box>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton
            aria-label='Example'
            style={styleForButton}
            onClick={() => {
              setItemVisible(false);
            }}
          >
            <DeleteForeverIcon style={styleForIcon} />
          </IconButton>
        </CardActions>
      </Box>
    </Card>
  );
};

export default Product;
