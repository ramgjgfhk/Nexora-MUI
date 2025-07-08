import React from "react";
import {
  Card,
  CardContent,
  Chip,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Box,
} from "@mui/material";

const UserProperties = () => {
  return (
    <Card sx={{bgcolor:'white'}}>
      <CardContent>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb={3}
        >
          <Typography variant="body1">Communication Preference</Typography>
          <Chip
            label="User Properties"
            style={{ backgroundColor: "primary", color: "#fff" }}
          />
        </Box>

        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell>Age</TableCell>
              <TableCell>32 years 4 months</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Birthday</TableCell>
              <TableCell>May 03, 2003</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Customer Type</TableCell>
              <TableCell>Silver</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Customer ID</TableCell>
              <TableCell>85659865855</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Language</TableCell>
              <TableCell>English</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Timezone</TableCell>
              <TableCell>Central standard time</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default UserProperties;
