import React, { useState } from "react";
import {
  Button,
  Popover,
  Box,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
  FormControl,
  Divider,
} from "@mui/material";
import { Add, Delete, Tune } from "@mui/icons-material";

const operatorMap = {
  string: ["contains", "startsWith", "endsWith", "equals", "not"],
  number: ["=", "!=", "<", "<=", ">", ">="],
  date: ["before", "after", "on"],
  boolean: ["is true", "is false"],
};
// useEffect(() => {
//  setFilterModel(filterModell)
// }, [filtermodell]);
const defaultLogic = "AND";

const getType = (columns, colId) =>
  columns.find((col) => col.field === colId)?.type || "string";

export default function AdvancedFilterButton({
  filterModell,
  setFilterModell,
  columns,
}) {
  const [filterModel, setFilterModel] = useState(filterModell);
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleAddRule = () => {
    const firstCol = columns[0];
    const colId = firstCol.field;
    const type = firstCol.type || "string";
    const operator = operatorMap[type][0];
    const value = type === "boolean" ? "is true" : "";
    setFilterModel((prev) => ({
      ...prev,
      rules: [...(prev.rules || []), { colId, operator, value }],
    }));
  };

  const handleChange = (index, field, value) => {
    const updatedRules = [...filterModel.rules];
    updatedRules[index][field] = value;
    // Reset operator/value when column changes
    if (field === "colId") {
      const type = getType(columns, value);
      updatedRules[index].operator = operatorMap[type][0];
      updatedRules[index].value = "";
    }
    setFilterModel({ ...filterModel, rules: updatedRules });
  };

  const handleRemove = (index) => {
    const updated = [...filterModel.rules];
    updated.splice(index, 1);
    setFilterModel({ ...filterModel, rules: updated });
  };

  const handleLogicChange = (e) => {
    setFilterModel({ ...filterModel, logic: e.target.value });
  };

  const renderValueInput = (rule, idx) => {
    const type = getType(columns, rule.colId);
    if (type === "boolean") return null;
    return (
      <TextField
        size="small"
        value={rule.value}
        onChange={(e) => handleChange(idx, "value", e.target.value)}
        placeholder="Value"
        sx={{ flex: 1 }}
      />
    );
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        size="small"
        // variant="outlined"
        startIcon={<Tune />}
      >
        <Typography variant="subtitle2">Filters</Typography>
      </Button>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        PaperProps={{ sx: { p: 2, width: 560 } }}
      >
        <Typography variant="subtitle2" mb={1}>
          Advanced Filters
        </Typography>

        <Box display="flex" alignItems="center" gap={1} mb={1}>
          {/* <Typography variant='subtitle1'>Match</Typography> */}
          <FormControl size="small" sx={{ minWidth: 100 }}>
            <Select
              size="small"
              value={filterModel.logic}
              onChange={handleLogicChange}
            >
              <MenuItem value="AND">All (AND)</MenuItem>
              <MenuItem value="OR">Any (OR)</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Divider sx={{ mb: 1 }} />

        {filterModel.rules.map((rule, idx) => {
          const colType = getType(columns, rule.colId);
          return (
            <Box key={idx} display="flex" gap={1} alignItems="center" mb={1}>
              <FormControl size="small" sx={{ minWidth: 100 }}>
                <Select
                  value={rule.colId}
                  onChange={(e) => handleChange(idx, "colId", e.target.value)}
                >
                  {columns.map((col) => (
                    <MenuItem key={col.field} value={col.field}>
                      {col.headerName || col.field}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl size="small" sx={{ minWidth: 100 }}>
                <Select
                  value={rule.operator}
                  onChange={(e) =>
                    handleChange(idx, "operator", e.target.value)
                  }
                >
                  {operatorMap[colType].map((op) => (
                    <MenuItem key={op} value={op}>
                      {op}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {renderValueInput(rule, idx)}
              <IconButton
                size="small"
                onClick={() => handleRemove(idx)}
                sx={{
                  backgroundColor: "rgba(211, 47, 47, 0.15)", // light red background
                  "&:hover": {
                    backgroundColor: "rgba(211, 47, 47, 0.25)", // darker red on hover
                  },
                  color: "#d32f2f", // error color explicitly for icon
                }}
              >
                <Delete fontSize="small" color="error" />
              </IconButton>
            </Box>
          );
        })}

        <Box display="flex" justifyContent="space-between" mt={2}>
          <Button size="small" startIcon={<Add />} onClick={handleAddRule}>
            Add Rule
          </Button>
          <Button
            size="small"
            variant="contained"
            onClick={() => {
              handleClose(), setFilterModell(filterModel);
            }}
          >
            Apply
          </Button>
        </Box>
      </Popover>
    </>
  );
}
