import * as React from "react";
import { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { addCreditCard } from "../../Services/services";
import { updateCreditCard } from "../../Services/services";
import { makeStyles } from "@material-ui/styles";
import TextField from "@mui/material/TextField";
import { getUserCredit } from "../../Services/services";
import {
  validateNames,
  validateCardNumber,
  validateExpire,
  validateCvv,
  paymentAlerts,
  PURCHASENOW,
} from "../../constants/strings";
import { useSelector } from "react-redux";
import { getUser } from "../../store/StateUser";
import { getJwtKey } from "../../constants/helpers";
import { setUser } from "../../store/StateUser";
import { useDispatch } from "react-redux";
import MySnackBar from "../Alerts/MySnackBar";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const useStyles = makeStyles({
  paperRoot: {
    backgroundColor: "#212121 !important",
    borderRadius: 20,
    borderColor: "white !important",
    padding: 50,
  },
  myLabel: {
    color: "#1565c0 !important",
    marginTop: 0,
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
export default function Purchase() {
  const dispatch = useDispatch();

  useEffect(() => {
    const localJwt = getJwtKey();
    const func = async () => getUser();

    if (localJwt) {
      func().then((res) => {
        if (res.status === 200) {
          console.log("find user");
          dispatch(setUser(res.data.user));
        } else {
          console.log("not found");
        }
      });
    }
  }, []);
  useEffect(async () => {
    if (user !== undefined) {
      const res = await getUserCredit(user._id);
      if (res.status == 200) {
        const userCard = res.data;
        setCardname(userCard.name);
        setCardnumber(userCard.card_number);
        setExpiredate(userCard.date);
        setCvv(userCard.cvv);
        setCardExist(true);
      }
    }
  }, []);
  const classes = useStyles();
  const state = useSelector((s) => s);
  const user = getUser(state);
  const [cardname, setCardname] = useState("");
  const [cardnameErrorText, setCardnameErrorText] = useState("");
  const [cardnumber, setCardnumber] = useState("");
  const [cardnumberErrorText, setCardnumberErrorText] = useState("");
  const [expiredate, setExpiredate] = useState("");
  const [expiredateErrorText, setExpiredateErrorText] = useState("");
  const [cvv, setCvv] = useState("");
  const [cvvErrorText, setCvvErrorText] = useState("");
  const [cardExist, setCardExist] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [infoFlag, setInfoFlag] = useState(false);

  const checkName = (cardname) => {
    return !validateNames.test(cardname);
  };

  const checkCardNumber = (cardnumber) => {
    return !validateCardNumber.test(cardnumber);
  };

  const checkExpire = (expiredate) => {
    return !validateExpire.test(expiredate);
  };

  const checkCvv = (cvv) => {
    return !validateCvv.test(cvv);
  };

  const handleSave = async () => {
    if (!cvv) {
      setCvvErrorText("Please enter cvv");
      return;
    } else if (checkCvv(cvv)) {
      setCvvErrorText("cvv is not valid , should be 3 digits!");
      return;
    } else {
      setCvvErrorText("");
    }
    if (!cardnumber) {
      setCardnumberErrorText("Please enter cardnumber");
      return;
    } else if (checkCardNumber(cardnumber)) {
      setCardnumberErrorText("Invalid cardnumber ,should be 13-19 digits!");
      return;
    } else {
      setCardnumberErrorText("");
    }
    if (!expiredate) {
      setExpiredateErrorText("Please enter expire date");
      return;
    } else if (checkExpire(expiredate)) {
      setExpiredateErrorText("The date isnt legal use date format");
      return;
    } else {
      setExpiredateErrorText("");
    }

    if (!checkName(cardname)) {
      setCardnameErrorText("The name cant contain this char");
      return;
    } else if (cardname < 2) {
      setCardnameErrorText("The name must contain at least 2 letters");
      return;
    } else {
      setCardnameErrorText("");
    }
    if (cardExist) {
      const res1 = await updateCreditCard(
        user._id,
        cardname,
        cardnumber,
        expiredate,
        cvv
      );
      if (res1.status == 200) {
        setInfoFlag(true);
      }
    } else {
      const res2 = await addCreditCard(
        user._id,
        cardname,
        cardnumber,
        expiredate,
        cvv
      );
      if (res2.status == 200) {
        setInfoFlag(true);
      }
    }
    setOpenAlert(true);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenAlert(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [openAlert]);
  return (
    <Grid>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      ></AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          classes={{ root: classes.paperRoot }}
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography
            variant="h5"
            align="center"
            style={{
              color: "#9edeaf",
              marginBottom: 10,
            }}
          >
            One more step to complete the order
          </Typography>
          <React.Fragment>
            <React.Fragment>
              <MySnackBar
                open={openAlert}
                timeout={2000}
                severity={
                  infoFlag
                    ? paymentAlerts.OK.severity
                    : paymentAlerts.FAIL.severity
                }
                message={
                  infoFlag
                    ? paymentAlerts.OK.message
                    : paymentAlerts.FAIL.message
                }
              />
              <Typography
                variant="h6"
                gutterBottom
                style={{
                  color: "#9c8786",
                }}
              >
                Payment method
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    className={classes.textField}
                    margin="dense"
                    autoComplete="given-name"
                    name="cardName"
                    required
                    fullWidth
                    id="cardName"
                    label="Name on card"
                    color="secondary"
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
                    value={cardname}
                    error={!!cardnameErrorText}
                    helperText={cardnameErrorText}
                    onChange={(e) => setCardname(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    className={classes.textField}
                    margin="dense"
                    autoComplete="given-name"
                    required
                    fullWidth
                    id="cardNumber"
                    label="Card number"
                    color="secondary"
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
                    value={cardnumber}
                    error={!!cardnumberErrorText}
                    helperText={cardnumberErrorText}
                    onChange={(e) => setCardnumber(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    className={classes.textField}
                    margin="dense"
                    autoComplete="given-name"
                    required
                    fullWidth
                    id="expDate"
                    label="Expiry date"
                    color="secondary"
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
                    value={expiredate}
                    error={!!expiredateErrorText}
                    helperText={expiredateErrorText}
                    onChange={(e) => setExpiredate(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    className={classes.textField}
                    margin="dense"
                    autoComplete="given-name"
                    required
                    fullWidth
                    id="cvv"
                    label="CVV"
                    color="secondary"
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
                    value={cvv}
                    error={!!cvvErrorText}
                    helperText={cvvErrorText}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  endIcon={<CheckCircleOutlineIcon />}
                  sx={{ mt: 3, ml: 1, borderRadius: 3 }}
                  onClick={handleSave}
                >
                  {PURCHASENOW}
                </Button>
              </Box>
            </React.Fragment>
          </React.Fragment>
        </Paper>
      </Container>
    </Grid>
  );
}
