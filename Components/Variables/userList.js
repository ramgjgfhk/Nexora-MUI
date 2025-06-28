const usersList = [
  {
    name: "John Doe",
    role: "Admin",
    email: "john@example.com",
    status: "Active",
    lastAccessed: "Sep 01, 2022, 00:00 AM",
    passcodeStatus: "Inactive",
  },
  {
    name: "Jane Smith",
    role: "Admin",
    email: "jane@example.com",
    status: "Active",
    lastAccessed: "Aug 23, 2023, 03:28 PM",
    passcodeStatus: "Inactive",
  },
  {
    name: "Alice Johnson",
    role: "Admin",
    email: "alice@example.com",
    status: "Active",
    lastAccessed: "Sep 01, 2022, 00:00 AM",
    passcodeStatus: "Inactive",
  },
  {
    name: "Bob Thomas",
    role: "Admin",
    email: "bob@example.com",
    status: "Active",
    lastAccessed: "Jun 28, 2023, 02:04 AM",
    passcodeStatus: "Inactive",
  },
  {
    name: "Charlie Brown",
    role: "Admin",
    email: "charlie@example.com",
    status: "Invited",
    lastAccessed: "Never Logged In",
    passcodeStatus: "Inactive",
  },
  {
    name: "Eve Watson",
    role: "Admin",
    email: "eve@example.com",
    status: "Active",
    lastAccessed: "Aug 24, 2023, 01:36 PM",
    passcodeStatus: "Inactive",
  },
  {
    name: "Mike Lee",
    role: "Admin",
    email: "mike@example.com",
    status: "Active",
    lastAccessed: "Sep 01, 2022, 00:00 AM",
    passcodeStatus: "Inactive",
  },
];


export const userColumns = [
  { field: "id", headerName: "ID", flex: 1 },
  { field: "name", headerName: "Name", flex: 3 },
  { field: "role", headerName: "Role", flex: 2 },
  { field: "email", headerName: "Email", flex: 3 },
  { field: "status", headerName: "Status", flex: 2 },
  { field: "lastAccessed", headerName: "Last Accessed", flex: 4 },
  { field: "passcodeStatus", headerName: "Passcode Status", flex: 2 },
];

export const userRows = usersList.map((user, index) => ({
  id: index + 1, // ensures a unique id for DataGrid
  ...user,
}));
