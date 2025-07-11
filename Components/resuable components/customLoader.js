import React, { useState } from "react";
import {
  Autocomplete,
  Button,
  Card,
  Checkbox,
  Dialog,
  Divider,
  FormHelperText,
  InputLabel,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { Tooltip, IconButton } from "@mui/material";
import {
  AdminPanelSettings,
  CallMissedOutgoing,
  Close,
  Error,
  ErrorOutline,
  ForwardToInbox,
  KeyOff,
  ModeEdit,
  Refresh,
  Send,
} from "@mui/icons-material";
import { Delete } from "@mui/icons-material";
import { TableCell, TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { tableCellClasses } from "@mui/material/TableCell";
import { Plus_Jakarta_Sans } from "next/font/google"; // Assuming you're using next/font
// import { lableSize, textfield } from "../Common/MuiSxStyle/SlaFormPageStyle";
import { Controller, useFormContext } from "react-hook-form";
// import { StyledTextarea
//  } from "../Common/CommonComponents/TextAreaStyle";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { ClientDataContext } from "../ContextProvider/MyContex";
import { lableSize, textfield } from "../ui";
// import Tooltip from '@mui/material/Tooltip';

// styledtable cell and row
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin-ext"],
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontFamily: jakarta.style.fontFamily,
    backgroundColor: "#F4F6F8",
    borderBottom: "1px solid #E7E9EB",
    fontSize: 12,
    fontWeight: 600,
    textAlign: "center",
    userSelect: "none",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 11,
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.palette.text.primary,
    borderBottom: `1px solid ${theme.palette.divider}`,
    textAlign: "center", // Horizontally centers text
    verticalAlign: "middle",
    // minHeight: "10px",
    // height:"20px",// Corrected property name
    userSelect: "none",
    padding: "6px 12px",

    //  textTransform: 'capitalize',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  transition: "background-color 0.2s ease",
  fontSize: 15,
  "&:hover": {
    backgroundColor: "#F4F6F8",
  },
}));

// toggle button for status update
const CustomStatusButton = (props) => {
  return (
    <Tooltip
      title={<span style={{ userSelect: "none" }}>Change status</span>}
      // "Change status"
    >
      <Switch
        sx={{
          "& .MuiSwitch-switchBase.Mui-checked": {
            color: "#00c57d", // Change the color of the thumb when checked
          },
          "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
            backgroundColor: "#22cf90", // Change the color of the track when checked
          },
          "& .MuiSwitch-track": {
            backgroundColor: "gray", // Color of the track when unchecked
          },
          "& .Mui-disabled .MuiSwitch-switchBase.Mui-checked": {
            color: "#CCF5B8 ",
          },
        }}
        {...props}
      />
    </Tooltip>
  );
};

// custom view button
const CustomViewButton = ({
  tooltipTitle,
  onClick,
  icon = <RemoveRedEyeIcon sx={{ color: "#4b4b89", fontSize: 18 }} />,
  ...props
}) => {
  return (
    <Tooltip sx={{ p: 0 }} title={tooltipTitle}>
      <IconButton onClick={onClick} {...props} size="large">
        {icon}
      </IconButton>
    </Tooltip>
  );
};
// custom send button

const CustomSendButton = ({
  tooltipTitle,
  onClick,
  icon = <ForwardToInbox sx={{ color: "#EF4036", fontSize: 18 }} />,
  ...props
}) => {
  return (
    <Tooltip title={tooltipTitle}>
      <IconButton onClick={onClick} {...props} size="large">
        {icon}
      </IconButton>
    </Tooltip>
  );
};

// edit button with tooltip,icon
const CustomEditButton = ({
  tooltipTitle,
  onClick,
  icon = <ModeEdit sx={{ color: "#284b63", fontSize: 18 }} />,
  ...props
}) => {
  return (
    <Tooltip sx={{ p: 0 }} title={tooltipTitle}>
      <IconButton onClick={onClick} {...props}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

const CustomDeleteButton = ({
  tooltipTitle = "Delete",
  onClick,
  icon = <Delete sx={{ color: "#e63946", fontSize: 18 }} />,
  ...props
}) => {
  return (
    <Tooltip sx={{ p: 0 }} title={tooltipTitle}>
      <IconButton onClick={onClick} {...props}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};
const CustomReworkButton = ({
  tooltipTitle,
  onClick,
  icon = <Error sx={{ color: "#ff7f00", fontSize: 18 }} />,
  ...props
}) => {
  return (
    <Tooltip sx={{ p: 0 }} title={tooltipTitle}>
      <IconButton onClick={onClick} {...props}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};
const CustomPrivilegeButton = ({
  tooltipTitle,
  onClick,
  icon = <AdminPanelSettings sx={{ color: "#4b4b89", fontSize: 18 }} />,
  ...props
}) => {
  return (
    <Tooltip sx={{ p: 0 }} title={tooltipTitle}>
      <IconButton onClick={onClick} {...props}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

// loader
const CustomLoader = ({ size = 24, barColor = "rgb(128, 128, 128)" }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent overlay
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1300, // Ensure it overlays other content
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "30px",
          height: "30px",
          borderRadius: "10px",
        }}
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <Box
            key={index}
            sx={{
              width: "8%",
              height: "24%",
              backgroundColor: barColor,
              position: "absolute",
              left: "88%",
              top: "35%",
              opacity: 0,
              borderRadius: "50px",
              boxShadow: "0 0 3px rgba(0, 0, 0, 0.2)",
              animation: "fade458 1s linear infinite",
              transform: `rotate(${index * 30}deg) translate(0, -130%)`,
              animationDelay: `${-1.2 + index * 0.1}s`,
            }}
          />
        ))}

        {/* <Typography sx={{color:"rgb(128, 128, 128)"}}>Loading...</Typography> */}
      </Box>  
       {/* <Typography variant="h6" sx={{color:"rgb(128, 128, 128)",ml:2,fontSize:"13px"}}>Loading Data...</Typography> */}
      <style>
        {`
          @keyframes fade458 {
            from {
              opacity: 1;
            }
            to {
              opacity: 0.25;
            }
          }
        `}
      </style>
    </Box>
  );
};

const InnerBoxPlusGrid = ({ children }) => {
  return (
    <Box
      sx={{
        ml: { xs: 0, sm: 4.3 },
        pl: { xs: 2.5, sm: 2 },
        mr: { xs: 2, sm: 6 },
      }}
    >
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 2, sm: 3, md: 3, lg: 6, xl: 6 }}
      >
        {children} {/* Render children */}
      </Grid>
    </Box>
  );
};

const OuterBoxForForm = ({ children, clientSla }) => {
  return (
    <Box
      sx={{
        display: "flex", // Enable flexbox
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        width: "100%",
        bgcolor: "#f1f1f1",
        pb: 2, // Background color for the outer container
      }}
    >
      <Box
        sx={{
          bgcolor: "white",
          height: "auto",
          borderRadius: "17px",
          width: clientSla ? "100%" : "90%",
          pb: 3,
          // Additional styles can be uncommented if needed
          // borderTop: "none",
          // borderRight: "5px solid #3e5c76",
          // borderLeft: "5px solid #3e5c76",
          // borderBottom: "5px solid #3e5c76",
          // borderBottomLeftRadius: "20px",
          // borderBottomRightRadius: "20px",
        }}
      >
        {children} {/* Render children */}
      </Box>
    </Box>
  );
};

const EachGridItem = ({
  label,
  name,
  register,
  helperText,
  errors,
  validationRules,
  isRequired = false, // new prop to conditionally add asterisk

  sx,
}) => {
  return (
    <Grid item size={sx}>
      <InputLabel sx={lableSize}>
        {label} {isRequired && <span style={{ color: "red" }}>*</span>}{" "}
        {/* Render asterisk conditionally */}
      </InputLabel>
      <TextField
        fullWidth
        variant="outlined"
        size="small"
        // disabled={sameAsAbove === "yes" || disabled} // Disable if 'sameAsAbove' is "yes" or if 'disabled' prop is provided
        // Disable field if 'sameAsAbove' is "yes"
        sx={{ ...textfield }}
        {...register(name, validationRules)}
        error={errors} // Highlight the input if there is an error
        helperText={helperText} // Display error message if validation fails
      />
    </Grid>
  );
};
const FormDateFields = ({
  label,
  name,
  required,
  control,
  format,
  views,
  gridSize,
  gridXLSize,
}) => {
  const { verifierFormSaveOrSubmit } = React.useContext(ClientDataContext);
  const isYearView = views && views.length === 1 && views[0] === "year";

  return (
    <Grid
      size={
        gridSize
          ? { xs: 12, sm: 6, md: 4, lg: 4 }
          : gridXLSize
          ? { xs: 12, sm: 6, md: 6, lg: 6 }
          : { xs: 12, sm: 6, md: 4, lg: 3 }
      }
    >
      <InputLabel sx={lableSize}>
        {label}
        {required && <span style={{ color: "red" }}>*</span>}
      </InputLabel>
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          format={format === "YYYY" ? "YYYY" : "DD/MM/YYYY"}
          views={isYearView ? ["year"] : ["year", "month", "day"]}
          sx={{ ...textfield, width: "100%" }}
          slotProps={{
            textField: {
              size: "small",
              name: name, // Corrected name
            },
          }}
        />
      </LocalizationProvider> */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          name={name || ""} // Field name for the form
          control={control} // Pass control from useForm hook
          rules={{
            required: verifierFormSaveOrSubmit === "submit" && required,
          }}
          render={({ field, fieldState: { error } }) => (
            <>
              {/* Render the DatePicker input */}
              <DatePicker
                {...field}
                format="DD-MM-YYYY" // Ensure the date is in DD-MM-YYYY format
                value={field.value ? dayjs(field.value) : null}
                onChange={(newValue) =>
                  field.onChange(
                    newValue ? dayjs(newValue).format("YYYY-MM-DD") : null
                  )
                }
                sx={{
                  ...textfield,
                  width: "100%",
                  border: error ? "1px solid red" : "none", // Conditional border based on error
                  borderRadius: "8px",
                }}
              />

              {/* Conditionally render the helper text below the DatePicker */}
              {error && (
                <FormHelperText error sx={{ marginLeft: 2 }}>
                  {error.message}
                </FormHelperText>
              )}
            </>
          )}
        />
      </LocalizationProvider>
    </Grid>
  );
};
const formatDate = (value) => {
  const date = new Date(value);
  if (isNaN(date)) return value; // Return original value if it's not a valid date

  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }); // Format: DD-MM-YYYY
};

const MultiSelectAutocompleteField = ({
  name,
  typename = "",
  gridSize,
  gridlXLSize,
  gridSizeForVerifierScreen,
  label,
  options,
}) => {
  const { control } = useFormContext();
  return (
    <>
      {" "}
      <Grid
        size={
          gridSize
            ? { xs: 12, sm: 6, md: 4, lg: 4 }
            : gridlXLSize
            ? { xs: 12, sm: 6, md: 4, lg: 6 }
            : gridSizeForVerifierScreen
            ? { xs: 12, sm: 12, md: 6, lg: 6 }
            : { xs: 12, sm: 6, md: 4, lg: 3 }
        }
      >
        <InputLabel sx={lableSize}>{label}</InputLabel>

        <Controller
          name={name}
          control={control}
          render={({ field, fieldState: { error } }) => {
            const parsedValue =
              typeof field.value === "string"
                ? JSON.parse(field.value)
                : field.value || [];

            return (
              <Autocomplete
                disableCloseOnSelect
                multiple
                size="small"
                options={options}
                getOptionLabel={(option) => option.name || ""}
                value={parsedValue}
                onChange={(_, newValue) =>
                  field.onChange(JSON.stringify(newValue))
                }
                isOptionEqualToValue={(option, value) =>
                  option.name === value.name
                }
                renderOption={(props, option, { selected }) => (
                  <li {...props} style={{ textTransform: "capitalize" }}>
                    <Checkbox checked={selected} style={{ marginRight: 8 }} />
                    {option.name}
                  </li>
                )}
                renderTags={(value) => {
                  if (value.length >= 2) {
                    return [
                      <Typography key="tag" sx={{ fontSize: "0.8rem" }}>
                        {`${value.length} ${typename} selected`}
                      </Typography>,
                    ];
                  }
                  return value.length === 1 ? (
                    <Typography sx={{ fontSize: "0.8rem" }}>
                      {value[0]?.name}
                    </Typography>
                  ) : (
                    ""
                  );
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    sx={{
                      ...textfield,

                      textTransform: "capitalize",
                      "& .MuiInputBase-input": {
                        fontSize: "12px",
                      },
                    }}
                    // placeholder={
                    //   parsedValue.length === 0
                    //     ? "Select Mode of verification"
                    //     : ""
                    // }
                    error={!!error}
                    helperText={error ? error.message : ""}
                  />
                )}
              />
            );
          }}
        />
      </Grid>
    </>
  );
};

const FormFields = ({
  forRework = false,
  // disabled = false,
  label,
  basePath,
  required = false,
  requireMessage = "This field is required",
  gridSize,
  gridlXLSize,
  gridSizeForVerifierScreen,
  pattern,
  patternMessage = "Invalid format",
  min,
  max,
  minLength,
  maxLength,
}) => {
  const { verifierFormSaveOrSubmit } = React.useContext(ClientDataContext);
  const { control } = useFormContext();

  return (
    <Grid
      size={
        gridSize
          ? { xs: 12, sm: 6, md: 4, lg: 4 }
          : gridlXLSize
          ? { xs: 12, sm: 6, md: 4, lg: 6 }
          : gridSizeForVerifierScreen
          ? { xs: 12, sm: 12, md: 6, lg: 6 }
          : { xs: 12, sm: 6, md: 4, lg: 3 }
      }
    >
      {forRework ? (
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
          <ErrorOutline sx={{ fontSize: 16, color: "#C14600" }} />
          <InputLabel sx={lableSize}>
            {label}
            {/* {isRequired && <span style={{ color: "red" }}> *</span>} */}
          </InputLabel>
        </Box>
      ) : (
        <InputLabel sx={lableSize}>
          {label}
          {required && <span style={{ color: "red" }}> *</span>}
        </InputLabel>
      )}{" "}
      <Controller
        name={basePath}
        control={control}
        rules={{
          required:
            required && verifierFormSaveOrSubmit === "submit"
              ? requireMessage
              : false,

          pattern: pattern
            ? { value: new RegExp(pattern), message: patternMessage }
            : undefined,
          min:
            min !== undefined
              ? { value: min, message: `Minimum value is ${min}` }
              : undefined,
          max:
            max !== undefined
              ? { value: max, message: `Maximum value is ${max}` }
              : undefined,
          minLength:
            minLength !== undefined
              ? { value: minLength, message: `Minimum length is ${minLength}` }
              : undefined,
          maxLength:
            maxLength !== undefined
              ? { value: maxLength, message: `Maximum length is ${maxLength}` }
              : undefined,
        }}
        render={({ field, fieldState: { error } }) => {
          // const formattedValue =
          //   typeof field.value === "string" && Date.parse(field.value) ? formatDate(field.value) : field.value;

          return (
            <TextField
              {...field}
              fullWidth
              // type="text"
              variant="outlined"
              size="small"
              sx={textfield}
              error={!!error}
              disabled={forRework}
              helperText={error?.message || ""}
              // value={formattedValue} // Display formatted date if applicable
            />
          );
        }}
      />
    </Grid>
  );
};

// const FormTextArea = ({
//   label,
//   gridSize,
//   gridXXLSize,
//   register,
//   error,
//   helperText,
// }) => {
//   return (
//     <Grid
//       size={
//         gridSize
//           ? { xs: 12, sm: 6, md: 4, lg: 6 }
//           : gridXXLSize
//           ? { xs: 12, sm: 6, md: 6, lg: 12 }
//           : { xs: 12, sm: 6, md: 4, lg: 3 }
//       }
//     >
//       <InputLabel sx={lableSize}>{label}</InputLabel>
//       <StyledTextarea
//         sx={{ bgcolor: "transparent", height: "1500px" }}
//         minRows={2.5}
//         {...register}
//         error={error}
//         helperText={helperText}
//       />
//     </Grid>
//   );
// };
const FormSelectFields = ({
  name,
  control,
  required,
  label,
  options,
  register,freeSolo=false,
  error,
  helperText,
  gridSize,
  gridlXLSize,
  doYouNeedAddNewButton,
  gridSizeForVerifierScreen,
}) => {

  const { verifierFormSaveOrSubmit } = React.useContext(ClientDataContext);
  // const { control } = useFormContext();

  const [isDialogOpen, setDialogOpen] = useState(false); // State to control dialog visibility
  const [newLabel, setNewLabel] = useState(""); // State to store the new label value

  const handleOpenDialog = () => {
    console.log("Dialog open triggered");
    setDialogOpen(true);
  };
  const handleCloseDialog = () => {
    setDialogOpen(false);
    setNewLabel(""); // Reset the input value
  };

  const handleSave = () => {
    console.log("New label saved:", newLabel);
    // Add logic to handle the new label (e.g., update options or send to API)
    setDialogOpen(false); // Close dialog after saving
    setNewLabel(""); // Reset the input value
  };
  {
    doYouNeedAddNewButton && console.log("state", isDialogOpen);
  }
  return (
    <>
      <Grid
        size={
          gridSize
            ? { xs: 12, sm: 6, md: 4, lg: 4 }
            : gridlXLSize
            ? { xs: 12, sm: 6, md: 4, lg: 6 }
            : gridSizeForVerifierScreen
            ? { xs: 12, sm: 12, md: 6, lg: 6 }
            : { xs: 12, sm: 6, md: 4, lg: 3 }
        }
      >
        <InputLabel sx={lableSize}>
          {label}
          {required && <span style={{ color: "red" }}>*</span>}
        </InputLabel>
        <Controller
          name={name || ""}
          control={control} // Use control from useForm
          rules={{
            required: verifierFormSaveOrSubmit === "submit" && required,
          }}
          render={({ field, fieldState: { error } }) => (
            <Autocomplete
              freeSolo={freeSolo}
              {...field}
              options={options || []}
              value={
                options?.length > 0
                  ? typeof options[0] === "object"
                    ? (() => {
                        try {
                          const parsed = JSON.parse(field.value);
                          return (
                            options.find((opt) => opt.id === parsed?.id) || null
                          );
                        } catch (e) {
                          return null;
                        }
                      })()
                    : field.value
                  : null
              }
              getOptionLabel={(option) =>
                typeof option === "object" ? option?.name || "" : option
              }
              onChange={(_, value) => {
                field.onChange(
                  typeof options[0] === "object" ? JSON.stringify(value) : value
                );
              }}
                onInputChange={freeSolo ? (_, newInputValue) => field.onChange(newInputValue) : undefined}

              renderInput={(params) => (
                <TextField
                  {...params}
                  size="small"
                  variant="outlined"
                  error={!!error} // Show red border if there's an error
                  helperText={error?.message} // Display validation error message
                />
              )}
              sx={{ ...textfield, width: "100%" }}
            />
          )}
        />
        {/* <Autocomplete
          size="small"
          options={options || []} // Only options without mixing with a button
          disableClearable
          renderInput={(params) => (
            <TextField
              sx={{
                ...textfield,
                "& .MuiInputBase-input": {
                  textTransform: "capitalize", // Apply capitalize to the input text
                },
              }}
              {...params}
              {...register}
              error={error}
              helperText={helperText}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {params.InputProps.endAdornment}
                    {doYouNeedAddNewButton === "true" && (
                      <Add
                        sx={{
                          mr: -1, // Adjust margin to align properly
                          color: "grey",
                          cursor: "pointer", // Make it look clickable
                          "&:hover": {
                            color: "#1976d2", // Change color on hover
                          },
                        }}
                        onClick={handleOpenDialog} // Trigger dialog on click
                      />
                    )}
                  </>
                ),
              }}
            />
          )}
        /> */}

        {/* {doYouNeedAddNewButton === "true" && (
                <Button
                onClick={(event) => {
                  event.stopPropagation(); // Prevent interaction conflicts with the dropdown
                  handleOpenDialog();
                }}                  sx={{
                    width: "100%",
                    backgroundColor: "#343E3D",
                    color: "white",
                    textTransform: "capitalize",
                    mt: 1, // Add some margin for spacing
                  }}
                >
                  Add New
                </Button>
              )} */}
      </Grid>
      <Dialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        fullWidth
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "500px",
            },
          },
        }}
      >
        <Card
          sx={{
            padding: 6,
            boxShadow: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "100%", position: "relative" }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Add New Data to Master
            </Typography>

            <IconButton
              onClick={handleCloseDialog}
              sx={{ position: "absolute", top: -30, right: -25 }}
            >
              <Close />
            </IconButton>

            <Divider sx={{ mb: 2 }} />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ mt: 2 }}>
                <InputLabel>{label}</InputLabel>
                <TextField
                  size="small"
                  value={newLabel}
                  name="name"
                  variant="outlined"
                  autoComplete="name"
                  placeholder="Enter name"
                  fullWidth
                  onChange={(e) => setNewLabel(e.target.value)}
                />
              </Box>

              {/* {message && message.text ? (
                      <Typography component="p" sx={{ color: message.color }}>
                        {message.text}
                      </Typography>
                    ) : null} */}

              <Box mt={2} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={handleSave}
                  sx={{
                    bgcolor: "#023e8a",
                    padding: 1,
                    mt: 1,
                    textTransform: "capitalize",
                  }}
                >
                  {/* {loading && loading ? (
                          <CircularProgress size={20} color="white" />
                        ) : ( */}
                  <Typography sx={{ fontSize: "12px" }}>
                    Create New Master
                  </Typography>
                  {/* )} */}
                </Button>
              </Box>
            </Box>
          </Box>
        </Card>
      </Dialog>
      {/* <Dialog open={isDialogOpen} onClose={handleCloseDialog} fullWidth>
        <DialogTitle>Add New Data to Master</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            size="small"
            label={`Enter ${label} Name`} // Dynamically set the label
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
            sx={{ mt: 1 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} variant="outlined">
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            variant="contained"
            sx={{ backgroundColor: "#343E3D", color: "white" }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog> */}
    </>
  );
};

const customComponents = () => {
  return <div></div>;
};
export {
  CustomStatusButton,
  CustomViewButton,
  CustomEditButton,
  CustomDeleteButton,
  CustomLoader,
  StyledTableCell,
  StyledTableRow,
  CustomSendButton,
  OuterBoxForForm,
  InnerBoxPlusGrid,
  EachGridItem,
  CustomPrivilegeButton,
  FormSelectFields,
  CustomReworkButton,
  FormFields,
//   FormTextArea,
  MultiSelectAutocompleteField,
  FormDateFields,
};
export default customComponents;
