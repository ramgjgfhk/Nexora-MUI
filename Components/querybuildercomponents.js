import { ArrowDownward, ArrowUpward, Delete, DragIndicator } from '@mui/icons-material';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material';

export const controlElements = {
  addGroupAction: (props) => (
    <Button variant="outlined" size="small" onClick={props.handleOnClick}>
      + Group
    </Button>
  ),

  addRuleAction: (props) => (
    <Button variant="outlined" size="small" onClick={props.handleOnClick}sx={{ml:"auto !important"}}>
      + Rule
    </Button>
  ),

  removeGroupAction: (props) => (
    <Button variant="outlined" color="error" size="small" onClick={props.handleOnClick}>
      Remove Group
    </Button>
  ),

  removeRuleAction: (props) => (
    <Button variant="outlined" color="error" size="small" onClick={props.handleOnClick}>
      Remove
    </Button>
        // <Delete fontSize="small" color="error"onClick={props.handleOnClick} />
  ),

  combinatorSelector: (props) => (
    <FormControl size="small">
      <Select value={props.value} onChange={(e) => props.handleOnChange(e.target.value)}>
        {props.options.map((opt) => (
          <MenuItem key={opt.name} value={opt.name}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  ),

  fieldSelector: (props) => (
    <FormControl size="small">
      <Select value={props.value} onChange={(e) => props.handleOnChange(e.target.value)}>
        {props.options.map((opt) => (
          <MenuItem key={opt.name} value={opt.name}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  ),

  operatorSelector: (props) => (
    <FormControl size="small">
      <Select value={props.value} onChange={(e) => props.handleOnChange(e.target.value)}>
        {props.options.map((opt) => (
          <MenuItem key={opt.name} value={opt.name}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  ),

  valueEditor: (props) => {
    if (props.inputType === 'checkbox') {
      return (
        <FormControlLabel
          control={
            <Checkbox
              checked={props.value === true || props.value === 'true'}
              onChange={(e) => props.handleOnChange(e.target.checked)}
            />
          }
          label=""
        />
      );
    }

    return (
      <TextField
        size="small"
        type={props.inputType || 'text'}
        value={props.value}
        onChange={(e) => props.handleOnChange(e.target.value)}
        placeholder={props.placeholder}
      />
    );
  },

  notToggle: (props) => (
    <FormControlLabel
      control={<Checkbox checked={props.checked} onChange={(e) => props.handleOnChange(e.target.checked)} />}
      label="Not"
    />
  ),

  cloneRuleAction: (props) => (
    <Button variant="text" size="small" onClick={props.handleOnClick}sx={{ml:"auto !important"}}>
      Clone
    </Button>
  ),

  cloneGroupAction: (props) => (
    <Button variant="text" size="small" onClick={props.handleOnClick}>
      Clone Group
    </Button>
  ),valueSourceSelector: (props) => (
  <FormControl size="small" sx={{ minWidth: 120 }}>
    {/* <InputLabel>Source</InputLabel> */}
    <Select
      label="Source"
      value={props.value || 'value'}
      onChange={(e) => props.handleOnChange(e.target.value)}
    >
      {props.options.map((opt) => (
        <MenuItem key={opt.name} value={opt.name}>
          {opt.label}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
),valueSelector: (props) => (
  <FormControl size="small" >
    {/* <InputLabel>Match</InputLabel> */}
    <Select
      label="Match"
      value={props.value}
      onChange={(e) => props.handleOnChange(e.target.value)}
    >
      {props.options.map((opt) => (
        <MenuItem key={opt.name} value={opt.name}>
          {opt.label}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
),



  // dragHandle: () => <Typography component="span">::</Typography>,
//  dragHandle : () => (
//   <Box sx={{ cursor: 'grab', padding: '0 0px', display: 'flex', alignItems: 'center' }}>
//     <DragIndicator fontSize="small" sx={{color:'grey'}} />
//   </Box>
// ), shiftDown : (props) => (
//   <Box sx={{ cursor: 'grab', padding: '0 0px', display: 'flex', alignItems: 'center' }}>
//     <DragIndicator fontSize="small" sx={{color:'grey'}} onClick={props.handleOnClick}/>
//   </Box>
// ),
};
