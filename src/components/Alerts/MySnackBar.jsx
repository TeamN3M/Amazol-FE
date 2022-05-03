import React from "react";
import { Snackbar, Alert } from "@mui/material";

const MySnackBar = (props) => {
  return (
    <>
      <Snackbar
        open={props.open}
        autoHideDuration={props.timeout}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert variant='filled' severity={props.severity}>
          {props.message}
        </Alert>
      </Snackbar>
    </>
  );
};
export default MySnackBar;
