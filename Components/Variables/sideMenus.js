
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
    name: "Dashboard",
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
        name: "Analytics / Event",
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
        path: "/segment",
        name: "Segment",
      },
      {
        id: "rfm",
        title: "RFM",
        icon: <BarChart />,
        name: "Segment / RFM",
      },
      {
        id: "find_people",
        title: "Find People",
        icon: <BarChart />,
        name: "Segment / Find People",
      },
    ],
  },
  {
    id: "campaigns",
    title: "Campaigns",
    icon: <Campaign />,
    path: "/campaign",
    name: "Campaigns",
  },
  {
    id: "journeys",
    title: "Journeys",
    icon: <Cable />,
    path: "/journey",
    name: "Journey",
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
        name: "Schema / Event",
        path:"/schema",
      },
      {
        id: "user_properties",
        title: "User Properties",
        icon: <BarChart />,
        name: "Schema / User Properties",
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
        name: "User Management / Users",
      },
      // {
      //   id: "user-roles",
      //   title: "Roles & Permissions",
      //   icon: <AdminPanelSettings />,
      //   children: [
      //     {
      //       id: "roles",
      //       title: "Roles",
      //       path: "/users/roles/list",
      //       name: "User Management / Role & Permission / Roles",
      //     },
      //     {
      //       id: "permissions",
      //       title: "Permissions",
      //       path: "/users/roles/permissions",
      //       name: "User Management / Role & Permission / Permissions",
      //     },
      //     {
      //       id: "assignments",
      //       title: "Assignments",
      //       path: "/users/roles/assignments",
      //       name: "User Management / Role & Permission / Assignments",
      //     },
      //   ],
      // },
      // {
      //   id: "add-user",
      //   title: "Add User",
      //   icon: <PersonAdd />,
      //   path: "/users/add",
      //   name: "User Management / Add user",
      // },
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
            name: "Setting / Account Setting / Profile",
          },
          {
            id: "preferences",
            title: "Preferences",
            path: "/settings/account/preferences",
            name: "Setting / Account Setting / Preference",
          },
          {
            id: "billing",
            title: "Billing",
            path: "/settings/account/billing",
            name: "Setting / Account Setting / Billing",
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
            name: "Setting / Security / Password",
          },
          {
            id: "two-factor",
            title: "Two-Factor Auth",
            path: "/settings/security/2fa",
            name: "Setting / Security / Two-Factor Auth",
          },
          {
            id: "sessions",
            title: "Active Sessions",
            path: "/settings/security/sessions",
            name: "Setting / Security / Sessions",
          },
        ],
      },
      {
        id: "system",
        title: "System",
        icon: <Notifications />,
        children: [
          {
            id: "backups",
            title: "Backups",
            path: "/settings/system/backups",
            name: "Setting / System / Backups",
          },
          {
            id: "updates",
            title: "Updates",
            path: "/settings/system/updates",
            name: "Setting / System / Updates",
          },
          {
            id: "logs",
            title: "Logs",
            path: "/settings/system/logs",
            name: "Setting / System / Logs",
          },
        ],
      },
    ],
  },
];
