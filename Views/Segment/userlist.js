// import TableComponent from "@/Components/ReUsable/serversidegrid";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
// import { Inbox } from "@novu/nextjs";
import FromToDatePicker from "@/Components/resuable components/fromToDatePicker";
// import ServerSideGrid from "@/Components/ReUsable/gridfromscreenfacts";
import { fetchQALList, fetchUserListNexora } from "@/pages/api/sampleapies";
import ServerSideGrid from "@/Components/ReUsable/userpagegrid";
import {
  ContentCopy,
  LocationOn,
  PersonOutline,
  Phone,
} from "@mui/icons-material";
import { MoreVert } from "@mui/icons-material";
import UserDetailsModal from "../User/UserList/userDetails";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { useRouter } from "next/router";
import { maskEmail, maskMobile } from "@/utils/MaskFunction";
// import FromToDatePicker from "./FromToDatePicker";
// import dayjs from "dayjs";

const SegmentList = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const router = useRouter();
  const renderValue = (value) => value ?? "—";
  const [open, setOpen] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleActionClick = (event, row) => {
    setMenuAnchorEl(event.currentTarget);
    setSelectedRow(row);
  };

  const handleCloseMenu = () => {
    setMenuAnchorEl(null);
  };
  const handleCloseModal = () => {
    setOpen(false);
    setSelectedRow(null);
  };

  const isMenuOpen = Boolean(menuAnchorEl);

  const formatDate = (value) => {
    try {
      return format(new Date(value), "dd MMM yyyy HH:mm");
    } catch {
      return "—";
    }
  };
  const renderAudienceCell = (params) => {
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
              width: 25,
              height: 25,
            }}
          >
            <PersonOutline sx={{ fontSize: 14 }} />
          </Avatar>
          <Stack
            spacing={0}
            sx={{ justifyContent: "center", alignItems: "start" }}
          >
            <Typography sx={{ fontSize: "0.75rem", fontWeight: 600 }}>
              {name}
            </Typography>
            <Typography sx={{ fontSize: "0.7rem", color: "text.secondary" }}>
              {maskEmail(email)}
            </Typography>
          </Stack>
        </Box>
      </Box>
    );
  };
  const columns = [
    // {
    //   field: "slNo",
    //   headerName: "#",
    //   flex: 0.3,
    //   minWidth: 80,
    //   headerAlign: "center",
    // },
    {
      field: "name",
      headerName: "Audiences",
      flex: 2,
      minWidth: 100,
      renderCell: renderAudienceCell,
    },
    // {
    //   field: "nexora_id",
    //   headerName: "Audiences",
    //   flex: 2,
    //   minWidth: 100,
    //   //   headerAlign: "center",
    //   renderCell: (params) => {
    //     const name = params.row.name ?? "—";
    //     const nexoraId = params.row.nexora_id ?? "—";

    //     return (
    //       <>
    //         <Stack
    //           spacing={0.5}
    //           sx={{
    //             height: "100%",
    //             alignItems: "flex-start",
    //             fontSize: "0.2rem",
    //             color: "text.primary",
    //             justifyContent: "center",
    //           }}
    //         >
    //           <Typography sx={{ fontSize: "0.7rem" }}>
    //             <b></b> {name || "-"}
    //           </Typography>
    //           <Typography sx={{ fontSize: "0.7rem" }}>
    //             <ContentCopy
    //               sx={{ fontSize: "14px", mb: -0.5, color: "gray" }}
    //             />{" "}
    //             <b>ID:</b> {nexoraId || "-"}
    //           </Typography>
    //         </Stack>
    //       </>
    //     );
    //   },

    //  renderCell: (params) => {
    //         const rawDate = params.value;
    //         const date = rawDate ? new Date(rawDate) : null;

    //         if (!date || isNaN(date.getTime())) {
    //           return "Invalid Date"; // Or return '-' or leave it empty
    //         }

    //         return date.toLocaleDateString("en-GB", {
    //           day: "2-digit",
    //           month: "short",
    //           year: "numeric",
    //         });
    //       },
    // },
    //   {
    //     field: 'name',
    //     headerName: 'Name',
    //        flex: 2,
    //   minWidth: 100,
    //   headerAlign: "center",
    //     // valueGetter: (params) => renderValue(params.row.name),
    //   },
    // {
    //   field: "email",
    //   headerName: "Email",
    //   flex: 1.5,
    //   minWidth: 130,
    //   headerAlign: "center",
    //   // valueGetter: (params) => renderValue(params.row.email),
    // },
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
    // {
    //   field: "mobile",
    //   headerName: "Mobile",
    //   flex: 1.5,
    //   minWidth: 130,
    //   headerAlign: "center",
    //   // valueGetter: (params) => renderValue(params.row.mobile),
    // },
    {
      field: "mobile",
      headerName: "Mobile",
      flex: 1.5,
      minWidth: 160,
      renderCell: (params) => {
        const mobile = params.row.mobile ?? "—";
        const location = params.row.location ?? "Not Found";

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
                  {maskMobile(mobile)}
                </Typography>
              </Box>
              {/* <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                    <LocationOn sx={{ fontSize: 12, color: "red" }} />
                    <Typography
                      sx={{ fontSize: "0.7rem", color: "text.secondary" }}
                    >
                      {location}
                    </Typography>
                  </Box> */}
            </Box>
          </Box>
        );
      },
    },
    //   {
    //     field: 'user_identifier',
    //     headerName: 'User Identifier',
    //     width: 150,
    //     valueGetter: (params) => renderValue(params.row.user_identifier),
    //   },
    //   {
    //     field: 'created_by',
    //     headerName: 'Created By',
    //     width: 130,
    //     valueGetter: (params) => renderValue(params.row.created_by),
    //   },
    {
      field: "created_at",
      headerName: "Created At",
      flex: 1,
      minWidth: 80,
      headerAlign: "center",
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
    //   {
    //     field: 'updated_by',
    //     headerName: 'Updated By',
    //     width: 130,
    //     valueGetter: (params) => renderValue(params.row.updated_by),
    //   },
    {
      field: "updated_at",
      headerName: "Updated At",
      flex: 1,
      minWidth: 80,
      headerAlign: "center",
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
      field: "action",
      headerName: "Action",
      sortable: false,
      filterable: false,
      minWidth: 80,
      flex: 1,
      headerAlign: "center",
      renderCell: (params) => (
        <>
          <IconButton
            onClick={(event) => {
              event.stopPropagation(); // ✅ Prevent row selection
              handleActionClick(event, params.row);
            }}
            disableFocusRipple
            sx={{
              cursor: "pointer",
              border: "none",
              "&:hover": { backgroundColor: "transparent" },
              "&.Mui-focusVisible": { backgroundColor: "transparent" },
            }}
          >
            <MoreVert sx={{ fontSize: 18 }} />
          </IconButton>
        </>
      ),
    },
    //  {
    //       field: "Action",
    //       headerName: "Action",
    //       flex: 1,
    //       minWidth: 80,
    //       renderCell: (params) => {
    //         const rowData = params.value;
    //         return (
    //           <>
    //             <Tooltip title="Actions">
    //               <IconButton
    //                 size="small"
    //                  onClick={(event) => {
    //           event.stopPropagation(); // ✅ Prevent row selection
    //          handleMenuClick(event)
    //         }}
    //                 sx={{
    //                   p: 0.5,
    //                   ml: 1,
    //                   border: "none",
    //                   borderRadius: "50%",
    //                   "&:hover": { backgroundColor: "#F4F6F3" },
    //                   "&.Mui-focusVisible": { backgroundColor: "transparent" },
    //                 }}
    //               >
    //                 <MoreVert sx={{ fontSize: 18 }} />
    //               </IconButton>
    //             </Tooltip>
    //             <Menu
    //               anchorEl={anchorEl}
    //               open={open}
    //               onClose={handleMenuClose}
    //               anchorOrigin={{
    //                 vertical: "bottom",
    //                 horizontal: "right",
    //               }}
    //               transformOrigin={{
    //                 vertical: "top",
    //                 horizontal: "right",
    //               }}
    //             >
    //               <MenuItem onClick={() => router.push("/user-profile")}>
    //                 <ListItemIcon>
    //                   <FaEye style={{ color: "#1976D2", fontSize: 16 }} />
    //                 </ListItemIcon>
    //                 <ListItemText primary="View" />
    //               </MenuItem>

    //               <MenuItem onClick={() => console.log("Edit")}>
    //                 <ListItemIcon>
    //                   <FaEdit style={{ color: "#0288D1", fontSize: 16 }} />
    //                 </ListItemIcon>
    //                 <ListItemText primary="Edit" />
    //               </MenuItem>

    //               <MenuItem onClick={() => console.log("Delete")}>
    //                 <ListItemIcon>
    //                   <FaTrashAlt style={{ color: "#D32F2F", fontSize: 16 }} />
    //                 </ListItemIcon>
    //                 <ListItemText primary="Delete" />
    //               </MenuItem>
    //             </Menu>
    //           </>
    //         );
    //       },
    //     },
  ];
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{ display: "flex", gap: 2, flexDirection: "column", width: "100%" }}
    >
      <Stack
        direction="row"
        sx={{ justifyContent: "end", mt: 0, alignItems: "end" }}
      >
        <Button
          variant="contained"
          sx={{ height: "26px", fontSize: "12px", borderRadius: "6px" }}
        >
          Add User
        </Button>

        {/* <S
      applicationIdentifier="KxsvqMOiei9I"
      subscriberId="685919ded80e094dc6b1edce"
      appearance={{
        variables: {
          colorPrimary: "#7D52F4",
          colorForeground: "#0E121B"
        }
      }}
    /> */}

        {/* <button           color={ActiveThemeColor} onClick={() => setSegmentModal(true)}></button> */}
      </Stack>
      {/* <Container className="py-4">
      <Card className="shadow-sm border-0">
        <CardBody>
          <CardTitle tag="h5" className="mb-4">Select Date Range</CardTitle>

          <FormGroup>
            <Label for="fromDate">From Date</Label>
            <DatePicker
              id="fromDate"
              selected={fromDate}
              onChange={handleFromChange}
              selectsStart
              startDate={fromDate}
              endDate={toDate}
              placeholderText="Select from date"
              className="form-control"
            />
          </FormGroup>

          <FormGroup>
            <Label for="toDate">To Date</Label>
            <DatePicker
              id="toDate"
              selected={toDate}
              onChange={(date) => setToDate(date)}
              selectsEnd
              startDate={fromDate}
              endDate={toDate}
              minDate={fromDate}
              placeholderText="Select to date"
              className="form-control"
            />
          </FormGroup>

          {fromDate && toDate && (
              <UncontrolledAlert color="info" fade={false}>
                              <span>
                             Selected Range: <strong>{fromDate.toDateString()}</strong> → <strong>{toDate.toDateString()}</strong>
                              </span>
                            </UncontrolledAlert>
            // <Alert color="success" className="mt-3">
            //   Selected Range: <strong>{fromDate.toDateString()}</strong> → <strong>{toDate.toDateString()}</strong>
            // </Alert>
          )}
        </CardBody>
      </Card>
    </Container> */}
      {/* <TableComponent
        columns={columns}
        datas={data}
        searchText="Search by ID/Name"
        pageCount={Math.ceil(totalRows / state.pagination.pageSize)}
        totalRows={totalRows}
        // fetchData={fetchData} 
        state={state}
        setState={{
          setPagination: (val) => setPartialState({ pagination: val }),
          setSorting: (val) => setPartialState({ sorting: val }),
          setColumnFilters: (val) => setPartialState({ columnFilters: val }),
          setGlobalFilter: (val) => setPartialState({ globalFilter: val }),
        }}
        loading={false}
        customFilters={{
          text: [
            { label: "Name", name: "name" },
            { label: "City", name: "city" },
          ],
          date: [
            { label: "From", name: "startDate" },
            { label: "To", name: "endDate" },
            { label: "Created At", name: "created_at" },
            { label: "Updated At", name: "updated_at" },
          ],
          autocomplete: [
            {
              label: "Statssus",
              name: "status",
              options: ['Active', 'Inactive'],
            },
            {
              label: "Type",
              name: "status",
              options: ["Past Behaviour", "Live Action"],
            },
          ],
        }}
      /> */}

      <ServerSideGrid
        columns={columns}
        colHeight={45}
        // rowss={list}
        // fieldsForFilter={[
        //   "client_name",
        //   "batch_no",
        //   "TAT",
        //   "status",
        //   "CV ID",
        // ]}
        fieldsForFilter={{
          text: [
            { label: "Name", name: "name" },
            { label: "City", name: "city" },
          ],
          date: [
            { label: "From", name: "startDate" },
            { label: "To", name: "endDate" },
            { label: "Created At", name: "created_at" },
            { label: "Updated At", name: "updated_at" },
          ],
          autocomplete: [
            {
              label: "Statssus",
              name: "status",
              options: ["Active", "Inactive"],
            },
            {
              label: "Type",
              name: "status",
              options: ["Past Behaviour", "Live Action"],
            },
          ],
        }}
        apiurl={fetchUserListNexora}
      />
      <Menu
        anchorEl={menuAnchorEl}
        open={isMenuOpen}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem
          onClick={() => {
            handleCloseMenu();
            console.log("Edit", selectedRow);
          }}
        >
          Edit
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleCloseMenu();
            console.log("Delete", selectedRow);
          }}
        >
          Delete
        </MenuItem>
        <MenuItem onClick={() => router.push("/user-profile")}>
          View Details
        </MenuItem>
      </Menu>

      {/* <SegmentTypeModal /> */}
      <UserDetailsModal
        open={Boolean(open)}
        onClose={handleCloseModal}
        selectedRow={selectedRow}
      />
    </Box>
  );
};

export default SegmentList;
