import React from "react";
import { PremiumAvatar, ProfileCard } from "./ProfileCard";
import {
  Badge,
  Box,
  CardContent,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { Edit, Email, MoreVert, Share, Verified } from "@mui/icons-material";
import { customerData } from "./userProfileVariable";

const UserProfileHeader = () => {
  return (
    <ProfileCard sx={{ mb: 4, overflow: "visible" }}>
      <CardContent sx={{ p: 1 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 3,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              badgeContent={
                customerData.verified ? (
                  <Verified
                    sx={{
                      color: "success.main",
                      bgcolor: "white",
                      borderRadius: "50%",
                      fontSize: 24,
                    }}
                  />
                ) : null
              }
            >
              <PremiumAvatar>
                {customerData.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </PremiumAvatar>
            </Badge>
            <Box>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  background: `linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)`,
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 1,
                }}
              >
                {customerData.name}
              </Typography>
              <Stack direction="row" spacing={2} alignItems="center">
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <Email sx={{ fontSize: 18, color: "primary.main" }} />
                  <Typography variant="body1" color="text.secondary">
                    {customerData.email}
                  </Typography>
                </Box>
              </Stack>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Customer ID: {customerData.customerId}
              </Typography>
            </Box>
          </Box>

          <Stack direction="row" spacing={1}>
            <Tooltip title="Edit Profile">
              <IconButton
                sx={{
                  bgcolor: "primary.main",
                  color: "white",
                  borderRadius: "50%",
                  "&:hover": { bgcolor: "primary.dark" },
                }}
              >
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip title="Share Profile">
              <IconButton
                sx={{
                  bgcolor: "success.main",
                  borderRadius: "50%",
                  color: "white",
                  "&:hover": { bgcolor: "success.dark" },
                }}
              >
                <Share />
              </IconButton>
            </Tooltip>
            <Tooltip title="More Options">
              <IconButton
                sx={{
                  bgcolor: "text.secondary",
                  borderRadius: "50%",
                  color: "white",
                  "&:hover": { bgcolor: "text.primary" },
                }}
              >
                <MoreVert />
              </IconButton>
            </Tooltip>
          </Stack>
        </Box>
      </CardContent>
    </ProfileCard>
  );
};

export default UserProfileHeader;
