import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { QueryBuilderMaterial } from '@react-querybuilder/material';
import { QueryBuilder } from 'react-querybuilder';
// import { defaultQuery, fields } from './constants';
import CloseIcon from '@mui/icons-material/Close';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DragIndicator from '@mui/icons-material/DragIndicator';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import ListSubheader from '@mui/material/ListSubheader';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import TextareaAutosize from '@mui/material/TextareaAutosize';
// (Use `Input` instead of `TextField` in versions lower than 7.7.1)
import TextField from '@mui/material/TextField';
import { fieldsss } from '@/Components/fieldss';
import { useState } from 'react';
import { QueryBuilderMaterial } from '@react-querybuilder/material';

const muiComponents = {
  Button,
  Checkbox,
  CloseIcon,
  ContentCopyIcon,
  DragIndicator,
  FormControl,
  FormControlLabel,
  KeyboardArrowDownIcon,
  KeyboardArrowUpIcon,
  ListSubheader,
  LockIcon,
  LockOpenIcon,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Switch,
  TextareaAutosize,
  TextField, // (Use `Input` instead of `TextField` in versions lower than 7.7.1)
};

const muiTheme = createTheme();

export function App() {
    const initialQuery = { combinator: 'and', rules: [] };


  const [query, setQuery] = useState(initialQuery);
  return (
    <ThemeProvider theme={muiTheme}>
      <QueryBuilderMaterial muiComponents={muiComponents}>
        <QueryBuilder fields={fieldsss} query={query} />
      </QueryBuilderMaterial>
    </ThemeProvider>
  );
}