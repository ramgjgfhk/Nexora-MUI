import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import UserDetails from "./userDetails";
import UserActivity from "./userActivity";
import UserEngagement from "./userEngagement";
import { useActiveColor } from "context/activeColor";
import UserProfile from "./userProfile";

const CustomerProfile = () => {
  const { ActiveThemeColor } = useActiveColor();
  const [activeTab, setActiveTab] = React.useState("profile");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="content" style={{fontFamily:'Roboto,san-serif'}}>
      <ButtonGroup className="d-flex mb-4" size="md">
        {["profile", "activity", "engagement"].map((tab) => (
          <Button
            key={tab}
            color={tab === activeTab ? ActiveThemeColor : "default"}
            onClick={() => handleTabClick(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </Button>
        ))}
      </ButtonGroup>
      <UserProfile activeTab={activeTab} />

      {activeTab === "profile" ? (
        <UserDetails />
      ) : activeTab === "activity" ? (
        <UserActivity />
      ) : activeTab === "engagement" ? (
        <UserEngagement />
      ) : null}
    </div>
  );
};

export default CustomerProfile;
