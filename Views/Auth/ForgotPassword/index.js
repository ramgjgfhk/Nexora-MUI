import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Stack,
  Alert,
  IconButton,
  InputAdornment,
  Link,
  useTheme,
} from "@mui/material";
import {
  Email,
  ArrowBack,
  Send,
  CheckCircle,
  VpnKey,
  Home,
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const MotionCard = motion(Card);
const MotionBox = motion(Box);

const ForgotPassword = () => {
  const theme = useTheme();

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [step, setStep] = useState("input"); // 'input', 'success', 'error'
  const [error, setError] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  // Email validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsValidEmail(validateEmail(value));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail) {
      setError("Please enter a valid email address");
      return;
    }

    setError("");

    // Simulate API call
    try {
      // Simulate success for demo
      setStep("success");
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setStep("error");
    }
  };

  const handleRetry = () => {
    setStep("input");
    setError("");
    setEmail("");
  };

  const handleGoBack = () => {
    router.push("/");
  };

  const renderInputStep = () => (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        {/* Email Field */}
        <MotionBox
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Email color="action" />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 2,
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-1px)",
                  boxShadow: theme.shadows[4],
                },
              },
            }}
          />
        </MotionBox>

        {/* Send Reset Link Button */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button
            type="submit"
            variant="contained"
            fullWidth
            size="large"
            // disabled={!isValidEmail}
            sx={{
              py: 1.5,
              fontSize: "1rem",
              fontWeight: 600,
              borderRadius: 1,
              backgroundColor: "#1976d2",
              textTransform: "none",
              mt: 2,
              "&:hover": {
                backgroundColor: "#1565c0",
              },
              "&:disabled": {
                backgroundColor: "#e0e0e0",
                color: "#9e9e9e",
              },
            }}
          >
            Send Reset Link
          </Button>
        </MotionBox>
      </Stack>
    </form>
  );

  const renderLoadingStep = () => (
    <MotionBox
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      sx={{ textAlign: "center" }}
    >
      <Box sx={{ mb: 3 }}>
        <CircularProgress
          size={60}
          sx={{
            color: "primary.main",
            mb: 2,
          }}
        />
      </Box>

      <Typography variant="h5" fontWeight={600} gutterBottom>
        Sending Reset Link...
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Please wait while we send the password reset instructions to{" "}
        <strong>{email}</strong>
      </Typography>

      <Box
        sx={{
          background: "linear-gradient(135deg, #f0f4ff 0%, #e0e7ff 100%)",
          borderRadius: 2,
          p: 2,
          border: "1px solid #c7d2fe",
        }}
      >
        <Typography variant="body2" color="primary.dark">
          💡 This usually takes just a few seconds
        </Typography>
      </Box>
    </MotionBox>
  );

  const renderSuccessStep = () => (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      sx={{ textAlign: "center" }}
    >
      <MotionBox
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
        sx={{ mb: 2 }}
      >
        <Box
          sx={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            background: "#4caf50",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mb: 2,
          }}
        >
          <CheckCircle sx={{ fontSize: 28, color: "white" }} />
        </Box>
      </MotionBox>

      <Typography variant="h6" fontWeight={600} gutterBottom sx={{ mb: 2 }}>
        Check Your Email!
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: 3, lineHeight: 1.5 }}
      >
        We've sent password reset instructions to{" "}
        <strong style={{ color: "#1976d2" }}>{email}</strong>
        <br />
        Please check your inbox and spam folder.
      </Typography>

      <Stack spacing={2}>
        <Button
          variant="contained"
          onClick={handleRetry}
          fullWidth
          sx={{
            py: 1.5,
            fontSize: "1rem",
            fontWeight: 600,
            borderRadius: 1,
            backgroundColor: "#1976d2",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#1565c0",
            },
          }}
        >
          Send Another Email
        </Button>
        <Button
          variant="outlined"
          onClick={handleGoBack}
          fullWidth
          sx={{
            py: 1.5,
            fontSize: "1rem",
            fontWeight: 600,
            borderRadius: 1,
            color: "#1976d2",
            borderColor: "#1976d2",
            textTransform: "none",
            "&:hover": {
              borderColor: "#1565c0",
              backgroundColor: "rgba(25, 118, 210, 0.04)",
            },
          }}
        >
          Back to Login
        </Button>
      </Stack>
    </MotionBox>
  );

  const renderErrorStep = () => (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      sx={{ textAlign: "center" }}
    >
      <Typography
        variant="h6"
        fontWeight={600}
        gutterBottom
        color="error"
        sx={{ mb: 2 }}
      >
        Something Went Wrong
      </Typography>

      <Alert
        severity="error"
        sx={{ mb: 3, textAlign: "left", borderRadius: 1 }}
      >
        {error}
      </Alert>

      <Stack spacing={2}>
        <Button
          variant="contained"
          onClick={handleRetry}
          fullWidth
          sx={{
            py: 1.5,
            fontSize: "1rem",
            fontWeight: 600,
            borderRadius: 1,
            backgroundColor: "#1976d2",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#1565c0",
            },
          }}
        >
          Try Again
        </Button>
        <Button
          variant="outlined"
          onClick={handleGoBack}
          fullWidth
          sx={{
            py: 1.5,
            fontSize: "1rem",
            fontWeight: 600,
            borderRadius: 1,
            color: "#1976d2",
            borderColor: "#1976d2",
            textTransform: "none",
            "&:hover": {
              borderColor: "#1565c0",
              backgroundColor: "rgba(25, 118, 210, 0.04)",
            },
          }}
        >
          Back to Login
        </Button>
      </Stack>
    </MotionBox>
  );

  const renderContent = () => {
    switch (step) {
      case "loading":
        return renderLoadingStep();
      case "success":
        return renderSuccessStep();
      case "error":
        return renderErrorStep();
      default:
        return renderInputStep();
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e8e5ff 0%, #f0edff 100%)",
        display: "flex",
        alignItems: "center",
        py: 4,
      }}
    >
      <Container maxWidth="sm">
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          sx={{ maxWidth: 360, mx: "auto" }}
        >
          <MotionCard
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            sx={{
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
              border: "none",
              maxWidth: 360,
              mx: "auto",
            }}
          >
            {/* Header Section */}
            <Box
              sx={{
                background: "#1976d2",
                color: "white",
                textAlign: "center",
                py: 3.5,
                px: 3,
                position: "relative",
              }}
            >
              <MotionBox
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring", bounce: 0.5 }}
                sx={{ mb: 2 }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    borderRadius: "50%",
                    background: "rgba(255, 255, 255, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mx: "auto",
                    mb: 2,
                  }}
                >
                  <VpnKey sx={{ fontSize: 24 }} />
                </Box>
              </MotionBox>

              <Typography
                variant="h5"
                fontWeight={600}
                gutterBottom
                sx={{ fontSize: "1.5rem", mb: 0.5 }}
              >
                Reset Password
              </Typography>
              <Typography
                variant="body2"
                sx={{ opacity: 0.9, fontSize: "0.875rem" }}
              >
                Enter your email to receive reset instructions
              </Typography>
            </Box>

            {/* Form Section */}
            <CardContent sx={{ p: 3, backgroundColor: "white" }}>
              {/* Dynamic Content */}
              {renderContent()}

              {/* Footer */}
              <MotionBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                sx={{ mt: 3 }}
              >
                <Typography
                  variant="body2"
                  align="center"
                  color="text.secondary"
                  sx={{ fontSize: "0.875rem" }}
                >
                  Remember your password?{" "}
                  <Link
                    component="button"
                    type="button"
                    variant="body2"
                    onClick={() => router.push("/")}
                    sx={{
                      color: "#1976d2",
                      textDecoration: "none",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Sign in instead
                  </Link>
                </Typography>
              </MotionBox>
            </CardContent>
          </MotionCard>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default ForgotPassword;
