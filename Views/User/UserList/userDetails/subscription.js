import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Subscriptions() {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "300px",
        textAlign: "center",
        py:'150px'
      }}
    >
      {/* Icon container */}
      <Box sx={{ position: "relative", mb: 2 }}>
        <MailOutlineIcon sx={{ fontSize: 40, color: "#9CA3AF" }} />
        <SettingsIcon
          sx={{
            fontSize: 14,
            color: "#9CA3AF",
            position: "absolute",
            bottom: 2,
            right: -4,
          }}
        />
      </Box>

      {/* Text */}
      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
        This subscriber has no topic subscriptions
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "#6B7280", mt: 1, fontSize: "13px" }}
      >
        Subscribers can be added to topics via the API or from the topic screen.
      </Typography>
    </Box>
  );
}
