import React from "react";
import {
  Modal,
  Box,
  Typography,
  Divider,
  IconButton,
  ButtonGroup,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Close } from "@mui/icons-material";
import Overview from "./overView";
import Subscriptions from "./subscription";
import Activity from "./activity";
import Preference from "./preference";

const MotionBox = motion(Box);
const tabs = ["Overview", "Preferences", "Subscriptions", "Activity Feed"];

export default function UserDetailsModal({ open, onClose, selectedRow }) {

  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <AnimatePresence>
      {open && (
        <Modal
          open={open}
          onClose={onClose}
          // closeAfterTransition
          // slots={{ backdrop: () => null }}
        >
          <MotionBox
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.2 }}
            sx={{
              position: "fixed",
              right: 0,
              m: 0,
              top: 0,
              height: "100vh",
              width: { xs: "100%", sm: "450px" },
              bgcolor: "#fff",
              boxShadow: 24,
              py: 2,
              px: 4,
            }}
          >
            {/* {user ? ( */}
            <>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h3" sx={{ fontSize: "15px" }} gutterBottom>
                  User Details
                </Typography>
                <IconButton
                  size="small"
                  onClick={() => onClose()}
                  sx={{ border: "none" }}
                >
                  <Close />
                </IconButton>
              </Box>
              <Divider />

              <Box>
                <Tabs
                  value={activeTab}
                  onChange={(e, newValue) => setActiveTab(newValue)}
                  variant="scrollable"
                  scrollButtons={false}
                  TabIndicatorProps={{ style: { display: "none" } }}
                  sx={tabStyle}
                >
                  {tabs.map((label, index) => (
                    <Tab
                      key={label}
                      label={
                        <Box
                          sx={{ position: "relative", display: "inline-block" }}
                        >
                          {label}
                          {activeTab === index && (
                            <motion.div
                              layoutId="underline"
                              style={{
                                position: "absolute",
                                left: 0,
                                right: 0,
                                bottom: -4,
                                height: 3,
                                backgroundColor: "#f50057", // your pink underline
                                borderRadius: 2,
                              }}
                              transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 30,
                              }}
                            />
                          )}
                        </Box>
                      }
                    />
                  ))}
                </Tabs>
              </Box>
              <Divider />
              {activeTab === 0 ? (
                <Overview data={selectedRow} />
              ) : activeTab === 2 ? (
                <Subscriptions />
              ) : activeTab === 3 ? (
                <Activity />
              ) : activeTab === 1 ? (
                <Preference />
              ) : null}
            </>
            {/* ) : (
              <Typography>Loading...</Typography>
            )} */}
          </MotionBox>
        </Modal>
      )}
    </AnimatePresence>
  );
}

const tabStyle = {
  minHeight: 40,
  padding: 0,
  "& .MuiTab-root": {
    mt: 1,
    textTransform: "none",
    fontSize: 12,
    fontWeight: 500,
    color: "#374151",
    minHeight: 20,
    // px: 2,
    border: "none",
    outline: "none",
    "&:hover": {
      backgroundColor: "transparent",
      border: "none",
      outline: "none",
    },
    "&:focus": {
      outline: "none",
      border: "none",
    },
    "&.Mui-focusVisible": {
      outline: "none",
      border: "none",
    },
  },
  "& .Mui-selected": {
    color: "#111827",
    fontWeight: 600,
  },
};
