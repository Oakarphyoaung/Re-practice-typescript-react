import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import DateAndTime from "./DateAndTime";
import UserInfo from "./UserInfo";
import ComfirmAndReview from "./ComfirmAndReview";

const steps = ["Date and Time", "User Info", "Review and confirm"];

const PassportStepper = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const createBooking = () => {
    console.log("createBooking...");
  };

  return (
    <Box sx={{ maxWidth: 600, margin: "0 auto", maxHeight: 300, mt: 10 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <>
        <Typography sx={{ mt: 2, mb: 1 }}>
          {activeStep === 0 && <DateAndTime />}
          {activeStep === 1 && <UserInfo />}
          {activeStep === 2 && <ComfirmAndReview />}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />
          {activeStep === steps.length - 1 ? (
            <Button onClick={createBooking}>Finish</Button>
          ) : (
            <Button onClick={handleNext}>Next</Button>
          )}
        </Box>
      </>
    </Box>
  );
};

export default PassportStepper;
