// import * as React from "react";
// import PropTypes from "prop-types";
// import { useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Chip from "@mui/material/Chip";
// import Stack from "@mui/material/Stack";
// import Typography from "@mui/material/Typography";
// import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
// import { areaElementClasses } from "@mui/x-charts/LineChart";

import { CheckCircle, Group, PersonAdd, Send, TrendingUpOutlined } from "@mui/icons-material";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { GlassCard } from "../User/UserProfile/UserProfileComponents/ProfileCard";

// function getDaysInMonth(month, year) {
//   const date = new Date(year, month, 0);
//   const monthName = date.toLocaleDateString("en-US", {
//     month: "short",
//   });
//   const daysInMonth = date.getDate();
//   const days = [];
//   let i = 1;
//   while (days.length < daysInMonth) {
//     days.push(`${monthName} ${i}`);
//     i += 1;
//   }
//   return days;
// }

// function AreaGradient({ color, id }) {
//   return (
//     <defs>
//       <linearGradient id={id} x1="50%" y1="0%" x2="50%" y2="100%">
//         <stop offset="0%" stopColor={color} stopOpacity={0.3} />
//         <stop offset="100%" stopColor={color} stopOpacity={0} />
//       </linearGradient>
//     </defs>
//   );
// }

// AreaGradient.propTypes = {
//   color: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
// };

// function StatCard({ title, value, interval, trend, data, icon, color }) {
//   const theme = useTheme();
//   const daysInWeek = getDaysInMonth(4, 2024);

//   const trendColors = {
//     up:
//       theme.palette.mode === "light"
//         ? theme.palette.success.main
//         : theme.palette.success.dark,
//     down:
//       theme.palette.mode === "light"
//         ? theme.palette.error.main
//         : theme.palette.error.dark,
//     neutral:
//       theme.palette.mode === "light"
//         ? theme.palette.grey[400]
//         : theme.palette.grey[700],
//   };

//   const labelColors = {
//     up: "success",
//     down: "error",
//     neutral: "default",
//   };

//   // const color = labelColors[trend];
//   const chartColor = trendColors[trend];
//   const trendValues = { up: "+25%", down: "-25%", neutral: "+5%" };

//   return (
//     <Card variant="outlined" sx={{ height: "100%", flexGrow: 1 }}>
//       <CardContent sx={{ p: 2 }}>
//         <Box sx={{ display: "flex", justifyContent: "space-between" }}>
//           <Typography component="h2" variant="subtitle2" gutterBottom>
//             {title}
//           </Typography>
//           <Box
//             sx={{
//               height: 40,
//               width: 40,
//               bgcolor: "pink",
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               borderRadius: "50%",
//               bgcolor: `${color}20`,
//               // border: `1px solid ${color}20`,
//             }}
//           >
//             {icon}
//           </Box>
//         </Box>
//         <Stack
//           direction="column"
//           sx={{ justifyContent: "space-between", flexGrow: "1", gap: 1 }}
//         >
//           <Stack sx={{ justifyContent: "space-between" }}>
//             <Stack
//               direction="row"
//               sx={{ justifyContent: "space-between", alignItems: "center" }}
//             >
//               <Typography variant="h4" component="p">
//                 {value}
//               </Typography>
//               {/* <Chip size="small" color={color} label={trendValues[trend]} /> */}
//               {/* <Chip>{</Chip> */}
//             </Stack>
//             <Typography variant="caption" sx={{ color: "text.secondary" }}>
//               {interval}
//             </Typography>
//           </Stack>
//           {/* <Box sx={{ width: "100%", height: 50 }}>
//             <SparkLineChart
//               color={chartColor}
//               data={data}
//               area
//               showHighlight
//               showTooltip
//               xAxis={{
//                 scaleType: "band",
//                 data: daysInWeek, // Use the correct property 'data' for xAxis
//               }}
//               sx={{
//                 [`& .${areaElementClasses.root}`]: {
//                   fill: `url(#area-gradient-${value})`,
//                 },
//               }}
//             >
//               <AreaGradient color={chartColor} id={`area-gradient-${value}`} />
//             </SparkLineChart>
//           </Box> */}
//         </Stack>
//       </CardContent>
//     </Card>
//   );
// }

// StatCard.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.number).isRequired,
//   interval: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   trend: PropTypes.oneOf(["down", "neutral", "up"]).isRequired,
//   value: PropTypes.string.isRequired,
//   color:PropTypes.string
// };

// export default StatCard;

const stats = [
  {
    title: "All Users",
    value: "12,345",
    icon: Group,
    color: "#1976d2", // blue
  },
  {
    title: "New Users",
    value: "1,234",
    icon: PersonAdd,
    color: "#2e7d32", // green
  },
  {
    title: "Sent",
    value: "9,876",
    icon: Send,
    color: "#9c27b0", // purple
  },
  {
    title: "Converted",
    value: "567",
    icon: TrendingUpOutlined,
    color: "#fb5607", // orange
  },
];

export default function TodayStatCard() {
  return (
    <Grid container spacing={2}>
      {stats.map((stat, index) => (
        <Grid size={{ xs: 6, xl: 3 }} key={index}>
          <GlassCard
            sx={{
              // height: { xs: 100, sm: 110, md: 70 },
              borderRadius: 2,
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              border: "1px solid #e0e0e0",
              transition: "all 0.3s ease-in-out",
              backgroundColor: "white",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: `0 8px 25px ${stat.color}25`,
                backgroundColor: `${stat.color}08`,
                borderColor: `${stat.color}30`,
              },
            }}
          >
            <CardContent
              sx={{
                px: { xs: 2, sm: 3 },
                py: 2,
                textAlign: "center",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  opacity: 0.7,
                  transition: "opacity 0.3s ease-in-out",
                  ".MuiCard-root:hover &": {
                    opacity: 1,
                  },
                }}
              >
                <stat.icon
                  sx={{ fontSize: 19, color: stat.color, fontWeight: "bold" }}
                />
              </Box>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "20px", sm: "20px" },
                  lineHeight: 1,
                  color: stat.color,
                  mb: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "text.primary",
                  fontSize: { xs: "13px", sm: "12px" },
                  // fontWeight: 600,
                  letterSpacing: "0.5px",
                }}
              >
                {stat.title}
              </Typography>
            </CardContent>
          </GlassCard>
        </Grid>
      ))}
    </Grid>
  );
}
