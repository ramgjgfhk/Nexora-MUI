import React, { useEffect, useState } from "react";
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
  Stack,
} from "@mui/material";
import {
  Add,
  Cancel,
  Delete,
  DisabledByDefaultRounded,
  DragIndicator,
  Tune,
} from "@mui/icons-material";
import { useTheme, useMediaQuery } from "@mui/material";
import {
  closestCenter,
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  restrictToParentElement,
  restrictToVerticalAxis,
} from "@dnd-kit/modifiers";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const operatorMap = {
  string: [
    "contains",
    "startsssssssssssssssssssssssssssWith",
    "endsWith",
    "equals",
    "not",
  ],
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
  useEffect(() => {
    setFilterModel(filterModell);
  }, [filterModell]);
  // console.log(sortModell);
  // inside your component
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));
  const isMd = useMediaQuery(theme.breakpoints.down("md"));

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

  const renderValueInput = (rule, index) => {
    const type = getType(columns, rule.colId);
    if (type === "boolean") return null;
    return (
      <TextField
        size="small"
        value={rule.value}
        fullWidth
        onChange={(e) => handleChange(index, "value", e.target.value)}
        placeholder="Value"
      />
    );
  };
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active?.id !== over?.id) {
      const reordered = arrayMove(filterModel, active.id, over.id);
      setFilterModel(reordered);
    }
  };

  function SortRuleItem({ rule, index, handleChange, handleRemove, columns }) {
    const { attributes, listeners, setNodeRef, transform } = useSortable({
      id: index,
    });

    const style = {
      transform: CSS.Transform.toString(transform),
      padding: 8,
      marginBottom: 6,
      background: "#f5f5f5",
      borderRadius: 8,
      display: "flex",
      alignItems: "center",
      gap: 8,
      flexWrap: "wrap",
    };
    const colType = getType(columns, rule.colId);
    return (
      <Box ref={setNodeRef} style={style} {...attributes}>
        <FormControl
          size="small"
          sx={{ minWidth: isSm ? "45%" : 100, flex: 0.7 }}
        >
          <Select
            value={rule.colId}
            onChange={(e) => handleChange(index, "colId", e.target.value)}
          >
            {columns.map((col) => (
              <MenuItem key={col.field} value={col.field}>
                {col.headerName || col.field}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          size="small"
          sx={{ minWidth: isSm ? "45%" : 100, flex: 0.7 }}
        >
          <Select
            value={rule.operator}
            onChange={(e) => handleChange(index, "operator", e.target.value)}
          >
            {operatorMap[colType].map((op) => (
              <MenuItem key={op} value={op}>
                {op}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box sx={{ flex: isSm ? "1 1 80%" : 2 }}>
          {renderValueInput(rule, index)}
        </Box>
        <IconButton
          size="small"
          onClick={() => handleRemove(index)}
          sx={{
            backgroundColor: "rgba(211, 47, 47, 0.15)",
            "&:hover": { backgroundColor: "rgba(211, 47, 47, 0.25)" },
            color: "#d32f2f",
          }}
        >
          <Delete fontSize="small" color="error" />
        </IconButton>{" "}
        <Box {...listeners} sx={{ display: "flex", alignItems: "center" }}>
          <DragIndicator sx={{ cursor: "grab", fontSize: 18 }} />
        </Box>
      </Box>
    );
  }
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
        PaperProps={{
          sx: {
            p: 2,
            my: 1,
            width: isSm ? "90%" : isMd ? "60%" : "40%",
            minWidth: isSm ? "none" : "400px",
            maxWidth: "95vw",
          },
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >
          <Typography variant="subtitle2">Advanced Filters</Typography>
          <DisabledByDefaultRounded
            onClick={handleClose}
            fontSize="small"
            sx={{
              color: "#C92424",
              cursor: "pointer",
              borderRadius: "6px",
              transition: "all 0.2s ease",
              "&:hover": {
                backgroundColor: "rgba(255, 102, 102, 0.15)",
                transform: "scale(1.1)",
              },
            }}
          />
        </Stack>

        <Box display="flex" alignItems="center" gap={1} mb={1}>
          <FormControl size="small" sx={{ width: isSm ? "50%" : "20%" }}>
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

        {/* {filterModel.rules.map((rule, idx) => {
    const colType = getType(columns, rule.colId);
    return (
      <Box
        key={idx}
        display="flex"
        gap={1}
        alignItems="center"
        mb={1}
        flexWrap="wrap"
      >
        <FormControl size="small" sx={{ minWidth: isSm ? "45%" : 100, flex: 0.7 }}>
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

        <FormControl size="small" sx={{ minWidth: isSm ? "45%" : 100, flex: 0.7 }}>
          <Select
            value={rule.operator}
            onChange={(e) => handleChange(idx, "operator", e.target.value)}
          >
            {operatorMap[colType].map((op) => (
              <MenuItem key={op} value={op}>{op}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <Box sx={{ flex: isSm ? "1 1 80%" : 2 }}>
          {renderValueInput(rule, idx)}
        </Box>

        <IconButton
          size="small"
          onClick={() => handleRemove(idx)}
          sx={{
            backgroundColor: "rgba(211, 47, 47, 0.15)",
            "&:hover": { backgroundColor: "rgba(211, 47, 47, 0.25)" },
            color: "#d32f2f",
          }}
        >
          <Delete fontSize="small" color="error" />
        </IconButton>
      </Box>
    );
  })} */}
        <Box maxHeight="50vh" overflow="auto">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            modifiers={[restrictToVerticalAxis, restrictToParentElement]}
          >
            <SortableContext
              items={filterModel.rules.map((_, i) => i)}
              strategy={verticalListSortingStrategy}
            >
              {filterModel.rules.map((rule, idx) => (
                <SortRuleItem
                  key={idx}
                  rule={rule}
                  index={idx}
                  handleChange={handleChange}
                  handleRemove={handleRemove}
                  columns={columns}
                />
              ))}
            </SortableContext>
          </DndContext>
        </Box>
        <Box
          display="flex"
          justifyContent={isSm ? "center" : "space-between"}
          mt={2}
          flexDirection={isSm ? "column" : "row"}
          gap={isSm ? 1 : 0}
        >
          <Button
            size="small"
            startIcon={<Add />}
            onClick={handleAddRule}
            fullWidth={isSm}
          >
            Add Rule
          </Button>

          <Box
            display="flex"
            gap={1}
            justifyContent={isSm ? "center" : "unset"}
          >
            <Button
              size="small"
              color="error"
              variant="outlined"
              onClick={() => {
                handleClose();
                setFilterModell({ logic: "AND", rules: [] });
              }}
              fullWidth={isSm}
            >
              Remove Filters
            </Button>
            <Button
              size="small"
              variant="contained"
              onClick={() => {
                handleClose();
                setFilterModell(filterModel);
              }}
              fullWidth={isSm}
            >
              Apply
            </Button>
          </Box>
        </Box>
      </Popover>
    </>
  );
}
