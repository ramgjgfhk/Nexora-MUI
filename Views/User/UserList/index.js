import React from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Grid,
  IconButton,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
  Chip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "@/Components/Variables/userList";

const ActiveThemeColor = "primary";

const UserList = () => {
  const router = useRouter();

  const [searchFocused, setSearchFocused] = React.useState(false);

  const users = [
    {
      name: "John Doe",
      role: "Admin",
      email: "john@example.com",
      status: "Active",
      lastAccessed: "Sep 01, 2022, 00:00 AM",
      passcode: "Inactive",
    },
    {
      name: "Jane Smith",
      role: "Admin",
      email: "jane@example.com",
      status: "Active",
      lastAccessed: "Aug 23, 2023, 03:28 PM",
      passcode: "Inactive",
    },
    {
      name: "Alice Johnson",
      role: "Admin",
      email: "alice@example.com",
      status: "Active",
      lastAccessed: "Sep 01, 2022, 00:00 AM",
      passcode: "Inactive",
    },
    {
      name: "Bob Thomas",
      role: "Admin",
      email: "bob@example.com",
      status: "Active",
      lastAccessed: "Jun 28, 2023, 02:04 AM",
      passcode: "Inactive",
    },
    {
      name: "Charlie Brown",
      role: "Admin",
      email: "charlie@example.com",
      status: "Invited",
      lastAccessed: "Never Logged In",
      passcode: "Inactive",
    },
    {
      name: "Eve Watson",
      role: "Admin",
      email: "eve@example.com",
      status: "Active",
      lastAccessed: "Aug 24, 2023, 01:36 PM",
      passcode: "Inactive",
    },
    {
      name: "Mike Lee",
      role: "Admin",
      email: "mike@example.com",
      status: "Active",
      lastAccessed: "Sep 01, 2022, 00:00 AM",
      passcode: "Inactive",
    },
  ];

  return (
    <Box sx={{ fontFamily: "Roboto, sans-serif" }}>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            placeholder="Search by Name or ID"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color={searchFocused ? "primary" : "inherit"} />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            size="small"
          />
        </Grid>
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
     <div style={{ height: 600, width: '100%' }}>
  <DataGrid
    checkboxSelection
    rows={userRows}
    columns={userColumns}
    getRowClassName={(params) =>
      params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
    }
    initialState={{
      pagination: { paginationModel: { pageSize: 20 } },
    }}
    pageSizeOptions={[10, 20, 50]}
    disableColumnResize
    density="compact"
    autoHeight={false} // ensures internal scrolling
    slotProps={{
      filterPanel: {
        filterFormProps: {
          logicOperatorInputProps: {
            variant: "outlined",
            size: "small",
          },
          columnInputProps: {
            variant: "outlined",
            size: "small",
            sx: { mt: "auto" },
          },
          operatorInputProps: {
            variant: "outlined",
            size: "small",
            sx: { mt: "auto" },
          },
          valueInputProps: {
            InputComponentProps: {
              variant: "outlined",
              size: "small",
            },
          },
        },
      },
    }}
  />
</div>

    </Box>
  );
};

export default UserList;
