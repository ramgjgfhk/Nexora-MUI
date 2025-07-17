import React, { useEffect, useState } from "react";
import {
  Button,
  Popover,
  Box,
  IconButton,
  Select,
  MenuItem,
  Typography,
  FormControl,
  useMediaQuery,
  useTheme,
  Stack,
  Badge,
} from "@mui/material";
import {
  Add,
  Delete,
  DisabledByDefaultRounded,
  DragIndicator,
  FilterList,
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
import {
  restrictToParentElement,
  restrictToVerticalAxis,
} from "@dnd-kit/modifiers";

const directions = ["asc", "desc"];

function SortRuleItem({ rule, index, onChange, onRemove, sortableColumns }) {
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

  return (
    <Box ref={setNodeRef} style={style} {...attributes}>
     
      <FormControl size="small" sx={{ minWidth: 120, flexGrow: 1 }}>
        <Select
          fullWidth
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
      <FormControl size="small" sx={{ minWidth: 80 }}>
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
      <IconButton
        sx={{ mr: "auto" }}
        size="small"
        onClick={() => onRemove(index)}
      >
        <Delete fontSize="small" color="error" />
      </IconButton> <Box {...listeners} sx={{ display: "flex", alignItems: "center" }}>
        <DragIndicator sx={{ cursor: "grab", fontSize: 18 }} />
      </Box>
    </Box>
  );
}

export default function AdvancedSortButton({
  sortModell,
  setSortModell,
  sortableColumns,
}) {
  useEffect(() => {
    setSortModel(sortModell);
  }, [sortModell]);
  console.log(sortModell);
  const [sortModel, setSortModel] = useState(sortModell);
  const [anchorEl, setAnchorEl] = useState(null);

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

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
      {sortModell.length == 0 ? (
        <Button
          size="small"
          onClick={handleOpen}
          startIcon={<FilterList sx={{ mr: -0.8 }} />}
        >
          <Typography variant="subtitle2">Sort</Typography>
        </Button>
      ) : (        <Button
          size="small"
          onClick={handleOpen}sx={{backgroundColor:'#eaefe2'}}
          startIcon={<FilterList sx={{ mr: -0.8 }} />}
        >
          <Typography variant="subtitle2">Sort</Typography>
        </Button>
        // <Badge
        //   anchorOrigin={{
        //     vertical: "top",
        //     horizontal: "left",
        //   }}
        //   // color="secondary"
        //   badgeContent={sortModell.length}
        //   sx={{
        //     color: "white",
        //     "& .MuiBadge-badge": {
        //       backgroundColor: "#00ff16",
        //       fontSize: "11px",
        //     },
        //   }}
        // >
        //   <Button
        //     size="small"
        //     onClick={handleOpen}
        //     variant="outlined"
        //     startIcon={<FilterList sx={{ mr: -0.8 }} />}
        //   >
        //     <Typography variant="subtitle2">Sort</Typography>
        //   </Button>{" "}
        // </Badge>
      )}

      {/* <Button
  size="small"
  onClick={handleOpen}
  startIcon={<FilterList sx={{ mr: -0.8, color: sortModell.length>0 ? "primary.main" : "inherit" }} />}
  variant={sortModell.length>0 ? "contained" : "inherit"}
  color={sortModell.length>0 ? "primary" : "inherit"}
>
  <Typography variant="subtitle2">
    {sortModell.length>0 ? "Sort Applied" : "Sort"}
  </Typography>
</Button> */}

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        PaperProps={{
          sx: {
            p: 2,
            width: isXs ? "90vw" : 350,
            maxWidth: "95vw",
            m: 1,
          },
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={1}
        >
          <Typography variant="subtitle2">Advanced Sorting</Typography>
          <DisabledByDefaultRounded
            onClick={() => {
              setSortModel(sortModell), handleClose();
            }}
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
        <Box maxHeight="50vh" overflow="auto">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            modifiers={[restrictToVerticalAxis, restrictToParentElement]}
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
        </Box>
        {/* <Box mt={1} display="flex" justifyContent="space-between" flexWrap="wrap" gap={1}>
          <Button
            size="small"
            startIcon={<Add />}
            onClick={handleAddRule}
            disabled={sortModel.length >= sortableColumns.length}
          >
            Add Rule
          </Button>
          <Button
            size="small"
            variant="contained"
            onClick={() => {
              handleClose();
              setSortModell(sortModel);
            }}
          >
            Apply
          </Button>
        </Box> */}

        <Box
          display="flex"
          justifyContent={isXs ? "center" : "space-between"}
          mt={1}
          flexDirection={isXs ? "column" : "row"}
          gap={isXs ? 1 : 0}
        >
          <Button
            size="small"
            startIcon={<Add />}
            onClick={handleAddRule}
            disabled={sortModel.length >= sortableColumns.length}
          >
            Add Rule
          </Button>
          {sortModel.length !== 0 ? (
            <Box
              display="flex"
              gap={1}
              justifyContent={isXs ? "center" : "unset"}
            >
              <Button
                size="small"
                color="error"
                variant="outlined"
                onClick={() => {
                  handleClose();
                  setSortModell([]);
                }}
                fullWidth={isXs}
              >
                Remove Filters
              </Button>
              <Button
                size="small"
                variant="contained"
                onClick={() => {
                  handleClose();
                  setSortModell(sortModel);
                }}
                fullWidth={isXs}
              >
                Apply
              </Button>
            </Box>
          ) : null}
        </Box>
      </Popover>
    </>
  );
}
