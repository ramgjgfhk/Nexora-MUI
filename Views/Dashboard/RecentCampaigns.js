import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  Stack,
  Chip,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { GlassCard } from "../User/UserProfile/UserProfileComponents/ProfileCard";

export default function RecentCampaigns() {
  const campaigns = [
    {
      title: "Summer Collection Launch",
      type: "Email",
      status: "Scheduled",
      statusColor: "#FEF9C3",
      icon: <MailIcon sx={{ color: "#3B82F6" }} />,
      subText: "Scheduled for June 15",
      color: "#57b5e7",
    },
    {
      title: "Influencer Partnership",
      type: "Social",
      status: "Active",
      color: "#21FF51",
      statusColor: "#D1FAE5",
      icon: <InstagramIcon sx={{ color: "#10B981" }} />,
      subText: "Running",
    },
    {
      title: "Flash Sale Notification",
      type: "Push",
      status: "Draft",
      statusColor: "#E5E7EB",
      icon: <NotificationsActiveIcon sx={{ color: "#2BB6AA" }} />,
      subText: "Draft",
      color: "#fbbf24",
    },
    {
      title: "Abandoned Cart Recovery",
      type: "Email",
      status: "Active",
      color: "#21FF51",
      statusColor: "#D1FAE5",
      icon: <MailIcon sx={{ color: "#F87171" }} />,
      subText: "Running",
    },
    {
      title: "Flash Sale Notification",
      type: "Push",
      status: "Draft",
      statusColor: "#E5E7EB",
      icon: <NotificationsActiveIcon sx={{ color: "#2BB6AA" }} />,
      subText: "Draft",
      color: "#fbbf24",
    },
    {
      title: "Abandoned Cart Recovery",
      type: "Email",
      status: "Active",
      color: "#21FF51",
      statusColor: "#D1FAE5",
      icon: <MailIcon sx={{ color: "#F87171" }} />,
      subText: "Running",
    },
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const [menuIndex, setMenuIndex] = useState(null);

  const handleMenuOpen = (event, index) => {
    setAnchorEl(event.currentTarget);
    setMenuIndex(index);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuIndex(null);
  };

  return (
    <GlassCard sx={{ width: "100%" }}>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography variant="h6">Recent Campaigns</Typography>
          <Typography
            variant="body2"
            sx={{ color: "#3B82F6", cursor: "pointer", fontWeight: 500 }}
          >
            View All
          </Typography>
        </Box>

        <Stack>
          {campaigns.map((item, index) => (
            <Box
              key={index}
              sx={{
                py: 1,
                px: 2,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                border: "1px solid transparent", // Keep fixed space for border
                transition: "border-color 0.3s ease",
                "&:hover": {
                  borderColor: "#ccc", // Only color changes, no layout shift
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    // bgcolor: item.statusColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 1,
                  }}
                >
                  {item.icon}
                </Box>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: "#000" }}>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary" }}
                  >
                    {item.type} • {item.subText}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Chip
                  label={item.status}
                  size="medium"
                  sx={{
                    border: "none",
                    backgroundColor: `${item.color}29`, // 3% opacity
                    color: item.color,
                    borderRadius: "8px", // Rectangle with slight rounding
                    height: 24, // Optional: control height for rectangle
                    p: 1, // Optional: padding for better text fit
                  }}
                />

                <IconButton
                  onClick={(e) => handleMenuOpen(e, index)}
                  size="small"
                  disableRipple // optional: removes ripple effect too
                  sx={{
                    border: "none",
                    backgroundColor: "transparent",
                    "&:hover": {
                      backgroundColor: "transparent", // ✨ important line
                    },
                  }}
                >
                  <MoreVertIcon
                    sx={{
                      fontSize: 16, // fontSize 9 is very small
                      color: "inherit",
                    }}
                  />
                </IconButton>
              </Box>
            </Box>
          ))}
        </Stack>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>
            <VisibilityIcon sx={{ fontSize: 18, mr: 1 }} />
            View
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleMenuClose}>
            <DeleteIcon sx={{ fontSize: 18, mr: 1 }} />
            Delete
          </MenuItem>
        </Menu>
      </CardContent>
    </GlassCard>
  );
}
