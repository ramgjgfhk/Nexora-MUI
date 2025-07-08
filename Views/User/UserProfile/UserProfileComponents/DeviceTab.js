import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { deviceData } from "./userProfileVariable";
import { AccessTime, Adb, Devices, Language, LocalFireDepartment, Shield, Smartphone } from "@mui/icons-material";

const DeviceTab = () => {
  return (
    <Box sx={{ p: 3 }}>
      {deviceData.map((device, index) => (
        <Paper
          key={index}
          elevation={0}
          sx={{
            p: 3,
            borderRadius: 2,
            border: "1px solid rgba(0, 0, 0, 0.08)",
            mb: 2,
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={2}>
              <Box sx={{ textAlign: "center" }}>
                <Avatar
                  sx={{
                    bgcolor: "info.main",
                    width: 56,
                    height: 56,
                    mx: "auto",
                    mb: 1,
                  }}
                >
                  <Devices sx={{ fontSize: 28 }} />
                </Avatar>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {device.platform}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={10}>
              <Grid container spacing={2}>
                {[
                  {
                    label: "Browser",
                    value: device.browser,
                    icon: LocalFireDepartment,
                  },
                  {
                    label: "OS Version",
                    value: device.version,
                    icon: Adb,
                  },
                  {
                    label: "App Version",
                    value: device.appVersion,
                    icon: Language,
                  },
                  {
                    label: "Nexus SDK",
                    value: device.nexusVersion,
                    icon: Shield,
                  },
                  {
                    label: "Device",
                    value: `${device.deviceMake} ${device.deviceModel}`,
                    icon: Smartphone,
                  },
                  {
                    label: "Last Used",
                    value: device.lastUsed,
                    icon: AccessTime,
                  },
                ].map((info, idx) => (
                  <Grid item xs={12} sm={6} md={4} key={idx}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <info.icon sx={{ fontSize: 16, color: "primary.main" }} />
                      <Box>
                        <Typography variant="caption" color="text.secondary">
                          {info.label}
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {info.value}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Box>
  );
};

export default DeviceTab;
