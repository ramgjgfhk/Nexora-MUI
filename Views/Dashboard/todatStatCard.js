import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { GlassCard } from "../User/UserProfile/UserProfileComponents/ProfileCard";
import { Campaign, Person, ShareOutlined, TrendingUpOutlined } from "@mui/icons-material";

const TodayStatCard = () => {
  const todayStat = [
    {
      label: "Active Users",
      value: 24,
      icon:Campaign
    },
    {
      label: "New Users",
      value: 20,
      icon:Person
    },
    {
      label: "Sent",
      value: 142568,
      icon:ShareOutlined
    },
    {
      label: "Converted",
      value: 10,
      icon:TrendingUpOutlined
    },
  ];

  return (
    <Grid container>
      {todayStat.map((data, index) => (
        <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
          <GlassCard>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="p">{data.label}</Typography>
              <Box sx={{width:30,height:30,borderRadius:50}}>
                <data.icon/>
              </Box>
            </Box>
          </GlassCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default TodayStatCard;
