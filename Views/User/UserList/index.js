"use client";

import React from "react";
import {
  Box,
  Typography,
  MenuItem as SelectMenuItem,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Avatar,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  ContentCopy,
  Edit,
  LocationOn,
  MoreVert,
  MoreVert as MoreVertIcon,
  PersonOutline,
  Phone,
  RemoveRedEye,
} from "@mui/icons-material";
import { FaEdit, FaEye, FaTrashAlt, FaUser } from "react-icons/fa";
import UserDetails from "./userDetails";
import ServerSideGrid from "@/Components/ReUsable/gridfromscreenfacts";
import { fetchQALList } from "@/pages/api/sampleapies";
import ExplorerGrid from "@/Components/ReUsable/ExplorerPageGrid";
import { useRouter } from "next/router";

const rows = [
  {
    id: 1,
    nexora_id: "NX001",
    name: "John Doe",
    email: "john.doe@example.com",
    mobile: "+1-202-555-0101",
    location: "New York, USA",
    created_at: "2024-05-12T14:48:00.000Z",
    updated_at: "2025-06-01T09:20:00.000Z",
  },
  {
    id: 2,
    nexora_id: "NX002",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    mobile: "+1-202-555-0102",
    location: "Los Angeles, USA",
    created_at: "2024-06-03T10:30:00.000Z",
    updated_at: "2025-06-25T14:15:00.000Z",
  },
  {
    id: 3,
    nexora_id: "NX003",
    name: "Michael Scott",
    email: "michael.scott@dundermifflin.com",
    mobile: "+1-202-555-0103",
    location: "Scranton, USA",
    created_at: "2024-07-01T08:00:00.000Z",
    updated_at: "2025-06-29T12:45:00.000Z",
  },
  {
    id: 4,
    nexora_id: "NX004",
    name: "Pam Beesly",
    email: "pam.beesly@dundermifflin.com",
    mobile: "+1-202-555-0104",
    location: "Scranton, USA",
    created_at: "2024-08-14T12:00:00.000Z",
    updated_at: "2025-06-15T16:00:00.000Z",
  },
  {
    id: 5,
    nexora_id: "NX005",
    name: "Jim Halpert",
    email: "jim.halpert@dundermifflin.com",
    mobile: "+1-202-555-0105",
    location: "Stamford, USA",
    created_at: "2024-09-21T09:15:00.000Z",
    updated_at: "2025-06-10T11:35:00.000Z",
  },
  {
    id: 6,
    nexora_id: "NX006",
    name: "Dwight Schrute",
    email: "dwight.schrute@dundermifflin.com",
    mobile: "+1-202-555-0106",
    location: "Scranton, USA",
    created_at: "2024-10-02T11:30:00.000Z",
    updated_at: "2025-06-05T10:10:00.000Z",
  },
  {
    id: 7,
    nexora_id: "NX007",
    name: "Angela Martin",
    email: "angela.martin@dundermifflin.com",
    mobile: "+1-202-555-0107",
    location: "Scranton, USA",
    created_at: "2024-11-11T15:45:00.000Z",
    updated_at: "2025-06-28T13:55:00.000Z",
  },
  {
    id: 8,
    nexora_id: "NX008",
    name: "Oscar Martinez",
    email: "oscar.martinez@dundermifflin.com",
    mobile: "+1-202-555-0108",
    location: "Philadelphia, USA",
    created_at: "2024-12-20T17:00:00.000Z",
    updated_at: "2025-06-12T10:40:00.000Z",
  },
  {
    id: 9,
    nexora_id: "NX009",
    name: "Kevin Malone",
    email: "kevin.malone@dundermifflin.com",
    mobile: "+1-202-555-0109",
    location: "Scranton, USA",
    created_at: "2025-01-05T13:25:00.000Z",
    updated_at: "2025-06-30T08:30:00.000Z",
  },
  {
    id: 10,
    nexora_id: "NX010",
    name: "Stanley Hudson",
    email: "stanley.hudson@dundermifflin.com",
    mobile: "+1-202-555-0110",
    location: "Scranton, USA",
    created_at: "2025-02-18T07:50:00.000Z",
    updated_at: "2025-06-20T18:15:00.000Z",
  },
];

const UsersList = () => {
  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [hover, setHover] = React.useState(false);

  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const [dialogOpen, setDialogOpen] = React.useState(false);

  const handleCloseModal = () => {
    setDialogOpen(null);
  };
  const columns = [
    {
      field: "name",
      headerName: "Audiences",
      flex: 2,
      minWidth: 100,
      renderCell: renderAudienceCell,
    },
    {
      field: "nexora_id",
      headerName: "Nexora ID",
      flex: 1,
      minWidth: 80,
      renderCell: (params) => {
        const [hover, setHover] = React.useState(false);
        const [tooltipTitle, setTooltipTitle] =
          React.useState("Copy to clipboard");

        const value = params.value ?? "—";

        const handleCopy = async () => {
          try {
            await navigator.clipboard.writeText(value);
            setTooltipTitle("Copied!");

            setTimeout(() => {
              setTooltipTitle("Copy to clipboard");
            }, 1500);
          } catch (err) {
            console.error("Failed to copy:", err);
          }
        };

        return (
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => {
              setHover(false);
              setTooltipTitle("Copy to clipboard"); // Reset if hover out early
            }}
            style={{ display: "flex", alignItems: "center", gap: 6 }}
          >
            <span>{value}</span>
            {hover && (
              <Tooltip title={tooltipTitle} arrow>
                <ContentCopy
                  sx={{ fontSize: 14, color: "gray", cursor: "pointer" }}
                  onClick={handleCopy}
                />
              </Tooltip>
            )}
          </div>
        );
      },
    },

    {
      field: "mobile",
      headerName: "Contact",
      flex: 1.5,
      minWidth: 160,
      renderCell: (params) => {
        const mobile = params.row.mobile ?? "—";
        const location = params.row.location ?? "—";

        return (
          <Box
            sx={{
              height: "100%", // important for vertical alignment
              display: "flex",
              alignItems: "center", // vertical centering
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 0.5,
                whiteSpace: "normal",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <Phone sx={{ fontSize: 12, color: "#2E7D32" }} />
                <Typography variant="body2" sx={{ fontSize: "12px" }}>
                  {mobile}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <LocationOn sx={{ fontSize: 12, color: "red" }} />
                <Typography
                  sx={{ fontSize: "0.7rem", color: "text.secondary" }}
                >
                  {location}
                </Typography>
              </Box>
            </Box>
          </Box>
        );
      },
    },
    {
      field: "created_at",
      headerName: "Created At",
      flex: 1,
      minWidth: 80,

      renderCell: (params) => {
        const rawDate = params.value;
        const date = rawDate ? new Date(rawDate) : null;

        if (!date || isNaN(date.getTime())) {
          return "Invalid Date"; // Or return '-' or leave it empty
        }

        return date.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        });
      },
    },
    {
      field: "updated_at",
      headerName: "Updated At",
      flex: 1,
      minWidth: 80,

      renderCell: (params) => {
        const rawDate = params.value;
        const date = rawDate ? new Date(rawDate) : null;

        if (!date || isNaN(date.getTime())) {
          return "Invalid Date"; // Or return '-' or leave it empty
        }

        return date.toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        });
      },
    },
    {
      field: "Action",
      headerName: "Action",
      flex: 1,
      minWidth: 80,
      renderCell: (params) => {
        const rowData = params.value;
        return (
          <>
            <Tooltip title="Actions">
              <IconButton
                size="small"
                onClick={handleMenuClick}
                sx={{
                  p: 0.5,
                  ml: 1,
                  border: "none",
                  borderRadius: "50%",
                  "&:hover": { backgroundColor: "#F4F6F3" },
                  "&.Mui-focusVisible": { backgroundColor: "transparent" },
                }}
              >
                <MoreVert sx={{ fontSize: 18 }} />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem onClick={() => router.push("/user-profile")}>
                <ListItemIcon>
                  <FaEye style={{ color: "#1976D2", fontSize: 16 }} />
                </ListItemIcon>
                <ListItemText primary="View" />
              </MenuItem>

              <MenuItem onClick={() => console.log("Edit")}>
                <ListItemIcon>
                  <FaEdit style={{ color: "#0288D1", fontSize: 16 }} />
                </ListItemIcon>
                <ListItemText primary="Edit" />
              </MenuItem>

              <MenuItem onClick={() => console.log("Delete")}>
                <ListItemIcon>
                  <FaTrashAlt style={{ color: "#D32F2F", fontSize: 16 }} />
                </ListItemIcon>
                <ListItemText primary="Delete" />
              </MenuItem>
            </Menu>
          </>
        );
      },
    },
  ];
  return (
    <>
      <ExplorerGrid columns={columns} rows={rows} />
      <UserDetails
        open={Boolean(dialogOpen)}
        onClose={handleCloseModal}
        user={dialogOpen}
      />
    </>
  );
};

export default UsersList;

const renderAudienceCell = (params) => {
  const router = useRouter();
  const name = params.row.name ?? "—";
  const email = params.row.email ?? "—";

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [hover, setHover] = React.useState(false);

  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        pr: 1,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
        <Avatar
          sx={{
            bgcolor: "#E3F2FD",
            color: "#1565C0",
            width: 40,
            height: 40,
          }}
        >
          <PersonOutline sx={{ fontSize: 20 }} />
        </Avatar>
        <Stack spacing={0} sx={{ justifyContent: "center" }}>
          <Typography sx={{ fontSize: "0.75rem", fontWeight: 600 }}>
            {name}
          </Typography>
          <Typography sx={{ fontSize: "0.7rem", color: "text.secondary" }}>
            {email}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};
