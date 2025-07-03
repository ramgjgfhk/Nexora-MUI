import { Avatar, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { statusCardData } from "./userProfileVariable";
import { GlassCard } from "./ProfileCard";

const StatsCard = () => {
  return (
    <Grid container spacing={3} sx={{ mb: 4 }}>
      {statusCardData.map((stat, index) => (
        <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={index}>
          <GlassCard
            sx={{
              animationDelay: `${index * 0.1}s`,
              "&:hover": {
                transform: "scale(1.02)",
              },
            }}
          >
            <CardContent sx={{ textAlign: "center", p: 3 }}>
              <Avatar
                sx={{
                  bgcolor: stat.color,
                  width: 56,
                  height: 56,
                  mx: "auto",
                  mb: 2,
                }}
              >
                <stat.icon sx={{ fontSize: 28 }} />
              </Avatar>
              <Typography
                variant="h4"
                sx={{ fontWeight: 700, color: stat.color, mb: 1 }}
              >
                {stat.value}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {stat.label}
              </Typography>
            </CardContent>
          </GlassCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default StatsCard;
