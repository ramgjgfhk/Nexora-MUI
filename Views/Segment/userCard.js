import { audienceData } from "@/Components/Variables/audienceData";
import React from "react";
import { GlassCard } from "../User/UserProfile/UserProfileComponents/ProfileCard";
import { Avatar, Box, Grid, Typography } from "@mui/material";

const UserCard = () => {
  return (
    <>
      <Grid container spacing={2}>
        {audienceData?.map((data) => (
          <Grid size={{ xs: 6, sm: 3 }}>
            <GlassCard>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                  <Typography variant="body2" sx={{ color: "#8F8F8F" }}>
                    {data?.title}
                  </Typography>
                  <Typography variant="h1">{data?.value}</Typography>
                </Box>
                <Avatar sx={{bgcolor:'#2977F501'}}>{data?.icon && <data.icon  sx={{color:'#2977F5'}}/>}</Avatar>
              </Box>
            </GlassCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default UserCard;
