import {
  Cake,
  Email,
  Language,
  LocationCity,
  Person,
  Phone,
  Schedule,
} from "@mui/icons-material";
import {
  Card,
  CardContent,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { customerData } from "../User/UserProfile/UserProfileComponents/userProfileVariable";
import { GlassCard } from "../User/UserProfile/UserProfileComponents/ProfileCard";
import { dateFormate } from "@/utils/DateFormat";

const CustomerInformation = ({ data }) => {
  return (
    <GlassCard>
      <CardContent sx={{ p: 1 }}>
        {/* <Typography
          variant="body1"
          sx={{  mb: 1,color:'black',fontSize:'1rem' }}
        //   style={{
        //     fontFamily: "Inter (ttf), Roboto, Helvetica, Arial, sans-serif",
        //   }}
        >
          Customer Information
        </Typography> */}

        <Grid container spacing={3}>
          {/* Contact Information */}
          <Grid size={{ xs: 12 }}>
            <Paper elevation={0} sx={{ p: 3, borderRadius: 2 }}>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                Contact Details
              </Typography>
              <List dense>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <Email
                      sx={{ color: "#2376D2 !important" }}
                      fontSize="small"
                    />
                  </ListItemIcon>
                  <ListItemText primary={data.email} secondary="Email" />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <Phone
                      sx={{ color: "#2376D2 !important" }}
                      fontSize="small"
                    />
                  </ListItemIcon>
                  <ListItemText primary={data.mobile} secondary="Phone" />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <LocationCity
                      sx={{ color: "#2376D2 !important" }}
                      fontSize="small"
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={customerData.location}
                    secondary="Location"
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>

          {/* Personal Information */}

          <Grid size={{ xs: 12 }}>
            <Paper elevation={0} sx={{ p: 3, borderRadius: 2 }}>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                gutterBottom
              >
                Personal Details
              </Typography>
              <List dense>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <Person
                      sx={{ color: "#DF4D4E !important" }}
                      fontSize="small"
                    />
                  </ListItemIcon>
                  <ListItemText primary={customerData.age} secondary="Age" />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <Cake
                      sx={{ color: "#DF4D4E !important" }}
                      fontSize="small"
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={customerData.birthday}
                    secondary="Birthday"
                  />
                </ListItem>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <Language
                      sx={{ color: "#DF4D4E !important" }}
                      fontSize="small"
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={customerData.language}
                    secondary="Language"
                  />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        {/* Activity Information */}
        <Paper elevation={0} sx={{ p: 3, borderRadius: 2 }}>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Activity Timeline
          </Typography>
          <List dense>
            <ListItem sx={{ px: 0 }}>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <Schedule color="info" fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={dateFormate(data.created_at)}
                secondary="First Seen"
              />
            </ListItem>
            <ListItem sx={{ px: 0 }}>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <Schedule color="info" fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary={dateFormate(data.updated_at)}
                secondary="Last Seen"
              />
            </ListItem>
          </List>
        </Paper>
      </CardContent>
    </GlassCard>
  );
};

export default CustomerInformation;
