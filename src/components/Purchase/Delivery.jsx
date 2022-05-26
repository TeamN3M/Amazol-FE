import * as React from "react";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { SAVE, NEXT } from "../../constants/strings";
import { useSelector } from "react-redux";
import { getUser } from "../../store/StateUser";

import { getUserAddress, addNewOrder } from "../../Services/services";
import { getJwtKey } from "../../constants/helpers";
import MySnackBar from "../Alerts/MySnackBar";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import TimePicker from "@mui/lab/TimePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Stack from "@mui/material/Stack";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

const useStyles = makeStyles({
  paperRoot: {
    backgroundColor: "#212121 !important",
    borderRadius: 20,
    borderColor: "white !important",
    padding: 50,
  },
  textFiled: {
    color: "white",
    "& .MuiFormHelperText-root": {
      color: "white",
    },
  },
  cssLabel: {
    color: "white",
    "&.Mui-focused": {
      color: "white",
    },
  },

  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: "#FFF",
    },
  },
  cssFocused: {},

  notchedOutline: {
    borderWidth: "1px",
    borderColor: "white !important",
  },

  input: {
    color: "white",
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #212121 inset",
      WebkitTextFillColor: "white",
    },
  },
});
export default function AddressForm(props) {
  //const dispatch = useDispatch();

  useEffect(() => {
    const localJwt = getJwtKey();
    const func = async () => getUser();

    if (localJwt) {
      func().then((res) => {
        if (res.status === 200) {
          console.log("find user");
        } else {
          console.log("not found");
        }
      });
    }
  }, []);
  useEffect(async () => {
    if (user !== undefined) {
      const res = await getUserAddress(user._id);
      if (res.status == 200) {
        const userAddr = res.data;
        setAddress(userAddr.address);
        setCountry(userAddr.country);
        setCity(userAddr.city);
      }
    }
  }, []);

  const classes = useStyles();
  const state = useSelector((s) => s);
  const user = getUser(state);

  const [address, setAddress] = useState("");
  const [addressErrorText, setAddressErrorText] = useState("");
  const [city, setCity] = useState("");
  const [cityErrorText, setCityErrorText] = useState("");
  const [country, setCountry] = useState("");
  const [countryErrorText, setCountryErrorText] = useState("");
  const [openAlert, setOpenAlert] = useState(false);

  //const [DateValueErrorText, setDateValueErrorText] = useState("");
  const [HourValue, setHourValue] = useState("");
  const [DateValue, setDateValue] = useState("");
  //const [HourValueErrorText, setHourValueErrorText] = useState("");

  const handleSave = async () => {
    // if (!DateValue) {
    //   setDateValueErrorText("Please enter Date");
    //   return;
    // } else {
    //   setDateValueErrorText("");
    // }
    // if (!HourValue) {
    //   setHourValueErrorText("Please enter Hour");
    //   return;
    // } else {
    //   setHourValueErrorText("");
    // }
    if (!address) {
      setAddressErrorText("Please enter Address");
      return;
    } else {
      setAddressErrorText("");
    }
    if (!city) {
      setCityErrorText("Please enter City");
      return;
    } else {
      setCityErrorText("");
    }
    if (!country) {
      setCountryErrorText("Please enter Country");
      return;
    } else {
      setCountryErrorText("");
    }

    const res = await addNewOrder(
      user._id,
      props.cartitems,
      props.cartprice,
      address + " " + city + " " + address
    );
    if (res.status == 200) {
      console.log("add new order ", res.data);
    }
  };

  const handleDateChange = (newValue) => {
    setDateValue(newValue);
  };
  const handleHourChange = (newValue) => {
    setHourValue(newValue);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenAlert(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [openAlert]);

  return (
    <React.Fragment>
      <MySnackBar />
      <Typography
        variant="h6"
        gutterBottom
        style={{
          color: "#9c8786",
        }}
      >
        Choose day and date
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  label="Date desktop"
                  inputFormat="MM/dd/yyyy"
                  value={DateValue}
                  onChange={handleDateChange}
                  // error={!!DateValueErrorText}
                  // helperText={DateValueErrorText}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      sx={{
                        svg: { color: "white" },
                        input: { color: "white" },
                        label: { color: "white" },
                      }}
                    />
                  )}
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
                />
                <TimePicker
                  label="Time"
                  value={HourValue}
                  onChange={handleHourChange}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      sx={{
                        svg: { color: "white" },
                        input: { color: "white" },
                        label: { color: "white" },
                      }}
                    />
                  )}
                  // error={!!HourValueErrorText}
                  // helperText={HourValueErrorText}
                  shouldDisableTime={(timeValue, clockType) => {
                    return clockType === "minutes" && timeValue > 0;
                  }}
                  style={{
                    color: "white",
                  }}
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
                />
              </Stack>
            </LocalizationProvider>
          </div>
        </Grid>

        <Grid item>
          <Typography
            variant="h6"
            gutterBottom
            style={{
              color: "#9c8786",
            }}
          >
            Shipping Address
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            contentEditable
            className={classes.textField}
            margin="dense"
            fullWidth
            id="address"
            label="Address *"
            name="Address"
            autoComplete="address-line"
            value={address}
            error={!!addressErrorText}
            helperText={addressErrorText}
            onChange={(e) => setAddress(e.target.value)}
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
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            className={classes.textField}
            required
            id="city"
            name="city"
            label="City"
            margin="dense"
            fullWidth
            autoComplete="shipping address-level2"
            value={city}
            error={!!cityErrorText}
            helperText={cityErrorText}
            onChange={(e) => setCity(e.target.value)}
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
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            className={classes.textField}
            required
            id="country"
            name="country"
            label="Country"
            margin="dense"
            fullWidth
            autoComplete="shipping country"
            value={country}
            error={!!countryErrorText}
            helperText={countryErrorText}
            onChange={(e) => setCountry(e.target.value)}
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
          />
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          variant="contained"
          endIcon={<ChangeCircleIcon />}
          sx={{ mt: 3, ml: 1 }}
          onClick={handleSave}
        >
          {SAVE}
        </Button>
        <Button
          variant="contained"
          endIcon={<NavigateNextIcon />}
          sx={{ mt: 3, ml: 1, borderRadius: 3 }}
          onClick={props.handleNext}
        >
          {NEXT}
        </Button>
      </Box>
    </React.Fragment>
  );
}
