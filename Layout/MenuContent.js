import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import { menuItems } from "@/Components/Variables/sideMenus";
import {
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import { Collapse, Typography } from "@mui/material";

export default function MenuContent(props) {
  const { openItems, handleNavigation, handleToggle, selectedPath } = props;

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
            // pl: `${paddingLeft}px`,
            maxHeight: 38,
            opacity: level > 0 ? 0.8 : 1,
            borderRadius: "8px",
            color: "#fff",
            // Move selected styling into `.Mui-selected`
            "&.Mui-selected": {
              bgcolor: "#fff",
              color: "#000",
              "&:hover": {
                bgcolor: "#E0EEF5", // optional: keep same on hover
              },
            },

            "&:hover": {
              bgcolor: "#5C7599",
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 25 }}>
            {/* {item.icon && React.cloneElement(item.icon, {
              sx: {
                color: isSelected ? "#000" : "#fff",
                fontSize: 15,
              },
            })} */}
            {level === 0
              ? React.cloneElement(item.icon, {
                  sx: {
                    color: isSelected ? "#000" : "#fff",
                    fontSize: 15,
                  },
                })
              : null}
          </ListItemIcon>

          <ListItemText
            primary={
              <Typography
                variant="subtitle2"
                // sx={{ fontWeight: isSelected ? 800 : 400 }}
              >
                {item.title}
              </Typography>
            }

            
          />

          {hasChildren &&
            (isOpen ? (
              <ExpandLess sx={{ color: "#A3A3A3", fontSize: 15 }} />
            ) : (
              <ExpandMore sx={{ color: "#A3A3A3", fontSize: 15 }} />
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
