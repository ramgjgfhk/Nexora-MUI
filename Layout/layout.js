import * as React from "react";

import { alpha, useTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AppTheme from "../shared-theme/AppTheme";
import MobileHeader from "./MobileHeader";
import SideMenu from "./SideMenu";
import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from "@/shared-theme/theme";
import { useMediaQuery } from "@mui/material";
import Header from "./Header";

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

export default function MainLayout({ children, props }) {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />

      {/* Main Wrapper */}
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        
        {/* Navbar Always on Top */}
        <Box sx={{ zIndex: 2 }}>
          {isMdUp ? <Header /> : <MobileHeader />}
        </Box>

        {/* Below Navbar - Sidebar + Main Content */}
        <Box sx={{ display: "flex", flexGrow: 1, minHeight: 0 }}>
          
          {/* Sidebar */}
          <SideMenu
            sx={{
              width: 240,
              flexShrink: 0,
              height: "100%",
              position: "relative", // Prevent fixed overlay
              zIndex: 1,
            }}
          />

          {/* Main Content */}
          <Box
            component="main"
            sx={(theme) => ({
              flexGrow: 1,
              overflow: "auto",
              backgroundColor: theme.vars
                ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
                : alpha(theme.palette.background.default, 1),
              p: 2,
            })}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </AppTheme>
  );
}

