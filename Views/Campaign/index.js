import React from "react";
import CampaignCards from "./CampaignCard";
import { GlassCard } from "../User/UserProfile/UserProfileComponents/ProfileCard";
import { Box, Button, Typography } from "@mui/material";

const Campaigns = () => {
  return (
    <>
      <CampaignCards />
      <GlassCard sx={{ mt: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h4">Campaign List</Typography>
          <Button size="small" variant="contained" color="secondary">
            Creat Campaign
          </Button>
        </Box>
      </GlassCard>
    </>
  );
};

export default Campaigns;
