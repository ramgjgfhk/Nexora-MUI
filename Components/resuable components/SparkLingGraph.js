import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const EChartMinimalLine = ({ data = [], color }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const colorMap = {
    error: "#EF4444", // red-500
    success: "#10B981", // green-500
    warning: "#F59E0B", // amber-500
  };

  const areaGradientMap = {
    error: [
      { offset: 0, color: "rgba(239, 68, 68, 0.4)" },
      { offset: 0.3, color: "rgba(239, 68, 68, 0.1)" },
      { offset: 0.5, color: "rgba(239, 68, 68, 0)" },
    ],
    success: [
      { offset: 0, color: "rgba(16, 185, 129, 0.4)" },
      { offset: 0.3, color: "rgba(16, 185, 129, 0.1)" },
      { offset: 0.5, color: "rgba(16, 185, 129, 0)" },
    ],
    warning: [
      { offset: 0, color: "rgba(245, 158, 11, 0.4)" },
      { offset: 0.3, color: "rgba(245, 158, 11, 0.1)" },
      { offset: 0.5, color: "rgba(245, 158, 11, 0)" },
    ],
  };

  const lineColor = colorMap[color] || "#3B82F6"; // default blue
  const areaGradient = areaGradientMap[color] || areaGradientMap["error"];

  useEffect(() => {
    if (!chartRef.current) return;

    if (!chartInstance.current) {
      chartInstance.current = echarts.init(chartRef.current);
    }

    const option = {
      tooltip: {
        show: true,
        trigger: "axis",
        axisPointer: {
          type: "line",
          lineStyle: {
            color: "error",
            width: 1,
            type: "dashed",
          },
        },
        backgroundColor: "#fff",
        borderColor: "#ccc",
        borderWidth: 1,
        textStyle: {
          color: "#000",
        },
      },
      xAxis: {
        show: false,
        type: "category",
        data: Array.from({ length: data.length }, (_, i) => i + 1),
      },
      yAxis: {
        show: false,
        type: "value",
      },
      grid: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
      series: [
        {
          type: "line",
          data,
          smooth: true,
          symbol: "none",
          lineStyle: {
            color: lineColor,
            width: 2,
          },
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: areaGradient,
            },
          },
        },
      ],
    };

    chartInstance.current.setOption(option);
    const handleResize = () => chartInstance.current?.resize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chartInstance.current?.dispose();
      chartInstance.current = null;
    };
  }, [data]);

  return <div ref={chartRef} style={{ width: "100%", height: "60px" }} />;
};

export default EChartMinimalLine;
