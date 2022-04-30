import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  btn: {
    color: "white !important",
    border: "solid 1px white",
    backgroundcolor: "#333333 !important",
    borderRadius: 15,
  },
}));
