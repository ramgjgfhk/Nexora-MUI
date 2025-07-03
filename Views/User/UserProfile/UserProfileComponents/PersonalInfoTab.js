import {
  Avatar,
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import {
  contactInformationData,
  personalDetailsData,
} from "./userProfileVariable";

const PersonalInfoTab = () => {
  return (
    <Grid container spacing={3} sx={{ p: 3 }}>
      <Grid size={{ xs: 12, lg: 6 }}>
        <Paper elevation={0} sx={{ p: 3, borderRadius: 2 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Contact Information
          </Typography>
          <List>
            <Grid container spacing={3}>
              {contactInformationData.map((item, index) => (
                <Grid size={{ xs: 12, lg: 6 }} key={index}>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <Avatar
                        sx={{ bgcolor: "primary.main", width: 45, height: 45 }}
                      >
                        <Box sx={{ transform: "scale(1.5)" }}>
                          <item.icon sx={{ color: "white !important" }} />
                        </Box>
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      secondary={item.value}
                      sx={{ ml: 2 }}
                      primaryTypographyProps={{
                        fontWeight: 800,
                        fontSize: "0.95rem",
                        color: "text.primary",
                      }}
                      secondaryTypographyProps={{
                        fontWeight: 500,
                        fontSize: "0.85rem",
                        color: "text.secondary",
                      }}
                    />
                  </ListItem>
                </Grid>
              ))}
            </Grid>
          </List>
        </Paper>
      </Grid>

      <Grid size={{ xs: 12, lg: 6 }}>
        <Paper elevation={0} sx={{ p: 3, borderRadius: 2 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Personal Details
          </Typography>
          <List>
            <Grid container spacing={3}>
              {personalDetailsData.map((item, index) => (
                <Grid size={{ xs: 12, lg: 6 }} key={index}>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <Avatar
                        sx={{ bgcolor: "success.main", width: 45, height: 45 }}
                      >
                        <Box sx={{ transform: "scale(1.5)" }}>
                          <item.icon sx={{ color: "white !important" }} />
                        </Box>
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary={item.label}
                      secondary={item.value}
                      sx={{ ml: 2 }}
                      primaryTypographyProps={{
                        fontWeight: 800,
                        fontSize: "0.95rem",
                        color: "text.primary",
                      }}
                      secondaryTypographyProps={{
                        fontWeight: 500,
                        fontSize: "0.85rem",
                        color: "text.secondary",
                      }}
                    />
                  </ListItem>
                </Grid>
              ))}
            </Grid>
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default PersonalInfoTab;
