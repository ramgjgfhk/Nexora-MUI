import * as React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Box,
  Typography,
} from "@mui/material";
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import Logo from "./Logo";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ p: 1, zIndex: 2 }}>
      <AppBar
        position="static"
        elevation={4}
        sx={{
          borderRadius: "8px",
          height: "65px",
          bgcolor: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)", // extra depth
          px: 2,
          border: "1px solid",
          borderColor: "divider",
          width: "100%",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Search */}
          <Box>
            <Logo />
          </Box>

          {/* Right Icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box sx={{ display: "flex", flex: 1 }}>
              <Box sx={{ position: "relative", maxWidth: 400, width: "100%" }}>
                <SearchIcon
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: 10,
                    transform: "translateY(-50%)",
                    color: "text.secondary",
                    fontSize: 20,
                  }}
                />
                <InputBase
                  placeholder="Search…"
                  sx={{
                    pl: 2,
                    width: "100%",
                    bgcolor: "background.paper",
                    borderRadius: 1,
                    border: "1px solid",
                    borderColor: "divider",
                    height: 30,
                  }}
                />
              </Box>
            </Box>
            <IconButton sx={{ border: "none" }}>
              <Badge variant="dot" color="primary">
                <NotificationsIcon fontSize="small" />
              </Badge>
            </IconButton>

            {/* Avatar with Menu */}
            <IconButton
              onClick={handleAvatarClick}
              size="small"
              sx={{ border: "none" }}
            >
              <Avatar
                alt="Riley Carter"
                src="/placeholder.svg"
                sx={{ width: 24, height: 24 }} // Adjust the size here
              />
            </IconButton>

            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <Box px={2} py={1}>
                <Typography fontWeight="medium">Riley Carter</Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ maxWidth: 200 }}
                  noWrap
                >
                  riley@email.com
                </Typography>
              </Box>
              <MenuItem onClick={handleCloseMenu}>
                <PersonIcon fontSize="small" sx={{ mr: 1 }} />
                Profile
              </MenuItem>
              <MenuItem onClick={handleCloseMenu}>
                <SettingsIcon fontSize="small" sx={{ mr: 1 }} />
                Settings
              </MenuItem>
              <MenuItem onClick={handleCloseMenu}>
                <LogoutIcon fontSize="small" sx={{ mr: 1 }} />
                Log out
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
