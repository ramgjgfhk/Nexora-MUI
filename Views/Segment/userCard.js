import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Grid,
} from "@mui/material";
import { audienceData } from "@/Components/Variables/audienceData";
import { GlassCard } from "../User/UserProfile/UserProfileComponents/ProfileCard";

const UserCard = () => {
  return (
    <>
      <Grid container spacing={2}>
        {audienceData.map((audience) => (
            <Grid size={{ xs: 6, md: 3 }} >
          <GlassCard sx={{p:3}}>
              <CardContent
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    {audience.title}
                  </Typography>
                  <Typography variant="h5" fontWeight="bold">
                    {audience.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "green", mt: 0.5 }}>
                    {audience.change}
                  </Typography>
                </Box>
                <Avatar
                  sx={{ bgcolor: audience.iconColor, width: 40, height: 40 }}
                >
                  {audience.icon}
                </Avatar>
              </CardContent>
          </GlassCard>
            </Grid>
        ))}
      </Grid>
    </>
  );
};

export default UserCard;
