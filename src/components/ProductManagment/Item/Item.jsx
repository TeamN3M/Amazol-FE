import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  // Typography,
  //   Grid,
} from '@material-ui/core';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
// import { AddShoppingCart } from '@material-ui/icons';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import useStyles from './styles';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import Button from '@mui/material/Button';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { addItem } from '../../../Services/services';
import SimpleImageSlider from 'react-simple-image-slider';

//import MainTheme from "../../../themes/MainTheme";
// const styleForPaper = {
//   width: '96vw',
//   height: '20vh',
//   margin: 20,
//   textAlign: 'center',
//   display: 'inline-block',
// };

const styleForIcon = {
  width: '2vw',
  height: '3vh',
  '&:hover': {
    width: '4vw',
    height: '6vh',
  },
};
// const styleForPrice = {
//   font: '5rem',
// };
const NewItem = ({ product }) => {
  console.log(product);
  const [itemVisible, setItemVisible] = React.useState(true);
  // const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState(product.item_name);
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const [description, setDescription] = React.useState(
    product.item_description
  );
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const [price, setPrice] = React.useState(parseInt(product.item_price));
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const [quantity, setQuantity] = React.useState(
    parseInt(product.item_quantity)
  );
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const handleAddItem = async () => {
    console.log('adding new item');
    const n = name;
    const des = description;
    const pr = price;
    const rating = 5;
    const q = quantity;
    const p = [
      'data:image/png;base64,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',
    ];
    const res = await addItem(n, des, pr, rating, q, true, p);
    if (res.status == 200) {
      console.log('add dildo sexes');
    } else {
      console.log('no sex fuck u');
    }
    // const id = "625fdca0feb8f3c8601f67dc";
    // const res = await getItemById(id);
    // if (res.status == 200) {
    //   console.log("get id id : ", id);
    //   console.log(res.data);
    // } else {
    //   console.log("no sex fuck u");
    // }
  };
  const classes = useStyles();

  if (itemVisible != true) return <></>;
  return (
    <Card className={classes.root} sx={{ display: 'flex' }}>
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          border: 'solid 1px grey',
        }}
      >
        <Grid
          item
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
          xs={3}
          alignItems='center'
        >
          {/* <CardMedia
            className={classes.media}
            image={product.image}
            title={product.name}
            component='img'
            height={'100%'}
            width={'100%'}
            // align={'left'}
          /> */}
          <SimpleImageSlider
            className={classes.media}
            width={200}
            height={200}
            images={product.item_pictures}
            showBullets={true}
            showNavs={true}
            navSize={20}
            navMargin={20}
            bgColor={'#555555'}
          />
          <Rating
            name='read-only'
            value={parseInt(product.item_rating) / 2}
            readOnly
            precision={0.5}
            className={classes.rating}
          />
        </Grid>
        <CardContent>
          <TextField
            className={classes.textField}
            margin='normal'
            required
            fullWidth
            label='Name'
            value={name}
            onChange={handleNameChange}
            id='name'
            color='secondary'
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused,
              },
            }}
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
                input: classes.input,
              },
            }}
            // onChange={(e) => setCode(e.target.value)}
          />

          <TextField
            className={classes.textField}
            margin='normal'
            required
            fullWidth
            label='Description'
            id='code'
            color='secondary'
            value={description}
            onChange={handleDescriptionChange}
            multiline
            rows={4}
            autoFocus
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused,
              },
            }}
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
                input: classes.input,
              },
            }}
            // onChange={(e) => setCode(e.target.value)}
          />
        </CardContent>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
        >
          <TextField
            margin='normal'
            required
            fullWidth
            className={classes.textField}
            label='Price'
            value={price}
            onChange={handlePriceChange}
            type='number'
            helperText='In USD '
            FormHelperTextProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused,
              },
            }}
            color='secondary'
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused,
              },
            }}
            InputProps={{
              inputProps: {
                min: 0,
              },
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
                input: classes.input,
              },
            }}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            value={quantity}
            onChange={handleQuantityChange}
            className={classes.textField}
            id='outlined-number'
            label='Quantity'
            type='number'
            color='secondary'
            InputLabelProps={{
              classes: {
                root: classes.cssLabel,
                focused: classes.cssFocused,
              },
            }}
            InputProps={{
              inputProps: {
                max: 100,
                min: 0,
              },
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
                input: classes.input,
              },
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <CardActions disableSpacing className={classes.cardActions}>
            <IconButton
              style={styleForIcon}
              aria-label='Example'
              onClick={() => {
                setItemVisible(false);
              }}
            >
              <IndeterminateCheckBoxIcon
                style={styleForIcon}
                sx={{ color: '#550000' }}
              />
            </IconButton>
          </CardActions>
          <CardActions disableSpacing className={classes.cardActions}>
            <IconButton
              style={styleForIcon}
              aria-label='Example'
              onClick={handleAddItem}
            >
              <CheckBoxIcon style={styleForIcon} sx={{ color: '#005500' }} />
            </IconButton>
          </CardActions>
        </Box>
      </Grid>
    </Card>
  );
};

export default NewItem;
