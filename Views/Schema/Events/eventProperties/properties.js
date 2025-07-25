// import TableComponent from "@/Components/ReUsable/serversidegrid";
import {
  Box,
  Button,
  IconButton,
  Link,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
// import { Inbox } from "@novu/nextjs";
import FromToDatePicker from "@/Components/resuable components/fromToDatePicker";
import ServerSideGrid from "@/Components/ReUsable/gridfromscreenfacts";
import { fetchQALList } from "@/pages/api/sampleapies";
import { Delete, Edit } from "@mui/icons-material";
import PropertiesHeader from "./PropertiesHeader";
// import Link from "next/link";
// import FromToDatePicker from "./FromToDatePicker";
// import dayjs from "dayjs";

const EventProperties = () => {
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
    {
      field: "id",
      headerName: "ID",
      flex: 1,
      minWidth: 80,
      headerAlign: "center",
    },
    {
      field: "Segment_name",
      headerName: "Name",
      // width: 150,
      headerAlign: "center",
      flex: 3,
      minWidth: 170,
    },
    {
      field: "created_by",
      headerName: "Created By",
      flex: 1,
      minWidth: 130,
      headerAlign: "center",
    },
    {
      field: "created_at",
      headerName: "Created At",
      flex: 1,
      minWidth: 130,
      headerAlign: "center",
    },

    {
      field: "updated_by",
      headerName: "Updated By",
      flex: 4,
      minWidth: 200,
      headerAlign: "center",
      valueGetter: (value, row) => {
        return `${row?.candidate_fname || ""} ${row?.candidate_lname || ""}`;
      },
    },

    {
      field: "updated_at",
      headerName: "Updated At",
      flex: 1,
      minWidth: 80,
      headerAlign: "center",
    },
    //
  ];
  const data = [
    {
      id: 100000001,
      type: "Past Behavior",
      created_on: "Apr 27 2001",
      updated_on: "Apr 27 2001",
      updated_by: "Raju",
    },
    {
      id: 100000002,
      type: "Live Behavior",
      created_on: "Feb 27 2010",
      updated_on: "Jul 27 2012",
      updated_by: "Gopi",
    },
    {
      id: 100000003,
      type: "In-App Activity",
      created_on: "Jan 15 2018",
      updated_on: "Jan 16 2018",
      updated_by: "Anjali",
    },
    {
      id: 100000004,
      type: "Web Activity",
      created_on: "Oct 01 2019",
      updated_on: "Oct 02 2019",
      updated_by: "Suresh",
    },
    {
      id: 100000005,
      type: "Purchase History",
      created_on: "Jul 12 2020",
      updated_on: "Aug 05 2020",
      updated_by: "Divya",
    },
    {
      id: 100000006,
      type: "Location Trigger",
      created_on: "Nov 11 2021",
      updated_on: "Dec 25 2021",
      updated_by: "Vikram",
    },
    {
      id: 100000007,
      type: "Push Click",
      created_on: "Mar 09 2022",
      updated_on: "Mar 10 2022",
      updated_by: "Neha",
    },
    {
      id: 100000008,
      type: "Email Open",
      created_on: "Apr 03 2022",
      updated_on: "Apr 04 2022",
      updated_by: "Ramesh",
    },
    {
      id: 100000009,
      type: "Notification View",
      created_on: "May 18 2023",
      updated_on: "May 20 2023",
      updated_by: "Kiran",
    },
    {
      id: 100000010,
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
    ><PropertiesHeader masterName="Page Viewed"/>
 
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
      {/* <ServerSideGrid
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
              options: ["Active", "Inactive"],
            },
            {
              label: "Type",
              name: "status",
              options: ["Past Behaviour", "Live Action"],
            },
          ],
        }}
        apiurl={fetchQALList}
        Rows={[
          {
            id: 1,
            Segment_name: "Purchased",
            created_by: "John Doe",
            created_at: "2025-06-01",
            candidate_fname: "Alice",
            candidate_lname: "Johnson",
            updated_by: "Verifier1",
            updated_at: "2025-06-05",
          },
          {
            id: 2,
            Segment_name: "Trigger Web Login",
            created_by: "Jane Smith",
            created_at: "2025-06-02",
            candidate_fname: "Bob",
            candidate_lname: "Williams",
            updated_by: "Verifier2",
            updated_at: "2025-06-06",
          },
          {
            id: 3,
            Segment_name: "Email For Login",
            created_by: "Raj Patel",
            created_at: "2025-06-03",
            candidate_fname: "Charlie",
            candidate_lname: "Brown",
            updated_by: "Verifier3",
            updated_at: "2025-06-07",
          },
          {
            id: 4,
            Segment_name: "In App SMS",
            created_by: "Li Wei",
            created_at: "2025-06-04",
            candidate_fname: "Daisy",
            candidate_lname: "Miller",
            updated_by: "Verifier4",
            updated_at: "2025-06-08",
          },
          {
            id: 5,
            Segment_name: "Add To Cart",
            created_by: "Maria Lopez",
            created_at: "2025-06-05",
            candidate_fname: "Ethan",
            candidate_lname: "Davis",
            updated_by: "Verifier5",
            updated_at: "2025-06-09",
          },
          {
            id: 6,
            Segment_name: "Inactive User",
            created_by: "Ahmed Khan",
            created_at: "2025-06-06",
            candidate_fname: "Fiona",
            candidate_lname: "Clark",
            updated_by: "Verifier6",
            updated_at: "2025-06-10",
          },
          {
            id: 7,
            Segment_name: "Loyal User",
            created_by: "Emily Johnson",
            created_at: "2025-06-07",
            candidate_fname: "George",
            candidate_lname: "Martinez",
            updated_by: "Verifier7",
            updated_at: "2025-06-11",
          },
          {
            id: 8,
            Segment_name: "Valuable Customer",
            created_by: "David Kim",
            created_at: "2025-06-08",
            candidate_fname: "Hannah",
            candidate_lname: "Lewis",
            updated_by: "Verifier8",
            updated_at: "2025-06-12",
          },
          {
            id: 9,
            Segment_name: "Trigger SDK",
            created_by: "Olivia Brown",
            created_at: "2025-06-09",
            candidate_fname: "Ian",
            candidate_lname: "Walker",
            updated_by: "Verifier9",
            updated_at: "2025-06-13",
          },
          {
            id: 10,
            Segment_name: "Network Error",
            created_by: "Michael Green",
            created_at: "2025-06-10",
            candidate_fname: "Julia",
            candidate_lname: "Hall",
            updated_by: "Verifier10",
            updated_at: "2025-06-14",
          },
        ]}
      />{" "} */}
      <ServerSideGrid
        apiurl={fetchQALList}
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
        Rows={[
  {
    id: 1,
    property_name: "Property A",
    type: "String",
    status: "Active",
    required: "Yes",
    data_type: "Text",
    data_type_fallback: "None",
    created_on: "2025-06-01",
    description: "Main address field",
  },
  {
    id: 2,
    property_name: "Property B",
    type: "Number",
    status: "Inactive",
    required: "No",
    data_type: "Integer",
    data_type_fallback: "0",
    created_on: "2025-06-02",
    description: "Age of user",
  },
  {
    id: 3,
    property_name: "Property C",
    type: "Boolean",
    status: "Active",
    required: "Yes",
    data_type: "Checkbox",
    data_type_fallback: "False",
    created_on: "2025-06-03",
    description: "Subscription status",
  },
  {
    id: 4,
    property_name: "Property D",
    type: "String",
    status: "Active",
    required: "No",
    data_type: "Text",
    data_type_fallback: "N/A",
    created_on: "2025-06-04",
    description: "Secondary email",
  },
  {
    id: 5,
    property_name: "Property E",
    type: "Date",
    status: "Inactive",
    required: "Yes",
    data_type: "Date",
    data_type_fallback: "1970-01-01",
    created_on: "2025-06-05",
    description: "Date of birth",
  },
  {
    id: 6,
    property_name: "Property F",
    type: "String",
    status: "Active",
    required: "No",
    data_type: "Text",
    data_type_fallback: "Unknown",
    created_on: "2025-06-06",
    description: "Country",
  },
  {
    id: 7,
    property_name: "Property G",
    type: "Number",
    status: "Active",
    required: "Yes",
    data_type: "Float",
    data_type_fallback: "0.0",
    created_on: "2025-06-07",
    description: "Account balance",
  },
  {
    id: 8,
    property_name: "Property H",
    type: "String",
    status: "Inactive",
    required: "No",
    data_type: "Text",
    data_type_fallback: "None",
    created_on: "2025-06-08",
    description: "Referral code",
  },
  {
    id: 9,
    property_name: "Property I",
    type: "Boolean",
    status: "Active",
    required: "Yes",
    data_type: "Checkbox",
    data_type_fallback: "False",
    created_on: "2025-06-09",
    description: "Marketing consent",
  },
  {
    id: 10,
    property_name: "Property J",
    type: "String",
    status: "Active",
    required: "No",
    data_type: "Text",
    data_type_fallback: "N/A",
    created_on: "2025-06-10",
    description: "Profile bio",
  },
]}
        columns={[
          {
            field: "id",
            headerName: "SL NO",
            width: 60,
            sortable: false,
            hideable: false,
          },
          {
            field: "property_name",
            headerName: "Property Name",
            flex: 1,
            minWidth: 180,
          },
          { field: "type", headerName: "Type", width: 120 },
          { field: "status", headerName: "Status", width: 120 },
          { field: "required", headerName: "Required", width: 100 },
          { field: "data_type", headerName: "Data Type", width: 100 },
          { field: "data_type_fallback", headerName: "Data Type Fallback", width: 100 },
          { field: "created_on", headerName: "Created On", width: 100 },
        { field: "description", headerName: "Description", width: 100 },
          {
            field: "actions",
            headerName: "Actions",
            width: 100,
            sortable: false,
            renderCell: (params) => (
              <Box display="flex" gap={1} sx={{justifyContent:"center",height:"100%",alignItems:"center",}}>
                <Tooltip title="Edit">
                  <Edit
                    // fontSize="25px"
                    sx={{ color: "primary.main", cursor: "pointer" ,   fontSize:"17px"}}
                    onClick={() => handleEdit(params.row)}
                  />
                </Tooltip>
                <Tooltip title="Delete">
                  <Delete
                //  fontSize="25px"
                    sx={{ color: "error.main", cursor: "pointer" ,      fontSize:"17px"}}
                    onClick={() => handleDelete(params.row)}
                  />
                </Tooltip>
              </Box>
            ),
          },
        ]}
      />
      {/* <SegmentTypeModal /> */}
    </Box>
  );
};

export default EventProperties;
