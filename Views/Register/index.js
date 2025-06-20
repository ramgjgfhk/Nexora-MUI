"use client";

import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  Divider,
  Link,
  useTheme,
  Container,
  Avatar,
  Paper,
  Fade,
  Slide,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  Email,
  Lock,
  Person,
  Google as GoogleIcon,
  GitHub as GitHubIcon,
  Apple as AppleIcon,
  PersonAddOutlined,
} from "@mui/icons-material";

export default function RegisterPage() {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log("Register attempt:", formData);
    }, 2000);
  };

  const handleSocialLogin = (provider) => {
    console.log(`Register with ${provider}`);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `linear-gradient(135deg, ${theme.palette.secondary.main}10 0%, ${theme.palette.primary.main}10 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        py: 4,
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          left: "-10%",
          width: "120%",
          height: "120%",
          background: `
            radial-gradient(circle at 20% 80%, ${theme.palette.secondary.main}15 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, ${theme.palette.primary.main}15 0%, transparent 50%)
          `,
          zIndex: 0,
        }}
      />

      <Container
        component="main"
        maxWidth="sm"
        sx={{ position: "relative", zIndex: 1 }}
      >
        <Fade in timeout={800}>
          <Paper
            elevation={12}
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              background: `linear-gradient(145deg, ${theme.palette.background.paper}95, ${theme.palette.background.paper}98)`,
              backdropFilter: "blur(20px)",
              border: `1px solid ${theme.palette.divider}30`,
            }}
          >
            <Box sx={{ p: 0 }}>
              {/* Header Section */}
              <Box
                sx={{
                  background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
                  color: "white",
                  p: 4,
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <Slide direction="down" in timeout={1000}>
                  <Avatar
                    sx={{
                      m: "auto",
                      mb: 2,
                      bgcolor: "rgba(255,255,255,0.2)",
                      width: 64,
                      height: 64,
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <PersonAddOutlined sx={{ fontSize: 32 }} />
                  </Avatar>
                </Slide>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                  Create Account
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                  Join us and start your journey
                </Typography>
              </Box>

              {/* Form Section */}
              <CardContent sx={{ p: 4 }}>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      name="firstName"
                      autoComplete="given-name"
                      autoFocus
                      value={formData.firstName}
                      onChange={handleChange("firstName")}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Person color="action" />
                          </InputAdornment>
                        ),
                      }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                        },
                      }}
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                      value={formData.lastName}
                      onChange={handleChange("lastName")}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                        },
                      }}
                    />
                  </Box>

                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange("email")}
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
                      },
                    }}
                  />

                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    autoComplete="new-password"
                    value={formData.password}
                    onChange={handleChange("password")}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock color="action" />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                      },
                    }}
                  />

                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange("confirmPassword")}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Lock color="action" />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowConfirmPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showConfirmPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2,
                      },
                    }}
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        value="agreeTerms"
                        color="primary"
                        checked={formData.agreeTerms}
                        onChange={handleChange("agreeTerms")}
                      />
                    }
                    label={
                      <Typography variant="body2">
                        I agree to the{" "}
                        <Link href="#" sx={{ textDecoration: "none" }}>
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="#" sx={{ textDecoration: "none" }}>
                          Privacy Policy
                        </Link>
                      </Typography>
                    }
                    sx={{ mt: 2, mb: 1 }}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={isLoading || !formData.agreeTerms}
                    sx={{
                      mt: 3,
                      mb: 2,
                      py: 1.5,
                      borderRadius: 2,
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      textTransform: "none",
                      background: `linear-gradient(135deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.dark})`,
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: `0 8px 25px ${theme.palette.secondary.main}40`,
                      },
                    }}
                  >
                    {isLoading ? "Creating Account..." : "Create Account"}
                  </Button>

                  <Divider sx={{ my: 3 }}>
                    <Typography variant="body2" color="text.secondary">
                      Or register with
                    </Typography>
                  </Divider>

                  {/* Social Login Buttons */}
                  <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                    <Button
                      fullWidth
                      variant="outlined"
                      onClick={() => handleSocialLogin("Google")}
                      startIcon={<GoogleIcon />}
                      sx={{
                        py: 1.2,
                        borderRadius: 2,
                        textTransform: "none",
                      }}
                    >
                      Google
                    </Button>
                    <Button
                      fullWidth
                      variant="outlined"
                      onClick={() => handleSocialLogin("GitHub")}
                      startIcon={<GitHubIcon />}
                      sx={{
                        py: 1.2,
                        borderRadius: 2,
                        textTransform: "none",
                      }}
                    >
                      GitHub
                    </Button>
                  </Box>

                  <Box sx={{ textAlign: "center" }}>
                    <Typography variant="body2" color="text.secondary">
                      Already have an account?{" "}
                      <Link
                        href="/"
                        sx={{
                          color: theme.palette.secondary.main,
                          textDecoration: "none",
                          fontWeight: 600,
                          "&:hover": { textDecoration: "underline" },
                        }}
                      >
                        Sign in here
                      </Link>
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Box>
          </Paper>
        </Fade>
      </Container>
    </Box>
  );
}
