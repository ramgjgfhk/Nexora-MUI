// import TableComponent from "@/Components/ReUsable/serversidegrid";
import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
// import { Inbox } from "@novu/nextjs";
import FromToDatePicker from "@/Components/resuable components/fromToDatePicker";
// import ServerSideGrid from "@/Components/ReUsable/gridfromscreenfacts";
import { fetchQALList, fetchUserListNexora } from "@/pages/api/sampleapies";
import ServerSideGrid from "@/Components/ReUsable/userpagegrid";
import { ContentCopy } from "@mui/icons-material";
// import FromToDatePicker from "./FromToDatePicker";
// import dayjs from "dayjs";

const SegmentList = () => {
  const renderValue = (value) => value ?? "—";

  const formatDate = (value) => {
    try {
      return format(new Date(value), "dd MMM yyyy HH:mm");
    } catch {
      return "—";
    }
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
      minWidth: 100,
    //   headerAlign: "center",
      renderCell: (params) => {
        const name = params.row.name ?? '—';
        const nexoraId = params.row.nexora_id ?? "—";

        return (<><Stack
  spacing={0.5}
  sx={{height:"100%",
    alignItems: "flex-start",
    fontSize: "0.2rem",
    color: "text.primary",justifyContent:'center'
  }
  }
>
  <Typography sx={{ fontSize: "0.7rem",}}>
    <b></b> {name || "-"}
  </Typography>
  <Typography sx={{ fontSize: "0.7rem",}}>
  <ContentCopy sx={{fontSize:"14px",mb:-0.5}}/>  <b>ID:</b> {nexoraId || "-"}
  </Typography>
</Stack></>

        );
      },

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
    },
    //   {
    //     field: 'name',
    //     headerName: 'Name',
    //        flex: 2,
    //   minWidth: 100,
    //   headerAlign: "center",
    //     // valueGetter: (params) => renderValue(params.row.name),
    //   },
    {
      field: "email",
      headerName: "Email",
      flex: 1.5,
      minWidth: 130,
      headerAlign: "center",
      // valueGetter: (params) => renderValue(params.row.email),
    },
    {
      field: "mobile",
      headerName: "Mobile",
      flex: 1.5,
      minWidth: 130,
      headerAlign: "center",
      // valueGetter: (params) => renderValue(params.row.mobile),
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
  ];
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
        columns={columns}colHeight={45}
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
      {/* <SegmentTypeModal /> */}
    </Box>
  );
};

export default SegmentList;
