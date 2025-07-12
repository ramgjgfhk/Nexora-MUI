import { Box, Grid, Tab, Tabs } from "@mui/material";
import React from "react";
import UserHeader from "./Hearder";
import CustomerInformation from "./CustomerInformation";
import { GlassCard } from "../User/UserProfile/UserProfileComponents/ProfileCard";
import { tabItems } from "../User/UserProfile/UserProfileComponents/userProfileVariable";
import DeviceTab from "./DeviceTab";
import EngagementTab from "./EngagementTab";
import AnalyticsTab from "./Analytics";
import { useRouter } from "next/router";
import { fetchUserDetails } from "@/pages/api/UserProfilePageApi";

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
      {value === index && <Box sx={{}}>{children}</Box>}
    </div>
  );
}
const UserProfile = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState(0);
  const [userDetails, setUserDetails] = React.useState({});

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  React.useEffect(() => {
    if (!router.isReady) return;

    const fetchData = async () => {
      try {
        const { id } = router.query;
        if (!id) return;

        const decodeId = atob(id);
        console.log("Decoded ID:", decodeId);

        const data = await fetchUserDetails(decodeId);
        console.log("Fetched user data:", data);
        setUserDetails(data);
        // setState(data); // If you want to display it
      } catch (error) {
        console.error("Error in user profile effect:", error);
      }
    };

    fetchData();
  }, [router.isReady, router.query]);
  return (
    <Box>
      <UserHeader data={userDetails}/>
      <Grid spacing={2} container sx={{ width: "100%" }}>
        <Grid size={{ xs: 12, lg: 4 }}>
          <CustomerInformation data={userDetails}/>
        </Grid>
        <Grid size={{ xs: 12, lg: 8 }}>
          {" "}
          <GlassCard>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons="auto"
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "inherit",
                    // height: 3,
                    borderRadius: 2,
                  },
                }}
                sx={{
                  ".MuiTab-root": {
                    textTransform: "none",
                    fontWeight: 500,
                    fontSize: "0.8rem",
                    color: "text.secondary",
                    // mx: 1,
                    "&:hover": {
                      //   color: "#1976d2",
                      //   backgroundColor: "rgba(25, 118, 210, 0.08)",
                      borderRadius: 1,
                    },
                  },
                  ".Mui-selected": {
                    color: "black",
                    fontWeight: 600,
                  },
                }}
              >
                {[
                  // Put "Engagement" first
                  ...tabItems.filter((item) => item.label === "Engagement"),
                  // Then put all others except "Personal Info" and "Engagement"
                  ...tabItems.filter(
                    (item) =>
                      item.label !== "Engagement" &&
                      item.label !== "Personal Info"
                  ),
                ].map((item, index) => (
                  <Tab
                    key={index}
                    label={item.label}
                    sx={{
                      fontWeight: item.label ? 600 : null,
                      textTransform: "none",
                      color: "text.secondary",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                  />
                ))}
              </Tabs>
            </Box>
            <TabPanel>
              {
                // activeTab === 0 ? (
                //   <PersonalInfoTab />
                // ) :
                activeTab === 0 ? (
                  <EngagementTab />
                ) : activeTab === 1 ? (
                  <DeviceTab />
                ) : activeTab === 2 ? (
                  <AnalyticsTab />
                ) : null
                // activeTab === 4 && <PreferencesTab />
              }
            </TabPanel>
          </GlassCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserProfile;
