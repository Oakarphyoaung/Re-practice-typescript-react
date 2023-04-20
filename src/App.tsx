import { Box, Button } from "@mui/material";
import React from "react";

const App = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        mt: 5,
      }}
    >
      <Button
        variant="contained"
        sx={{ margin: "0 auto", mt: 2 }}
        color="primary"
      >
        <a href="/bus">Bus App</a>
      </Button>
      <Button
        variant="contained"
        sx={{ margin: "0 auto", mt: 2 }}
        color="primary"
      >
        <a href="/passport">Passport App</a>
      </Button>
    </Box>
  );
};

export default App;
