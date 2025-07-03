import {
  Assessment,
  Assignment,
  Cancel,
  CheckCircle,
  Filter,
  TrendingUp,
} from "@mui/icons-material";
import { Avatar, Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { engagementEntries, userActivityData } from "./userProfileVariable";

const EngagementTab = () => {
  return (
    <Box sx={{ p: 3 }}>
      {/* Engagement Overview */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, lg: 6 }}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 2,
              textAlign: "center",
              border: "2px solid rgba(25, 118, 210, 0.2)",
              bgcolor: "rgba(25, 118, 210, 0.02)",
            }}
          >
            <Avatar
              sx={{
                bgcolor: "primary.main",
                width: 56,
                height: 56,
                mx: "auto",
                mb: 2,
              }}
            >
              <Assessment sx={{ fontSize: 28 }} />
            </Avatar>
            <Typography
              variant="h3"
              sx={{ fontWeight: 700, color: "primary.main", mb: 1 }}
            >
              {userActivityData.totalEngagement.toLocaleString()}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Total Engagement
            </Typography>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 2,
              textAlign: "center",
              border: "2px solid rgba(46, 125, 50, 0.2)",
              bgcolor: "rgba(46, 125, 50, 0.02)",
            }}
          >
            <Avatar
              sx={{
                bgcolor: "success.main",
                width: 56,
                height: 56,
                mx: "auto",
                mb: 2,
              }}
            >
              <TrendingUp sx={{ fontSize: 28 }} />
            </Avatar>
            <Typography
              variant="h3"
              sx={{ fontWeight: 700, color: "success.main", mb: 1 }}
            >
              {userActivityData.engagementGrowth}%
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Engagement Growth
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Engagement Entries Table */}
      <Paper
        elevation={0}
        sx={{
          borderRadius: 2,
          border: "1px solid rgba(0, 0, 0, 0.08)",
        }}
      >
        <Box sx={{ p: 3, borderBottom: "1px solid rgba(0, 0, 0, 0.06)" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="subtitle"
              sx={{
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Assignment color="primary" />
              Engagement Entries
            </Typography>
            <Button size="small" startIcon={<Filter />} variant="outlined">
              Status Filter
            </Button>
          </Box>
        </Box>

        {/* Table Header */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "100px 1fr 200px 2fr",
            gap: 2,
            p: 2,
            bgcolor: "rgba(0, 0, 0, 0.02)",
            borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 700, color: "text.secondary" }}
          >
            ID
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 700, color: "text.secondary" }}
          >
            Name
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 700, color: "text.secondary" }}
          >
            Entry Time
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 700, color: "text.secondary" }}
          >
            Status
          </Typography>
        </Box>

        {/* Table Rows */}
        {engagementEntries.map((entry, index) => (
          <Box
            key={entry.id}
            sx={{
              display: "grid",
              gridTemplateColumns: "100px 1fr 200px 2fr",
              gap: 2,
              p: 2,
              alignItems: "center",
              borderBottom:
                index < engagementEntries.length - 1
                  ? "1px solid rgba(0, 0, 0, 0.04)"
                  : "none",
              "&:hover": {
                bgcolor: "rgba(25, 118, 210, 0.02)",
              },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontFamily: "monospace",
                fontWeight: 600,
                color: "primary.main",
              }}
            >
              {entry.id}
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>
              {entry.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {entry.entryTime}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              {entry.status.includes("Qualified") ? (
                <CheckCircle sx={{ fontSize: 16, color: "success.main" }} />
              ) : (
                <Cancel sx={{ fontSize: 16, color: "error.main" }} />
              )}
              <Typography
                variant="body2"
                sx={{
                  color: entry.status.includes("Qualified")
                    ? "success.main"
                    : "error.main",
                  fontWeight: 500,
                }}
              >
                {entry.status}
              </Typography>
            </Box>
          </Box>
        ))}
      </Paper>
    </Box>
  );
};

export default EngagementTab;
