import { Box, Button, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

const Activity = () => {
  return (
    <Box
      component={motion.div}
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      textAlign="center"
      sx={{py:'150px'}}
    >
      <Typography variant="subtitle1" fontWeight={600}>
        No activity in the past 24h
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        maxWidth={400}
        mx="auto"
        mt={1}
      >
        This subscriber hasn't received any notifications yet. Once a workflow
        is triggered for them, you'll see their notification history and
        delivery details here.
      </Typography>

      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        mt={4}
      >
        <Button
          variant="text"
          startIcon={<DescriptionOutlinedIcon sx={{ fontSize: 16 }} />}
          sx={{
            fontSize: "12px",
            color: "#6B7280",
            textTransform: "none",
          }}
        >
          View Docs
        </Button>

        <Button
          variant="contained"
          size="small"
          startIcon={<PlayArrowIcon sx={{ fontSize: 16 }} />}
          sx={{
            // backgroundColor: "#f50057",
            textTransform: "none",
            fontSize: "12px",
            // px: 2.5,
            // "&:hover": {
            //   backgroundColor: "#c51162",
            // },
          }}
        >
          Trigger Workflow
        </Button>
      </Stack>
    </Box>
  );
};

export default Activity;
