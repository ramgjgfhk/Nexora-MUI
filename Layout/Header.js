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
import Grid from "@mui/material/Grid";
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import Logo from "./Logo";
import BreadcrumbNav from "./Breadcrumbs";

export default function Header(props) {
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
        elevation={0}
        sx={{
          borderRadius: "8px",
          height: "65px",
          bgcolor: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // boxShadow: "0 4px 20px rgba(0,0,0,0.1)", // extra depth
          // px: 2,
          // border: "1px solid",
          // borderColor: "divider",
          width: "100%",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Search */}
          <Box sx={{ width: "100%" }}>
            <Grid container spacing={2}>
              <Grid
                size={{ md: 2.5, lg: 1 }}
                sx={{
                  margin: "auto 0",
                }}
              >
                <Logo />
              </Grid>
              <Grid
                size={{ md: 9.5, lg: 11 }}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <BreadcrumbNav {...props} />
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box sx={{ display: "flex", flex: 1 }}>
                    <Box
                      sx={{
                        position: "relative",
                        maxWidth: 400,
                        width: "100%",
                      }}
                    >
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
                  <IconButton
                    onClick={handleAvatarClick}
                    size="small"
                    sx={{ border: "none" }}
                  >
                    <Avatar
                      alt="Riley Carter"
                      src="/user1.jpg"
                      sx={{ width: 30, height: 30 }} // Adjust the size here
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
              </Grid>
              {/* <Grid item xs={3} size={{}}>
              <Logo />
            </Grid>
            <Grid item xs={9}></Grid> */}
            </Grid>
          </Box>
          {/* <Box >
          </Box> */}

          {/* Right Icons */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
