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
    },
    {
      title: "Influencer Partnership",
      type: "Social",
      status: "Active",
      statusColor: "#D1FAE5",
      icon: <InstagramIcon sx={{ color: "#10B981" }} />,
      subText: "Running",
    },
    {
      title: "Flash Sale Notification",
      type: "Push",
      status: "Draft",
      statusColor: "#E5E7EB",
      icon: <NotificationsActiveIcon sx={{ color: "#D946EF" }} />,
      subText: "Draft",
    },
    {
      title: "Abandoned Cart Recovery",
      type: "Email",
      status: "Active",
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
    <GlassCard sx={{width:'100%'}}>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Recent Campaigns
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#3B82F6", cursor: "pointer", fontWeight: 500 }}
          >
            View All
          </Typography>
        </Box>

        <Stack spacing={2}>
          {campaigns.map((item, index) => (
            <Box
              key={index}
              sx={{
                p: 2,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                transition: "box-shadow 0.3s ease",
                "&:hover": {
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Soft shadow on hover
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
                    mr: 2,
                  }}
                >
                  {item.icon}
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 600 }}>{item.title}</Typography>
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
                    border:'none',
                    bgcolor: item.statusColor,
                    color: "#111827",
                    fontWeight: 500,
                    mr: 1,
                    borderRadius: "8px", // Rectangle with slight rounding
                    height: 24, // Optional: control height for rectangle
                    p: 2, // Optional: padding for better text fit
                  }}
                />

                <IconButton onClick={(e) => handleMenuOpen(e, index)} sx={{border:'none'}} size="small">
                  <MoreVertIcon />
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
