import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import React, { useEffect, useMemo, useState } from "react";

import {
  FiChevronDown,
  FiChevronUp,
  FiDownload,
  FiFilter,
  FiSearch,
} from "react-icons/fi";
// import axios from 'axios';

const TableComponent = ({ columns, fetchData, datas, searchText }) => {
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
              onClick={() => setShowFilters(!showFilters)}
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
                            <FiFilter
                              title="Column Filter"
                              size={14}
                              style={{ cursor: "pointer", color: "#6b7280", marginLeft:"5px" }}
                              // onClick={() => setActiveFilterColumn(activeFilterColumn === header.column.id ? null : header.column.id)}
                            />
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
    </div>
  );
};

export default TableComponent;
