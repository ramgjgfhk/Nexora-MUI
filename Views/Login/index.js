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
  Google as GoogleIcon,
  GitHub as GitHubIcon,
  Apple as AppleIcon,
  LockOutlined,
} from "@mui/icons-material";
import { useRouter } from "next/router";

export default function LoginPage() {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // In a real app, handle login logic here
      console.log("Login attempt:", { email, password, rememberMe });
    }, 2000);
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    // Handle social login
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `linear-gradient(135deg, ${theme.palette.primary.main}10 0%, ${theme.palette.secondary.main}10 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
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
            radial-gradient(circle at 20% 80%, ${theme.palette.primary.main}15 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, ${theme.palette.secondary.main}15 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, ${theme.palette.primary.main}08 0%, transparent 50%)
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
              // height:'500px'
            }}
          >
            <Box sx={{ p: 0 }}>
              {/* Header Section */}
              <Box
                sx={{
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
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
                    <LockOutlined sx={{ fontSize: 32 }} />
                  </Avatar>
                </Slide>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                  Welcome Back
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                  Sign in to access your dashboard
                </Typography>
              </Box>

              {/* Form Section */}
              <CardContent sx={{ p: 4 }}>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-1px)",
                          boxShadow: theme.shadows[4],
                        },
                      },
                    }}
                  />

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: 2,
                      mb: 2,
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          value="remember"
                          color="primary"
                          checked={rememberMe}
                          onChange={(e) => setRememberMe(e.target.checked)}
                        />
                      }
                      label="Remember me"
                    />
                    <Link
                      href="#"
                      variant="body2"
                      sx={{
                        textDecoration: "none",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      Forgot password?
                    </Link>
                  </Box>

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={isLoading}
                    onClick={() => router.push("/dashboard")}
                    sx={{
                      mt: 3,
                      mb: 2,
                      py: 1.5,
                      borderRadius: 2,
                      fontSize: "1.1rem",
                      fontWeight: 600,
                      textTransform: "none",
                      background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: `0 8px 25px ${theme.palette.primary.main}40`,
                        background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`,
                      },
                      "&:disabled": {
                        background: theme.palette.action.disabledBackground,
                      },
                    }}
                  >
                    {isLoading ? "Signing In..." : "Sign In"}
                  </Button>

                  {/* <Divider sx={{ my: 3 }}>
                    <Typography variant="body2" color="text.secondary">
                      Or continue with
                    </Typography>
                  </Divider> */}

                  {/* Social Login Buttons */}
                  {/* <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                    <Button
                      fullWidth
                      variant="outlined"
                      onClick={() => handleSocialLogin("Google")}
                      startIcon={<GoogleIcon />}
                      sx={{
                        py: 1.2,
                        borderRadius: 2,
                        textTransform: "none",
                        borderColor: theme.palette.divider,
                        "&:hover": {
                          borderColor: "#4285F4",
                          backgroundColor: "#4285F410",
                          transform: "translateY(-1px)",
                        },
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
                        borderColor: theme.palette.divider,
                        "&:hover": {
                          borderColor: "#333",
                          backgroundColor: "#33333310",
                          transform: "translateY(-1px)",
                        },
                      }}
                    >
                      GitHub
                    </Button>
                    <Button
                      fullWidth
                      variant="outlined"
                      onClick={() => handleSocialLogin("Apple")}
                      startIcon={<AppleIcon />}
                      sx={{
                        py: 1.2,
                        borderRadius: 2,
                        textTransform: "none",
                        borderColor: theme.palette.divider,
                        "&:hover": {
                          borderColor: "#000",
                          backgroundColor: "#00000010",
                          transform: "translateY(-1px)",
                        },
                      }}
                    >
                      Apple
                    </Button>
                  </Box> */}

                  <Box sx={{ textAlign: "center" }}>
                    <Typography variant="body2" color="text.secondary">
                      Don't have an account?{" "}
                      <Link
                        href="/register"
                        sx={{
                          color: theme.palette.primary.main,
                          textDecoration: "none",
                          fontWeight: 600,
                          "&:hover": { textDecoration: "underline" },
                        }}
                      >
                        Sign up here
                      </Link>
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Box>
          </Paper>
        </Fade>
      </Container>

      {/* Floating particles effect */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {[...Array(5)].map((_, i) => (
          <Box
            key={i}
            sx={{
              position: "absolute",
              width: "20px",
              height: "20px",
              background: `${theme.palette.primary.main}20`,
              borderRadius: "50%",
              animation: `float ${3 + i}s ease-in-out infinite`,
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`,
              "@keyframes float": {
                "0%, 100%": { transform: "translateY(0px)" },
                "50%": { transform: "translateY(-20px)" },
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
