import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  root: {
    maxWidth: "100%",
    maxHeight: "100%",
    minWidth: "200px",
    backgroundColor: "#555555",
    "&:hover": {
      background: "#777777",
    },
  },
  media: {
    paddingTop: "80.25%", // 16:9
    padding: "20%",
    maxHeight: "20%",
    "&:hover": {
      padding: "50%%",
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
  btn: {
    color: "white !important",
    border: "solid 1px white",
    backgroundcolor: "#333333 !important",
  },
  name: { fontSize: "2.5rem", fontWeight: "bold", color: "#003333" },
  price: { fontSize: "2re", fontWeight: "bold", color: "#002222" },
  rating: { fontSize: "2re" },
  stock: { fontSize: "2re" },
});
