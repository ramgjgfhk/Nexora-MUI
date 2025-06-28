import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import { menuItems } from "@/Components/Variables/sideMenus";
import { ChevronRight, ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, Typography } from "@mui/material";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/router";

export default function MenuContent(props) {

  const {openItems,setOpenItems,handleNavigation,handleToggle,selectedPath} = props
  console.log('op',openItems)
  const router = useRouter();


  const renderMenuItem = (item, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isOpen = openItems[item.id];
    const isSelected = selectedPath === item.path;
    const paddingLeft = 16 + level * 20;

    return (
      <React.Fragment key={item.id}>
        <ListItemButton
          selected={isSelected}
          onClick={() => {
            if (hasChildren) {
              handleToggle(item.id);
            } else if (item.path) {
              handleNavigation(item.path);
            }
          }}
          sx={{
            pl: `${paddingLeft}px`,
            maxHeight: 38,
            opacity: level > 0 ? 0.8 : 1,
            borderRadius: "8px",

            // Move selected styling into `.Mui-selected`
            "&.Mui-selected": {
              bgcolor: "#EBF5FF",
              "&:hover": {
                bgcolor: "#E0EEF5", // optional: keep same on hover
              },
            },

            "&:hover": {
              bgcolor: "#EBF5FF",
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 30 }}>
            {level === 0 ? (
              React.cloneElement(item.icon, {
                sx: {
                  color: "black",
                  fontSize: 18,
                },
              })
            ) : (
              <ChevronRight
                sx={{
                  fontSize: 15,
                  color: "black",
                }}
              />
            )}
          </ListItemIcon>

          <ListItemText
            primary={
              <Typography
                variant="body1"
                sx={{
                  fontSize:  "0.9rem",
                  // fontWeight: level === 0 ? 800 : 600,
                  fontFamily: "inherit", // ✅ your custom font
                  color: "black",
                }}
              >
                {item.title}
              </Typography>
            }
          />

          {hasChildren &&
            (isOpen ? (
              <ExpandLess sx={{ color: "#A3A3A3", fontSize:20, }} />
            ) : (
              <ExpandMore sx={{ color: "#A3A3A3", fontSize:20, }} />
            ))}
        </ListItemButton>

        {hasChildren && (
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.children.map((child) => renderMenuItem(child, level + 1))}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    );
  };


  return (
    <Stack>
      <List sx={{ pt: 2, px: 1 }}>
        {menuItems.map((item) => renderMenuItem(item))}
      </List>
    </Stack>
  );
}
