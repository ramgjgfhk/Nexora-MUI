import React from "react";
import { Box, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { textfield } from "../ui";

const FromToDatePicker = ({
  fromDate,
  toDate,
  setFromDate,
  setToDate,
  labelFrom = "From",
  labelTo = "To",
  minDate,
  maxDate,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        display="flex"
        gap={2}
        alignItems="center"
        sx={{ ".MuiInputBase-root": { fontSize: 14 }, mt: 1 }}
      >
        <DatePicker
          label={labelFrom}
          value={fromDate}
          maxDate={toDate || maxDate}
          onChange={(newValue) => setFromDate(newValue)}
          slotProps={{
            textField: {
              size: "small",
              variant: "outlined",
              fullWidth: true,
              sx: {    "& label": {
          fontSize: "10px",   // 👈 Smaller label
          // fontWeight: 500,
        },
                "& .MuiInputAdornment-root svg": {
                  fontSize: "18px", // Reduce icon size
                },
                "& .MuiIconButton-root": {
                  border: "none",
                  padding: 0,
                  backgroundColor: "transparent",
                },"& .MuiPickersInputBase-root":{height:"30px",}
              },
            },
          }}
        />
        <DatePicker
          label={labelTo}
          value={toDate}
          minDate={fromDate || minDate}
          onChange={(newValue) => setToDate(newValue)}
           slotProps={{
            textField: {
              size: "small",
              variant: "outlined",
              fullWidth: true,
              sx: {    "& label": {
          fontSize: "10px",   // 👈 Smaller label
          // fontWeight: 500,
        },
                "& .MuiInputAdornment-root svg": {
                  fontSize: "18px", // Reduce icon size
                },
                "& .MuiIconButton-root": {
                  border: "none",
                  padding: 0,
                  backgroundColor: "transparent",
                },"& .MuiPickersInputBase-root":{height:"30px",}
              },
            },
          }}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default FromToDatePicker;
