import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import MenuContent from "./MenuContent";
const drawerWidth = 300;

export default function SideMenu(props) {
  return (
    <Box
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        bgcolor: "#FCFCFC",
        height: "100%",
        display: { xs: "none", md: "block" },
      }}
    >
      <Divider />
      <Box
        sx={{
          overflow: "auto",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <MenuContent {...props} />
      </Box>
    </Box>
  );
}
