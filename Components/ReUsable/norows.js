import { Box, Typography, Button } from "@mui/material";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";



export default function NoRows({ message = "No rows to display"}) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
      p={4}
      // bgcolor="#fef6f9"
      borderRadius={4}
      // border="2px dashed #ff4081"
    >
      <SentimentDissatisfiedIcon sx={{ fontSize: 60, color: "#ff4081", mb: 2 }} />
      <Typography variant="h6"  gutterBottom>
        {message}
      </Typography>
      {/* {/* {onRefresh && ( */}
        <Button
          variant="contained"
          color="secondary"
          // onClick={onRefresh}
          sx={{
            textTransform: "none",
            borderRadius: "20px",
            bgcolor: "#ff4081",
            ":hover": { bgcolor: "#f50057" }
          }}
        >
          Refresh
        </Button>
      {/* )} */} 
    </Box>
  );
}
