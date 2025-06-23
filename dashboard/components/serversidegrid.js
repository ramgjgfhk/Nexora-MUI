import React, { useEffect, useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import {
  FiChevronDown,
  FiChevronUp,
  FiDownload,
  FiFilter,
  FiSearch,
} from "react-icons/fi";
// import axios from 'axios';

const TableComponent = ({ columns, fetchData, datas, searchText, customFilters }) => {
  
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
        fontFamily: "Segoe UI, sans-serif",
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
                        <div >
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
                              <FiChevronDown
                                size={14}
                                style={{ opacity: 0.3 }}
                              />
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
          activeFilterColumn === header.column.id ? null : header.column.id
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
            marginBottom: "6px",borderRadius:"4px"
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
            style={{ cursor: "pointer", fontSize: "11px", color: "#ef4444",marginLeft:"4px" }}
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
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
      <strong>Filters</strong>
      <button onClick={() => setFilterPanelOpen(false)} style={{ border: "none", background: "transparent", cursor: "pointer" }}>✕</button>
    </div>

    {/* Text Fields */}
    {customFilters?.text?.map((field) => (
      <div key={field.name} style={{ marginBottom: "12px" }}>
        <label style={{ display: "block", fontSize: "13px", marginBottom: "4px" }}>{field.label}</label>
        <input
          type="text"
          value={filterValues[field.name] || ""}
          onChange={(e) => setFilterValues(prev => ({ ...prev, [field.name]: e.target.value }))}
          style={{ padding: "6px", width: "100%", border: "1px solid #ccc", borderRadius: "6px" }}
        />
      </div>
    ))}

    {/* Date Pickers */}
    {customFilters?.date?.map((field) => (
      <div key={field.name} style={{ marginBottom: "12px" }}>
        <label style={{ display: "block", fontSize: "13px", marginBottom: "4px" }}>{field.label}</label>
        <input
          type="date"
          value={filterValues[field.name] || ""}
          onChange={(e) => setFilterValues(prev => ({ ...prev, [field.name]: e.target.value }))}
          style={{ padding: "6px", width: "100%", border: "1px solid #ccc", borderRadius: "6px" }}
        />
      </div>
    ))}

    {/* Autocomplete (Select Dropdown) */}
    {customFilters?.autocomplete?.map((field) => (
      <div key={field.name} style={{ marginBottom: "12px" }}>
        <label style={{ display: "block", fontSize: "13px", marginBottom: "4px" }}>{field.label}</label>
        <select
          value={filterValues[field.name] || ""}
          onChange={(e) => setFilterValues(prev => ({ ...prev, [field.name]: e.target.value }))}
          style={{ padding: "6px", width: "100%", border: "1px solid #ccc", borderRadius: "4px" }}
        >
          <option value="">-- Select --</option>
          {field.options.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </div>
    ))}

    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px",alignSelf:"end" }}>
      <button
        onClick={() => {
          setFilterValues({});
          setColumnFilters({});
        }}
        style={{ fontSize: "13px", background: "#f3f4f6", border: "1px solid #ccc", padding: "6px 12px", borderRadius: "4px" }}
      >
        Clear
      </button>

      <button
        onClick={() => {
          setColumnFilters(filterValues);
          setFilterPanelOpen(false);
        }}
        style={{ fontSize: "13px", background: "#2563eb", color: "white", border: "none", padding: "6px 12px", borderRadius: "4px" }}
      >
        Apply
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default TableComponent;
