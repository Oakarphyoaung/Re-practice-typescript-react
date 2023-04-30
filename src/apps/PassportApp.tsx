// PassportApp.tsx

import { Box, Button } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { log } from "console";
import { Dayjs } from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import { PassportAppContext } from "../contexts/PassportAppContexts";
import PassportStepper from "../components/PassportStepper";

const PassportApp = () => {
  const [month, setMonth] = useState<number>();

  // useEffect(() => {
  //   if (month) {
  //     fetchAvailability();
  //   }
  // }, [month]);

  // // fetch to server with query param
  // const fetchAvailability = async () => {
  //   const url = `http://localhost:5000/availability?month=${month}`;
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   console.log(data);
  // };

  // // use context from contexts
  // const { updateData, ...data } = useContext(PassportAppContext);

  // return (
  //   <Box
  //     sx={{
  //       mw: "300px",
  //       display: "flex",
  //       flexDirection: "column",
  //       justifyContent: "center",
  //       p: 2,
  //       alignItems: "center",
  //     }}
  //   >
  //     <h1>Passport App</h1>
  //     <Box sx={{ margin: "0 auto", mt: 2, textAlign: "center" }}>
  //       <LocalizationProvider dateAdapter={AdapterDayjs}>
  //         <DatePicker
  //           disablePast
  //           format="DD/MM/YYYY"
  //           onChange={(value) => {
  //             const dayJsObj = value as Dayjs;
  //             setMonth(dayJsObj.month());
  //             updateData({
  //               ...data,
  //               bookingDate: dayJsObj.format("DD-MM-YYYY"),
  //             });
  //           }}
  //         />
  //       </LocalizationProvider>
  //     </Box>

  //     {/* show selected date */}
  //     <h1>{data.bookingDate}</h1>
  //   </Box>
  // );

  const { updateData, ...data } = useContext(PassportAppContext);
  console.log(data);
  return <PassportStepper />;
};

export default PassportApp;
