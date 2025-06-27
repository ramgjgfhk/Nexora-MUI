import * as React from "react";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { textfield } from "../Common/MuiSxStyle/SlaFormPageStyle";
import { TextField } from "@mui/material";

export default function Search({ onChange }) {
  return (
    <FormControl sx={{ width: "250px",ml:"auto !important" }} variant="outlined">
      <TextField
        size="medium" // "large" is not a valid size for MUI TextField (use "small" or "medium")
        id="search"
        placeholder="Search…"
        sx={{ ...textfield, height: "2rem" }}
        onChange={onChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{ color: "text.primary" }}>
              <SearchRoundedIcon fontSize="small" />
            </InputAdornment>
          ),
        }}
        inputProps={{
          "aria-label": "search",
        }}
      />
    </FormControl>
  );
}
