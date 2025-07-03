import {
  CheckCircle,
  Event,
  Filter,
  Speed,
  Timeline,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { userActivityData } from "../User/UserProfile/UserProfileComponents/userProfileVariable";

const AnalyticsTab = () => {
  return (
    <Box sx={{ pt: 2 }}>
      {/* Analytics Overview */}
      <Grid container spacing={3} sx={{ mb: 4 }} alignItems="stretch">
        <Grid size={{ xs: 12, lg: 6 }}>
          <Paper
            elevation={0}
            sx={{
              p: 2,
              borderRadius: 2,
              border: "1px solid rgba(0, 0, 0, 0.08)",
              height: "100%",
            }}
          >
            <Typography
              variant="subtitle"
              sx={{
                mb: 3,
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Speed color="primary" />
              User Activity Details
            </Typography>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, lg: 6 }}>
                <Box
                  sx={{
                    textAlign: "center",
                    p: 2,
                    bgcolor: "rgba(25, 118, 210, 0.05)",
                    borderRadius: 2,
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: "primary.main",
                      mb: 1,
                    }}
                  >
                    {userActivityData.avgVisitDuration}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Avg. visit duration
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, lg: 6 }}>
                <Box
                  sx={{
                    textAlign: "center",
                    p: 2,
                    bgcolor: "rgba(46, 125, 50, 0.05)",
                    borderRadius: 2,
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: "success.main",
                      mb: 1,
                    }}
                  >
                    {userActivityData.avgTimeBetweenVisits}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Avg. time between visits
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, lg: 6 }}>
          <Paper
            elevation={0}
            sx={{
              p: 2,
              borderRadius: 2,
              border: "1px solid rgba(0, 0, 0, 0.08)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <Typography variant="subtitle" sx={{ fontWeight: 600 }}>
                Filter By Events
              </Typography>
              <IconButton size="small">
                <Filter />
              </IconButton>
            </Box>
            <Stack spacing={2}>
              {userActivityData.events.map((event, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 2,
                    borderRadius: 2,
                    bgcolor: `${event.color}08`,
                    border: `1px solid ${event.color}20`,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: event.color,
                        width: 32,
                        height: 32,
                      }}
                    >
                      <event.icon sx={{ fontSize: 16 }} />
                    </Avatar>
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {event.type}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Last On: {event.lastOccurred}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, color: event.color }}
                  >
                    {event.count} times
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Paper>
        </Grid>
      </Grid>

      {/* Recent Activity Timeline */}
      <Paper
        elevation={0}
        sx={{
          p: 2,
          borderRadius: 2,
          border: "1px solid rgba(0, 0, 0, 0.08)",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            mb: 3,
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Timeline color="primary" />
          Recent Activity - Fri, April 21, 2023
        </Typography>

        <Stack spacing={2}>
          {userActivityData.recentActivity.map((activity, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "flex-start", sm: "center" },
                gap: 2,
                p: 2,
                borderRadius: 2,
                bgcolor: "rgba(0, 0, 0, 0.02)",
                border: "1px solid rgba(0, 0, 0, 0.06)",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  minWidth: { xs: "auto", sm: 80 },
                  fontFamily: "monospace",
                  color: "primary.main",
                }}
              >
                {activity.time}
              </Typography>

              <Avatar
                sx={{
                  bgcolor:
                    activity.status === "success"
                      ? "success.main"
                      : "info.main",
                  width: 32,
                  height: 32,
                }}
              >
                {activity.status === "success" ? (
                  <CheckCircle sx={{ fontSize: 16 }} />
                ) : (
                  <Event sx={{ fontSize: 16 }} />
                )}
              </Avatar>

              <Box sx={{ flex: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  {activity.type}
                </Typography>
                {activity.details && (
                  <Typography variant="caption" color="text.secondary">
                    {activity.details}
                  </Typography>
                )}
              </Box>
            </Box>
          ))}
        </Stack>
      </Paper>
    </Box>
  );
};

export default AnalyticsTab;
