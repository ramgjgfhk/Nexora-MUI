import {
  DisabledByDefaultRounded,
  FilterAlt,
  FilterAltOff,
} from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useEffect, useMemo, useState } from "react";

import {
  FiChevronDown,
  FiChevronUp,
  FiDownload,
  FiFilter,
  FiSearch,
} from "react-icons/fi";
// import axios from 'axios';

const TableComponent = ({
  columns,
  fetchData,
  datas,
  searchText,
  customFilters,
}) => {
  const [filterPanelOpen, setFilterPanelOpen] = useState(false);
  const [filterValues, setFilterValues] = useState({});
  const [data, setData] = useState(datas);
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnFilters, setColumnFilters] = useState({});
  const [sorting, setSorting] = useState([]);
  const [showFilters, setShowFilters] = useState(true);
  const [activeFilterColumn, setActiveFilterColumn] = useState();

  // useEffect(() => {
  //   const loadData = async () => {
  //     const response = await fetchData({
  //       pageIndex,
  //       pageSize,
  //       globalFilter,
  //       columnFilters,
  //       sorting,
  //     });
  //     setData(response.data);
  //     setTotalCount(response.totalCount);
  //   };
  //   loadData();
  // }, [pageIndex, pageSize, globalFilter, columnFilters, sorting, fetchData]);

  const table = useReactTable({
    data,
    columns,
    pageCount: Math.ceil(totalCount / pageSize),
    state: {
      pagination: { pageIndex, pageSize },
      globalFilter,
      columnFilters: Object.entries(columnFilters).map(([id, value]) => ({
        id,
        value,
      })),
      sorting,
    },
    manualPagination: true,
    manualFiltering: true,
    manualSorting: true,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onPaginationChange: (updater) => {
      const newState =
        typeof updater === "function"
          ? updater({ pageIndex, pageSize })
          : updater;
      setPageIndex(newState.pageIndex);
      setPageSize(newState.pageSize);
    },
    onSortingChange: setSorting,
  });
  const options = ["Option 1", "Option 2", "Option 3"];
  const handleExport = () => {
    const csv = [
      table
        .getHeaderGroups()[0]
        .headers.map((h) => h.column.columnDef.header)
        .join(","),
      ...data.map((row) =>
        table
          .getAllColumns()
          .map((col) => row[col.id] || "")
          .join(",")
      ),
    ].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "table_export.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div
      style={{
        fontFamily: "Inter, system-ui, sans-serif",
        fontSize: "13px",
        color: "#1f2937",
        // padding: "12px",
      }}
    >
      <div
        style={{
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        {/* Toolbar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 12px",
            backgroundColor: "#f9fafb",
            borderBottom: "1px solid #e5e7eb",
          }}
        >
          <div style={{ display: "flex", gap: "12px" }}>
            <FiFilter
              title="Toggle Filters"
              onClick={() => setFilterPanelOpen(true)}
              style={{ cursor: "pointer", fontSize: "18px", color: "#6b7280" }}
            />
            <FiDownload
              title="Export"
              style={{ cursor: "pointer", fontSize: "18px", color: "#6b7280" }}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <FiSearch style={{ color: "#9ca3af" }} />
            <input
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.target.value)}
              placeholder={searchText}
              style={{
                padding: "6px 8px",
                fontSize: "13px",
                border: "none",
                borderRadius: "6px",
                backgroundColor: "#f3f4f6",
                width: "200px",
                outline: "none",
              }}
            />
          </div>
        </div>

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ backgroundColor: "#f9fafb" }}>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    style={{
                      padding: "8px",
                      textAlign: "center",
                      borderBottom: "1px solid #e5e7eb",
                      fontWeight: "500",
                    }}
                  >
                    {/* <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    > */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        // alignItems: "end",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </span>
                      <div>
                        <span
                          onClick={header.column.getToggleSortingHandler()}
                          style={{ cursor: "pointer" }}
                        >
                          {header.column.getIsSorted() === "asc" && (
                            <FiChevronUp size={14} />
                          )}
                          {header.column.getIsSorted() === "desc" && (
                            <FiChevronDown size={14} />
                          )}
                          {header.column.getIsSorted() === false && (
                            <FiChevronDown size={14} style={{ opacity: 0.3 }} />
                          )}
                        </span>
                        {header.column.getCanFilter() && (
                          <div style={{ display: "inline-block" }}>
                            <FiFilter
                              title="Column Filter"
                              size={14}
                              style={{
                                cursor: "pointer",
                                color: columnFilters[header.column.id]
                                  ? "#1f2937" // darker color when active
                                  : "#9ca3af",
                                marginLeft: "5px",
                              }}
                              onClick={() =>
                                setActiveFilterColumn(
                                  activeFilterColumn === header.column.id
                                    ? null
                                    : header.column.id
                                )
                              }
                            />
                            {activeFilterColumn === header.column.id && (
                              <div
                                style={{
                                  position: "absolute",
                                  marginTop: "4px",
                                  backgroundColor: "#fff",
                                  border: "1px solid #d1d5db",
                                  borderRadius: "4px",
                                  padding: "6px",
                                  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                                  zIndex: 10,
                                }}
                              >
                                <input
                                  type="text"
                                  value={columnFilters[header.column.id] || ""}
                                  onChange={(e) =>
                                    setColumnFilters((prev) => ({
                                      ...prev,
                                      [header.column.id]: e.target.value,
                                    }))
                                  }
                                  style={{
                                    padding: "4px 8px",
                                    fontSize: "12px",
                                    width: "180px",
                                    marginBottom: "6px",
                                    borderRadius: "4px",
                                  }}
                                  placeholder="Type to filter"
                                />
                                {/* <span
            onClick={() => {
              setActiveFilterColumn(null);
              // already applied onChange above
            }}
            style={{ cursor: "pointer", fontSize: "14px", color: "#10b981" }}
            title="Apply"
          >
            ✅
          </span> */}
                                <span
                                  onClick={() => {
                                    setColumnFilters((prev) => {
                                      const updated = { ...prev };
                                      delete updated[header.column.id];
                                      return updated;
                                    });
                                    setActiveFilterColumn(null);
                                  }}
                                  style={{
                                    cursor: "pointer",
                                    fontSize: "11px",
                                    color: "#ef4444",
                                    marginLeft: "4px",
                                  }}
                                  title="Clear"
                                >
                                  ❌
                                </span>
                                {/* <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span
            onClick={() => {
              setActiveFilterColumn(null);
              // already applied onChange above
            }}
            style={{ cursor: "pointer", fontSize: "14px", color: "#10b981" }}
            title="Apply"
          >
            ✅
          </span>
          <span
            onClick={() => {
              setColumnFilters((prev) => {
                const updated = { ...prev };
                delete updated[header.column.id];
                return updated;
              });
              setActiveFilterColumn(null);
            }}
            style={{ cursor: "pointer", fontSize: "14px", color: "#ef4444" }}
            title="Clear"
          >
            ❌
          </span>
        </div> */}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    {/* {header.column.getCanFilter() && activeFilterColumn === header.column.id && (
                        <input
                          type="text"
                          value={columnFilters[header.column.id] || ''}
                          onChange={(e) =>
                            setColumnFilters(prev => ({
                              ...prev,
                              [header.column.id]: e.target.value,
                            }))
                          }
                          placeholder="Filter"
                          style={{
                            padding: '4px',
                            fontSize: '12px',
                            width: '90px',
                            border: '1px solid #d1d5db',
                            borderRadius: '4px'
                          }}
                        />
                      )} */}
                    {/* </div> */}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                style={{
                  borderBottom: "1px solid #f3f4f6",
                  backgroundColor: "white",
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f3f4f6")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "white")
                }
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    style={{ padding: "6px", fontSize: "13px" }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px",
            backgroundColor: "#f9fafb",
            borderTop: "1px solid #e5e7eb",
          }}
        >
          <div>
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              style={{
                padding: "2px 10px",
                fontSize: "12px",
                backgroundColor: "#fff",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
                marginRight: "6px",
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#f3f4f6")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#fff")
              }
            >
              Prev
            </button>
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              style={{
                padding: "2px 10px",
                fontSize: "12px",
                backgroundColor: "#fff",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#f3f4f6")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#fff")
              }
            >
              Next
            </button>
          </div>

          <div style={{ fontSize: "13px" }}>
            Page {pageIndex + 1} of {Math.ceil(totalCount / pageSize)}
          </div>

          <div>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setPageIndex(0);
              }}
              style={{
                padding: "3px",
                fontSize: "11px",
                border: "1px solid #d1d5db",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              {[5, 10, 15, 50].map((size) => (
                <option key={size} value={size}>
                  Show {size}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {filterPanelOpen && (
        <div
          style={{
            position: "fixed",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            top: 0,
            right: 0,
            height: "100%",
            width: "300px",
            backgroundColor: "#ffffff",
            borderLeft: "1px solid #e5e7eb",
            boxShadow: "-2px 0 5px rgba(0,0,0,0.05)",
            padding: "16px",
            zIndex: 9999,
            overflowY: "auto",
          }}
        >
          <section>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <Typography variant="h6" sx={{ fontSize: "16px" }}>
                Filters
              </Typography>
              {/* <button
              onClick={() => setFilterPanelOpen(false)}
              style={{
                border: "none",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              ✕
            </button> */}
              <DisabledByDefaultRounded color="error" fontSize="small"  onClick={() => setFilterPanelOpen(true)}/>
            </div>

            {/* Text Fields */}
            {customFilters?.text?.map((field) => (
              <div key={field.name} style={{ marginBottom: "12px" }}>
                {/* <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    marginBottom: "4px",
                  }}
                >
                  {field.label}
                </label> */}
                <Typography
                  variant="subtitle2"
                  sx={{ fontSize: "11.5px", mb: 0.3 }}
                >
                  {" "}
                  {field.label}
                </Typography>
                <TextField
                  fullWidth
                  value={filterValues[field.name] || ""}
                  onChange={(e) =>
                    setFilterValues((prev) => ({
                      ...prev,
                      [field.name]: e.target.value,
                    }))
                  }
                  size="small"
                  // placeholder="Enter text"
                  sx={{
                    "& .MuiInputBase-root": {
                      height: 30, // Total height
                      borderRadius: "6px", // Optional: Rounded corners
                    },
                    "& .MuiInputBase-input": {
                      // padding: "8px 12px", // Control inner text padding
                    },
                  }}
                ></TextField>
              </div>
            ))}

            {/* Date Pickers */}
            {customFilters?.date?.map((field) => (
              <div key={field.name} style={{ marginBottom: "12px" }}>
                <Typography
                  variant="subtitle2"
                  sx={{ fontSize: "11.5px", mb: 0.3 }}
                >
                  {" "}
                  {field.label}
                </Typography>{" "}
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    // label="a"
                    // value={toDate}
                    // minDate={fromDate || minDate}
                    // onChange={(newValue) => setToDate(newValue)}
                    slotProps={{
                      textField: {
                        size: "small",
                        // placeholder:"s",
                        fullWidth: true,
                        sx: {
                          "& label": {
                            fontSize: "12px", // 👈 Smaller label
                            // fontWeight: 500,
                          },
                          "& .MuiInputAdornment-root svg": {
                            fontSize: "18px", // Reduce icon size
                          },
                          "& .MuiIconButton-root": {
                            border: "none",
                            padding: 0,
                            backgroundColor: "transparent",
                          },
                          "& .MuiPickersInputBase-root": { height: "30px" },
                        },
                      },
                    }}
                  />
                </LocalizationProvider>
                {/* <input
                  type="date"
                  value={filterValues[field.name] || ""}
                  onChange={(e) =>
                    setFilterValues((prev) => ({
                      ...prev,
                      [field.name]: e.target.value,
                    }))
                  }
                  style={{
                    padding: "6px",
                    width: "100%",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                  }}
                /> */}
              </div>
            ))}

            {/* Autocomplete (Select Dropdown) */}
            {customFilters?.autocomplete?.map((field) => (
              <div key={field.name} style={{ marginBottom: "12px" }}>
                <Typography
                  variant="subtitle2"
                  sx={{ fontSize: "11.5px", mb: 0.3 }}
                >
                  {" "}
                  {field.label}
                </Typography>
                <Autocomplete
                  options={field.options}
                  size="small"
                  // popupIcon={null} // Removes the dropdown icon
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      sx={{
                        "& .MuiInputBase-root": {
                          height: 30,
                          borderRadius: "6px",
                          // minHeight: 30,
                        },
                        "& .MuiInputBase-input": {
                          // padding: "4px 8px",
                        },
                        "& .MuiAutocomplete-endAdornment": {
                          display: "none", // Hides the default clear icon
                        },
                      }}
                      value={filterValues[field.name] || ""}
                      onChange={(e) =>
                        setFilterValues((prev) => ({
                          ...prev,
                          [field.name]: e.target.value,
                        }))
                      }
                    />
                  )}
                />
              </div>
            ))}
          </section>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              gap: 1,
              mt: 2,
              // alignSelf: "flex-end",
            }}
          >
            <Button
              size="small"
              onClick={() => {
                setFilterValues({});
                setColumnFilters({});
              }}
              // startIcon={<FilterAltOff />}
              sx={{
                flex: 1,
                textTransform: "none",
                borderRadius: "6px",
                fontWeight: 500,
                height: "30px",
                // px: 2,
                // py: 0.8,
                backgroundColor: "#d32f2f",
                color: "#fff",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  backgroundColor: "#b71c1c",
                  boxShadow: "0 2px 8px rgba(211, 47, 47, 0.3)",
                },
              }}
            >
              Remove Filters
            </Button>

            <Button
              size="small"
              onClick={() => {
                setColumnFilters(filterValues);
                setFilterPanelOpen(false);
              }}
              // startIcon={<FilterAlt />}
              sx={{
                flex: 1,
                textTransform: "none",
                borderRadius: "6px",
                height: "30px",
                fontWeight: 500,
                // px: 2,
                // py: 0.1,
                backgroundColor: "#4CC713",
                color: "#fff",
                transition: "all 0.2s ease-in-out",
                "&:hover": {
                  backgroundColor: "#43b012",
                  boxShadow: "0 2px 8px rgba(76, 199, 19, 0.3)",
                },
              }}
            >
              Apply Filters
            </Button>
          </Box>
        </div>
      )}
    </div>
  );
};

export default TableComponent;
