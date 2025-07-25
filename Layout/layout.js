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
import { getCookie, setCookie } from "cookies-next";
import { menuItems } from "@/Components/Variables/sideMenus";
import { useRouter } from "next/router";
import ReactQueryProvider from "@/Components/TanstackSetup/Context/QueryClientProvider";

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

export default function MainLayout({ children, props }) {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const router = useRouter();

  const [openItems, setOpenItems] = React.useState({});
  const [selectedPath, setSelectedPath] = React.useState(router.pathname);

  const handleToggle = (itemId) => {
    setOpenItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const handleNavigation = (path) => {
    setCookie("currentPath", path);
    setSelectedPath(path);
    router.push(path);
  };

  React.useEffect(() => {
    const currentPath = getCookie("currentPath") || "/dashboard";
    setSelectedPath(currentPath);

    const expandedItems = {};

    const findAndExpandParents = (items, parentId = null) => {
      for (const item of items) {
        if (item.path === currentPath) {
          if (parentId) expandedItems[parentId] = true;
        }
        if (item.children) {
          findAndExpandParents(item.children, item.id);
        }
      }
    };

    findAndExpandParents(menuItems);
    setOpenItems(expandedItems);
  }, []);

  React.useEffect(() => {
    setSelectedPath(router.pathname);
  }, [router.pathname]);

  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <ReactQueryProvider>
        {/* Main Wrapper */}
        <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
          {/* Navbar Always on Top */}
          <Box sx={{ zIndex: 2 }}>
            {isMdUp ? (
              <Header selectedPath={selectedPath} />
            ) : (
              <MobileHeader
                openItems={openItems}
                setOpenItems={setOpenItems}
                handleToggle={handleToggle}
                handleNavigation={handleNavigation}
                selectedPath={router.pathname}
              />
            )}
          </Box>

          {/* Below Navbar - Sidebar + Main Content */}
          <Box sx={{ display: "flex", flexGrow: 1, minHeight: 0 }}>
            {/* Sidebar */}
            <Box
              sx={{
                height: "100%",
                p: 1,
                zIndex: 1,
              }}
            >
              <Box
                sx={{
                  bgcolor: "#fff",
                  height: "100%",
                  borderRadius: "8px",
                  boxShadow: "10px 0 20px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <SideMenu
                  openItems={openItems}
                  setOpenItems={setOpenItems}
                  handleNavigation={handleNavigation}
                  handleToggle={handleToggle}
                  selectedPath={selectedPath}
                />
              </Box>
            </Box>

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
      </ReactQueryProvider>
    </AppTheme>
  );
}
