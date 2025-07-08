import React from "react";
// import { format } from "date-fns";
// import { enUS } from "date-fns/locale";
// import { DateRange } from "react-date-range";
import { FaSearch } from "react-icons/fa";
import {
  Box,
  Card,
  CardContent,
  Grid,
  InputAdornment,
  OutlinedInput,
  Paper,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const UserEngagement = () => {
  const wrapperRef = React.useRef(null);
  const pickerRef = React.useRef(null);

  const [range, setRange] = React.useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [showPicker, setShowPicker] = React.useState(false);

  // const formattedRange = `${format(
  //   range[0].startDate,
  //   "MMM dd, yyyy"
  // )} - ${format(range[0].endDate, "MMM dd, yyyy")}`;

  // const handleSelect = (ranges) => {
  //   setRange([ranges.selection]);
  // };

  // React.useEffect(() => {
  //   function handleClickOutside(event) {
  //     if (
  //       pickerRef.current &&
  //       !pickerRef.current.contains(event.target) &&
  //       !event.target.classList.contains("date-range-input")
  //     ) {
  //       setShowPicker(false);
  //     }
  //   }
  //   if (showPicker) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   } else {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   }
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [showPicker]);

  const data = [
    { id: 433, name: "ttl test", entryTime: "Apr 21 2023, 06:14 PM", status: "Qualified via system control group" },
    { id: 514, name: "test", entryTime: "May 01 2023, 01:23 PM", status: "Qualified via system control group" },
    { id: 507, name: "old ui sms", entryTime: "Apr 27 2023, 11:50 AM", status: "Qualified via system control group" },
    { id: 227, name: "long goal name", entryTime: "Apr 21 2023, 06:14 PM", status: "Exited, cannot re-enter" },
    { id: 493, name: "intellinode manual", entryTime: "Apr 21 2023, 06:14 PM", status: "Qualified via system control group" },
    { id: 492, name: "intellinode auto", entryTime: "Apr 21 2023, 06:14 PM", status: "Qualified via system control group" },
    { id: 415, name: "action journey", entryTime: "Apr 21 2023, 06:14 PM", status: "Qualified via system control group" },
    { id: 419, name: "action - sms", entryTime: "Apr 21 2023, 06:14 PM", status: "Qualified via system control group" },
    { id: 270, name: "Untitled Journey", entryTime: "Apr 21 2023, 06:14 PM", status: "Qualified via system control group" },
    { id: 376, name: "Untitled Journey", entryTime: "Apr 21 2023, 06:14 PM", status: "Qualified via system control group" },
    { id: 459, name: "Untitled Journey", entryTime: "Apr 21 2023, 06:14 PM", status: "Qualified via system control group" },
    { id: 480, name: "Untitled Journey", entryTime: "Apr 21 2023, 10:00 PM", status: "Qualified via system control group" },
    { id: 482, name: "Untitled Journey", entryTime: "Apr 21 2023, 10:00 PM", status: "Qualified via system control group" },
    { id: 487, name: "Untitled Journey", entryTime: "Apr 21 2023, 10:00 PM", status: "Qualified via system control group" },
    { id: 285, name: "Soumen Test", entryTime: "Apr 21 2023, 06:14 PM", status: "Qualified via system control group" },
  ];

  return (
    <>
      <Grid container spacing={2} alignItems="center" sx={{ mb: 3 }}>
        <Grid item xs={12} md={6}>
          <Box ref={pickerRef} sx={{ position: "relative" }}>
            {/* <OutlinedInput
              fullWidth
              readOnly
              value={formattedRange}
              onClick={() => setShowPicker(!showPicker)}
              className="date-range-input"
              sx={{ cursor: "pointer" }}
            /> */}
            {/* {showPicker && (
              <Box sx={{ position: "absolute", zIndex: 10 }}>
                <DateRange
                  ranges={range}
                  onChange={handleSelect}
                  locale={enUS}
                  moveRangeOnFirstSelection={false}
                  editableDateInputs={true}
                />
              </Box>
            )} */}
          </Box>
        </Grid>
        <Grid item xs={12} md={6} container justifyContent="flex-end" spacing={2}>
          <Grid item>
            <OutlinedInput
              placeholder="Search by Name or ID"
              startAdornment={
                <InputAdornment position="start">
                  <FaSearch />
                </InputAdornment>
              }
              onFocus={() => wrapperRef.current?.classList.add("input-group-focus")}
              onBlur={() => wrapperRef.current?.classList.remove("input-group-focus")}
              inputProps={{ style: { paddingLeft: 8 } }}
            />
          </Grid>
          <Grid item>
            <Select defaultValue="system" size="small">
              <MenuItem value="system">Status</MenuItem>
              <MenuItem value="manual">Manual</MenuItem>
            </Select>
          </Grid>
        </Grid>
      </Grid>

      <Card>
        <CardContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Entry Time</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map(({ id, name, entryTime, status }) => (
                  <TableRow key={id}>
                    <TableCell>{id}</TableCell>
                    <TableCell>{name}</TableCell>
                    <TableCell>{entryTime}</TableCell>
                    <TableCell>{status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </>
  );
};

export default UserEngagement;
