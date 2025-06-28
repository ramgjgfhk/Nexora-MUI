"use client";

import React from "react";
import {
  Box,
  Typography,
  MenuItem as SelectMenuItem,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { MoreVert as MoreVertIcon } from "@mui/icons-material";
import { FaEye } from "react-icons/fa";
import UserDetails from "./userDetails";

const mockData = [
  {
    id: "1",
    subId: "asdfasdfasdf",
    name: "Alexander Mitchell",
    email: "alexander@example.com",
    created_at: "June 11, 2025",
    updated_at: "June 11, 2025",
    location: "USA",
  },
  {
    id: "2",
    subId: "asdfasdfasdf",
    name: "Samantha Reynolds",
    email: "samantha@example.com",
    created_at: "June 10, 2025",
    updated_at: "June 11, 2025",
    location: "UN",
  },
  {
    id: "3",
    subId: "asdfasdfasdf",
    name: "Daniel Washington",
    email: "d.washington@example.com",
    created_at: "June 9, 2025",
    updated_at: "June 11, 2025",
    location: "India",
  },
  {
    id: "4",
    subId: "asdfasdfasdf",
    name: "Olivia Hernandez",
    email: "olivia@example.com",
    created_at: "June 8, 2025",
    updated_at: "June 11, 2025",
    location: "Pakistan",
  },
  {
    id: "5",
    subId: "asdfasdfasdf",
    name: "James Richardson",
    email: "j.richardson@example.com",
    created_at: "June 7, 2025",
    updated_at: "June 11, 2025",
    location: "China",
  },
];

const UsersList = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [dialogOpen, setDialogOpen] = React.useState(true);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseModal = () => {
    setDialogOpen(null);
  };

  const userInitial = (userName) => {
    const initial = userName
      .split(" ")
      .map((n) => n[0])
      .join("");

    return initial;
  };
  return (
    <>
      <div>UsersList</div>
      <TableContainer sx={{ border: "1px solid #ccc", borderRadius: "5px" }}>
        <Table size="small">
          <TableHead sx={{ bgcolor: "#F4F6FA" }}>
            <TableRow>
              <TableCell sx={{ fontSize: "12px" }}>Subscriber</TableCell>
              <TableCell sx={{ fontSize: "12px" }}>Email</TableCell>
              <TableCell sx={{ fontSize: "12px" }}>Location</TableCell>
              <TableCell sx={{ fontSize: "12px" }}>Created at</TableCell>
              <TableCell sx={{ fontSize: "12px" }}>Updated at</TableCell>
              <TableCell sx={{ fontSize: "12px" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockData?.map((user, index) => (
              <TableRow className="tableRowStyle" key={index}>
                <TableCell className="tableCellStyle">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: "40px",
                        height: "40px",
                        bgcolor: "#F4F6FA",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: 15,
                      }}
                    >
                      <Typography
                        variant="h6"
                        fontSize={15}
                        color="#79C0F6"
                        sx={{ fontFamily: "Inter,system-ui,sans-serif" }}
                      >
                        {userInitial(user.name)}
                      </Typography>
                    </Box>
                    <Box sx={{ ml: 2 }}>
                      <Typography
                        variant="h5"
                        sx={{ fontSize: 11, color: "#4B5058" }}
                      >
                        {user.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#9197A1", fontSize: 9 }}
                      >
                        {user.subId}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell className="tableCellStyle">{user.email}</TableCell>
                <TableCell className="tableCellStyle">
                  {user.location}
                </TableCell>
                <TableCell className="tableCellStyle">
                  {user.created_at}
                </TableCell>
                <TableCell className="tableCellStyle">
                  {user.updated_at}
                </TableCell>
                <TableCell className="tableCellStyle">
                  <IconButton
                    aria-label="more"
                    aria-controls={open ? "menu" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                    size="small"
                  >
                    <MoreVertIcon fontSize="small" />
                  </IconButton>

                  <Menu
                    id="menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                  >
                    <MenuItem onClick={handleClose}>Edit</MenuItem>
                    <MenuItem onClick={handleClose}>Delete</MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleClose(), setDialogOpen(true);
                      }}
                    >
                      View Details
                    </MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <UserDetails
        open={Boolean(dialogOpen)}
        onClose={handleCloseModal}
        user={dialogOpen}
      />
    </>
  );
};

export default UsersList;
