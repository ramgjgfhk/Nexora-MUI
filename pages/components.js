import React from "react";
import {
  Box,
  Button,
  TextField,
  Stack,
  Typography,
  Select,
  MenuItem,
  Switch,
  Checkbox,
  Chip,
  Avatar,
  Alert,
  FormControlLabel,
  FormControl,
  InputLabel,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

export default function UiPalette() {
  const [date, setDate] = React.useState(null);
  const [selectValue, setSelectValue] = React.useState("");

  return (
    <Box p={2} sx={{ maxWidth: 600 }}>
      <Typography variant="h6" gutterBottom>
        🎨 UI Component Palette
      </Typography>

      {/* Buttons */}
      <Typography variant="subtitle2" gutterBottom>
        Buttons
      </Typography>
      <Stack direction="row" spacing={1} mb={2}>
        <Button size="small" variant="contained" color="primary"sx={{height:"27px",borderRadius:"6px"}}>
          Save
        </Button>
        <Button size="small" variant="outlined" color="secondary"sx={{height:"27px",borderRadius:"6px"}}>
          Cancel
        </Button>
   <Button
//   variant="contained"
  sx={{
    height: "27px",
    borderRadius: "6px",
    backgroundColor: "#f44336 !important",     // Red 500
    color: "#fff",
    fontSize: "0.75rem",
    textTransform: "none",
    px: 2,
    "&:hover": {
      backgroundColor: "#d32f2f !important",   // Red 700
    },
  }}
>
  Delete
</Button>

      </Stack>

      {/* Inputs */}
      <Typography variant="subtitle2" gutterBottom>
        Text Inputs
      </Typography>
      <Stack spacing={4} mb={2}>
        <TextField size="small" label="Name" fullWidth />
        <TextField size="small" label="Email" fullWidth />
        <TextField size="small" label="Password" type="password" fullWidth />
      </Stack>

      {/* Select */}
      <Typography variant="subtitle2" gutterBottom>
        Select Dropdown
      </Typography>
      <FormControl size="small" fullWidth sx={{ mb: 2 }}>
        <InputLabel>Status</InputLabel>
        <Select
          value={selectValue}
          onChange={(e) => setSelectValue(e.target.value)}
          label="Status"
        >
          <MenuItem value="active">Active</MenuItem>
          <MenuItem value="inactive">Inactive</MenuItem>
          <MenuItem value="pending">Pending</MenuItem>
        </Select>
      </FormControl>

      {/* Date Picker */}
      <Typography variant="subtitle2" gutterBottom>
        Date Picker
      </Typography>
      {/* <Box sx={{ mb: 2 }}>
        <DatePicker
          label="Select Date"
          value={date}
          onChange={(newDate) => setDate(newDate)}
          slotProps={{
            textField: {
              size: "small",
              fullWidth: true,
            },
          }}
        />
      </Box> */}

      {/* Toggles */}
      <Typography variant="subtitle2" gutterBottom>
        Toggles
      </Typography>
      <Stack direction="row" spacing={2} mb={2}>
        <FormControlLabel control={<Switch size="small" />} label="Toggle" />
        <FormControlLabel control={<Checkbox size="small" />} label="Accept" />
      </Stack>

      {/* Chips and Avatars */}
      <Typography variant="subtitle2" gutterBottom>
        Chips & Avatars
      </Typography>
      <Stack direction="row" spacing={1} mb={2}>
        <Chip size="small" label="Label" />
        <Chip size="small" color="primary" label="Selected" />
        <Chip
          size="small"
          avatar={<Avatar sx={{ width: 20, height: 20 }}>A</Avatar>}
          label="User"
        />
      </Stack>

      {/* Alerts */}
      <Typography variant="subtitle2" gutterBottom>
        Alerts
      </Typography>
      <Stack spacing={1}>
        <Alert severity="info">Info message</Alert>
        <Alert severity="success">Saved successfully</Alert>
        <Alert severity="warning">Check your input</Alert>
        <Alert severity="error">Something went wrong</Alert>
      </Stack>
    </Box>
  );
}
