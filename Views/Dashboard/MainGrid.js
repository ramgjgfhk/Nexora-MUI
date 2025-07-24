import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import SessionsChart from "./SessionsChart";
import {  Group } from "@mui/icons-material";
import RecentCampaigns from "./RecentCampaigns";
import AudienceSegmentsCard from "./AudienceCard";
import QuickActionsCard from "./quickAction";
import { GlassCard } from "../User/UserProfile/UserProfileComponents/ProfileCard";
import { Box, Button, ButtonGroup, } from "@mui/material";
import { analyticsData } from "@/Components/Variables/userActivityData";
import AnalyticsCard from "./AnalyticsCard";

const buttonOptions = ["Year", "Month", "Week", "Today", "Last Hour"];
export default function MainGrid() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [analytics, setAnalytics] = React.useState({});
  const data = analyticsData;

  const handleIndex = (index) => {
    setSelectedIndex(index);
  };

  React.useEffect(() => {
    const keys = ["yearly", "monthly", "weekly", "today", "hourly"];
    const key = keys[selectedIndex]; // ✅ Use selectedIndex, not index

    if (key) {
      setAnalytics(data?.[key]);
    }
  }, [selectedIndex]); // ✅ useEffect depends on selectedIndex

  return (
    <>
      <Grid container spacing={2} alignItems="stretch">
        <Grid size={{ xs: 12, md: 6 }}>
          <GlassCard sx={{ height: "100%" }}>
            {/* Row 1 */}
            <Typography variant="h6">User Statics</Typography>
            <Grid container spacing={5}>
              <Grid size={{ xs: 12, md: 6 }} sx={{ mt: 3 }}>
                
                <AnalyticsCard
                  analytics={analytics?.active_user}
                  title="Active Users"
                  titleIcon={Group}
                  color="#1976d2"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  <ButtonGroup
                    // variant="contained"
                    // color="secondary"
                    size="small"
                    aria-label="Basic button group"
                  >
                    {buttonOptions?.map((item, index) => (
                      <Button
                        key={index}
                        // sx={buttonStyles}

                        sx={{ fontSize: 10 }}
                        onClick={() => handleIndex(index)}
                      >
                        {item}
                      </Button>
                    ))}
                  </ButtonGroup>
                </Box>
              </Grid>
            </Grid>

            {/* Row 2 */}
            <Grid container spacing={5}>
              <Grid size={{ xs: 12, md: 6 }}>
                <AnalyticsCard
                  analytics={analytics?.new_user}
                  title="New Users"
                  titleIcon={Group}
                  color="#1976d2"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <AnalyticsCard
                  analytics={analytics?.duration}
                  title="Avg. Time"
                  titleIcon={Group}
                  color="#1976d2"
                />
              </Grid>
            </Grid>

            {/* Row 3 */}
            <Grid container spacing={5}>
              <Grid size={{ xs: 12, md: 6 }}>
                <AnalyticsCard
                  analytics={analytics?.duration}
                  title="Avg. Time"
                  titleIcon={Group}
                  color="#1976d2"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <AnalyticsCard
                  analytics={analytics?.duration}
                  title="Avg. Time"
                  titleIcon={Group}
                  color="#1976d2"
                />
              </Grid>
            </Grid>
          </GlassCard>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <GlassCard sx={{ flexGrow: 1 }}>
            <AudienceSegmentsCard sx={{ flexGrow: 1 }} />
          </GlassCard>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ alignItems: "stretch" }} mt={2}>
        <Grid size={{ xs: 12 }} sx={{ display: "flex" }}>
          <SessionsChart sx={{ flex: 1 }} />
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ alignItems: "stretch", mt: 2 }}>
        {/* Left Grid */}
        <Grid
          size={{ xs: 12, lg: 5 }}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          {/* <AudienceSegmentsCard sx={{ flexGrow: 1 }} /> */}
          <RecentCampaigns sx={{ flex: 1 }} />
        </Grid>

        {/* Right Grid */}
        <Grid
          size={{ xs: 12, lg: 7 }}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <QuickActionsCard />
        </Grid>
      </Grid>
    </>
  );
}
