import React from "react";
import { Box, Typography, Chip, LinearProgress, Stack } from "@mui/material";
import { GlassCard } from "../User/UserProfile/UserProfileComponents/ProfileCard";

const UserSegmentData = [
  {
    label: "Power Users",
    status: "Active",
    color: "#1E88E5", // Blue
    count: 12450,
  },
  {
    label: "At Risk",
    status: "Active",
    color: "#E53935", // Red
    count: 2340,
  },
  {
    label: "New Signups",
    status: "Active",
    color: "#43A047", // Green
    count: 5670,
  },
  {
    label: "Cart Abandoners",
    status: "Inactive",
    color: "#FB8C00", // Orange
    count: 3210,
  },
];

const maxCount = Math.max(...UserSegmentData.map((item) => item.count));

const UserSegment = () => {
  return (
    <GlassCard sx={{py:3}}>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
          User Segment
        </Typography>
        <Stack spacing={3}>
          {UserSegmentData.map((item, index) => (
            <Box key={index}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 1,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      bgcolor: item.color,
                    }}
                  />
                  <Typography variant="body2">{item.label}</Typography>
                  <Chip
                    label={item.status}
                    size="small"
                    sx={{
                      bgcolor:
                        item.status === "Active" ? "success.main" : "grey.300",
                      color: item.status === "Active" ? "white" : "black",
                      fontWeight: 500,
                    }}
                  />
                </Box>
                <Typography variant="body2" fontWeight="bold">
                  {item.count.toLocaleString()}
                </Typography>
              </Box>

              <LinearProgress
                variant="determinate"
                value={(item.count / maxCount) * 100}
                sx={{
                  height: 8,
                  borderRadius: 5,
                  backgroundColor: "#eee",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: item.color,
                  },
                }}
              />
            </Box>
          ))}
        </Stack>
    </GlassCard>
  );
};

export default UserSegment;
