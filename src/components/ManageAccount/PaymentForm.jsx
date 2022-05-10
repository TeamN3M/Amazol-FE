import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@material-ui/styles";
import Box from "@mui/material/Box";
import { useState } from "react";
import Button from "@mui/material/Button";
import {
  validateNames,
  validateCardNumber,
  validateExpire,
  validateCvv,
} from "../../constants/strings";

const useStyles = makeStyles({
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

export default function PaymentForm() {
  const classes = useStyles();
  const [cardname, setCardname] = useState("");
  const [cardnameErrorText, setCardnameErrorText] = useState("");
  const [cardnumber, setCardnumber] = useState("");
  const [cardnumberErrorText, setCardnumberErrorText] = useState("");
  const [expiredate, setExpiredate] = useState("");
  const [expiredateErrorText, setExpiredateErrorText] = useState("");
  const [cvv, setCvv] = useState("");
  const [cvvErrorText, setCvvErrorText] = useState("");

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

  const handleSave = () => {
    if (!cvv) {
      setCvvErrorText("Please enter cvv");
    } else if (checkCvv(cvv)) {
      setCvvErrorText("cvv is not valid , should be 3 digits!");
    } else {
      setCvvErrorText("");
    }
    if (!cardnumber) {
      setCardnumberErrorText("Please enter cardnumber");
    } else if (checkCardNumber(cardnumber)) {
      setCardnumberErrorText("Invalid cardnumber ,should be 13-19 digits!");
    } else {
      setCardnumberErrorText("");
    }
    if (!expiredate) {
      setExpiredateErrorText("Please enter expire date");
    } else if (checkExpire(expiredate)) {
      setExpiredateErrorText("The date isnt legal use date format");
    } else {
      setExpiredateErrorText("");
    }

    if (!checkName(cardname)) {
      setCardnameErrorText("The name cant contain this char");
    } else if (cardname < 2) {
      setCardnameErrorText("The name must contain at least 2 letters");
    } else {
      setCardnameErrorText("");
    }
  };

  return (
    <React.Fragment>
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
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          sx={{ mt: 3, ml: 1, borderRadius: 3 }}
          onClick={handleSave}
        >
          SAVE
        </Button>
      </Box>
    </React.Fragment>
  );
}
