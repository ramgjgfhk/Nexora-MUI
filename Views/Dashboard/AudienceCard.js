import { Box, Typography, Stack, Link } from "@mui/material";
import { GlassCard } from "../User/UserProfile/UserProfileComponents/ProfileCard";
import { useEffect, useRef } from "react";
import * as echarts from "echarts";

export default function AudienceSegmentsCard() {
  const chartContainerRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      chartInstance.current = echarts.init(chartContainerRef.current);

      chartInstance.current.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{b}: {c} ({d}%)",
          borderColor: "#e2e8f0",
          backgroundColor: "rgba(255,255,255,0.9)",
          textStyle: { color: "#1f2937" },
        },
        series: [
          {
            type: "pie",
            radius: ["20%", "65%"],
            avoidLabelOverlap: false,
            label: { show: false },
            emphasis: { label: { show: false } },
            labelLine: { show: false },
            data: [
              {
                value: 32,
                name: "Loyal Customers",
                itemStyle: { color: "#00BFFF" },
              },
              {
                value: 28,
                name: "New Subscribers",
                itemStyle: { color: "#4DD0E1" },
              },
              {
                value: 24,
                name: "High-Value Shoppers",
                itemStyle: { color: "#FFB74D" },
              },
              {
                value: 16,
                name: "At-Risk Customers",
                itemStyle: { color: "#FF7F7F" },
              },
            ],
          },
        ],
      });

      window.addEventListener("resize", () => chartInstance.current.resize());

      return () => {
        chartInstance.current.dispose();
      };
    }
  }, []);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Top Audience Segments - RFM
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "#3B82F6", cursor: "pointer", fontWeight: 500 }}
        >
          View All
        </Typography>
      </Box>

      {/* === Side-by-side layout === */}
      <Stack
        direction="row"
        spacing={4}
        alignItems="center"
        sx={{ width: "100%" }}
      >
        {/* Pie Chart Container */}
        <Box
          sx={{
            width: "50%",
            height: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            ref={chartContainerRef}
            sx={{
              width: "100%",
              height: "100%",
            }}
          />
        </Box>

        {/* Legend/Details */}
        <Box sx={{ width: "50%" }}>
          <Stack spacing={2}>
            <LegendItem color="#00BFFF" label="Loyal Customers" value="32%" />
            <LegendItem color="#4DD0E1" label="New Subscribers" value="28%" />
            <LegendItem
              color="#FFB74D"
              label="High-Value Shoppers"
              value="24%"
            />
            <LegendItem color="#FF7F7F" label="At-Risk Customers" value="16%" />
          </Stack>
        </Box>
      </Stack>
    </>
  );
}

const LegendItem = ({ color, label, value }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box
        sx={{
          width: 10,
          height: 10,
          bgcolor: color,
          borderRadius: "50%",
          mr: 1,
        }}
      />
      <Typography sx={{ color: "#1f2937", fontSize: 14 }}>{label}</Typography>
    </Box>
    <Typography sx={{ fontWeight: 500, color: "#1f2937", fontSize: 14 }}>
      {value}
    </Typography>
  </Box>
);
