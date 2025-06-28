import React, { useState } from "react";
import { Tabs, Tab, Box, Typography, Paper } from "@mui/material";

function SystemEvents() {
  return (
    <Paper elevation={2} sx={{ p: 4, m: 2 }}>
      <Typography variant="h6">System Events Component</Typography>
      <Typography>This component shows system event logs and details.</Typography>
    </Paper>
  );
}

function CustomEvents() {
  return (
    <Paper elevation={2} sx={{ p: 4, m: 2 }}>
      <Typography variant="h6">Custom Events Component</Typography>
      <Typography>This component shows custom event triggers configured by the user.</Typography>
    </Paper>
  );
}

function ConversionEvents() {
  return (
    <Paper elevation={2} sx={{ p: 4, m: 2 }}>
      <Typography variant="h6">Conversion Events Component</Typography>
      <Typography>This component displays conversion metrics and related events.</Typography>
    </Paper>
  );
}

function ChargedEvents() {
  return (
    <Paper elevation={2} sx={{ p: 4, m: 2 }}>
      <Typography variant="h6">Charged Events Component</Typography>
      <Typography>This component shows charged transaction events and statuses.</Typography>
    </Paper>
  );
}

export default function SchemaEvents() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
     <Box sx={{ width: "100%", mt: 2, display: "flex", flexDirection: "column", alignItems: "start" }}>
      <Tabs
        value={tabIndex}
        onChange={handleChange}
        centered
        variant="standard"
        TabIndicatorProps={{ style: { backgroundColor: "inherit", height: 3, borderRadius: 2 } }}
        sx={{
          ".MuiTab-root": {
            textTransform: "none",
            fontWeight: 500,
            fontSize: "0.8rem",
            color: "text.secondary",
            mx: 1,
            "&:hover": {
            //   color: "#1976d2",
            //   backgroundColor: "rgba(25, 118, 210, 0.08)",
              borderRadius: 1,
            },
          },
          ".Mui-selected": {
            color: "black",
            fontWeight: 600,
          },
        }}
      >
        <Tab label="System Events" />
        <Tab label="Custom Events" />
        <Tab label="Conversion Events" />
        <Tab label="Charged Events" />
      </Tabs>

      <Box sx={{ width: "100%", maxWidth: 600 }}>
        {tabIndex === 0 && <SystemEvents />}
        {tabIndex === 1 && <CustomEvents />}
        {tabIndex === 2 && <ConversionEvents />}
        {tabIndex === 3 && <ChargedEvents />}
      </Box>
    </Box>
  );
}
