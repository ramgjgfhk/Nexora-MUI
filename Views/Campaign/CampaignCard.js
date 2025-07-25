import {
  Box,
  Card,
  Typography,
  Grid,
  Avatar,
  useTheme,
} from "@mui/material";
import CampaignIcon from "@mui/icons-material/Campaign";
import EmailIcon from "@mui/icons-material/Email";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { GlassCard } from "../User/UserProfile/UserProfileComponents/ProfileCard";

const metrics = [
  {
    title: "Total Campaigns",
    value: "156",
    change: "+24 from last month",
    icon: <CampaignIcon />,
    bgColor: "#E6F0FF",
    iconColor: "#276EF1",
  },
  {
    title: "Open Rate",
    value: "43.2%",
    change: "+2.1% from last month",
    icon: <EmailIcon />,
    bgColor: "#DFFFE1",
    iconColor: "#00B84D",
  },
  {
    title: "Click Through Rate",
    value: "8.6%",
    change: "+0.8% from last month",
    icon: <TouchAppIcon />,
    bgColor: "#F0E6FF",
    iconColor: "#9A48F1",
  },
  {
    title: "Conversion Rate",
    value: "12.4%",
    change: "+1.2% from last month",
    icon: <ShoppingCartIcon />,
    bgColor: "#F4F4F4",
    iconColor: "#000",
  },
];

export default function CampaignCards() {
  const theme = useTheme();

  return (
    <Grid container spacing={2}>
      {metrics.map((item, index) => (
        <Grid size={{xs:12,sm:6,md:3}} key={index}>
          <GlassCard
            sx={{
              p: 3,
              borderRadius: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
            //   borderColor:'#ccc'
            }}
          >
            <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-evenly',p:1}}>
              <Typography variant="body2" color="text.secondary">
                {item.title}
              </Typography>
              <Typography variant="h4" fontWeight="bold">
                {item.value}
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "green", fontWeight: 500 }}
              >
                {item.change}
              </Typography>
            </Box>
            <Avatar
              sx={{
                bgcolor: item.bgColor,
                color: item.iconColor,
                width: 40,
                height: 40,
                borderRadius:2
              }}
            >
              {item.icon}
            </Avatar>
          </GlassCard>
        </Grid>
      ))}
    </Grid>
  );
}
