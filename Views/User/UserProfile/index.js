import React from "react";
import { Button, ButtonGroup, Box } from "@mui/material";
import UserDetails from "./userDetails";
import UserActivity from "./userActivity";
import UserEngagement from "./userEngagement";
import UserProfiles from "./userProfile";
import { useRouter } from "next/router";

const UserProfile = () => {
  const router = useRouter()
  const [activeTab, setActiveTab] = React.useState("profile");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  

  return (
    <Box className="content" sx={{ fontFamily: "Roboto, sans-serif",mt:{xs:10,md:1,lg:0} }}>
      <ButtonGroup variant="outlined" fullWidth sx={{ mb: 3 }}>
        {["profile", "activity", "engagement"].map((tab) => (
          <Button
            key={tab}
            variant={tab === activeTab ? "contained" : "outlined"}
            color={tab === activeTab ? "primary" : "inherit"}
            onClick={() => handleTabClick(tab)}
            sx={{
              textTransform: "capitalize",
            }}
          >
            {tab}
          </Button>
        ))}
      </ButtonGroup>

      <UserProfiles activeTab={activeTab} />

      {activeTab === "profile" ? (
        <UserDetails />
      ) : activeTab === "activity" ? (
        <UserActivity />
      ) : activeTab === "engagement" ? (
        <UserEngagement />
      ) : null}
    </Box>
  );
};

export default UserProfile;
