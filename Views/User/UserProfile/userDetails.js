import React from "react";
import { FaBell, FaGlobe, FaTag } from "react-icons/fa";
import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Box,
  Card,
} from "@mui/material";

const UserDetails = () => {
  return (
    <Box sx={{mt:2}}>
      <Typography variant="h6" gutterBottom>
        Devices used
      </Typography>
      <TableContainer component={Card}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Platform</TableCell>
              <TableCell>Push Notifications</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>OS Version</TableCell>
              <TableCell>Application Version</TableCell>
              <TableCell>Nexora SDK Version</TableCell>
              <TableCell>Device Make</TableCell>
              <TableCell>Device Model</TableCell>
              <TableCell>Browser</TableCell>
              <TableCell>Operating System</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <FaGlobe size={20} />
              </TableCell>
              <TableCell>
                  <Box display="flex" alignItems="center" gap={1}>
                    <FaTag /> Firefox
                  </Box>
              </TableCell>
              <TableCell>Desktop</TableCell>
              <TableCell>13.0</TableCell>
              <TableCell>2.4.1</TableCell>
              <TableCell>1.0.5</TableCell>
              <TableCell>Samsung</TableCell>
              <TableCell>Galaxy S21</TableCell>
              <TableCell>Chrome 120</TableCell>
              <TableCell>Android</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserDetails;
