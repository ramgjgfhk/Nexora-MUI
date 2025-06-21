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

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      color="default"
      elevation={1}
      sx={{ borderBottom: "1px solid", borderColor: "divider" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Search */}
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
                pl: 4,
                width: "100%",
                bgcolor: "background.paper",
                borderRadius: 1,
                border: "1px solid",
                borderColor: "divider",
                height: 40,
              }}
            />
          </Box>
        </Box>

        {/* Right Icons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton>
            <Badge badgeContent={3} color="primary">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          {/* Avatar with Menu */}
          <IconButton onClick={handleAvatarClick} size="small">
            <Avatar alt="Riley Carter" src="/placeholder.svg" />
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
  );
}
