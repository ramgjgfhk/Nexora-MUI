import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Box,
  Typography,
  Paper,
  Chip,
  Link,
  Stack,
  Button,
} from "@mui/material";
// import ServerSideGrid from "@/Components/ReUsable/gridfromscreenfacts";
import {
  fetchCustomeventsNexora,
  fetchQALList,
  fetchSystemeventsNexora,
  fetchUserListNexora,
} from "@/pages/api/sampleapies";
import { Add, CancelOutlined, ContentCopy } from "@mui/icons-material";
import ServerSideGrid from "@/Components/ReUsable/userpagegrid";
// import { Link } from "react-router-dom";

function SystemEvents() {
  return (
    <Paper elevation={2} sx={{ p: 4, m: 2 }}>
      <Typography variant="h6">System Events Component</Typography>
      <Typography>
        This component shows system event logs and details.
      </Typography>
    </Paper>
  );
}

function CustomEvents() {
  return (
    <Paper elevation={2} sx={{ p: 4, m: 2 }}>
      <Typography variant="h6">Custom Events Component</Typography>
      <Typography>
        This component shows custom event triggers configured by the user.
      </Typography>
    </Paper>
  );
}
5;
function ConversionEvents() {
  return (
    <Paper elevation={2} sx={{ p: 4, m: 2 }}>
      <Typography variant="h6">Conversion Events Component</Typography>
      <Typography>
        This component displays conversion metrics and related events.
      </Typography>
    </Paper>
  );
}

function ChargedEvents() {
  return (
    <Paper elevation={2} sx={{ p: 4, m: 2 }}>
      <Typography variant="h6">Charged Events Component</Typography>
      <Typography>
        This component shows charged transaction events and statuses.
      </Typography>
    </Paper>
  );
}

export default function SchemaEvents() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };
  const columns = [
    {
      field: "slNo",
      headerName: "#",
      flex: 0.3,
      minWidth: 80,
      headerAlign: "center",
    },
    {
      field: "nexora_id",
      headerName: "Audiences",
      flex: 2,
      minWidth: 200,
      // headerAlign: "center",
      renderCell: (params) => {
        const name = params.row.name ?? "—";
        const nexoraId = params.row.nexora_id ?? "—";

        return (
          <>
            <Stack
              spacing={0.5}
              sx={{
                height: "100%",
                alignItems: "flex-start",
                fontSize: "0.2rem",
                color: "text.primary",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ fontSize: "0.7rem" }}>
                <b></b> {name || "-"}
              </Typography>
              <Typography sx={{ fontSize: "0.7rem" }}>
                <ContentCopy sx={{ fontSize: "14px", mb: -0.5,color:'gray' }} /> <b>ID:</b>{" "}
                {nexoraId || "-"}
              </Typography>
            </Stack>
          </>
        );
      },
    },

    {
      field: "event_name",
      headerName: "Event Name",
      flex: 1.5,
      minWidth: 100,
      headerAlign: "center",
    },
    {
      field: "platform",
      headerName: "Platform",
      flex: 1.5,
      minWidth: 100,
      headerAlign: "center",
    },
    // {
    //   field: "status",
    //   headerName: "Status",
    //   flex: 1,
    //   renderCell: (params) => (
    //     <Chip
    //       sx={{ borderRadius: "5px" }}
    //       label={
    //         (params.value ?? "undefined").charAt(0).toUpperCase() +
    //         (params.value ?? "undefined").slice(1)
    //       }
    //       color={
    //         params.value === "active"
    //           ? "success"
    //           : params.value === "inactive"
    //           ? "error"
    //           : "error"
    //       }
    //       size="small"
    //     />
    //   ),
    // },
    // { field: "drp", headerName: "DRP", flex: 1 },
    {
      field: "created_by",
      headerName: "Captured By",
      flex: 1,
      minWidth: 100,
      headerAlign: "center",
    },
    {
      field: "created_at",
      headerName: "Captured At",
      flex: 1,
      minWidth: 100,
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
    // {
    //   field: "properties",
    //   headerName: "Properties",
    //   flex: 2,
    //   renderCell: (params) => (
    //     <>
    //       {params.value.map((prop, idx) => (
    //         <Link href="#" underline="hover" sx={{ mr: 1 }} key={idx}>
    //           {prop}
    //         </Link>
    //       ))}
    //     </>
    //   ),
    // },
  ];

  const rowsSystem = [
    {
      id: 1,
      eventName: "Login Event",
      type: "defined",
      status: "active",
      drp: "2 year",
      thisMonth: 8450,
      lastMonth: 7560,
      properties: ["IP Address", "Device", "Location"],
    },
    {
      id: 2,
      eventName: "Error Event",
      type: undefined,
      status: "discarded",
      drp: "1 year",
      thisMonth: 6320,
      lastMonth: 5890,
      properties: ["Error Code", "Module", "User ID"],
    },
    {
      id: 3,
      eventName: "Logout Event",
      type: "defined",
      status: "active",
      drp: "2 year",
      thisMonth: 7820,
      lastMonth: 6980,
      properties: ["Session Duration", "Device", "Location"],
    },
    {
      id: 4,
      eventName: "Password Reset",
      type: "defined",
      status: "active",
      drp: "6 months",
      thisMonth: 3200,
      lastMonth: 2850,
      properties: ["Email", "Reset Method", "IP Address"],
    },
    {
      id: 5,
      eventName: "API Limit Exceeded",
      type: undefined,
      status: "discarded",
      drp: "3 months",
      thisMonth: 1250,
      lastMonth: 980,
      properties: ["API Endpoint", "User ID", "Request Count"],
    },
    {
      id: 6,
      eventName: "Session Timeout",
      type: "defined",
      status: "active",
      drp: "1 year",
      thisMonth: 4560,
      lastMonth: 4120,
      properties: ["User ID", "Inactivity Duration", "Page"],
    },
    {
      id: 7,
      eventName: "Database Connection Error",
      type: undefined,
      status: "discarded",
      drp: "1 month",
      thisMonth: 850,
      lastMonth: 720,
      properties: ["Error Code", "Database", "Timestamp"],
    },
    {
      id: 8,
      eventName: "Two-Factor Authentication",
      type: "defined",
      status: "active",
      drp: "2 year",
      thisMonth: 6890,
      lastMonth: 6020,
      properties: ["Method", "Device", "Success Status"],
    },
    {
      id: 9,
      eventName: "System Maintenance",
      type: undefined,
      status: "discarded",
      drp: "3 months",
      thisMonth: 210,
      lastMonth: 180,
      properties: ["Maintenance Type", "Duration", "Impact Level"],
    },
    {
      id: 10,
      eventName: "Permission Denied",
      type: undefined,
      status: "discarded",
      drp: "6 months",
      thisMonth: 1540,
      lastMonth: 1320,
      properties: ["User Role", "Requested Resource", "IP Address"],
    },
  ];

  const rowsCustom = [
    {
      id: 1,
      eventName: "User Signup",
      type: "defined",
      status: "inactive",
      drp: "3 year",
      thisMonth: 9100,
      lastMonth: 8250,
      properties: ["Email", "Referral", "Campaign"],
    },
    {
      id: 2,
      eventName: "Feedback Submitted",
      type: undefined,
      status: "active",
      drp: "1 year",
      thisMonth: 5400,
      lastMonth: 4875,
      properties: ["Rating", "Comments", "Category"],
    },
    {
      id: 3,
      eventName: "Product Viewed",
      type: "defined",
      status: "active",
      drp: "2 year",
      thisMonth: 12500,
      lastMonth: 11800,
      properties: ["Product ID", "Category", "View Duration"],
    },
    {
      id: 4,
      eventName: "Add to Cart",
      type: "defined",
      status: "active",
      drp: "1 year",
      thisMonth: 6800,
      lastMonth: 6200,
      properties: ["Product ID", "Quantity", "User Segment"],
    },
    {
      id: 5,
      eventName: "Checkout Started",
      type: undefined,
      status: "inactive",
      drp: "6 months",
      thisMonth: 3200,
      lastMonth: 2900,
      properties: ["Cart Value", "Payment Method", "User Tier"],
    },
    {
      id: 6,
      eventName: "Purchase Completed",
      type: "defined",
      status: "active",
      drp: "3 year",
      thisMonth: 2800,
      lastMonth: 2500,
      properties: ["Order ID", "Total Amount", "Items Purchased"],
    },
    {
      id: 7,
      eventName: "Wishlist Added",
      type: undefined,
      status: "active",
      drp: "1 year",
      thisMonth: 4100,
      lastMonth: 3800,
      properties: ["Product ID", "User Preferences", "Category"],
    },
    {
      id: 8,
      eventName: "Newsletter Subscription",
      type: "defined",
      status: "inactive",
      drp: "2 year",
      thisMonth: 1950,
      lastMonth: 1700,
      properties: ["Email", "Subscription Source", "Opt-in Date"],
    },
    {
      id: 9,
      eventName: "Product Review",
      type: undefined,
      status: "active",
      drp: "1 year",
      thisMonth: 3600,
      lastMonth: 3150,
      properties: ["Product ID", "Rating", "Review Length"],
    },
    {
      id: 10,
      eventName: "Account Deletion",
      type: "defined",
      status: "inactive",
      drp: "6 months",
      thisMonth: 450,
      lastMonth: 380,
      properties: ["Reason", "User Tier", "Retention Period"],
    },
  ];
  return (
    <Box
      sx={{
        width: "100%",
        mt: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
      }}
    >
      <Tabs
        value={tabIndex}
        onChange={handleChange}
        centered
        variant="standard"
        TabIndicatorProps={{
          style: { backgroundColor: "inherit", height: 3, borderRadius: 2 },
        }}
        sx={{
          ".MuiTab-root": {
            textTransform: "none",
            fontWeight: 500,
            fontSize: "0.8rem",
            color: "text.secondary",
            mx: 1,
            "&:hover": {
              //   color: "#1976d2",
              //   backgroundColor: "rgba(25, 118, 210, 0.08)",
              borderRadius: 1,
            },
          },
          ".Mui-selected": {
            color: "black",
            fontWeight: 600,
          },
        }}
      >
        <Tab label="System Events" />
        <Tab label="Custom Events" />
        <Tab label="Conversion Events" />
        <Tab label="Charged Events" />
      </Tabs>
      {tabIndex === 1 && (
        <Stack
          direction="row"
          sx={{
            justifyContent: "end",
            mt: 0,
            alignItems: "center",
            width: "100%",
            my: 2,
          }}
        >
          <Button
            variant="contained"
            sx={{ height: "26px", fontSize: "12px", borderRadius: "6px" }}
          >
            Add Custom Event
          </Button>
        </Stack>
      )}
      <Box sx={{ width: "100%" }}>
        {tabIndex === 0 && (
          // <ServerSideGrid
          //   columns={columns}
          //   // rowss={list}
          //   // fieldsForFilter={[
          //   //   "client_name",
          //   //   "batch_no",
          //   //   "TAT",
          //   //   "status",
          //   //   "CV ID",
          //   // ]}
          //   fieldsForFilter={{
          //     text: [
          //       { label: "Name", name: "name" },
          //       { label: "City", name: "city" },
          //     ],
          //     date: [
          //       { label: "From", name: "startDate" },
          //       { label: "To", name: "endDate" },
          //       { label: "Created At", name: "created_at" },
          //       { label: "Updated At", name: "updated_at" },
          //     ],
          //     autocomplete: [
          //       {
          //         label: "Statssus",
          //         name: "status",
          //         options: ["Active", "Inactive"],
          //       },
          //       {
          //         label: "Type",
          //         name: "status",
          //         options: ["Past Behaviour", "Live Action"],
          //       },
          //     ],
          //   }}
          //   apiurl={fetchQALList}
          //   Rows={rowsSystem}
          // />

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
            apiurl={fetchSystemeventsNexora}
          />
        )}
        {tabIndex === 1 && (
          <ServerSideGrid
            colHeight={45}
            columns={columns}
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
            apiurl={fetchCustomeventsNexora}
          />
        )}
        {tabIndex === 2 && <ConversionEvents />}
        {tabIndex === 3 && <ChargedEvents />}
      </Box>
      
    </Box>
  );
}
