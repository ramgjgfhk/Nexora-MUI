import React from "react";
import { Box, Typography, Button } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { motion } from "framer-motion";

const Preference = () => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      sx={{py:"150px"}}
    >
      <SettingsOutlinedIcon sx={{ fontSize: 50, color: "#9CA3AF", mb: 1 }} />

      <Typography variant="subtitle1" fontWeight={600} gutterBottom>
        No preferences set
      </Typography>

      <Typography
        variant="body2"
        sx={{ color: "#6B7280", maxWidth: 400, mb: 2 }}
      >
        You haven’t configured any preferences yet. Customize your experience
        by setting notification options, language, and more.
      </Typography>

      <Button
        variant="contained"
        sx={{
          // backgroundColor: "#f50057",
          textTransform: "none",
          fontSize: 13,
          px: 3,
          py: 1,
          // "&:hover": {
          //   backgroundColor: "#e91e63",
          // },
        }}
      >
        Set Preferences
      </Button>
    </Box>
  );
};

export default Preference;
