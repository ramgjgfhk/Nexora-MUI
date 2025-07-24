import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { BarChart } from "@mui/x-charts/BarChart";
import { useTheme } from "@mui/material/styles";
import { GlassCard } from "../User/UserProfile/UserProfileComponents/ProfileCard";
import { Box, Grid } from "@mui/material";
import SplitButton from "@/Components/resuable components/splitButton";
import { campaignData } from "./internals/data/userActivityData";

const options = ["Years", "Months", "Days", "Hours", "Minutes"];
export default function PageViewsBarChart() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [data, setData] = React.useState({
    total: [],
    viewed: [],
    converted: [],
  });
  const theme = useTheme();
  const colorPalette = [
    (theme.vars || theme).palette.primary.light,
    (theme.vars || theme).palette.primary.main,
    // (theme.vars || theme).palette.primary.dark,
  ];

  React.useEffect(() => {
    const mapKey = ["years", "months", "days", "hours", "minutes"][
      selectedIndex
    ];
    const totalData = campaignData?.[mapKey].map((item) => item.total);
    const viewedData = campaignData?.[mapKey].map((item) => item.viewed);
    const convertedData = campaignData?.[mapKey].map((item) => item.converted);
    setData({ total: totalData, viewed: viewedData, converted: convertedData });
  }, [selectedIndex]);

  return (
    <GlassCard variant="outlined" sx={{ width: "100%" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          User Engagement
        </Typography>

        <Grid container>
          <Grid size={{ xs: 12, md: 6 }}></Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <SplitButton
                options={options}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
              />
            </Box>
          </Grid>
        </Grid>
        <BarChart
          borderRadius={8}
          colors={colorPalette}
          xAxis={[
            {
              scaleType: "band",
              categoryGapRatio: 0.5,
              data: Array.from({ length: 10 }, (_, i) => i + 1),
              height: 24,
            },
          ]}
          yAxis={[{ width: 50 }]}
          series={[
            { id: "sent", label: "Sent", data: data.total, stack: "A" },
            { id: "viewed", label: "Viewed", data: data.viewed, stack: "A" },
            // {
            //   id: "converted",
            //   label: "Converted",
            //   data: data.converted,
            //   stack: "A",
            // },
          ]}
          height={250}
          margin={{ left: 0, right: 0, top: 20, bottom: 0 }}
          grid={{ horizontal: true }}
          hideLegend
        />
      </CardContent>
    </GlassCard>
  );
}
