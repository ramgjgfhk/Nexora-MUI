import { Call, Edit, Message, Star, Verified } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { customerData } from "../User/UserProfile/UserProfileComponents/userProfileVariable";
import { GlassCard } from "../User/UserProfile/UserProfileComponents/ProfileCard";
import Image from "next/image";

const UserHeader = () => {
  const [activeAction, setActiveAction] = React.useState("");

  const handleAction = (action) => {
    setActiveAction(action);
    setTimeout(() => setActiveAction(""), 2000);
  };
  return (
    <GlassCard
      sx={{
        mb: 1,
        borderRadius: 1,
        minHeight: "100px",
        overflow: "hidden",
      }}
    >
      <CardContent
        sx={{
          p: 1.5,
          py: 1,
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid container sx={{ width: "100%" }}>
          <Grid size={{ xs: 12, md: 10 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                flexWrap: "nowrap",
                width: "100%",
                overflow: "hidden",
              }}
            >
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
                        fontSize: 18,
                      }}
                    />
                  ) : null
                }
              >
                <Avatar
                  sx={{
                    width: 70,
                    height: 70,
                    bgcolor: "primary.main",
                    fontSize: "2rem",
                    fontWeight: "bold",
                    flexShrink: 0,
                  }}
                >
                  <Image src="/user1.jpg" width={100} height={100} />
                  {/* {customerData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")} */}
                </Avatar>
              </Badge>

              <Box sx={{ flex: 1, minWidth: 0, overflow: "hidden" }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    fontSize: "0.95rem",
                    // mb: 0.5,
                  }}
                >
                  {customerData.name}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    fontSize: "0.75rem",
                  }}
                >
                  Customer ID: {customerData.customerId}
                </Typography>

                <Box sx={{ display: "flex", gap: 1, mt: 0.5 }}>
                  <Chip
                    label={customerData.customerType}
                    size="small"
                    icon={<Star fontSize="small" />}
                    sx={{
                      px: 1,
                      fontSize: "0.7rem",
                      height: "24px",
                      maxWidth: "90px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      color: "green",
                    }}
                  />
                  <Chip
                    label={customerData.status}
                    size="small"
                    sx={{ fontSize: "0.7rem", height: "24px" }}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            size={{ xs: 12, md: 2 }}
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", gap: 1 }}>
              <Tooltip title="Send Message">
                <IconButton
                  color="primary"
                  size="small"
                  onClick={() => handleAction("message")}
                  sx={{
                    bgcolor: "#EAECEA",
                    border: "none",
                    color: "primary.dark",
                  }}
                >
                  <Message />
                </IconButton>
              </Tooltip>
              <Tooltip title="Call Customer">
                <IconButton
                  color="success"
                  size="small"
                  onClick={() => handleAction("call")}
                  sx={{
                    bgcolor: "#EAECEA",
                    border: "none",
                    color: "green",
                  }}
                >
                  <Call />
                </IconButton>
              </Tooltip>
              <Tooltip title="Edit Customer">
                <IconButton
                  size="small"
                  color="warning"
                  onClick={() => handleAction("edit")}
                  sx={{
                    bgcolor: "#EAECEA",
                    border: "none",
                    color: "orange",
                  }}
                >
                  <Edit />
                </IconButton>
              </Tooltip>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </GlassCard>
  );
};

export default UserHeader;
