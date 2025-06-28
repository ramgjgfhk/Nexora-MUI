import React from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Chip,
  Grid,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";

const ActiveThemeColor = "primary";

const UserList = () => {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = React.useState("");

  const users = [
    {
      id: 1,
      name: "John Doe",
      role: "Admin",
      email: "john@example.com",
      status: "Active",
      lastAccessed: "Sep 01, 2022, 00:00 AM",
      passcode: "Inactive",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Admin",
      email: "jane@example.com",
      status: "Active",
      lastAccessed: "Aug 23, 2023, 03:28 PM",
      passcode: "Inactive",
    },
    {
      id: 3,
      name: "Alice Johnson",
      role: "Admin",
      email: "alice@example.com",
      status: "Active",
      lastAccessed: "Sep 01, 2022, 00:00 AM",
      passcode: "Inactive",
    },
    {
      id: 4,
      name: "Bob Thomas",
      role: "Admin",
      email: "bob@example.com",
      status: "Active",
      lastAccessed: "Jun 28, 2023, 02:04 AM",
      passcode: "Inactive",
    },
    {
      id: 5,
      name: "Charlie Brown",
      role: "Admin",
      email: "charlie@example.com",
      status: "Invited",
      lastAccessed: "Never Logged In",
      passcode: "Inactive",
    },
    {
      id: 6,
      name: "Eve Watson",
      role: "Admin",
      email: "eve@example.com",
      status: "Active",
      lastAccessed: "Aug 24, 2023, 01:36 PM",
      passcode: "Inactive",
    },
    {
      id: 7,
      name: "Mike Lee",
      role: "Admin",
      email: "mike@example.com",
      status: "Active",
      lastAccessed: "Sep 01, 2022, 00:00 AM",
      passcode: "Inactive",
    },
  ];

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.id.toString().includes(searchTerm)
  );

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "role", headerName: "Role", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={params.value === "Active" ? ActiveThemeColor : "default"}
          size="small"
        />
      ),
    },
    { field: "lastAccessed", headerName: "Last Accessed", flex: 1 },
    { field: "passcode", headerName: "Passcode Status", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      width: 100,
      sortable: false,
      renderCell: (params) => (
        <Tooltip title="View" placement="bottom">
          <IconButton onClick={() => router.push("/admin/customer-detail")}>
            <VisibilityIcon />
          </IconButton>
        </Tooltip>
      ),
    },
  ];

  return (
    <div
      style={{
        fontFamily: "Inter, system-ui, sans-serif",
        fontSize: "13px",
        color: "#1f2937",
      }}
    >
      {/* Grid container was missing */}
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={6}
          md={2}
          sx={{ textAlign: "right", ml: "auto" }}
        >
          <Button
            variant="contained"
            color={ActiveThemeColor}
            startIcon={<AddIcon />}
          >
            User
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Showing {filteredUsers.length} of {users.length} Users
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ height: 500, width: "100%" }}>
            <DataGrid
              rows={filteredUsers}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5, 10]}
              checkboxSelection
              disableRowSelectionOnClick
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default UserList;
