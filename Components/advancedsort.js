import React, { useState } from "react";
import {
  Button,
  Popover,
  Box,
  IconButton,
  Select,
  MenuItem,
  Typography,
  FormControl,
  Paper,
} from "@mui/material";
import { FaSort } from "react-icons/fa";
import { BiSort } from "react-icons/bi";
import {
  Add,
  Delete,
  DragIndicator,
  FilterList,
  Sort,
  SwapVert,
} from "@mui/icons-material";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const directions = ["asc", "desc"];

function SortRuleItem({ rule, index, onChange, onRemove, sortableColumns }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: index });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: 8,
    marginBottom: 4,
    background: "#f5f5f5",
    borderRadius: 8,
  };

  return (
    <Box ref={setNodeRef} style={style} {...attributes}>
      <Box sx={{ display: "flex" }} {...listeners}>
        <DragIndicator sx={{ cursor: "grab" }} />
      </Box>
      <FormControl size="small" sx={{ width: 150 }}>
        <Select
          value={rule.colId}
          onChange={(e) => onChange(index, "colId", e.target.value)}
        >
          {sortableColumns.map((col) => (
            <MenuItem key={col.colId} value={col.colId}>
              {col.headerName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl size="small" sx={{ width: 80 }}>
        <Select
          value={rule.sort}
          onChange={(e) => onChange(index, "sort", e.target.value)}
        >
          {directions.map((dir) => (
            <MenuItem key={dir} value={dir}>
              {dir}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <IconButton size="small" onClick={() => onRemove(index)}>
        <Delete fontSize="small" color="error" />
      </IconButton>
    </Box>
  );
}

export default function AdvancedSortButton({
  sortModel,
  setSortModel,
  sortableColumns,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleAddRule = () => {
    const unused = sortableColumns.find(
      (c) => !sortModel.some((r) => r.colId === c.colId)
    );
    if (unused) {
      setSortModel([...sortModel, { colId: unused.colId, sort: "asc" }]);
    }
  };

  const handleChange = (index, field, value) => {
    const updated = [...sortModel];
    updated[index][field] = value;
    setSortModel(updated);
  };

  const handleRemove = (index) => {
    const updated = [...sortModel];
    updated.splice(index, 1);
    setSortModel(updated);
  };

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active?.id !== over?.id) {
      const reordered = arrayMove(sortModel, active.id, over.id);
      setSortModel(reordered);
    }
  };

  return (
    <>
      <Button
        size="small"
        onClick={handleOpen}
        variant="outlined"
        startIcon={<FilterList sx={{ mr: -0.8 }} />}
      >
        <Typography variant="subtitle2">Sort</Typography>
      </Button>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        PaperProps={{ sx: { p: 2, width: 350, m: 1 } }}
      >
        {/* <Typography variant="subtitle2" mb={1}>
          Advanced Sorting
        </Typography> */}
        <Typography variant="subtitle2" mb={1}>
          Advanced Sorting
        </Typography>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={sortModel.map((_, i) => i)}
            strategy={verticalListSortingStrategy}
          >
            {sortModel.map((rule, idx) => (
              <SortRuleItem
                key={idx}
                rule={rule}
                index={idx}
                onChange={handleChange}
                onRemove={handleRemove}
                sortableColumns={sortableColumns}
              />
            ))}
          </SortableContext>
        </DndContext>

        <Box mt={1} display="flex" justifyContent="space-between">
          <Button
            size="small"
            startIcon={<Add />}
            onClick={handleAddRule}
            disabled={sortModel.length >= sortableColumns.length}
          >
            Add Rule
          </Button>
          <Button size="small" variant="contained" onClick={handleClose}>
            Apply
          </Button>
        </Box>
      </Popover>
    </>
  );
}
