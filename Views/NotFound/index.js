import { useEffect } from "react";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      router.pathname
    );
  }, [router.pathname]);

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        alignItems: "center",
        py: 4,
      }}
    >
      <Container maxWidth="md">
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{ textAlign: "center" }}
        >
          {/* 404 Number Animation */}
          <MotionBox
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.2,
              type: "spring",
              bounce: 0.4,
            }}
            sx={{ mb: 4 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "8rem", md: "12rem" },
                fontWeight: 900,
                background: "linear-gradient(135deg, #ffffff 0%, #f0f4ff 100%)",
                backgroundClip: "text",
                textFillColor: "transparent",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 30px rgba(255, 255, 255, 0.5)",
                lineHeight: 0.8,
              }}
            >
              404
            </Typography>
          </MotionBox>

          {/* Error Message */}
          <MotionTypography
            variant="h4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            sx={{
              color: "white",
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: "1.75rem", md: "2.125rem" },
            }}
          >
            Oops! Page Not Found
          </MotionTypography>

          <MotionTypography
            variant="h6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            sx={{
              color: "rgba(255, 255, 255, 0.8)",
              mb: 4,
              maxWidth: "500px",
              mx: "auto",
              fontWeight: 400,
            }}
          >
            The page you're looking for doesn't exist or has been moved. Don't
            worry, let's get you back on track!
          </MotionTypography>

          {/* Action Buttons */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
              sx={{ mb: 4 }}
            >
              <Button
                variant="outlined"
                size="large"
                startIcon={<ArrowBack />}
                onClick={handleGoBack}
                sx={{
                  py: 2,
                  px: 4,
                  fontSize: "1.1rem",
                  background: "rgba(255, 255, 255, 0.2)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  color: "white",
                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.3)",
                  },
                }}
              >
                Go Back
              </Button>
            </Stack>
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default NotFound;
