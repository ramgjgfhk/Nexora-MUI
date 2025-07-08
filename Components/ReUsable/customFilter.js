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
  Grid,
  Stack,
} from "@mui/material";
import {
  FilterList,
  Close,
  Search,
  FilterAlt,
  Cancel,
  DisabledByDefaultRounded,
  Filter,
  FilterListOff,
  FilterListOutlined,
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
        style={{ fontFamily: "inherit" }}
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
        maxWidth="md"
        fullWidth
        keepMounted
      >
        <Box sx={{ p: 2, backgroundColor: "white" }}>
          <section>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
                // width: "90%",
              }}
            >
              {" "}
              <Stack direction="row">
                <FilterListOutlined sx={{ fontSize: "20px" }} />

                <Typography variant="h6" sx={{ fontSize: "13px", ml: 0.5 }}>
                  Advanced Table Filters
                </Typography>
              </Stack>
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
            <Grid container rowSpacing={1} columnSpacing={2}>
              {/* Text Fields */}
              {customFilters?.text?.map((field) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={field.name}>
                  <Typography variant="h1" sx={{ fontSize: "11.5px", mb: 0.3 }}>
                    {field.label}
                  </Typography>
                  <TextField
                    fullWidth
                    value={appliedFilters[field.name] || ""}
                    onChange={(e) =>
                      handleInputChange(field.name, e.target.value)
                    }
                    size="small"
                    sx={{
                      "& .MuiInputBase-root": {
                        height: 25,
                        borderRadius: "4px",
                      },
                    }}
                  />
                </Grid>
              ))}

              {/* Date Pickers */}
              {customFilters?.date?.map((field) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={field.name}>
                  <Typography variant="h1" sx={{ fontSize: "11.5px", mb: 0.3 }}>
                    {field.label}
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
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
                          fullWidth: true,
                          sx: {
                            "& label": { fontSize: "12px" },
                            "& .MuiInputAdornment-root svg": {
                              fontSize: "18px",
                            },
                            "& .MuiIconButton-root": {
                              border: "none",
                              padding: 0,
                              backgroundColor: "transparent",
                            },
                            "& .MuiPickersInputBase-root": {
                              height: "25px",
                              borderRadius: "4px",justifyContent:"end"
                            },
                            "& .MuiPickersSectionList-root": {
                              display: "none", // example
                            },
                          },
                        },
                      }}
                    />
                  </LocalizationProvider>
                </Grid>
              ))}

              {/* Autocomplete (Select Dropdown) */}
              {customFilters?.autocomplete?.map((field) => (
                <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={field.name}>
                  <Typography variant="h1" sx={{ fontSize: "11.5px", mb: 0.3 }}>
                    {field.label}
                  </Typography>
                  <Autocomplete
                    options={field.options}
                    size="small"
                    value={appliedFilters[field.name] || ""}
                    onChange={(e, newValue) =>
                      handleInputChange(field.name, newValue)
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        fullWidth
                        sx={{
                          "& .MuiInputBase-root": {
                            height: 25,
                            borderRadius: "6px",
                          },
                          "& .MuiAutocomplete-endAdornment": {
                            display: "none",
                          },
                        }}
                      />
                    )}
                  />
                </Grid>
              ))}
            </Grid>
          </section>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              gap: 1,
              mt: 2,
              justifyContent: "space-between",
              flexWrap: "wrap", // ensures mobile safety
            }}
          >
            {/* Left: Remove Filters */}

            {/* Right: Save, Apply, Cancel */}
            <Button
              size="small"
              onClick={() => {
                setAppliedFilters({});
                onApply({});
                handleClose();
              }}
              sx={{
                fontSize: "9.5px",
                textTransform: "none",
                borderRadius: "6px",
                fontWeight: 500,
                height: "25px",
                backgroundColor: "rgb(255 102 102)",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "rgb(200 50 50)",
                  boxShadow: "0 2px 8px rgba(200, 50, 50, 0.4)",
                },
              }}
            >
              Remove Filters
            </Button>
            {/* <Button
      size="small"
      variant="outlined"
      // onClick={() => {
      //   // your save filter logic
      //   handleSaveFilter();
      // }}
      sx={{
        fontSize: "11px",
        textTransform: "none",
        borderRadius: "5px",
        height: "30px",
        fontWeight: 500,
      }}
    >
      Save Filter
    </Button> */}

            <Button
              size="small"
              variant="contained"
              onClick={handleApplyClick}
              sx={{
                fontSize: "9.5px",
                textTransform: "none",
                borderRadius: "5px",
                height: "25px",
                fontWeight: 500,
              }}
            >
              Apply Filters
            </Button>
            {/* 
    <Button
      size="small"
      onClick={handleClose}
      sx={{
        fontSize: "11px",
        textTransform: "none",
        borderRadius: "5px",
        height: "30px",
        fontWeight: 500,
      }}
    >
      Cancel
    </Button> */}
            {/* </Box> */}
          </Box>
        </Box>
      </Dialog>
    </>
  );
};

export default FilterModalComponent;
