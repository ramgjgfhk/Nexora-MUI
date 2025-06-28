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

const CustomToolbar = ({
  handleApplyFilters,
  fieldsForFilter,
  appliedFilters,
  setAppliedFilters,
  searchTerm,
  setSearchTerm,
}) => (
  <GridToolbarContainer
    sx={{  mb: 0, pr: 1, backgroundColor:"#f9fafb",}}
  >
    <FilterModalComponent
      onApply={handleApplyFilters}
      customFilters={fieldsForFilter}
      appliedFilters={appliedFilters}
      setAppliedFilters={setAppliedFilters}
    /> 
     {/* <GridToolbarFilterButton /> */}
    <GridToolbarColumnsButton />
    <GridToolbarDensitySelector />
    <GridToolbarExport />
    <FormControl
      sx={{ width: "250px", ml: "auto !important" }}
      variant="outlined"
    >
      <TextField
        size="medium"
        id="search"
        placeholder="Search…"
        sx={{ ...textfield, height: "2rem" }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchRounded fontSize="small" />
            </InputAdornment>
          ),
          endAdornment: searchTerm !== "" && (
            <InputAdornment position="end" sx={{ cursor: "pointer" }}>
              {/* <IconButton
          onClick={() => setSearchTerm("")}
          size="small"
          edge="end"
          aria-label="clear search"
        > */}
              <ClearRounded
                onClick={() => setSearchTerm("")}
                fontSize="small"
              />
              {/* </IconButton> */}
            </InputAdornment>
          ),
        }}
        inputProps={{
          "aria-label": "search",
        }}
      />
    </FormControl>
  </GridToolbarContainer>
);
// const MemoizedCustomToolbar = React.memo(CustomToolbar);

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin-ext"],
});
const ServerSideGrid = (
  {Rows=[],
    fieldsForFilter = {},
    columns,

    apiurl,

    client = {},
  },
  ref
) => {
  console.log('rr',Rows)
  const router = useRouter();
  const { query } = router;
  const offset = parseInt(query.offset || "0", 10);
  const limitPerPage = parseInt(query.limit || 10);
  const currentPage = Math.floor(offset / limitPerPage);

  let parsedFilters = {};
  try {
    parsedFilters = query.filters ? JSON.parse(query.filters) : {};
  } catch (e) {
    console.warn("Invalid filters in query string");
  }

  const [rowCount, setRowCount] = useState(0);
  const [appliedFilters, setAppliedFilters] = useState(parsedFilters);
  const [searchTerm, setSearchTerm] = useState(query.searchTerm || "");
  const [paginationModel, setPaginationModel] = useState({
    page: currentPage,
    pageSize: limitPerPage,
  });
  // const { setAction } = React.useContext(ClientDataContext);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);

  const skipDebounceRef = useRef(false);

  const [previousPaginationModel, setPreviousPaginationModel] =
    useState(paginationModel);
  const fetchData = async () => {
    setLoading(true);
    try {
      const offset = paginationModel.page * paginationModel.pageSize;

      const { rows, total } = await apiurl({
        search: searchTerm,
        filters: appliedFilters,
        limit: paginationModel.pageSize,
        offset,
        // setAction,
        // cookieName,
        client,
      });

      const rowsWithSlNo = rows.map((row, index) => ({
        ...row,
        slNo: offset + index + 1,
      }));
      setRows(Rows);
      setRowCount(total);
      setPreviousPaginationModel(paginationModel);
      const clientIsNotEmpty = client && Object.keys(client).length > 0;
      router.replace(
        {
          pathname: router.pathname,
          query: {
            ...router.query,
            offset,
            limit: paginationModel.pageSize,
            searchTerm,
            filters: JSON.stringify(appliedFilters),
            ...(clientIsNotEmpty && { client: JSON.stringify(client) }),
          },
        },
        undefined,
        { shallow: true }
      );
    } catch (error) {
      console.log("error", error);
      setPaginationModel(previousPaginationModel);
    }
    setLoading(false);
  };
console.log('rows',rows)
  const [isInitialRender, setIsInitialRender] = useState(true);
  const handlePaginationChange = (newModel) => {
    if (newModel.pageSize !== paginationModel.pageSize) {
      const currentOffset = paginationModel.page * paginationModel.pageSize;

      const newPage = Math.floor(currentOffset / newModel.pageSize);

      setPaginationModel((prev) => ({
        ...prev,
        page: newPage,
        pageSize: newModel.pageSize,
      }));
    } else {
      setPaginationModel(newModel);
    }
  };

  useEffect(() => {
    //   if (isInitialRender) {
    //     setIsInitialRender(false);
    //     return;
    //   }
    fetchData();
  }, [paginationModel]);
  // useEffect(() => {
  //   const parsedQueryClient = (() => {
  //     try {
  //       return router.query.client ? JSON.parse(router.query.client) : {};
  //     } catch {
  //       return {};
  //     }
  //   })();

  //   const isEmptyObject = (obj) => Object.keys(obj).length === 0;

  //   const isExactMatch = (a, b) => {
  //     const aKeys = Object.keys(a);
  //     const bKeys = Object.keys(b);
  //     if (aKeys.length !== bKeys.length) return false;
  //     return aKeys.every((key) => a[key] === b[key]);
  //   };

  //   const queryIsEmpty = isEmptyObject(parsedQueryClient);
  //   const clientIsEmpty = isEmptyObject(client);

  //   if (
  //     (!queryIsEmpty && !isExactMatch(parsedQueryClient, client)) || // mismatch
  //     (queryIsEmpty && !clientIsEmpty) // query is empty but client has data
  //   ) {
  //     setPaginationModel({
  //       page: 0,
  //       pageSize: limit,
  //     });
  //   }
  // }, [client]);

  const [initialRender, setInitialRender] = useState(true);
  // useEffect(() => {
  //   if (initialRender) {
  //     setInitialRender(false);
  //     return;
  //   }
  //   fetchDataFilter();
  // }, [appliedFilters]);
  const handleApplyFilters = React.useCallback(() => {
    // console.log("Applied Filters:", filters);
    // setAppliedFilters(filters);
    // setSearchTermManually("");
    setPaginationModel({
      page: 0,
      pageSize: 10,
    });
  }, []);
  // const handleChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };
  const setSearchTermManually = (value) => {
    skipDebounceRef.current = true;
    setSearchTerm(value);
  };
  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
      return;
    }
    // if (skipDebounceRef.current) {
    //   skipDebounceRef.current = false; // reset it
    //   return; // Skip debounce effect
    // }

    const timer = setTimeout(() => {
    //   setAppliedFilters({});
      setPaginationModel({
        page: 0,
        pageSize: 10,
      });
    }, 400);

    return () => clearTimeout(timer);
  }, [searchTerm]);
  const memoizedFieldsForFilter = useMemo(() => fieldsForFilter, []);



  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
      checkboxSelection
        autoHeight
        disableColumnMenu
        rows={rows}
        columns={columns}
        loading={loading}
        paginationMode="server"
        rowCount={rowCount}
        getRowId={(row) => row.id} // 👈 use slNo as unique ID
        slots={{
          toolbar: CustomToolbar, // Pass memoized component directly
        }}
        slotProps={{
          toolbar: {
            handleApplyFilters,
            appliedFilters,
            setAppliedFilters,
            fieldsForFilter: memoizedFieldsForFilter,
            searchTerm,
            setSearchTerm,
          },
        }}
        rowHeight={32}
        paginationModel={paginationModel}
        onPaginationModelChange={handlePaginationChange}
        pageSizeOptions={[5, 10, 25, 50]}
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
            textAlign: "center", // Text alignment
            fontFamily: jakarta.style.fontFamily,
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: "#F9FAFB !important", // Header background
            color: "#000", // Header text color
            // borderBottom: "7px solid #e0e0e0",
            fontFamily: jakarta.style.fontFamily,
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "bolder", // Ensures bold applies to header text
            fontSize: "12px", // Ensure font size is 12px
          },
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

export default ServerSideGrid;
