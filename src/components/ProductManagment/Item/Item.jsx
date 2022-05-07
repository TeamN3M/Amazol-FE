import React from 'react';
import {
  Card,
  CardContent,
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
import { updateItemById } from '../../../Services/services';
import SimpleImageSlider from 'react-simple-image-slider';
import Chip from '@mui/material/Chip';

//import MainTheme from "../../../themes/MainTheme";
// const styleForPaper = {
//   width: '96vw',
//   height: '20vh',
//   margin: 20,
//   textAlign: 'center',
//   display: 'inline-block',
// };

// const styleForIcon = {
//   width: '2vw',
//   height: '3vh',
//   '&:hover': {
//     width: '4vw',
//     height: '6vh',
//   },
// };
// const styleForPrice = {
//   font: '5rem',
// };
const NewItem = ({ product }) => {
  console.log(product);
  const [itemVisible, setItemVisible] = React.useState(product.isAvailable);
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
  //

  const handleUpdateItem = async (avilable) => {
    console.log('Updating an item');
    const item = {
      item_name: name,
      item_description: description,
      item_price: price,
      item_rating: 0,
      item_quantity: quantity,
      isAvailable: avilable,
      item_pictures: [
        'data:image/jpeg;base64,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',
      ],
    };
    const res = await updateItemById(product._id, item);
    if (res.status == 200) {
      console.log('add dildo sexes');
    } else {
      console.log('no sex fuck u');
    }
  };

  // const handleAddItem = async () => {
  //   console.log('adding new item');
  //   const n = name;
  //   const des = description;
  //   const pr = price;
  //   const rating = 5;
  //   const q = quantity;
  //   const p = [
  //     'data:image/png;base64,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',
  //   ];
  //   const res = await addItem(n, des, pr, rating, q, true, p);
  //   if (res.status == 200) {
  //     console.log('add dildo sexes');
  //   } else {
  //     console.log('no sex fuck u');
  //   }
  //   // const id = "625fdca0feb8f3c8601f67dc";
  //   // const res = await getItemById(id);
  //   // if (res.status == 200) {
  //   //   console.log("get id id : ", id);
  //   //   console.log(res.data);
  //   // } else {
  //   //   console.log("no sex fuck u");
  //   // }
  // };
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
            navStyle={2}
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
        <Grid item>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
            }}
          >
            <IconButton
              aria-label='Example'
              onClick={() => {
                handleUpdateItem(false);
                setItemVisible(false);
              }}
            >
              <Chip
                label='Remove'
                color='error'
                icon={<IndeterminateCheckBoxIcon sx={{ color: '#550000' }} />}
              />
            </IconButton>

            <IconButton
              aria-label='Example'
              onClick={() => {
                handleUpdateItem(true);
              }}
            >
              <Chip
                label='Update'
                color='success'
                icon={<CheckBoxIcon size='medium' sx={{ color: '#005500' }} />}
              />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default NewItem;
