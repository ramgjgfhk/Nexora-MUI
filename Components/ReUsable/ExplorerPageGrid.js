import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";
import {
  DataGrid,
  GridToolbar,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import {
  Box,
  CircularProgress,
  Snackbar,
  Alert,
  Button,
  FormControl,
  InputAdornment,
  TextField,
  IconButton,
} from "@mui/material";
// import { fetchVerifierLList } from "@/pages/api/verifier-apies";
import { Herr_Von_Muellerhoff, Plus_Jakarta_Sans } from "next/font/google";
// import { ClientDataContext } from "@/components/ContextProvider/MyContex";
import { ClearRounded, FilterList, SearchRounded } from "@mui/icons-material";
import FilterModalComponent from "./customFilter";

// import { textfield } from "../MuiSxStyle/SlaFormPageStyle";
import Router, { useRouter } from "next/router";
import { textfield } from "../ui";

// const CustomToolbar = ({
//   handleApplyFilters,
//   fieldsForFilter,
//   appliedFilters,
//   setAppliedFilters,
//   searchTerm,
//   setSearchTerm,
// }) => (
//   <GridToolbarContainer sx={{ mb: 0, pr: 1, backgroundColor: "#f9fafb" }}>
//     <FilterModalComponent
//       onApply={handleApplyFilters}
//       customFilters={fieldsForFilter}
//       appliedFilters={appliedFilters}
//       setAppliedFilters={setAppliedFilters}
//     />
//     {/* <GridToolbarFilterButton /> */}
//     <GridToolbarColumnsButton />
//     <GridToolbarDensitySelector />
//     <GridToolbarExport />
//     <FormControl
//       sx={{ width: "250px", ml: "auto !important" }}
//       variant="outlined"
//     >
//       <TextField
//         size="medium"
//         id="search"
//         placeholder="Search…"
//         sx={{ ...textfield, height: "2rem" }}
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         InputProps={{
//           startAdornment: (
//             <InputAdornment position="start">
//               <SearchRounded fontSize="small" />
//             </InputAdornment>
//           ),
//           endAdornment: searchTerm !== "" && (
//             <InputAdornment position="end" sx={{ cursor: "pointer" }}>
//               {/* <IconButton
//           onClick={() => setSearchTerm("")}
//           size="small"
//           edge="end"
//           aria-label="clear search"
//         > */}
//               <ClearRounded
//                 onClick={() => setSearchTerm("")}
//                 fontSize="small"
//               />
//               {/* </IconButton> */}
//             </InputAdornment>
//           ),
//         }}
//         inputProps={{
//           "aria-label": "search",
//         }}
//       />
//     </FormControl>
//   </GridToolbarContainer>
// );
// // const MemoizedCustomToolbar = React.memo(CustomToolbar);

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin-ext"],
});
const ExplorerGrid = ({ rows, columns }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        sx={{
          border: "2px solid #E7E9EF",
          borderRadius: "8px",
          '& .MuiDataGrid-container--top [role="row"], & .MuiDataGrid-container--bottom [role="row"]':
            {
              backgroundColor: "#F9FAFB", // Example: Change background
              color: "#333",
            },
          "& .MuiDataGrid-cell": {
            color: "#333", // Cell text color
            fontSize: "11px", // Cell font size
            // textAlign: "center", // Text alignment
            // fontFamily: jakarta.style.fontFamily,
            px: "10px",
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: "#F9FAFB !important", // Header background
            color: "#000",
            justifyContent: "center",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: 600, // Ensures bold applies to header text
            fontSize: "13px", // Ensure font size is 12px
            // justifyContent:"center"
          },

          //   "& .MuiDataGrid-columnHeaderTitleContainer": {
          //     justifyContent: "center",
          //   },

          "& .MuiDataGrid-footerContainer": {
            backgroundColor: "#F9FAFB", // Footer background
          },
          "& .Mui-selected": {
            backgroundColor: "white !important", // Selected row background
            fontSize: "12px",
            // border:'0.5px solid black !important',
          },
          "& .MuiDataGrid-checkboxInput": {
            transform: "scale(0.8)", // Scale up the checkbox size
          },
          "& .MuiDataGrid-row": {
            // borderBottom: "0.1px solid #e0e0e0",
          },
          "& .MuiTablePagination-selectLabel": {
            fontSize: "12px", // Adjusts the label font size
          },
          "& .MuiSelect-select-MuiInputBase-input": {
            fontSize: "12px", // Adjusts the input font size
          },
          "& .MuiTablePagination-displayedRows": {
            fontSize: "12px", // Adjusts the displayed rows font size
          },
          ".MuiDataGrid-cell:focus": { outline: "none" }, // Removes focus border
          ".MuiDataGrid-cell:focus-within": { outline: "none" },
        }}
      />

      {/* Error Snackbar */}
    </Box>
  );
};
// export  {fetchData };

export default ExplorerGrid;
