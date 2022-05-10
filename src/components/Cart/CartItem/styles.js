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
    // paddingTop: '56.25%', // 16:9
    padding: "20px",
    height: '10%',
    width: '10%',
    "&:hover": {
      padding: "50%",
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
  stock: { fontSize: "2re" },
});
