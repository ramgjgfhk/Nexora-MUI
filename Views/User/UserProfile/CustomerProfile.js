"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Tab,
  Tabs,
} from "@mui/material";
import {
  GlassCard,
} from "./UserProfileComponents/ProfileCard";
import {
  tabItems,
} from "./UserProfileComponents/userProfileVariable";
import UserProfileHeader from "./UserProfileComponents/UserProfileHeader";
import StatsCard from "./UserProfileComponents/StatsCard";
import PersonalInfoTab from "./UserProfileComponents/PersonalInfoTab";
import DeviceTab from "./UserProfileComponents/DeviceTab";
import AnalyticsTab from "./UserProfileComponents/AnalyticsTab";
import EngagementTab from "./UserProfileComponents/EngagementTab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}
export default function CustomerProfilePage() {
  const [activeTab, setActiveTab] = useState(0);
  console.log("activeTab", activeTab);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      sx={{
        // minHeight: "100vh",
        // background: `linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)`,
        py: 1,
      }}
    >
      <Container maxWidth="xl">
        {/* Header Section */}
        <UserProfileHeader />

        {/* Stats Cards */}
        <StatsCard />

        {/* Tabbed Content */}
        <GlassCard>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              TabIndicatorProps={{
                style: { backgroundColor: "#2E82DB" }, // 👈 sets the underline color
              }}
            >
              {tabItems.map((item, index) => (
                <Tab
                  key={index}
                  label={item.label}
                  icon={item.icon}
                  iconPosition="start"
                  sx={{
                    fontWeight: 600,
                    textTransform: "none",
                    fontSize: "0.90rem",
                    color: "text.secondary",
                    "&.Mui-selected": {
                      color: "#2E82DB",
                    },
                    "&:hover": {
                      backgroundColor: "transparent", // Removes background on hover
                    },
                  }}
                />
              ))}
            </Tabs>
          </Box>
          <TabPanel>
            {activeTab === 0 ? (
              <PersonalInfoTab />
            ) : activeTab === 1 ? (
              <DeviceTab />
            ) : activeTab === 2 ? (
              <AnalyticsTab />
            ) : activeTab === 3 ? (
              <EngagementTab />
            ) : null
            // activeTab === 4 && <PreferencesTab />
            }
          </TabPanel>
        </GlassCard>
      </Container>
    </Box>
  );
}
