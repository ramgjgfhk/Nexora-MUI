
import { useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Stack,
  Paper,
  Chip,
  IconButton,
  Divider,
} from "@mui/material";
import {
  Home,
  ArrowBack,
  Search,
  Help,
  BugReport,
  Refresh,
  ErrorOutline,
  Navigation,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { useRouter } from "next/router";

const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionTypography = motion(Typography);

const quickLinks = [
  { label: "Home", path: "/", icon: <Home /> },
  { label: "Search", path: "/search", icon: <Search /> },
  { label: "Help Center", path: "/help", icon: <Help /> },
  { label: "Contact Support", path: "/support", icon: <BugReport /> },
];

const NotFound = () => {
    const router = useRouter()

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      router.pathname,
    );
  }, [router.pathname]);

  const handleGoBack = () => {
    router.back()
  };

  const handleGoHome = () => {
    router.push("/dashboard");
  };

  const handleRefresh = () => {
    window.location.reload();
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

          {/* Error Details Card */}
          <MotionCard
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            sx={{
              mb: 4,
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <ErrorOutline sx={{ color: "error.main", mr: 1 }} />
                <Typography variant="h6" fontWeight={600}>
                  Error Details
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mr: 1 }}
                >
                  Requested URL:
                </Typography>
                <Chip
                  label={router.pathname}
                  size="small"
                  sx={{
                    fontFamily: "monospace",
                    fontSize: "0.75rem",
                    background: "#f1f5f9",
                  }}
                />
              </Box>
              <Typography variant="body2" color="text.secondary">
                This route is not recognized by our application router.
              </Typography>
            </CardContent>
          </MotionCard>

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
                variant="contained"
                size="large"
                startIcon={<Home />}
                onClick={handleGoHome}
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
                Go Home
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<ArrowBack />}
                onClick={handleGoBack}
                sx={{
                  py: 2,
                  px: 4,
                  fontSize: "1.1rem",
                  color: "white",
                  borderColor: "rgba(255, 255, 255, 0.3)",
                  "&:hover": {
                    borderColor: "rgba(255, 255, 255, 0.5)",
                    background: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                Go Back
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<Refresh />}
                onClick={handleRefresh}
                sx={{
                  py: 2,
                  px: 4,
                  fontSize: "1.1rem",
                  color: "white",
                  borderColor: "rgba(255, 255, 255, 0.3)",
                  "&:hover": {
                    borderColor: "rgba(255, 255, 255, 0.5)",
                    background: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                Refresh
              </Button>
            </Stack>
          </MotionBox>

          {/* Quick Links */}
          <MotionCard
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            sx={{
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Navigation sx={{ color: "primary.main", mr: 1 }} />
                <Typography variant="h6" fontWeight={600}>
                  Quick Navigation
                </Typography>
              </Box>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                divider={<Divider orientation="vertical" flexItem />}
              >
                {quickLinks.map((link, index) => (
                  <MotionBox
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    sx={{ flex: 1 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 2,
                        textAlign: "center",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        background: "transparent",
                        border: "1px solid rgba(99, 102, 241, 0.2)",
                        "&:hover": {
                          background: "rgba(99, 102, 241, 0.1)",
                          borderColor: "primary.main",
                        },
                      }}
                      onClick={() => navigate(link.path)}
                    >
                      <Box sx={{ color: "primary.main", mb: 1 }}>
                        {link.icon}
                      </Box>
                      <Typography variant="body2" fontWeight={600}>
                        {link.label}
                      </Typography>
                    </Paper>
                  </MotionBox>
                ))}
              </Stack>
            </CardContent>
          </MotionCard>

          {/* Help Text */}
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            sx={{ mt: 4 }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                maxWidth: "400px",
                mx: "auto",
              }}
            >
              If you continue to experience issues, please contact our support
              team. We're here to help!
            </Typography>
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default NotFound;
