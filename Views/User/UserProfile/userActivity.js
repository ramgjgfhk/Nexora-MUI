import React from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Divider,
} from "@mui/material";

const TimelineEvent = ({ time, title, description }) => (
  <Grid container spacing={2} alignItems="flex-start" sx={{ mb: 2 }}>
    <Grid item xs={2}>
      <Typography variant="body2" color="text.secondary" align="right">
        {time}
      </Typography>
    </Grid>
    <Grid item xs={10}>
      <Typography variant="subtitle1" fontWeight="bold">
        {title}
      </Typography>
      {description && (
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      )}
    </Grid>
  </Grid>
);

const UserActivity = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        User activity details
      </Typography>
      <Grid container spacing={3}>
        {/* Left Panel */}
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3 }}>
            <Card
              sx={{
                p: 2,
                mb: 2,
                border: "1px solid #ccc",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography>Avg. visit duration is</Typography>
              <Typography variant="h4" fontWeight="bold">
                9 minutes
              </Typography>
            </Card>
            <Card
              sx={{
                p: 2,
                border: "1px solid #ccc",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography>Avg. time between visit is</Typography>
              <Typography variant="h4" fontWeight="bold">
                2 days
              </Typography>
            </Card>
          </Card>
        </Grid>

        {/* Right Panel */}
        <Grid item xs={12} lg={8}>
          <Card>
            <CardContent>
              <Box sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Fri, April 21, 2023
                </Typography>

                <TimelineEvent
                  time="06:15:02 pm"
                  title="Reachable By"
                  description="Push | YNsR2..."
                />
                <TimelineEvent
                  time="06:15:02 pm"
                  title="Reachable By"
                  description="Email | akimggg2221@gmail.com"
                />

                <Divider sx={{ my: 2 }} />

                <TimelineEvent
                  time="06:45:51 am"
                  title="UTM Visited"
                  description="Google | gSrc | gMed | gcCamp"
                />
                <TimelineEvent
                  time="06:45:51 am"
                  title="Charged"
                  description="Card | 39001 | 8.11 | 2.0 | Mobile | ... | USD | 06/07/2022 05:30:40 am"
                />
                <TimelineEvent
                  time="06:45:02 am"
                  title="Identity Set"
                  description="akimggg2221@gmail.com | New User | SDK |"
                />
                <TimelineEvent
                  time="06:44:58 am"
                  title="UTM Visited"
                  description="Google | gSrc | gMed | gcCamp"
                />
                <TimelineEvent
                  time="06:44:58 am"
                  title="Charged"
                  description="Card | 39001 | 8.11 | 2.0 | Mobile | ... | USD | 06/07/2022 05:30:40 am"
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserActivity;
