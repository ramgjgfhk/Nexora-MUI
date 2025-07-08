import { AccessTime,     Star, TrendingUp } from "@mui/icons-material";
import { Avatar, Card, keyframes, styled } from "@mui/material";
import { CalendarIcon } from "@mui/x-date-pickers";
import { customerData } from "./userProfileVariable";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulseGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(25, 118, 210, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(25, 118, 210, 0.6);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const ProfileCard = styled(Card)(({ theme }) => ({
  background: `linear-gradient(135deg, rgba(25, 118, 210, 0.05) 0%, rgba(25, 118, 210, 0.02) 100%)`,
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  borderRadius: theme.spacing(3),
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  animation: `${fadeInUp} 0.8s ease-out`,
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 16px 48px rgba(0, 0, 0, 0.15)",
  },
}));

export const PremiumAvatar = styled(Avatar)(({ theme }) => ({
  width: 120,
  height: 120,
  border: "4px solid rgba(25, 118, 210, 0.2)",
  background: `linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)`,
  fontSize: "3rem",
  fontWeight: 700,
  boxShadow: "0 8px 32px rgba(25, 118, 210, 0.3)",
  animation: `${pulseGlow} 3s infinite`,
}));



export const GlassCard = styled(Card)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  borderRadius: theme.spacing(2),
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
  animation: `${slideIn} 0.6s ease-out`,
}));
