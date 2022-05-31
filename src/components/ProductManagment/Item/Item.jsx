import React from "react";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Rating from "@mui/material/Rating";
import MySnackBar from "../../Alerts/MySnackBar";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import useStyles from "./styles";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { updateItemById } from "../../../Services/services";
import SimpleImageSlider from "react-simple-image-slider";
import Chip from "@mui/material/Chip";
import { updateAlerts } from "../../../constants/strings";
import paths from "../../../constants/paths";

const NewItem = ({ product }) => {
  const [itemVisible, setItemVisible] = useState(product.isAvailable);
  const [openAlert, setOpenAlert] = useState(false);
  const [updateFlag, setUpdateFlag] = useState(false);

  const [name, setName] = useState(product.item_name);
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const [description, setDescription] = useState(product.item_description);
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const [price, setPrice] = useState(parseInt(product.item_price));
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const [quantity, setQuantity] = useState(parseInt(product.item_quantity));
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
  const [pictureChange, setPictureChange] = useState(false);
  const [picture, setPicture] = useState(product.item_pictures[0]);
  const handlePictureChange = (event) => {
    setPicture(event.target.value);
    setPictureChange(true);
  };

  const handleUpdateItem = async (avilable) => {
    const item = {
      item_name: name,
      item_description: description,
      item_price: price,
      item_rating: 0,
      item_quantity: quantity,
      isAvailable: avilable,
      item_pictures: [picture]
    };
    const res = await updateItemById(product._id, item);
    if (res.status == 200) {
      setUpdateFlag(true);
      setOpenAlert(true);
    } else {
      setUpdateFlag(false);
      setOpenAlert(false);
    }
  };

  const classes = useStyles();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenAlert(false);
      if (pictureChange) {
        navigate(paths.index);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [openAlert]);

  if (itemVisible != true) return <></>;

  return (
    <>
      <MySnackBar
        open={openAlert}
        timeout={2000}
        severity={
          updateFlag ? updateAlerts.OK.severity : updateAlerts.FAIL.severity
        }
        message={
          updateFlag ? updateAlerts.OK.message : updateAlerts.FAIL.message
        }
      />
      <Card className={classes.root} sx={{ display: "flex" }}>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            border: "solid 1px grey"
          }}
        >
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around"
            }}
            xs={3}
            alignItems='center'
          >
            <SimpleImageSlider
              className={classes.media}
              width={200}
              height={200}
              images={product.item_pictures}
              showBullets={true}
              showNavs={true}
              navSize={20}
              navMargin={20}
              bgColor={"#555555"}
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
                  focused: classes.cssFocused
                }
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                  input: classes.input
                }
              }}
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
                  focused: classes.cssFocused
                }
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                  input: classes.input
                }
              }}
            />
            <TextField
              className={classes.textField}
              margin='normal'
              required
              fullWidth
              label='picture'
              id='code'
              color='secondary'
              value={picture}
              onChange={handlePictureChange}
              rows={1}
              autoFocus
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused
                }
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                  input: classes.input
                }
              }}
            />
          </CardContent>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around"
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
                  focused: classes.cssFocused
                }
              }}
              color='secondary'
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused
                }
              }}
              InputProps={{
                inputProps: {
                  min: 0
                },
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                  input: classes.input
                }
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
                  focused: classes.cssFocused
                }
              }}
              InputProps={{
                inputProps: {
                  max: 100,
                  min: 0
                },
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                  input: classes.input
                }
              }}
            />
          </Box>
          <Grid item>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                mt: 16
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
                  icon={<IndeterminateCheckBoxIcon sx={{ color: "#550000" }} />}
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
                  icon={
                    <CheckBoxIcon size='medium' sx={{ color: "#005500" }} />
                  }
                />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default NewItem;
