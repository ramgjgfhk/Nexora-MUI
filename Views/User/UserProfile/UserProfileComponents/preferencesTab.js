import { Avatar, Box, Chip, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { communicationPrefsData } from "./userProfileVariable";

const PreferencesTab = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
        Communication Preferences
      </Typography>
      <Grid container spacing={3}>
        {communicationPrefsData.map((pref) => (
          <Grid item xs={12} sm={6} key={pref.key}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 2,
                border: `2px solid ${
                  pref.enabled ? "success.main" : "grey.300"
                }`,
                backgroundColor: pref.enabled
                  ? "rgba(76, 175, 80, 0.05)"
                  : "transparent",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Avatar
                  sx={{
                    bgcolor: pref.enabled ? "success.main" : "grey.400",
                    width: 48,
                    height: 48,
                  }}
                >
                  <pref.icon />
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {pref.label}
                  </Typography>
                  <Chip
                    label={pref.enabled ? "Enabled" : "Disabled"}
                    color={pref.enabled ? "success" : "default"}
                    size="small"
                  />
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PreferencesTab;
