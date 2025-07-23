import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  Select,
  Button,
  Card,
  CardContent,
  Typography,
  IconButton,
  Box,
  Divider,
  Stack,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Add, Delete } from "@mui/icons-material";
import { veriferSave } from "./api/sampleapies";
import { SuccessButton } from "@/Components/ui";

const eventTypeOptions = ["System Events", "Custom Events", "User Property"];
const mockEvents = {
  "System Events": ["Purchase Completed", "Login", "Signup"],
  "Custom Events": ["Clicked Button", "Shared Post"],
  "User Property": ["Email", "Age"],
};

const propertyOperators = ["equals", "not_equals", "greater_than", "less_than"];

export default function SegmentBuilder() {
  const [segmentName, setSegmentName] = useState("");
  const [matchMode, setMatchMode] = useState("and");
  const [filters, setFilters] = useState([
    {
      eventType: "",
      eventName: "",
      performed: {
        times: 1,
        operator: "atLeast",
        dateRange: "last7days",
      },
      properties: [],
    },
  ]);

  const addFilter = () => {
    setFilters([
      ...filters,
      {
        eventType: "",
        eventName: "",
        performed: {
          times: 1,
          operator: "atLeast",
          dateRange: "last7days",
        },
        properties: [],
      },
    ]);
  };

  const updateFilter = (index, updated) => {
    const updatedFilters = [...filters];
    updatedFilters[index] = { ...updatedFilters[index], ...updated };
    setFilters(updatedFilters);
  };

  const updateProperty = (filterIndex, propIndex, updatedProp) => {
    const newFilters = [...filters];
    newFilters[filterIndex].properties[propIndex] = updatedProp;
    setFilters(newFilters);
  };

  const addPropertyFilter = (filterIndex) => {
    const newFilters = [...filters];
    newFilters[filterIndex].properties.push({
      property: "",
      operator: "equals",
      value: "",
    });
    setFilters(newFilters);
  };
  const deletePropertyFilter = (filterIndex, propertyIndex) => {
    const newFilters = [...filters];
    newFilters[filterIndex] = {
      ...newFilters[filterIndex],
      properties: newFilters[filterIndex].properties.filter(
        (_, i) => i !== propertyIndex
      ),
    };
    setFilters(newFilters);
  };

  const removeFilter = (index) => {
    setFilters(filters.filter((_, i) => i !== index));
  };

  return (
    <>
      {" "}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="h6" gutterBottom>
          Segment Builder
        </Typography>
        <Box>
          {/* <Typography variant="subtitle2" gutterBottom>
            Segment Name -
          </Typography>{" "} */}
          <TextField
            placeholder="Segment Name"
            value={segmentName}
            size="small"
            onChange={(e) => setSegmentName(e.target.value)}
            sx={{
              // Reset all inherited styles for the root element
              all: "unset",
              // Target the input element specifically
            }}
            // fullWidth
            // margin="normal"
          />
          <Button
            // startIcon={<Add />}
            size="small"
            color="success"
            variant="contained"
            onClick={addFilter}
            sx={{ ml: 2 }}
          >
            Save
          </Button>
        </Box>
      </Box>
      <Box sx={{}}>
        <section>
          <Select
            value={matchMode}
            onChange={(e) => setMatchMode(e.target.value)}
            // fullWidth
            sx={{ mb: 2 }}
          >
            <MenuItem value="and">All conditions must match (AND)</MenuItem>
            <MenuItem value="or">Any condition matches (OR)</MenuItem>
            <MenuItem value="none">None should match (NOT)</MenuItem>
          </Select>
        </section>
        <Box>
          {filters.map((filter, index) => (
            <Card key={index} sx={{ mb: 2 }}>
              <CardContent>
                <Box display="flex" alignItems="center" gap={2}>
                  <Stack spacing={0.5} sx={{ minWidth: "200px" }}>
                    <Typography variant="caption" color="grey">
                      Filter By :
                    </Typography>
                    <Select
                      value={filter.eventType}
                      onChange={(e) =>
                        updateFilter(index, {
                          eventType: e.target.value,
                          eventName: "",
                        })
                      }
                    >
                      {eventTypeOptions.map((type) => (
                        <MenuItem key={type} value={type}>
                          {type}
                        </MenuItem>
                      ))}
                    </Select>
                  </Stack>
                  <Stack spacing={0.5} sx={{ minWidth: "200px" }}>
                    <Typography variant="caption" color="grey">
                      Choose Event :
                    </Typography>
                    <Select
                      label="Select Event"
                      value={filter.eventName}
                      onChange={(e) =>
                        updateFilter(index, { eventName: e.target.value })
                      }
                    >
                      {mockEvents[filter.eventType]?.map((ev) => (
                        <MenuItem key={ev} value={ev}>
                          {ev}
                        </MenuItem>
                      ))}
                    </Select>
                  </Stack>{" "}
                  <Stack spacing={0.5} sx={{ minWidth: "200px" }}>
                    <Typography variant="caption" color="grey">
                      Condition
                    </Typography>
                    <Select
                      // value={matchMode}
                      // onChange={(e) => setMatchMode(e.target.value)}
                      // fullWidth
                      sx={{ mb: 2 }}
                    >
                      <MenuItem value="and">Has Performed</MenuItem>
                      <MenuItem value="or">Has Not Performed</MenuItem>
                      {/* <MenuItem value="none">None should match (NOT)</MenuItem> */}
                    </Select>
                  </Stack>
                  {/* <Box sx={{ backgroundColor: "white",display:"flex",flexDirection:"row",p:2 }}>
                    {" "}
                    <Stack spacing={0.5} sx={{ minWidth: "200px" }}>
                      <Typography variant="caption" color="grey">
                        Number
                      </Typography>
                      <TextField
                        type="number"
                        size="small"
                        sx={{ alignSelf: "end" }}
                        placeholder="Times"
                        fullWidth
                        value={filter.performed.times}
                        onChange={(e) =>
                          updateFilter(index, {
                            performed: {
                              ...filter.performed,
                              times: e.target.value,
                            },
                          })
                        }
                      />
                    </Stack>
                    <Stack spacing={0.5} sx={{ minWidth: "200px" }}>
                      <Typography variant="caption" color="grey">
                        Number
                      </Typography>
                      <Select
                        value={filter.performed.dateRange}
                        onChange={(e) =>
                          updateFilter(index, {
                            performed: {
                              ...filter.performed,
                              dateRange: e.target.value,
                            },
                          })
                        }
                      >
                        <MenuItem value="last7days">Last 7 days</MenuItem>
                        <MenuItem value="last30days">Last 30 days</MenuItem>
                      </Select>
                    </Stack>{" "}
                  </Box> */}
                  {/* <IconButton >
                <Delete />
              </IconButton> */}
                  <IconButton
                    sx={{ ml: "auto", alignSelf: "end" }}
                    size="small"
                    onClick={() => removeFilter(index)}
                  >
                    <Delete fontSize="small" color="error" />
                  </IconButton>
                </Box>

                <Divider sx={{ my: 2 }} />

                {filter.properties.map((prop, pIndex) => (
                  <Box
                    key={pIndex}
                    display="flex"
                    gap={2}
                    alignItems="center"
                    mb={1}
                  >
                    <Stack spacing={0.5} sx={{ minWidth: "200px" }}>
                      <Typography variant="caption" color="grey">
                        Properties
                      </Typography>
                      <Select
                        value={prop.property}
                        onChange={(e) =>
                          updateProperty(index, pIndex, {
                            ...prop,
                            property: e.target.value,
                          })
                        }
                      >
                        {propertyOperators.map((op) => (
                          <MenuItem key={op} value={op}>
                            {op}
                          </MenuItem>
                        ))}
                      </Select>
                    </Stack>
                    <Stack spacing={0.5} sx={{ minWidth: "200px" }}>
                      <Typography variant="caption" color="grey">
                        Operator
                      </Typography>
                      <Select
                        value={prop.operator}
                        onChange={(e) =>
                          updateProperty(index, pIndex, {
                            ...prop,
                            operator: e.target.value,
                          })
                        }
                      >
                        {propertyOperators.map((op) => (
                          <MenuItem key={op} value={op}>
                            {op}
                          </MenuItem>
                        ))}
                      </Select>
                    </Stack>
                    <TextField
                      placeholder="Value"
                      size="small"
                      sx={{ alignSelf: "end" }}
                      value={prop.value}
                      onChange={(e) =>
                        updateProperty(index, pIndex, {
                          ...prop,
                          value: e.target.value,
                        })
                      }
                    />{" "}
                    <IconButton
                      sx={{ ml: "auto", alignSelf: "end" }}
                      size="small"
                      onClick={() => deletePropertyFilter(index, pIndex)}
                    >
                      <Delete fontSize="small" color="error" />
                    </IconButton>
                  </Box>
                ))}

                <Button
                  variant="outlined"
                  size="small"
                  color="secondary"
                  onClick={() => addPropertyFilter(index)}
                  sx={{ mt: 1 }}
                >
                  + Add Property Filter
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
        <Button
          startIcon={<Add />}
          size="small"
          variant="contained"
          onClick={addFilter}
          sx={{ mb: 2, position: "sticky", bottom: 0 }}
        >
          Add Event Filter
        </Button>{" "}
        {/* <Typography variant="body2" color="textSecondary">
        Final Output: {JSON.stringify({ segmentName, matchMode, filters }, null, 2)}
      </Typography> */}
      </Box>
    </>
  );
}
