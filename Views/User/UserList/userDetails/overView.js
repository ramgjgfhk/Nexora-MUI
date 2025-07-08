import {
  AccessTime,
  ArrowDropDown,
  ContentCopy,
  Email,
  InfoOutlined,
  Phone,
  Public,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const Overview = ({ data }) => {
  return (
    <Box mt={2}>
      <Grid container spacing={2} alignItems="center">
        <Grid container sx={{ width: "100%" }}>
          <Grid size={{ xs: 2, sm: 2 }}>
            <Avatar sx={{ width: 64, height: 64 }} />
          </Grid>
          <Grid size={{ xs: 5 }}>
            <InputLabel className="labelSize">First Name</InputLabel>
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <TextField
                type="text"
                size="small"
                InputProps={{ sx: { fontSize: "10px" } }}
                value={data?.name}
              />
            </motion.div>
          </Grid>
          <Grid size={{ xs: 5 }}>
            <InputLabel className="labelSize">Last Name</InputLabel>
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <TextField
                type="text"
                size="small"
                InputProps={{ sx: { fontSize: "10px" } }}
              />
            </motion.div>
          </Grid>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <InputLabel className="labelSize">SubscriberId</InputLabel>

            <Typography
              variant="body2"
              component="a"
              href="#"
              sx={{
                fontSize: "10px",
                textDecoration: "none",
                color: "#6B7280",
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              How it works?
            </Typography>
          </Box>
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <TextField
              fullWidth
              size="small"
              InputProps={{
                sx: { fontSize: "10px" },
                endAdornment: (
                  <InputAdornment position="end">
                    <Tooltip title="Copy to clipboard">
                      <ContentCopy
                        sx={{ fontSize: "15px", cursor: "pointer" }}
                        onClick={() => alert("hello")}
                      />
                    </Tooltip>
                  </InputAdornment>
                ),
              }}
              value={data?.nexora_id}
            />
          </motion.div>
        </Grid>
        <Grid container sx={{ width: "100%" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <InputLabel className="labelSize">Email Address</InputLabel>
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <TextField
                type="text"
                size="small"
                value={data?.email}
                InputProps={{
                  sx: { fontSize: "10px" },
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email sx={{ fontSize: "15px", cursor: "pointer" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <InputLabel className="labelSize">Phone</InputLabel>
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <TextField
                type="text"
                size="small"
                value={data?.mobile}
                InputProps={{
                  sx: { fontSize: "10px" },
                  startAdornment: (
                    <InputAdornment position="start">
                      <Phone sx={{ fontSize: "15px", cursor: "pointer" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </motion.div>
          </Grid>
        </Grid>

        <Grid container sx={{ width: "100%" }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <InputLabel className="labelSize">Language</InputLabel>
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <TextField
                type="text"
                size="small"
                defaultValue="English"
                InputProps={{
                  sx: { fontSize: "10px" },
                  startAdornment: (
                    <InputAdornment position="start">
                      <Public sx={{ fontSize: "15px", cursor: "pointer" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </motion.div>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <InputLabel className="labelSize">Timezone</InputLabel>
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <TextField
                type="text"
                size="small"
                defaultValue="Indian Standard Time (IST)"
                fullWidth
                InputProps={{
                  sx: { fontSize: "10px" },
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccessTime
                        sx={{ fontSize: "15px", cursor: "pointer" }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Overview;
