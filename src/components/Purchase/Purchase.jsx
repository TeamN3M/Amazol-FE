import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import PurchaseForm from "./PurchaseCart";
import DeliveryForm from "./Delivery";
import { makeStyles } from "@material-ui/styles";
import { useLocation } from "react-router-dom";
const steps = ["Delivery address", "Payment details"];

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
});

export default function Checkout() {
  const { state } = useLocation();
  const cartprice = state.pricevalue;
  const cartitems = state.itemsvalue;

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if (activeStep == 0) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <DeliveryForm
            handleNext={handleNext}
            cartprice={cartprice}
            cartitems={cartitems}
          />
        );
      case 1:
        return <PurchaseForm handleBack={handleBack} />;
      default:
        throw new Error("Unknown step");
    }
  }

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
            variant="h4"
            align="center"
            style={{
              color: "white",
            }}
          >
            Complete your purchase proccess
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel
                  classes={{
                    label: classes.myLabel,
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment></React.Fragment>
            ) : (
              <React.Fragment>{getStepContent(activeStep)}</React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </Grid>
  );
}
