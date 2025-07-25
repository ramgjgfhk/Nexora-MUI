import EChartMinimalLine from "@/Components/resuable components/SparkLingGraph";
import { Avatar, Box, Chip, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import React from "react";

const AnalyticsCard = ({ analytics, title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        // gap: 1,
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Box>
          <Typography variant="subtitle2">
            {title}-<b>{analytics?.count}</b>
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center",mt:0.5 }}>
            <Chip
              label={`${analytics?.percentage}%`}
              color={
                analytics?.percentage > 1
                  ? "success"
                  : analytics?.percentage == 0
                  ? "warning"
                  : "error"
              }
            />
            <Typography variant="subtitle2" sx={{ fontSize: "10px" }}>
              from last month
            </Typography>
          </Box>
        </Box>
      </Box>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <EChartMinimalLine
          data={analytics?.chartData || []}
          color={
            analytics?.percentage > 1
              ? "success"
              : analytics?.percentage == 0
              ? "warning"
              : "error"
          }
        />
      </div>
    </Box>
  );
};

export default AnalyticsCard;
