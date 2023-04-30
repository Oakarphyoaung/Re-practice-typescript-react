import { Box } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import React, { useContext } from "react";
import { PassportAppContext } from "../contexts/PassportAppContexts";

const DateAndTime = () => {
  const { updateData, ...data } = useContext(PassportAppContext);
  return (
    <Box
      sx={{
        mw: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        p: 2,
        alignItems: "center",
      }}
    >
      <h1>Passport App</h1>
      <Box sx={{ margin: "0 auto", mt: 2, textAlign: "center" }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            disablePast
            format="DD/MM/YYYY"
            onChange={(value) => {
              const dayJsObj = value as Dayjs;
              //   const month = dayJsObj.month();
              updateData({
                ...data,
                bookingDate: dayJsObj.format("DD-MM-YYYY"),
              });
            }}
          />
        </LocalizationProvider>
      </Box>

      {/* show selected date */}
      <h1>{data.bookingDate}</h1>
    </Box>
  );
};

export default DateAndTime;
