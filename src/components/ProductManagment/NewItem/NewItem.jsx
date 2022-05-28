import React from "react";
import { CardContent, Grid } from "@material-ui/core";
import Box from "@mui/material/Box";
import useStyles from "./styles";
import TextField from "@mui/material/TextField";
import { addItem } from "../../../Services/services";
import Button from "@mui/material/Button";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { ADDNEWPROD } from "../../../constants/strings";
// import { UPLOAD } from "../../../constants/urls";
import { Modal } from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

const NewItem = () => {
  // const [count, setCount] = React.useState(parseInt('5'));
  // const [itemVisible, setItemVisible] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const [description, setDescription] = React.useState("");
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const [price, setPrice] = React.useState("");
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const [quantity, setQuantity] = React.useState("");
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
  const [photo, setPhoto] = React.useState("");
  const handlePhotoChange = (event) => {
    setPhoto(event.target.value);
  };

  const classes = useStyles();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [respond, setRespond] = React.useState(false);
  const handleAddItem = async () => {
    console.log("adding new item");
    const n = name;
    const des = description;
    const pr = price;
    const rating = 5;
    const q = quantity;
    const p = [photo];
    const res = await addItem(n, des, pr, rating, q, true, p);
    if (res.status == 200) {
      console.log("add dildo sexes");
      setRespond(true);
    } else {
      console.log("no sex fuck u");
      setRespond(false);
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

  return (
    <>
      <Button
        type="submit"
        fullWidth
        onClick={handleOpen}
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        startIcon={<AddCircleOutlineOutlinedIcon />}
        style={{
          marginLeft: "5%",
          maxWidth: "90%",
          maxHeight: "70px",
          minWidth: "150px",
          minHeight: "50px",
          backgroundColor: "#161e33",
          textTransform: "capitalize",
          padding: "auto",
        }}
      >
        {ADDNEWPROD}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className={classes.modal}
          component="form"
          noValidate
          autoComplete="off"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <TextField
                className={classes.textField}
                margin="normal"
                required
                fullWidth
                label="Paste you photo URL here"
                value={photo}
                onChange={handlePhotoChange}
                id="name"
                color="secondary"
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

              <Grid item xs={4}>
                {/* col 2 */}
                <CardContent>
                  <TextField
                    className={classes.textField}
                    margin="normal"
                    required
                    fullWidth
                    label="Name"
                    value={name}
                    onChange={handleNameChange}
                    id="name"
                    color="secondary"
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
                    margin="normal"
                    required
                    fullWidth
                    label="Description"
                    id="code"
                    color="secondary"
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
              </Grid>
              <Grid item xs={4}>
                {/*col3*/}
                <CardContent>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    value={quantity}
                    onChange={handleQuantityChange}
                    className={classes.textField}
                    id="outlined-number"
                    label="Quantity"
                    type="number"
                    color="secondary"
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
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    className={classes.textField}
                    label="Price"
                    value={price}
                    onChange={handlePriceChange}
                    type="number"
                    helperText="In USD "
                    FormHelperTextProps={{
                      classes: {
                        root: classes.cssLabel,
                        focused: classes.cssFocused,
                      },
                    }}
                    color="secondary"
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
                </CardContent>
              </Grid>
            </Grid>

            <Grid className={""} justifyContent={"space-around"} container>
              <Button
                variant="text"
                className={classes.amount}
                aria-label="add"
                onClick={() => {
                  handleAddItem();
                  if (respond) {
                    handleClose();
                  } else {
                    alert("Bad Input");
                  }
                }}
                style={{
                  color: "white",
                }}
              >
                Add Item&nbsp;
                <CheckCircleOutlineIcon fontSize="large" />
              </Button>
              <Button
                variant="text"
                className={classes.amount}
                aria-label="increase"
                style={{
                  color: "white",
                }}
                onClick={handleClose}
              >
                Cancle&nbsp;
                <CancelOutlinedIcon fontSize="large" />
              </Button>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default NewItem;
