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
import { GridToolbarContainer, GridToolbarFilterButton } from "@mui/x-data-grid";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const FilterModalComponent = (
  ({ customFilters = {}, onApply, appliedFilters, setAppliedFilters }) => {
    const [open, setOpen] = useState(false);
    // const [appliedFilters, setAppliedFilters] = useState({});
    console.log("filter",appliedFilters)

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
        <Button style={{fontFamily:"inter"}}
          startIcon={<FilterList sx={{ fontSize: "22.5px !important" }} />}
          sx={{
            textTransform: "none",
            fontSize: "13px"
            ,fontWeight:500,
            // color: "#5A7AF2",
            px:2,height:'34px',
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
            borderRadius: "0 !important",px:1.5,py:1.5,backgroundColor:"white"
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
                      <Typography variant="h6" sx={{ fontSize: "16px" }}>
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
                      <DisabledByDefaultRounded color="error" fontSize="small"  onClick={handleClose}/>
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
                              height: 30, // Total height
                              borderRadius: "6px", // Optional: Rounded corners
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

                      value={appliedFilters[field.name] ? dayjs(appliedFilters[field.name]) : null}
onChange={(newValue) => handleInputChange(field.name, newValue)}
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
                                  "& .MuiPickersInputBase-root": { height: "30px" },
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
                      mt: 2,mt:"auto"
                      // alignSelf: "flex-end",
                    }}
                  >
                    <Button
                      size="small"
                      onClick={() => {
                setAppliedFilters({});
                onApply({}); // Send filter data to parent
                handleClose(); // Close the modal
              }}
                      // startIcon={<FilterAltOff />}
                      sx={{
                        flex: 1,
                        textTransform: "none",
                        borderRadius: "6px",
                        fontWeight: 500,
                        height: "30px",
                        // px: 2,
                        // py: 0.8,
                        backgroundColor: "#d32f2f",
                        color: "#fff",
                        transition: "all 0.2s ease-in-out",
                        "&:hover": {
                          backgroundColor: "#b71c1c",
                          boxShadow: "0 2px 8px rgba(211, 47, 47, 0.3)",
                        },
                      }}
                    >
                      Remove Filters
                    </Button>
        
                    <Button
                      size="small"
                      onClick={handleApplyClick}
                      // startIcon={<FilterAlt />}
                      sx={{
                        flex: 1,
                        textTransform: "none",
                        borderRadius: "6px",
                        height: "30px",
                        fontWeight: 500,
                        // px: 2,
                        // py: 0.1,
                        backgroundColor: "#4CC713",
                        color: "#fff",
                        transition: "all 0.2s ease-in-out",
                        "&:hover": {
                          backgroundColor: "#43b012",
                          boxShadow: "0 2px 8px rgba(76, 199, 19, 0.3)",
                        },
                      }}
                    >
                      Apply Filters
                    </Button>
                  </Box>
                </Dialog>
      </>
    );
  }
);

export default FilterModalComponent;
