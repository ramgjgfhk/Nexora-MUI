import { Box, Typography, Grid, Stack } from "@mui/material";
import { GlassCard } from "../User/UserProfile/UserProfileComponents/ProfileCard";
import {
  Add,
  AddCircleOutline,
  BarChart,
  Description,
  PeopleAlt,
} from "@mui/icons-material";

const actions = [
  {
    label: "Create Campaign",
    color: "#DBEAFE",
    icon: Add,
    iconColor: "#3B82F6",
  },
  {
    label: "Create Segment",
    color: "#DCFCE7",
    icon: PeopleAlt,
    iconColor: "#22C55E",
  },
  {
    label: "Create Template",
    color: "#F3E8FF",
    icon: Description,
    iconColor: "#A855F7",
  },
  {
    label: "View Reports",
    color: "#FEF3C7",
    icon: BarChart,
    iconColor: "#F97316",
  },
];

export default function QuickActionsCard() {
  return (
    <GlassCard sx={{py:2}}>
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
        Quick Actions
      </Typography>

      <Grid container spacing={2}>
        {actions.map((action, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
            <Box
              sx={{
                border: "1px solid #E2E8F0",
                p: 2,
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                cursor: "pointer",
                "&:hover": {
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                },
              }}
            >
              <Box
                sx={{
                  bgcolor: action.color,
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: action.iconColor,
                  fontSize: 24,
                  mb: 1,
                }}
              >
                <action.icon />
              </Box>
              <Typography
              variant="subtitle2"
                sx={{ color: "#1f2937", textAlign: "center" }}
              >
                {action.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </GlassCard>
  );
}
