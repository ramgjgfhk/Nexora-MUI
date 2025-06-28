import { Tooltip } from "@mui/material";
import { FaEye } from "react-icons/fa";

const usersList = [
  {id:2,
    name: "John Doe",
    role: "Admin",
    email: "john@example.com",
    status: "Active",
    lastAccessed: "Sep 01, 2022, 00:00 AM",
    passcodeStatus: "Inactive",
  },
  {id:1,
    name: "Jane Smith",
    role: "Admin",
    email: "jane@example.com",
    status: "Active",
    lastAccessed: "Aug 23, 2023, 03:28 PM",
    passcodeStatus: "Inactive",
  },
  {id:1,
    name: "Alice Johnson",
    role: "Admin",
    email: "alice@example.com",
    status: "Active",
    lastAccessed: "Sep 01, 2022, 00:00 AM",
    passcodeStatus: "Inactive",
  },
  {id:1,
    name: "Bob Thomas",
    role: "Admin",
    email: "bob@example.com",
    status: "Active",
    lastAccessed: "Jun 28, 2023, 02:04 AM",
    passcodeStatus: "Inactive",
  },
  {id:1,
    name: "Charlie Brown",
    role: "Admin",
    email: "charlie@example.com",
    status: "Invited",
    lastAccessed: "Never Logged In",
    passcodeStatus: "Inactive",
  },
  {id:1,
    name: "Eve Watson",
    role: "Admin",
    email: "eve@example.com",
    status: "Active",
    lastAccessed: "Aug 24, 2023, 01:36 PM",
    passcodeStatus: "Inactive",
  },
  {id:1,
    name: "Mike Lee",
    role: "Admin",
    email: "mike@example.com",
    status: "Active",
    lastAccessed: "Sep 01, 2022, 00:00 AM",
    passcodeStatus: "Inactive",
  },
];

export const userColumns = [
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
          <FaEye size={20}/>
        </Tooltip>
      );
    },
  },
];

export const userRows = usersList.map((user, index) => ({
  id: index + 1, // ensures a unique id for DataGrid
  ...user,
}));
