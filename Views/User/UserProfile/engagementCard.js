import { Card, Grid, Typography } from "@mui/material";
import React from "react";

const EngagementCard = () => {
  return (
    <Card
      sx={{
        border: "1px solid #ccc",
        padding: 3,
        bgcolor: "white",
        height: "100%",
        display:'flex',
        alignItems:'center'
      }}
      
    >
      <Grid container sx={{width:'100%'}} columns={11} justifyContent="space-between">
        <Grid size={{ lg: 5 }} sx={{width:'100%'}}>
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
            <Typography>Total Engagement</Typography>
            <Typography variant="h4" fontWeight="bold">
             11,230
            </Typography>
          </Card>
        </Grid>
        <Grid size={{ lg: 5 }} sx={{width:'100%'}}>
          <Card
            sx={{
              p: 2,
              border: "1px solid #ccc",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography>Engagement Growth</Typography>
            <Typography variant="h4" fontWeight="bold">
              45%
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Card>
  );
};

export default EngagementCard;
