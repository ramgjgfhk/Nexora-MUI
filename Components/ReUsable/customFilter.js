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
} from "@mui/material";
import {
  FilterList,
  Close,
  Search,
  FilterAlt,
  Cancel,
} from "@mui/icons-material";
import { GridToolbarContainer, GridToolbarFilterButton } from "@mui/x-data-grid";

const FilterModalComponent = (
  ({ fields = [], onApply, appliedFilters, setAppliedFilters }) => {
    const [open, setOpen] = useState(false);
    // const [appliedFilters, setAppliedFilters] = useState({});
    // console.log("filter",filterValues)

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
          maxWidth="sm"
          fullWidth
          keepMounted
        >
          <DialogTitle>
            Apply Filters
            <IconButton
              onClick={handleClose}
              sx={{ position: "absolute", right: 8, top: 8 }}
            >
              <Close />
            </IconButton>
          </DialogTitle>
          <DialogContent sx={{ pr: 0, mb: 0 }}>
            {/* Your content here */}

            {fields.length === 0 ? (
              <p>No fields available to filter</p>
            ) : (
              fields.map((field, index) => (
                <TextField
                  key={index}
                  label={`Filter by ${field.replace(/_/g, " ")}`}
                  variant="outlined"
                  size="small"
                  sx={{
                    "& .MuiInputBase-root": {
                      height: "2.4rem",
                    },
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      "&:hover fieldset": {
                        borderColor: "#1976d2",
                      },
                      "&.Mui-focused fieldset": {
                        border: "1px solid #1976d2",
                      },
                      "&.Mui-disabled": {
                        "& fieldset": {
                          borderColor: "#d1d1d1 !important", // Set a light gray border when disabled
                        },
                        "& input": {
                          color: "#a0a0a0", // Light gray text for disabled state
                        },
                      },
                    },
                    my: 1.5,
                    mr: 2,
                    width: "30%",
                    "& .MuiInputLabel-root": {
                      textTransform: "capitalize",
                    },
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Tooltip title="Search">
                          <Search sx={{ color: "#42A5F5", fontSize: "20px" }} />
                        </Tooltip>
                      </InputAdornment>
                    ),
                  }}
                  // fullWidth
                  // margin="normal"
                  value={appliedFilters[field] || ""}
                  onChange={(e) => handleInputChange(field, e.target.value)}
                />
              ))
            )}
          </DialogContent>
          <DialogActions>
            <Button
              size="small"
              color="error"
              onClick={() => {
                setAppliedFilters({});
                onApply({}); // Send filter data to parent
                handleClose(); // Close the modal
              }}
              variant="outlined"
              // startIcon={<Cancel />}
              sx={{
                height: "29px",
                borderRadius: "5px",
                // padding: '4px 12px',
                borderColor: "#d32f2f",
                textTransform: "capitalize",
                fontSize: "12px",
                "&:hover": {
                  backgroundColor: "#ffebee",
                  borderColor: "#d32f2f",
                },
              }}
            >
              Remove Filters
            </Button>
            <Button
              size="small"
              onClick={handleApplyClick}
              variant="contained"
              sx={{
                backgroundColor: "#1875FF",
                color: "white",
                fontSize: "12px",
                textTransform: "capitalize",
                height: "29px",
                borderRadius: "5px",
                transition: "background-color 0.3s, box-shadow 0.3s",
                "&:hover": {
                  backgroundColor: "#1565C0", // Darker blue on hover
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Soft shadow effect
                },
              }}
            >
              Apply Filters
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
);

export default FilterModalComponent;
