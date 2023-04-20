import React, { useState } from "react";

import { Autocomplete, Box, Button, TextField } from "@mui/material";
import { buses, countries, stations } from "../ultis/data";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Bus, SearchStations } from "../typings/types";
import { dir } from "console";

function App() {
  const [searchStations, setSearchStations] = useState<any>({
    startStations: null,
    endStations: null,
  });
  console.log(searchStations);

  const [directBus, setDirectBus] = useState<Bus[] | null>(null);

  const handleClick = () => {
    console.log(buses);

    //find bus with station A
    const busWithStartStation = buses.filter((bus) =>
      bus.stations.find(
        (station) => station.id === searchStations.startStations.id
      )
    );
    console.log(busWithStartStation);

    // check direct bus
    const directBus = busWithStartStation.filter((bus) =>
      bus.stations.find(
        (station) => station.id === searchStations.endStations?.id
      )
    );
    console.log("this is directBus", directBus);

    // update state with direct bus array
    setDirectBus(directBus);
  };

  return (
    <Box
      sx={{
        mt: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: 300, margin: "0 auto", textAlign: "center", mb: 2 }}>
        <h1>Station Search</h1>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={stations}
          onChange={(e, value) => {
            value &&
              setSearchStations({ ...searchStations, startStations: value });
          }}
          sx={{ width: 300, mb: 5 }}
          renderInput={(params) => (
            <TextField {...params} label="Start Stations" />
          )}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={stations}
          onChange={(e, value) => {
            setSearchStations({ ...searchStations, endStations: value });
          }}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="End Stations" />
          )}
        />
      </Box>

      <Button
        variant="contained"
        sx={{ margin: "0 auto", mt: 2, mb: 2 }}
        onClick={handleClick}
      >
        Click
      </Button>

      <Autocomplete
        id="country-select-demo"
        sx={{ width: 300, margin: "0 auto", textAlign: "center" }}
        options={countries}
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ "& > img": { mr: 3, flexShrink: 0 }, margin: "0auto" }}
            {...props}
          >
            App.tsx
            <img
              loading="lazy"
              width="20"
              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
              alt=""
            />
            {option.label} ({option.code}) +{option.phone}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose a country"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
          />
        )}
      />

      <Box sx={{ margin: "0 auto", mt: 5, mb: 5 }}>
        {searchStations.startStations && (
          <h1>{searchStations.startStations.label}</h1>
        )}
        -------
        {searchStations.endStations && (
          <h1>{searchStations.endStations.label}</h1>
        )}
      </Box>
      <Box sx={{ margin: "0 auto", mt: 2, textAlign: "center" }}>
        {directBus &&
          directBus?.map((bus) => {
            return <h1>{bus.name}</h1>;
          })}
      </Box>
      <Box sx={{ margin: "0 auto", mt: 5 }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker />
        </LocalizationProvider>
      </Box>
    </Box>
  );
}

export default App;
