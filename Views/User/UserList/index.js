import React from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Tooltip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import ServerSideGrid from "@/Components/ReUsable/gridfromscreenfacts";
import { fetchQALList } from "@/pages/api/sampleapies";
import { FaEye } from "react-icons/fa";

const ActiveThemeColor = "primary";

const UserList = () => {
  const router = useRouter();

  const [searchFocused, setSearchFocused] = React.useState(false);

  const userColumns = [
    { field: "id", headerName: "ID", flex: 1, headerAlign: "center" },
    { field: "name", headerName: "Name", flex: 3, headerAlign: "center" },
    { field: "role", headerName: "Role", flex: 2, headerAlign: "center" },
    { field: "email", headerName: "Email", flex: 3, headerAlign: "center" },
    { field: "status", headerName: "Status", flex: 2, headerAlign: "center" },
    {
      field: "lastAccessed",
      headerName: "Last Accessed",
      flex: 4,
      headerAlign: "center",
    },
    {
      field: "passcodeStatus",
      headerName: "Passcode Status",
      flex: 2,
      headerAlign: "center",
    },
    {
      field: "action",
      headerName: "Action",
      flex: 2,
      headerAlign: "center",
      textAlign: "start",
      cellClassName: "sticky-action-column",
      headerClassName: "sticky-action-header",
      renderCell: (params) => {
        const row = params.row;
        return (
          <Tooltip title="View">
            <FaEye
              size={15}
              style={{ cursor: "pointer" }}
              onClick={() => router.push("/userProfile")}
            />
          </Tooltip>
        );
      },
    },
  ];
  return (
    <Box sx={{ fontFamily: "Roboto, sans-serif" }}>
      <Grid container spacing={2} justifyContent="flex-end">
        <Grid item xs={12} sm={6} md={3} sx={{ textAlign: "right" }}>
          <Button
            variant="contained"
            size="small"
            color={ActiveThemeColor}
            startIcon={<AddIcon />}
          >
            User
          </Button>
        </Grid>
      </Grid>
      <div style={{ height: 600, width: "100%", marginTop: "20px" }}>
        <ServerSideGrid
          apiurl={fetchQALList}
          Rows={[
            {
              id: 1,
              name: "John Doe",
              role: "Admin",
              email: "john@example.com",
              status: "Active",
              lastAccessed: "Sep 01, 2022, 00:00 AM",
              passcodeStatus: "Inactive",
            },
            {
              id: 2,
              name: "Jane Smith",
              role: "Admin",
              email: "jane@example.com",
              status: "Active",
              lastAccessed: "Aug 23, 2023, 03:28 PM",
              passcodeStatus: "Inactive",
            },
            {
              id: 3,
              name: "Alice Johnson",
              role: "Admin",
              email: "alice@example.com",
              status: "Active",
              lastAccessed: "Sep 01, 2022, 00:00 AM",
              passcodeStatus: "Inactive",
            },
            {
              id: 4,
              name: "Bob Thomas",
              role: "Admin",
              email: "bob@example.com",
              status: "Active",
              lastAccessed: "Jun 28, 2023, 02:04 AM",
              passcodeStatus: "Inactive",
            },
            {
              id: 5,
              name: "Charlie Brown",
              role: "Admin",
              email: "charlie@example.com",
              status: "Invited",
              lastAccessed: "Never Logged In",
              passcodeStatus: "Inactive",
            },
            {
              id: 6,
              name: "Eve Watson",
              role: "Admin",
              email: "eve@example.com",
              status: "Active",
              lastAccessed: "Aug 24, 2023, 01:36 PM",
              passcodeStatus: "Inactive",
            },
            {
              id: 7,
              name: "Mike Lee",
              role: "Admin",
              email: "mike@example.com",
              status: "Active",
              lastAccessed: "Sep 01, 2022, 00:00 AM",
              passcodeStatus: "Inactive",
            },
          ]}
          columns={userColumns}
        />
      </div>
    </Box>
  );
};

export default UserList;
