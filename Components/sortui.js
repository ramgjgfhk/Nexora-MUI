import React, { useState } from 'react';
import {
  Button, Popover, Box, IconButton, MenuItem,
  Select, FormControl, Typography
} from '@mui/material';
import { Add, Delete, Sort } from '@mui/icons-material';

const directions = ['asc', 'desc'];

const SortPopupButton = ({ sortableColumns, sortModel, setSortModel }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleAddRule = () => {
    const remaining = sortableColumns.find(
      c => !sortModel.some(r => r.colId === c.colId)
    );
    if (remaining) {
      setSortModel([...sortModel, { colId: remaining.colId, sort: 'asc' }]);
    }
  };

  const handleUpdateRule = (index, field, value) => {
    const newModel = [...sortModel];
    newModel[index][field] = value;
    setSortModel(newModel);
  };

  const handleRemoveRule = (index) => {
    const newModel = [...sortModel];
    newModel.splice(index, 1);
    setSortModel(newModel);
  };

  return (
    <>
      {/* <Button variant="outlined" onClick={handleOpen}size='small'>
        Sort
      </Button> */}
       <Button
          size="small"
       variant="outlined" onClick={handleOpen}
          color="primary"
          // sx={{ height: "27px", borderRadius: "6px" }}
        ><Sort size="20px"sx={{fontSize:"17px",mr:0.6}}/>
     <Typography variant='caption' sx={{fontSize:"12px",fontWeight:500}}>Sort</Typography>
        </Button>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        PaperProps={{ sx: { p: 2, width: 500 } }}
      >
        <Typography variant="h4" sx={{fontSize:"12px"}}mb={1}>Sort Rules</Typography>
        {sortModel.map((rule, idx) => (
          <Box
            key={idx}
            sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 1,}}
          >
            <FormControl fullWidth size="small">
              <Select
                value={rule.colId}
                onChange={(e) =>
                  handleUpdateRule(idx, 'colId', e.target.value)
                }
              >
                {sortableColumns.map(col => (
                  <MenuItem key={col.colId} value={col.colId}>
                    {col.headerName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl sx={{width:"100px"}}size="small">
              <Select
                value={rule.sort}
                onChange={(e) =>
                  handleUpdateRule(idx, 'sort', e.target.value)
                }
              >
                {directions.map(dir => (
                  <MenuItem key={dir} value={dir}>
                    {dir}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <IconButton size="small" onClick={() => handleRemoveRule(idx)}>
              <Delete fontSize="small" />
            </IconButton>
          </Box>
        ))}

        <Box mt={2} display="flex" justifyContent="space-between">
          <Button
            variant="text"
            size="small"
            onClick={handleAddRule}
            startIcon={<Add />}
            disabled={sortModel.length >= sortableColumns.length}
          >
            Add Rule
          </Button>

          <Button variant="contained" size="small" onClick={handleClose}>
            Apply
          </Button>
        </Box>
      </Popover>
    </>
  );
};

export default SortPopupButton;
