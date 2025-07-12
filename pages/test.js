import AdvancedSortButton from "@/Components/advancedsort";
import AdvancedFilterButton from "@/Components/filters";
import SortPopupButton from "@/Components/sortui";
import { Box, Typography } from "@mui/material";

import React, { useState } from "react";

const SegmentPage = () => {
  const columns = [
    { field: "name", headerName: "Name", flex: 1, type: "boolean" },
    { field: "age", headerName: "Age", flex: 1, type: "number" },
    { field: "city", headerName: "City", flex: 1, type: "date" },
  ];

  const [filterModel, setFilterModel] = useState({ logic: "AND", rules: [] });
  const [sortModel, setSortModel] = useState([]);
  const sortableColumns = [
    { headerName: "Name", colId: "name" },
    { headerName: "Age", colId: "age" },
    { headerName: "City", colId: "city"  },  
  ];
  return (
    <>
      <SortPopupButton
        sortModel={sortModel}
        setSortModel={setSortModel}
        sortableColumns={columns.map((col) => ({
          colId: col.field,
          headerName: col.headerName,
        }))}
      />
      <AdvancedSortButton
        sortModel={sortModel}
        setSortModel={setSortModel}
        sortableColumns={sortableColumns}
      />
      <AdvancedFilterButton
        filterModel={filterModel}
        setFilterModel={setFilterModel}
        columns={columns}
      />{" "}
      <Box sx={{ width: "100%", maxWidth: 500 }}>
        <Typography variant="h1" gutterBottom>
          h1. Heading
        </Typography>
        <Typography variant="h2" gutterBottom>
          h2. Heading
        </Typography>
        <Typography variant="h3" gutterBottom>
          h3. Heading
        </Typography>
        <Typography variant="h4" gutterBottom>
          h4. Heading
        </Typography>
        <Typography variant="h5" gutterBottom>
          h5. Heading
        </Typography>
        <Typography variant="h6" gutterBottom>
          h6. Heading
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur
        </Typography>
        <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="body2" gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
        <Typography variant="button" gutterBottom sx={{ display: "block" }}>
          button text
        </Typography>
        <Typography variant="caption" gutterBottom sx={{ display: "block" }}>
          caption text
        </Typography>
        <Typography variant="overline" gutterBottom sx={{ display: "block" }}>
          overline text
        </Typography>
      </Box>
    </>
  );
};

export default SegmentPage;
