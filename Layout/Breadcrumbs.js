import React from "react";
import { Breadcrumbs, Typography, Link, Stack } from "@mui/material";
import { menuItems } from "@/Components/Variables/sideMenus";
import { useRouter } from "next/router";

// Find breadcrumb trail based on path
function generateBreadcrumbTrail(path, items = menuItems, trail = []) {
  for (const item of items) {
    if (item.path === path) {
      return [...trail, { name: item.title, path: item.path }];
    }
    if (item.children) {
      const result = generateBreadcrumbTrail(path, item.children, [
        ...trail,
        { name: item.title, path: item.path || null },
      ]);
      if (result.length) return result;
    }
  }
  return [];
}

const BreadcrumbNav = (props) => {
  const { selectedPath } = props;
  const router = useRouter();
  //   const location = useLocation();

  const breadcrumbs = generateBreadcrumbTrail(selectedPath);
  console.log("bre", breadcrumbs);

  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Breadcrumbs aria-label="breadcrumb" separator="›">
        <Link
        //   underline="hover"
          color="inherit"
          sx={{ display: "flex", alignItems: "center", cursor: "pointer",textDecoration:"none" }}
          onClick={() => router.push("/dashboard")}
        >
          {/* <HomeIcon fontSize="small" sx={{ mr: 0.5 }} /> */}
          Home
        </Link>

        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1;
          if (isLast) {
            return (
              <Typography
                key={crumb.name}
                color="text.primary"
                fontWeight={500}
              >
                {crumb.name}
              </Typography>
            );
          } else {
            return (
              <Link
                key={crumb.name}
                // underline="hover"
                color="inherit"
                onClick={() => crumb.path && router.push(crumb.path)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",

                }}
              >
                {crumb.name}
              </Link>
            );
          }
        })}
      </Breadcrumbs>
    </Stack>
  );
};

export default BreadcrumbNav;
