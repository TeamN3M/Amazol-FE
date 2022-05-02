import React from "react";
import { Stack, Alert, AlertTitle } from "@mui/material";

const AlertMessage = () => {
  return (
    <Stack spacing={2}>
      <Alert severity='error'>
        <AlertTitle> ERROR</AlertTitle>this is error alert
      </Alert>
      <Alert severity='warning'>this is warning alert</Alert>
      <Alert severity='info'>this is info alert</Alert>
      <Alert severity='success'>this is success alert</Alert>
    </Stack>
  );
};
export default AlertMessage;
