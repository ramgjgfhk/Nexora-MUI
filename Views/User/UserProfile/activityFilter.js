import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  FormControl,
  Select,
  MenuItem,
  Divider,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

const ActivityFilter = () => {
  const events = [
    {
      name: "App Launched",
      firstOn: "Wed, May 15, 2019",
      lastOn: "Tue, Jun 9, 2020",
      count: 179,
    },
    {
      name: "App Uninstalled",
      firstOn: "Sun, Jun 30, 2019",
      lastOn: "Sat, May 23, 2020",
      count: 17,
    },
    {
      name: "Charged",
      firstOn: "Wed, May 15, 2019",
      lastOn: "Sat, Jun 6, 2020",
      count: 22,
    },
    {
      name: "Searched",
      firstOn: "Mon, Jun 10, 2019",
      lastOn: "Wed, Jun 10, 2020",
      count: 228,
    },
  ];

  const [filter, setFilter] = React.useState("system");

  return (
    <Card sx={{ width: "100%",bgcolor:'white' }}>
      <CardContent>
        <Box display="flex" justifyContent="flex-end" mb={2}>
          <FormControl variant="outlined" size="small" sx={{ minWidth: 200 }}>
            <Select
              id="custom-select"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <MenuItem value="system">Filter By Events</MenuItem>
              <MenuItem value="manual">Filter By Past Behavior</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Divider sx={{ mb: 2 }} />

        <Table size="small">
          <TableBody>
            {events.map((event, index) => (
              <TableRow
                key={index}
                sx={{
                  borderBottom: "1px solid #eee",
                }}
              >
                {/* <TableCell width="5%"></TableCell> */}
                <TableCell >
                  <Typography variant="body1">{event.name}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    First On: {event.firstOn}
                    <br />
                    Last On: {event.lastOn}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="subtitle1" fontWeight="bold">
                    {event.count} times
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ActivityFilter;
