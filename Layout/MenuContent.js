import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import { menuItems } from "@/Components/Variables/sideMenus";
import { useTheme } from "@emotion/react";
import { ChevronRight, ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, Typography } from "@mui/material";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/router";

export default function MenuContent() {
  const router = useRouter();
  const [openItems, setOpenItems] = React.useState({});
  const [selectedPath, setSelectedPath] = React.useState("");
  const theme = useTheme();

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
              bgcolor: "#C2E0FF",
              "&:hover": {
                bgcolor: "#E0EEF5", // optional: keep same on hover
              },
            },

            "&:hover": {
              bgcolor: "#E0EEF5",
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 30 }}>
            {level === 0 ? (
              React.cloneElement(item.icon, {
                sx: {
                  color: isSelected ? "#1E1E2F" : "black",
                  fontSize: 18,
                },
              })
            ) : (
              <ChevronRight
                sx={{
                  fontSize: 16,
                  color: isSelected ? "#1E1E2F" : "black",
                }}
              />
            )}
          </ListItemIcon>

          <ListItemText
            primary={
              <Typography
                variant="body1"
                sx={{
                  fontSize: level === 0 ? "0.9rem" : "0.875rem",
                  // fontWeight: level === 0 ? 800 : 600,
                  fontFamily: "inherit", // ✅ your custom font
                  color: isSelected ? "#1E1E2F" : "black",
                }}
              >
                {item.title}
              </Typography>
            }
          />

          {hasChildren &&
            (isOpen ? (
              <ExpandLess sx={{ color: isSelected ? "#FFFFFF" : "black" }} />
            ) : (
              <ExpandMore sx={{ color: isSelected ? "#FFFFFF" : "black" }} />
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

  return (
    <Stack>
      <List sx={{ pt: 2, px: 1 }}>
        {menuItems.map((item) => renderMenuItem(item))}
      </List>
    </Stack>
  );
}
