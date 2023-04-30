import { Box } from "@mui/material";
import { PassportAppContext } from "../contexts/PassportAppContexts";
import { useContext } from "react";

const ConfirmAndReivew = () => {
  const { bookingDate, user } = useContext(PassportAppContext);
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Confirm and review</h1>
      <p>Selected date : {bookingDate}</p>
      <p>Name : {user?.name}</p>
      <p>nrcNumber : {user?.nrcNumber}</p>
      <p>email : {user?.nrcNumber}</p>
    </Box>
  );
};

export default ConfirmAndReivew;
