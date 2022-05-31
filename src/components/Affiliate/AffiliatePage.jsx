import * as React from "react";
import { useEffect } from "react";
import { CssBaseline, Typography } from "@mui/material";
import useStyles from "./styles";
import { Grid } from "@material-ui/core";
import Lottie from "lottie-web";
import MoneyAnimation from "../../assets/MoneyAnimation.json";
import { useSelector } from "react-redux";
import { getUser } from "../../store/StateUser";
import { getJwtKey } from "../../constants/helpers";
import { addAffiliateToCart } from "../../Services/services";

function ClipboardCopy({ copyText }) {
  const [isCopied, setIsCopied] = React.useState(false);
  const state = useSelector((s) => s);
  const user = getUser(state);
  const classes = useStyles();

  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  const handleAffiliateClicked = async () => {
    const res = addAffiliateToCart(user._id);
    if (res.status == 200) {
      console.log("adding affiliate to cart");
    }
  };

  const handleCopyClick = () => {
    copyTextToClipboard(copyText)
      .then(() => {
        setIsCopied(true);
        handleAffiliateClicked();
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <input
        type='text'
        value={copyText}
        readOnly
        className={classes.input}
        size='50'
      />
      {/* Bind our handler function to the onClick button property */}
      <button onClick={handleCopyClick} className={classes.input}>
        <span>{isCopied ? "Copied!" : "Copy"}</span>
      </button>
    </div>
  );
}

const AffiliatePage = () => {
  const state = useSelector((s) => s);
  const user = getUser(state);
  const classes = useStyles();

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
  React.useEffect(() => {
    Lottie.loadAnimation({
      container: document.querySelector("#anime"),
      animationData: MoneyAnimation
    });
  }, []);

  return (
    <>
      <Grid
        container
        direction='column'
        justifyContent='center'
        alignItems='center'
        className={classes.item}
      >
        <Grid item>
          <div id='anime' style={{ width: 600, height: 600 }} />
        </Grid>
        <Grid item>
          <Typography
            variant='h6'
            gutterBottom
            style={{
              color: "#9c8786"
            }}
          >
            Hi {user.first_name} Click to Copy Invite Link
          </Typography>
        </Grid>
        <Grid item>
          <ClipboardCopy copyText={"http://localhost:3000/InviteFriends"} />
        </Grid>
      </Grid>
      <CssBaseline />
    </>
  );
};
export default AffiliatePage;
