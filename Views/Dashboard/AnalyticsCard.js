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
          <Box sx={{ display: "flex", alignItems: "center" }}>
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
        {/* {Array.isArray(analytics?.chartData) &&
        analytics.chartData.length > 0 ? (
          <LineChart data={analytics?.chartData}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={
                    color === "blue"
                      ? "#3b82f6"
                      : color === "green"
                        ? "#10b981"
                        : color === "purple"
                          ? "#8b5cf6"
                          : "#f59e0b"
                  }
                  strokeWidth={2}
                  dot={false}
                  activeDot={false}
                />
              </LineChart>
        ) : (
          <div style={{ color: "#888", fontSize: 12 }}>No data</div>
        )} */}
      </div>
    </Box>
  );
};

export default AnalyticsCard;
