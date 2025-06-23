import UserList from "@/Views/User/UserList";
import {
  AccountBox,
  AdminPanelSettings,
  Analytics,
  BarChart,
  Cable,
  Campaign,
  Dashboard,
  Group,
  Notifications,
  People,
  PersonAdd,
  PieChart,
  Polyline,
  Schema,
  Security,
  Segment,
  Settings,
  Timeline,
} from "@mui/icons-material";
export const menuItems = [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: <Dashboard />,
    path: "/dashboard",
  },
  {
    id: "analytics",
    title: "Analytics",
    icon: <Analytics />,
    children: [
      {
        id: "event",
        title: "Event",
        icon: <BarChart />,
      },
    ],
  },
  {
    id: "segments",
    title: "Segments",
    icon: <Segment />,
    children: [
      {
        id: "segment",
        title: "Segment",
        icon: <BarChart />,
        path:'/segment'
      },
      {
        id: "rfm",
        title: "RFM",
        icon: <BarChart />,
      },
      {
        id: "find_people",
        title: "Find People",
        icon: <BarChart />,
      },
    ],
  },
  {
    id: "campaigns",
    title: "Campaigns",
    icon: <Campaign />,
    path: "/campaign",
  },
  {
    id: "journeys",
    title: "Journeys",
    icon: <Cable />,
    path: "/journey",
  },
  {
    id: "schema",
    title: "Schema",
    icon: <Schema />,
    children: [
      {
        id: "events",
        title: "Events",
        icon: <BarChart />,
      },
      {
        id: "user_properties",
        title: "User Properties",
        icon: <BarChart />,
      },
    ],
  },
  {
    id: "users",
    title: "User Management",
    icon: <People />,
    children: [
      {
        id: "user-list",
        title: "Users",
        icon: <Group />,
        path: "/users",
      },
      {
        id: "user-roles",
        title: "Roles & Permissions",
        icon: <AdminPanelSettings />,
        children: [
          { id: "roles", title: "Roles", path: "/users/roles/list" },
          {
            id: "permissions",
            title: "Permissions",
            path: "/users/roles/permissions",
          },
          {
            id: "assignments",
            title: "Assignments",
            path: "/users/roles/assignments",
          },
        ],
      },
      {
        id: "add-user",
        title: "Add User",
        icon: <PersonAdd />,
        path: "/users/add",
      },
    ],
  },
  {
    id: "settings",
    title: "Settings",
    icon: <Settings />,
    children: [
      {
        id: "account",
        title: "Account Settings",
        icon: <AccountBox />,
        children: [
          {
            id: "profile",
            title: "Profile",
            path: "/settings/account/profile",
          },
          {
            id: "preferences",
            title: "Preferences",
            path: "/settings/account/preferences",
          },
          {
            id: "billing",
            title: "Billing",
            path: "/settings/account/billing",
          },
        ],
      },
      {
        id: "security",
        title: "Security",
        icon: <Security />,
        children: [
          {
            id: "password",
            title: "Password",
            path: "/settings/security/password",
          },
          {
            id: "two-factor",
            title: "Two-Factor Auth",
            path: "/settings/security/2fa",
          },
          {
            id: "sessions",
            title: "Active Sessions",
            path: "/settings/security/sessions",
          },
        ],
      },
      {
        id: "system",
        title: "System",
        icon: <Notifications />,
        children: [
          { id: "backups", title: "Backups", path: "/settings/system/backups" },
          { id: "updates", title: "Updates", path: "/settings/system/updates" },
          { id: "logs", title: "System Logs", path: "/settings/system/logs" },
        ],
      },
    ],
  },
];
