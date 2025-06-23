import React from "react";
import { Box, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

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
            },
          }}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default FromToDatePicker;
