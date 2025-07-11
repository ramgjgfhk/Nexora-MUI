import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { Box, Typography, Stack, ButtonGroup, Button } from "@mui/material";
import { GlassCard } from "../User/UserProfile/UserProfileComponents/ProfileCard";

const buttonStyles = {
  bgcolor: "#03045e",
  color: "white",
  fontSize: "10px",
  "&:hover": {
    color: "black",
    bgcolor: "white",
  },
};

export default function CampaignPerformanceECharts() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartInstance.current = echarts.init(chartRef.current);

      chartInstance.current.setOption({
        animation: false,
        tooltip: {
          trigger: "axis",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderColor: "#e2e8f0",
          textStyle: { color: "#1f2937" },
          axisPointer: { type: "shadow" },
        },
        legend: { show: true },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          top: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: ["1", "2", "3", "4", "5", "6", "7"],
          axisLine: { lineStyle: { color: "#e2e8f0" } },
          axisLabel: { color: "#64748b" },
        },
        yAxis: {
          type: "value",
          axisLine: { show: false },
          axisLabel: { color: "#64748b" },
          splitLine: { lineStyle: { color: "#e2e8f0", type: "dashed" } },
        },
        series: [
          {
            name: "Sent",
            type: "line",
            smooth: true,
            data: [720, 632, 632, 934, 350, 832, 501],
            lineStyle: { color: "rgba(87, 181, 231, 1)" },
            itemStyle: { color: "rgba(87, 181, 231, 1)" },
            symbol: "circle",
            symbolSize: 8,
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 0, color: "rgba(87, 181, 231, 0.2)" },
                  { offset: 1, color: "rgba(87, 181, 231, 0.05)" },
                ],
              },
            },
          },
          {
            name: "Viewed",
            type: "line",
            smooth: true,
            data: [520, 382, 491, 434, 290, 732, 499],
            lineStyle: { color: "rgba(141, 211, 199, 1)" },
            itemStyle: { color: "rgba(141, 211, 199, 1)" },
            symbol: "circle",
            symbolSize: 8,
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 0, color: "rgba(141, 211, 199, 0.2)" },
                  { offset: 1, color: "rgba(141, 211, 199, 0.05)" },
                ],
              },
            },
          },
          {
            name: "Converted",
            type: "line",
            smooth: true,
            data: [450, 102, 301, 154, 209, 19, 400],
            lineStyle: { color: "rgba(251, 191, 114, 1)" },
            itemStyle: { color: "rgba(251, 191, 114, 1)" },
            symbol: "circle",
            symbolSize: 8,
            areaStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 0, color: "rgba(251, 191, 114, 0.2)" },
                  { offset: 1, color: "rgba(251, 191, 114, 0.05)" },
                ],
              },
            },
          },
        ],
      });

      window.addEventListener("resize", () => {
        chartInstance.current.resize();
      });

      setTimeout(() => chartInstance.current.resize(), 100);

      return () => {
        chartInstance.current.dispose();
      };
    }
  }, []);

  return (
    <GlassCard sx={{ width: "100%" }}>
      <Box sx={{ borderRadius: 2, mb: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mb: 2,
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ color: "#1f2937" }}>
            Campaign Performance
          </Typography>
          <ButtonGroup size="small">
            <Button sx={buttonStyles}>SMS</Button>
            <Button sx={buttonStyles}>Email</Button>
            <Button sx={buttonStyles}>Push</Button>
          </ButtonGroup>
        </Box>

        {/* <Stack
          direction="row"
          spacing={3}
          alignItems="center"
          justifyContent="center"
          mb={4}
        >
          <LegendDot color="#57B5E7">Sent</LegendDot>
          <LegendDot color="#8DD3C7">Viewed</LegendDot>
          <LegendDot color="#FBBF72">Converted</LegendDot>
        </Stack> */}

        <Box
          ref={chartRef}
          sx={{
            height: 300,
            width: "100%",
          }}
        />
      </Box>
    </GlassCard>
  );
}

const LegendDot = ({ color, children }) => (
  <Box sx={{ display: "flex", alignItems: "center" }}>
    <Box
      sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: color, mr: 1 }}
    />
    <Typography variant="caption" sx={{ color: "#64748b" }}>
      {children}
    </Typography>
  </Box>
);
