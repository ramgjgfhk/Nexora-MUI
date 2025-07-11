import { Typography, Box } from "@mui/material";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import { DisplaySettings, SettingsApplications } from "@mui/icons-material";

export default function PropertiesHeader({ masterName }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        py: 1,
        px: 1.5,
        bgcolor: "background.paper",
        borderBottom: "1px solid",
        borderColor: "divider",
        borderRadius: "8px",
      }}
    >
      <SettingsApplications color="primary" sx={{ fontSize: 16 }} />
      <Typography
        variant="subtitle2"
        sx={{
          fontWeight: 600,
          fontSize: "11px",
          color: "primary.main",
        }}
      >
        {masterName}
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          fontWeight: 500,
          fontSize: "10px",
          color: "text.secondary",
        }}
      >-
        Properties
      </Typography>
    </Box>
  );
}
