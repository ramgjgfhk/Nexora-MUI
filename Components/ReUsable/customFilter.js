import React, { memo, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  InputAdornment,
  Tooltip,
  Box,
  Autocomplete,
  Typography,
} from "@mui/material";
import {
  FilterList,
  Close,
  Search,
  FilterAlt,
  Cancel,
  DisabledByDefaultRounded,
} from "@mui/icons-material";
import {
  GridToolbarContainer,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const FilterModalComponent = ({
  customFilters = {},
  onApply,
  appliedFilters,
  setAppliedFilters,
}) => {
  const [open, setOpen] = useState(false);
  // const [appliedFilters, setAppliedFilters] = useState({});
  console.log("filter", appliedFilters);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (field, value) => {
    setAppliedFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const handleApplyClick = () => {
    onApply(); // Send filter data to parent
    handleClose(); // Close dialog
  };
  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, []);
  return (
    <>
      <Button
        style={{ fontFamily: "inter" }}
        startIcon={<FilterList sx={{ fontSize: "22.5px !important" }} />}
        sx={{
          textTransform: "none",
          fontSize: "13px",
          fontWeight: 500,
          // color: "#5A7AF2",
          px: 2,
          height: "34px",
          "&:hover": {
            // backgroundColor: "rgba(25, 118, 210, 0.04)",
          },
        }}
        onClick={handleClickOpen}
      >
        Filters
      </Button>
      {/* <GridToolbarFilterButton
  onClick={(event) => {
    event.stopPropagation(); // prevent MUI's internal handler
    event.preventDefault(); // prevent default if needed
    handleClickOpen(); // your custom action
  }}
/> */}

      <Dialog
        open={open}
        onClose={handleClose}
        keepMounted
        PaperProps={{
          sx: {
            position: "fixed",
            right: 0,
            m: 0,
            top: 0,
            height: "100vh",
            width: { xs: "100%", sm: "330px" },
            maxHeight: "100%",
            borderRadius: "0 ",
            px: 1.5,
            py: 1.5,
            backgroundColor: "white",
          },
        }}
      >
        <section>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "16px",
            }}
          >
            <Typography variant="h6" sx={{ fontSize: "13px" }}>
              Filters
            </Typography>
            {/* <button
                      onClick={() => setFilterPanelOpen(false)}
                      style={{
                        border: "none",
                        background: "transparent",
                        cursor: "pointer",
                      }}
                    >
                      ✕
                    </button> */}
            <DisabledByDefaultRounded
              onClick={handleClose}
              fontSize="small"
              sx={{
                color: "rgb(255 102 102 / 78%)",
                cursor: "pointer",
                borderRadius: "6px",
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: "rgba(255, 102, 102, 0.15)", // light red on hover
                  color: "rgb(255 80 80 / 90%)", // slightly deeper red on hover
                  transform: "scale(1.1)", // subtle zoom on hover
                },
              }}
            />
          </div>

          {/* Text Fields */}
          {customFilters?.text?.map((field) => (
            <div key={field.name} style={{ marginBottom: "12px" }}>
              {/* <label
                          style={{
                            display: "block",
                            fontSize: "13px",
                            marginBottom: "4px",
                          }}
                        >
                          {field.label}
                        </label> */}
              <Typography
                variant="subtitle2"
                sx={{ fontSize: "11.5px", mb: 0.3 }}
              >
                {" "}
                {field.label}
              </Typography>
              <TextField
                fullWidth
                value={appliedFilters[field.name] || ""}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                size="small"
                // placeholder="Enter text"
                sx={{
                  "& .MuiInputBase-root": {
                    height: 25, // Total height
                    borderRadius: "4px", // Optional: Rounded corners
                  },
                  "& .MuiInputBase-input": {
                    // padding: "8px 12px", // Control inner text padding
                  },
             
                }}
              ></TextField>
            </div>
          ))}

          {/* Date Pickers */}
          {customFilters?.date?.map((field) => (
            <div key={field.name} style={{ marginBottom: "12px" }}>
              <Typography
                variant="subtitle2"
                sx={{ fontSize: "11.5px", mb: 0.3 }}
              >
                {" "}
                {field.label}
              </Typography>{" "}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  // label="a"
                  // value={toDate}
                  // minDate={fromDate || minDate}
                  // onChange={(newValue) => setToDate(newValue)}

                  value={
                    appliedFilters[field.name]
                      ? dayjs(appliedFilters[field.name])
                      : null
                  }
                  onChange={(newValue) =>
                    handleInputChange(field.name, newValue)
                  }
                  slotProps={{
                    textField: {
                      size: "small",
                      // placeholder:"s",
                      fullWidth: true,
                      sx: {
                        "& label": {
                          fontSize: "12px", // 👈 Smaller label
                          // fontWeight: 500,
                        },
                        "& .MuiInputAdornment-root svg": {
                          fontSize: "18px", // Reduce icon size
                        },
                        "& .MuiIconButton-root": {
                          border: "none",
                          padding: 0,
                          backgroundColor: "transparent",
                        },
                        "& .MuiPickersInputBase-root": { height: "30px" },     "& .MuiPickersSectionList-section": {
                    display: "none !important",
                  },
                      },
                    },
                  }}
                />
              </LocalizationProvider>
              {/* <input
                          type="date"
                          value={filterValues[field.name] || ""}
                          onChange={(e) =>
                            setFilterValues((prev) => ({
                              ...prev,
                              [field.name]: e.target.value,
                            }))
                          }
                          style={{
                            padding: "6px",
                            width: "100%",
                            border: "1px solid #ccc",
                            borderRadius: "6px",
                          }}
                        /> */}
            </div>
          ))}

          {/* Autocomplete (Select Dropdown) */}
          {customFilters?.autocomplete?.map((field) => (
            <div key={field.name} style={{ marginBottom: "12px" }}>
              <Typography
                variant="subtitle2"
                sx={{ fontSize: "11.5px", mb: 0.3 }}
              >
                {" "}
                {field.label}
              </Typography>
              <Autocomplete
                options={field.options}
                size="small"
                value={appliedFilters[field.name] || ""}
                onChange={(e) => handleInputChange(field.name, e.target.value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    sx={{
                      "& .MuiInputBase-root": {
                        height: 30,
                        borderRadius: "6px",
                        // minHeight: 30,
                      },
                      "& .MuiInputBase-input": {
                        // padding: "4px 8px",
                      },
                      "& .MuiAutocomplete-endAdornment": {
                        display: "none", // Hides the default clear icon
                      },
                    }}
                    // value={filterValues[field.name] || ""}
                    // onChange={(e) =>
                    //   setFilterValues((prev) => ({
                    //     ...prev,
                    //     [field.name]: e.target.value,
                    //   }))
                    // }
                  />
                )}
              />
            </div>
          ))}
        </section>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            gap: 1,
            mt: 2,
            mt: "auto",
            justifyContent: "space-between",
            // alignSelf: "flex-end",
          }}
        >
          <Button
            size="small"
            onClick={() => {
              setAppliedFilters({});
              onApply({});
              handleClose();
            }}
            sx={{
              fontSize: "11px",
              // flex: 1,
              textTransform: "none",
              borderRadius: "6px",
              fontWeight: 500,
              height: "30px",
              backgroundColor: "rgb(255 102 102 / 100%)", // matching your icon color
              color: "#fff",
              cursor: "pointer",
              transition: "all 0.2s ease",
              "&:hover": {
                backgroundColor: "rgb(200 50 50 / 85%)", // darker red on hover
                color: "#fff",
                // transform: "scale(1.05)",                 // subtle zoom
                boxShadow: "0 2px 8px rgba(200, 50, 50, 0.4)", // soft dark red glow
              },
            }}
          >
            Remove Filters
          </Button>

          <Button
            size="small"
            variant="contained"
            onClick={handleApplyClick}
            // startIcon={<FilterAlt />}
            sx={{
              fontSize: "11px",
              // flex: 1,
              textTransform: "none",
              borderRadius: "5px",
              height: "30px",
              fontWeight: 500,
              // px: 2,
              // py: 0.1,
            }}
          >
            Apply Filters
          </Button>
        </Box>
      </Dialog>
    </>
  );
};

export default FilterModalComponent;
