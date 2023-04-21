import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const PassportApp = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("inside UseEffect");
  }, []);

  console.log("outside UseEffect");

  return (
    <Box
      sx={{
        mw: "300px",
        display: "flex",
        justifyContent: "center",
        p: 2,
        m: 3,
      }}
    >
      <h1>Passport</h1>
      <Button
        variant="contained"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Click{number}
      </Button>
    </Box>
  );
};

export default PassportApp;
