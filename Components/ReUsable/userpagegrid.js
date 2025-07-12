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
  GridToolbarQuickFilter,
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
  styled,
} from "@mui/material";
// import { fetchVerifierLList } from "@/pages/api/verifier-apies";
import { Herr_Von_Muellerhoff, Plus_Jakarta_Sans } from "next/font/google";
// import { ClientDataContext } from "@/components/ContextProvider/MyContex";
import { ClearRounded, FilterList, SearchRounded } from "@mui/icons-material";
import FilterModalComponent from "./customFilter";

// import { textfield } from "../MuiSxStyle/SlaFormPageStyle";
import Router, { useRouter } from "next/router";
import { textfield } from "../ui";
import NoRows from "./norows";
import AdvancedSortButton from "../advancedsort";
import AdvancedFilterButton from "../filters";

const CustomToolbar = ({
  handleApplyFilters,
  fieldsForFilter,
  appliedFilters,
  setAppliedFilters,
  searchTerm,
  setSearchTerm,
  sortModel,
  setSortModel,
  sortableColumns,
  filterModel,
  setFilterModel,
  columns,
}) => (
  <GridToolbarContainer sx={{pt:1, mb: 0, pr: 1, backgroundColor: "#f9fafb" }}>
    <AdvancedSortButton
      sortModel={sortModel}
      setSortModel={setSortModel}
      sortableColumns={sortableColumns}
    />{" "}
    <AdvancedFilterButton
      filterModel={filterModel}
      setFilterModel={setFilterModel}
      columns={columns}
    />
    {/* <FilterModalComponent
      onApply={handleApplyFilters}
      customFilters={fieldsForFilter}
      appliedFilters={appliedFilters}
      setAppliedFilters={setAppliedFilters}
    /> */}
    {/* <GridToolbarFilterButton /> */}
    <GridToolbarColumnsButton />
    <GridToolbarDensitySelector />
    <GridToolbarExport />
    <FormControl
      sx={{ width: "250px", ml: "auto !important" }}
      variant="outlined"
    >
      <TextField
        size="small"
        id="search"
        placeholder="Search…"
        // sx={{}}
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
  {
    sortableColumns = [],
    colHeight = 32,
    urlKey = "default",
    fieldsForFilter = {},
    columns,
    apiurl,
    client = {},
  },
  ref
) => {
  const router = useRouter();
  const { query } = router;
  const [sortModel, setSortModel] = useState(
    query[`${urlKey}_sortModel`] || []
  );
  const [filterModel, setFilterModel] = useState({ logic: "AND", rules: [] });
  const offset = parseInt(query[`${urlKey}_offset`] || "0", 10);
  const limitPerPage = parseInt(query[`${urlKey}_limit`] || 10);
  const currentPage = Math.floor(offset / limitPerPage);

  let parsedFilters = {};
  try {
    parsedFilters = query[`${urlKey}_filters`]
      ? JSON.parse(query[`${urlKey}_filters`])
      : {};
  } catch (e) {
    console.warn("Invalid filters in query string");
  }

  const [rowCount, setRowCount] = useState(0);
  const [appliedFilters, setAppliedFilters] = useState(parsedFilters);
  const [searchTerm, setSearchTerm] = useState(
    query[`${urlKey}_searchTerm`] || ""
  );
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

      const { data, total_count } = await apiurl({
        search: searchTerm,
        filters: appliedFilters,
        limit: paginationModel.pageSize,
        offset,
        // setAction,
        // cookieName,
        client,
      });

      const rowsWithSlNo = data.map((row, index) => ({
        ...row,
        slNo: offset + index + 1,
      }));
      setRows(rowsWithSlNo);
      setRowCount(total_count);
      setPreviousPaginationModel(paginationModel);
      const clientIsNotEmpty = client && Object.keys(client).length > 0;
      // router.replace(
      //   {
      //     pathname: router.pathname,
      //     query: {
      //       ...router.query,
      //       offset,
      //       limit: paginationModel.pageSize,
      //       searchTerm,
      //       filters: JSON.stringify(appliedFilters),
      //       ...(clientIsNotEmpty && { client: JSON.stringify(client) }),
      //     },
      //   },
      //   undefined,
      //   { shallow: true }
      // );
      router.replace(
        {
          pathname: router.pathname,
          query: {
            ...router.query,
            [`${urlKey}_offset`]: offset,
            [`${urlKey}_limit`]: paginationModel.pageSize,
            [`${urlKey}_searchTerm`]: searchTerm,
            // [`${urlKey}_sortModel`]: sortModel,
            [`${urlKey}_filters`]: JSON.stringify(appliedFilters),
            ...(clientIsNotEmpty && {
              [`${urlKey}_client`]: JSON.stringify(client),
            }),
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
  }, [searchTerm, ]);
  const memoizedFieldsForFilter = useMemo(() => fieldsForFilter, []);
  const StyledGridOverlay = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    "& .no-rows-primary": {
      fill: "#3D4751",
      ...theme.applyStyles("light", {
        fill: "#AEB8C2",
      }),
    },
    "& .no-rows-secondary": {
      fill: "#1D2126",
      ...theme.applyStyles("light", {
        fill: "#E8EAED",
      }),
    },
  }));

  function CustomNoRowsOverlay() {
    return (
      <StyledGridOverlay>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={96}
          viewBox="0 0 452 257"
          aria-hidden
          focusable="false"
        >
          <path
            className="no-rows-primary"
            d="M348 69c-46.392 0-84 37.608-84 84s37.608 84 84 84 84-37.608 84-84-37.608-84-84-84Zm-104 84c0-57.438 46.562-104 104-104s104 46.562 104 104-46.562 104-104 104-104-46.562-104-104Z"
          />
          <path
            className="no-rows-primary"
            d="M308.929 113.929c3.905-3.905 10.237-3.905 14.142 0l63.64 63.64c3.905 3.905 3.905 10.236 0 14.142-3.906 3.905-10.237 3.905-14.142 0l-63.64-63.64c-3.905-3.905-3.905-10.237 0-14.142Z"
          />
          <path
            className="no-rows-primary"
            d="M308.929 191.711c-3.905-3.906-3.905-10.237 0-14.142l63.64-63.64c3.905-3.905 10.236-3.905 14.142 0 3.905 3.905 3.905 10.237 0 14.142l-63.64 63.64c-3.905 3.905-10.237 3.905-14.142 0Z"
          />
          <path
            className="no-rows-secondary"
            d="M0 10C0 4.477 4.477 0 10 0h380c5.523 0 10 4.477 10 10s-4.477 10-10 10H10C4.477 20 0 15.523 0 10ZM0 59c0-5.523 4.477-10 10-10h231c5.523 0 10 4.477 10 10s-4.477 10-10 10H10C4.477 69 0 64.523 0 59ZM0 106c0-5.523 4.477-10 10-10h203c5.523 0 10 4.477 10 10s-4.477 10-10 10H10c-5.523 0-10-4.477-10-10ZM0 153c0-5.523 4.477-10 10-10h195.5c5.523 0 10 4.477 10 10s-4.477 10-10 10H10c-5.523 0-10-4.477-10-10ZM0 200c0-5.523 4.477-10 10-10h203c5.523 0 10 4.477 10 10s-4.477 10-10 10H10c-5.523 0-10-4.477-10-10ZM0 247c0-5.523 4.477-10 10-10h231c5.523 0 10 4.477 10 10s-4.477 10-10 10H10c-5.523 0-10-4.477-10-10Z"
          />
        </svg>
        <Box sx={{ mt: 2 }}>No rows</Box>
      </StyledGridOverlay>
    );
  }

  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        checkboxSelection
        // autoHeight
        // height={200px}
        disableColumnMenu
        rows={rows}
        columns={columns}
        loading={loading}
        paginationMode="server"
        rowCount={rowCount}
        getRowId={(row) => row.id} // 👈 use slNo as unique ID
        slots={{
          toolbar: CustomToolbar, // Pass memoized component directly
          noRowsOverlay: CustomNoRowsOverlay,
          // }}
        }}
        slotProps={{
          toolbar: {
            handleApplyFilters,filterModel,setFilterModel,columns,
            appliedFilters,
            setAppliedFilters,
            fieldsForFilter: memoizedFieldsForFilter,
            searchTerm,
            sortModel,
            setSortModel,
            sortableColumns,
            setSearchTerm,
          },
          loadingOverlay: {
            variant: "skeleton",
            noRowsVariant: "skeleton",
          },
        }}
        rowHeight={colHeight}
        paginationModel={paginationModel}
        onPaginationModelChange={handlePaginationChange}
        pageSizeOptions={[5, 10, 25, 50]}
        sx={{
          height: "auto",
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
            // textAlign:"center",
            // borderBottom: "7px solid #e0e0e0",
            fontFamily: jakarta.style.fontFamily,
            justifyContent: "center",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            fontWeight: "bolder", // Ensures bold applies to header text
            fontSize: "12px", // Ensure font size is 12px
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
          "& .MuiDataGrid-cellSkeleton": { justifyContent: "center" },
          // "& .MuiDataGrid-skeletonLoadingOverlay": { height: "200px" },
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
