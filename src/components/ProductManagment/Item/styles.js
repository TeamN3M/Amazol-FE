import { makeStyles } from "@material-ui/core/styles";
import MainTheme from '../../../themes/MainTheme';

export default makeStyles({
  root: {
    marginBottom: "0.5%",

    maxHeight: "100%",

    backgroundColor: "#555555",
    "&:hover": {
      background: "#777777",
    },
  },
  media: {
    // paddingTop: '56.25%', // 16:9
    // padding: "20%",
    // height: '10%',
    // width: '10%',
    bgColor: "#555555",
    "&:hover": {
      bgColor: "#777777",
    },
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  name: { fontSize: "2.5rem", fontWeight: "bold", color: "#003333" },
  price: { fontSize: "2re", fontWeight: "bold", color: "#002222",marginLeft:"13%" },
  amount: { fontSize: "2re", fontWeight: "bold", color: "#EEEEEE" },
  rating: { fontSize: "2re" },
  stock: { fontSize: "2re" ,color: "#EEEEEE" },

  textFiled: {
    color: 'white',
    backgroundColor: MainTheme.palette.background.default,
  },
  cssLabel: {
    color: 'white',
    '&.Mui-focused': {
      color: 'white',
    },
  },

  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: '#FFF',
    },
  },
  cssFocused: {},

  notchedOutline: {
    borderWidth: '1px',
    borderColor: 'white !important',
  },

  input: {
    color: 'white',
    '&:-webkit-autofill': {
      WebkitBoxShadow: '0 0 0 100px #212121 inset',
      WebkitTextFillColor: 'white',
    },
  },
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#FFFFFF',
    width: 400,
    backgroundColor: '#212121',
    bgcolor: '#212121',
    border: '2px solid #FFF',
    boxShadow: 24,
    p: 4,
    padding: '20px',
  },
});
