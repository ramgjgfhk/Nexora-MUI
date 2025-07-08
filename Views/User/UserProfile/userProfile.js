import React from "react";
import { FaSmile } from "react-icons/fa";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import UserProperties from "./userProperties";
import ActivityFilter from "./activityFilter";
import EngagementCard from "./engagementCard";

const UserProfile = ({ activeTab }) => {
  const theme = useTheme();

  return (
    <Grid container spacing={2} className="mb-0" alignItems="stretch">
      <Grid size={{ lg: 7 }} sx={{width:'100%'}}>
        <Card sx={{ bgcolor: "white", height: "100%" }}>
          <CardHeader
            sx={{ py: 2 }}
            avatar={
              <Avatar
                sx={{
                  bgcolor: "primary",
                  width: 50,
                  height: 50,
                  fontSize: 30,
                }}
              >
                <FaSmile />
              </Avatar>
            }
            title={
              <Typography variant="h5" component="div">
                Jhon Turner
              </Typography>
            }
            subheader="Email: jhon@gmail.com"
          />
          <Divider />
          <CardContent sx={{ mt: 3 }}>
            <Grid container spacing={2} alignItems="stretch">
              <Grid size={{ xs: 12, md: 4 }}>
                <Box sx={{ height: "100%" }}>
                  <Typography sx={{ mb: 2 }}>ID: 856595688888</Typography>
                  <Typography sx={{ mb: 2 }}>Phone: 8565856958</Typography>
                  <Typography sx={{ mb: 2 }}>
                    Location: Chicago, Illinois, United States
                  </Typography>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Box sx={{ height: "100%" }}>
                  <Typography sx={{ mb: 2 }}>Gender: Male</Typography>
                  <Typography sx={{ mb: 2 }}>Lat: 47.256336</Typography>
                  <Typography sx={{ mb: 2 }}>Long: 487.8565555</Typography>
                </Box>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Box sx={{ height: "100%" }}>
                  <Typography sx={{ mb: 2 }}>Telephone: 9656585658</Typography>
                  <Typography sx={{ mb: 2 }}>
                    First Seen: Thu, Feb 22, 2024
                  </Typography>
                  <Typography sx={{ mb: 2 }}>
                    Last Seen: Fri, May 16, 2025
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ lg: 5 }} sx={{width:'100%'}}>
        {activeTab === "profile" ? (
          <UserProperties />
        ) : activeTab === "activity" ? (
          <ActivityFilter />
        ) : activeTab === "engagement" ? (
          <EngagementCard />
        ) : null}
      </Grid>
    </Grid>
  );
};

export default UserProfile;
