import TableComponent from "@/Components/ReUsable/serversidegrid";
import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
// import { Inbox } from "@novu/nextjs";
import FromToDatePicker from "@/Components/resuable components/fromToDatePicker";
import ServerSideGrid from "@/Components/ReUsable/gridfromscreenfacts";
import { fetchQALList } from "@/pages/api/sampleapies";
// import FromToDatePicker from "./FromToDatePicker";
// import dayjs from "dayjs";

const SegmentList = () => {
  //   const { ActiveThemeColor } = useActiveColor();
  //   const { setSegmentModal } = useSegmentContext();
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [range, setRange] = React.useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const pickerRef = React.useRef(null);
  //   const navigate = useNavigate();
  const columns1 = [  
    //  ...(privilege.includes("view_qa_form")
      // ? [
      //     {
      //       field: "action",
      //       headerName: "Action",
      //       flex: 1,
      //       minWidth: 90,
      //       headerAlign: "center",
      //       cellClassName: "sticky-action-column",
      //       headerClassName: "sticky-action-header",
      //       renderCell: (params) => (
      //         <CustomViewButton
      //           style={{ cursor: "pointer", padding: 5 }}
      //           onClick={async () => {
      //             setloader(true); // Start loader

      //             try {
      //               const cookieData = getCookie("data");
      //               if (!cookieData) throw new Error("Cookie 'data' not found");

      //               const parsedData = JSON.parse(cookieData);
      //               const myObj = {
      //                 id: params.row.id,
      //                 user_id: parsedData.user_id,
      //               };

      //               console.log(
      //                 "id-user_id",
      //                 params.row.id,
      //                 parsedData.user_id
      //               );

      //               const encodedData = btoa(JSON.stringify(myObj));

      //               await route.push({
      //                 pathname: "/QA-form",
      //                 query: { data: encodedData },
      //               });

      //               setloader(false); // Stop loader after successful navigation
      //             } catch (error) {
      //               setloader(false); // Stop loader on error
      //               console.error("Error:", error);
      //               setAction((prev) => ({
      //                 ...prev,
      //                 openSnackbar: true,
      //                 snackBarData: {
      //                   title: "Error",
      //                   text: error.message || "An unexpected error occurred.",
      //                   severity: "error",
      //                 },
      //               }));
      //             }
      //           }}
      //         />
      //       ),
      //     },
      //   ]
      // : []),
    {
      field: "slNo",
      headerName: "Sl No",
      flex: 1,
      minWidth: 80,
      headerAlign: "center",
    },
    {
      field: "client_name",
      headerName: "Client Name",
      // width: 150,
      headerAlign: "center",
      flex: 3,
      minWidth: 170,
    },
    {
      field: "batch_no",
      headerName: "Batch No",
      flex: 1,
      minWidth: 130,
      headerAlign: "center",
    },
    {
      field: "sf_ref_no",
      headerName: "SF Ref No",
      flex: 1,
      minWidth: 130,
      headerAlign: "center",
    },

    {
      field: "candidate_name",
      headerName: "Candidate Name",
      flex: 4,
      minWidth: 200,
      headerAlign: "center",
      valueGetter: (value, row) => {
        return `${row?.candidate_fname || ""} ${row?.candidate_lname || ""}`;
      },
    },
   
    {
      field: "tat",
      headerName: "TAT",
      flex: 1,
      minWidth: 80,
      headerAlign: "center",
    },
  //  {
  //     filterable: true,
  //     field: "stage",
  //     headerName: "Status",
  //     flex: 1.5,
  //     minWidth: 250,
  //     headerAlign: "center",
  //     renderCell: (params) => {
  //       const value = params.row.stage;

  //       if (!value) {
  //         return (
  //           <span style={{ textTransform: "capitalize" }}>Not Available</span>
  //         );
  //       }

  //       // Format value: replace underscores and capitalize words
  //       const formattedValue = value
  //         .split("_")
  //         .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  //         .join(" ");

  //       return (
  //         <Chip
  //           label={formattedValue}
  //           size="small"
  //           sx={{
  //             backgroundColor: "#e0e1dd",
  //             color: "#0d1b2a",
  //             borderRadius: "8px",
  //             fontSize: "0.75rem",
  //             fontWeight: 600,
  //             height: "24px",
  //             textTransform: "none",
  //             px: 0.5,
  //             py: 0.5,
  //             border: "2px solid #0d1b2a",
  //           }}
  //         />
  //       );
  //     },
  //   },
     {
      field: "date_of_receipt",
      headerName: "Receipt date",
      minWidth: 110,
      flex: 2,
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
    }
    ,
 
  ];
  const data = [
    {
      id: 1,
      type: "Past Behavior",
      created_on: "Apr 27 2001",
      updated_on: "Apr 27 2001",
      updated_by: "Raju",
    },
    {
      id: 2,
      type: "Live Behavior",
      created_on: "Feb 27 2010",
      updated_on: "Jul 27 2012",
      updated_by: "Gopi",
    },
    {
      id: 3,
      type: "In-App Activity",
      created_on: "Jan 15 2018",
      updated_on: "Jan 16 2018",
      updated_by: "Anjali",
    },
    {
      id: 4,
      type: "Web Activity",
      created_on: "Oct 01 2019",
      updated_on: "Oct 02 2019",
      updated_by: "Suresh",
    },
    {
      id: 5,
      type: "Purchase History",
      created_on: "Jul 12 2020",
      updated_on: "Aug 05 2020",
      updated_by: "Divya",
    },
    {
      id: 6,
      type: "Location Trigger",
      created_on: "Nov 11 2021",
      updated_on: "Dec 25 2021",
      updated_by: "Vikram",
    },
    {
      id: 7,
      type: "Push Click",
      created_on: "Mar 09 2022",
      updated_on: "Mar 10 2022",
      updated_by: "Neha",
    },
    {
      id: 8,
      type: "Email Open",
      created_on: "Apr 03 2022",
      updated_on: "Apr 04 2022",
      updated_by: "Ramesh",
    },
    {
      id: 9,
      type: "Notification View",
      created_on: "May 18 2023",
      updated_on: "May 20 2023",
      updated_by: "Kiran",
    },
    {
      id: 10,
      type: "Segment Entry",
      created_on: "Jan 01 2024",
      updated_on: "Jan 05 2024",
      updated_by: "Lakshmi",
    },
  ];

  const [totalRows, setTotalRows] = useState(20);

  const [state, setState] = useState({
    pagination: { pageIndex: 0, pageSize: 10 },
    sorting: [],
    columnFilters: [],
    globalFilter: "",
  });

  const setPartialState = (partial) =>
    setState((prev) => ({ ...prev, ...partial }));

  const fetchData = async () => {
    const { pageIndex, pageSize } = state.pagination;
    const sorting = state.sorting;
    const filters = state.columnFilters;
    const search = state.globalFilter;

    // const res = await fetch(
    //   /api/customers?page=${pageIndex + 1}&size=${pageSize}&sort=${JSON.stringify(sorting)}&filters=${JSON.stringify(filters)}&search=${search}
    // );
    // const json = await res.json();
    // setData(json.data);
    // setTotalRows(json.total);
  };

  const columns = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "type",
      header: "Type",
    },
    {
      accessorKey: "created_on",
      header: "Created on",
    },
    {
      accessorKey: "updated_on",
      header: "Updated on",
    },
    {
      accessorKey: "updated_by",
      header: "Updated by",
    },
  ];

  const [showPicker, setShowPicker] = React.useState(false);

  //   const formattedRange = `${format(
  //     range[0].startDate,
  //     "MMM dd, yyyy"
  //   )} - ${format(range[0].endDate, "MMM dd, yyyy")}`;

  //   const handleSelect = (ranges) => {
  //     setRange([ranges.selection]);
  //   };

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target) &&
        !event.target.classList.contains("date-range-input")
      ) {
        setShowPicker(false);
      }
    }
    if (showPicker) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPicker]);

  const handleFromChange = (date) => {
    setFromDate(date);
    if (toDate && date > toDate) {
      setToDate(null);
    }
  };
  return (
    <Box
      sx={{ display: "flex", gap: 2, flexDirection: "column", width: "100%" }}
    >
      {/* {" "}
      <Typography
        component="h1"
        variant="subtitle2"
        gutterBottom
        sx={{ fontWeight: "600", fontSize: "18px" }}
      >
        Segment
      </Typography> */}
      <Stack
        direction="row"
        sx={{ justifyContent: "end", mt: 0, alignItems: "end" }}
      >
        {/* <Box sx={{ maxWidth: 400 ,backgroundColor:" #f5f5f5",p:1,borderRadius:"6px"}}>
          <Typography
            //  component="h2"
            variant="subtitle2"
            gutterBottom
            sx={{ fontWeight: "600", fontSize: "13px", color: "grey" }}
          >
            Filter Segment By date
          </Typography>
          <FromToDatePicker
            fromDate={fromDate}
            toDate={toDate}
            setFromDate={setFromDate}
            setToDate={setToDate}
          />
        </Box> */}

        <Button
          variant="contained"
          sx={{ height: "26px", fontSize: "12px", borderRadius: "6px" }}
        >
          Create Segment
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
          columns={columns1}
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
              options: ['Active', 'Inactive'],
            },
            {
              label: "Type",
              name: "status",
              options: ["Past Behaviour", "Live Action"],
            },
          ],
        }}
          apiurl={fetchQALList}
     
     
        
        />
      {/* <SegmentTypeModal /> */}
    </Box>
  );
};

export default SegmentList;
