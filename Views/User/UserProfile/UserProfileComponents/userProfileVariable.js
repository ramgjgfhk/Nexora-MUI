import {
  AccessTime,
  Analytics,
  Assessment,
  Battery3Bar,
  Cake,
  CallEnd,
  DeviceHub,
  Email,
  Language,
  Launch,
  LocationOn,
  MyLocation,
  Notifications,
  Person,
  Phone,
  PinDrop,
  PowerOff,
  Schedule,
  Search,
  Security,
  Star,
  TrendingUp,
} from "@mui/icons-material";
import { CalendarIcon } from "@mui/x-date-pickers";

export const customerData = {
  id: "8565856858",
  name: "Jhon Turner",
  email: "jhon@gmail.com",
  phone: "8565856958",
  gender: "Male",
  location: "Chicago, Illinois, United States",
  coordinates: { lat: 47.258336, long: 48.78563555 },
  telephone: "9856858658",
  firstSeen: "Thu, Feb 22, 2024",
  lastSeen: "Fri, May 16, 2025",
  age: "32 years 4 months",
  birthday: "May 03, 2003",
  customerType: "Silver",
  customerId: "8565856855",
  language: "English",
  timezone: "Central standard time",
  verified: true,
  joinDate: "2024-02-22",
  totalOrders: 45,
  totalSpent: 12450,
  avgOrderValue: 276.67,
  status: "Active",
};
export const deviceData = [
  {
    platform: "Desktop",
    browser: "Firefox",
    os: "Android",
    version: "13.0",
    appVersion: "2.41",
    nexusVersion: "1.0.5",
    deviceMake: "Samsung",
    deviceModel: "Galaxy S21",
    browserVersion: "Chrome 120",
    pushNotifications: true,
    lastUsed: "2 hours ago",
  },
];

export const communicationPrefs = {
  email: true,
  sms: false,
  push: true,
  marketing: true,
};

// Analytics and engagement data
export const userActivityData = {
  avgVisitDuration: "9 minutes",
  avgTimeBetweenVisits: "2 days",
  totalEngagement: 11230,
  engagementGrowth: 45,
  events: [
    {
      type: "App Launched",
      count: 179,
      lastOccurred: "Tue, Jun 9, 2020",
      icon: Launch,
      color: "#1976d2",
    },
    {
      type: "App Uninstalled",
      count: 17,
      lastOccurred: "Sun, Jun 30, 2019",
      icon: PowerOff,
      color: "#d32f2f",
    },
    {
      type: "Charged",
      count: 22,
      lastOccurred: "Wed, May 16, 2019",
      icon: Battery3Bar,
      color: "#2e7d32",
    },
    {
      type: "Searched",
      count: 228,
      lastOccurred: "Mon, Jun 30, 2019",
      icon: Search,
      color: "#ed6c02",
    },
  ],
  recentActivity: [
    {
      time: "06:15:02 pm",
      type: "Reachable By",
      details: "Push | YNozz...",
      status: "success",
    },
    {
      time: "06:15:02 pm",
      type: "Reachable By",
      details: "Email | sakingo271@gmail.com",
      status: "success",
    },
    {
      time: "06:45:51 am",
      type: "UTM Visited",
      details: "",
      status: "info",
    },
  ],
};

export const engagementEntries = [
  {
    id: 433,
    name: "ttt test",
    entryTime: "Apr 21 2023, 06:14 PM",
    status: "Qualified via system control group",
  },
  {
    id: 514,
    name: "test",
    entryTime: "May 01 2023, 07:23 PM",
    status: "Qualified via system control group",
  },
  {
    id: 507,
    name: "old ui sms",
    entryTime: "Apr 27 2023, 11:50 AM",
    status: "Qualified via system control group",
  },
  {
    id: 227,
    name: "long goal name",
    entryTime: "Apr 21 2023, 06:14 PM",
    status: "Exited, cannot re-enter",
  },
  {
    id: 483,
    name: "intellinode manual",
    entryTime: "Apr 21 2023, 06:14 PM",
    status: "Qualified via system control group",
  },
];

export const contactInformationData = [
  {
    icon: Phone,
    label: "Phone",
    value: customerData.phone,
  },
  {
    icon: Email,
    label: "Emil",
    value: customerData.email,
  },
  {
    icon: LocationOn,
    label: "Location",
    value: customerData.location,
  },
  {
    icon: Star,
    label: "Customer Type",
    value: customerData.customerType,
  },
  {
    icon: CallEnd,
    label: "Telephone",
    value: customerData.telephone,
  },
  {
    icon: Language,
    label: "Language",
    value: customerData.language,
  },
  {
    icon: Schedule,
    label: "Timezone",
    value: customerData.timezone,
  },
];

export const tabItems = [
  {
    label: "Personal Info",
    icon: <Person />,
  },
  {
    label: "Devices & Activity",
    icon: <DeviceHub />,
  },
  {
    label: "User Analytics",
    icon: <Analytics />,
  },
  {
    label: "Engagement",
    icon: <Assessment />,
  },
  // {
  //   label: "Preferences",
  //   icon: <Notifications />,
  // },
];

export const statusCardData = [
  {
    label: "Total Orders",
    value: customerData.totalOrders,
    icon: TrendingUp,
    color: "#1976d2",
  },
  {
    label: "Total Spent",
    value: `$${customerData.totalSpent.toLocaleString()}`,
    icon: Star,
    color: "#2e7d32",
  },
  {
    label: "Avg Order Value",
    value: `$${customerData.avgOrderValue}`,
    icon: CalendarIcon,
    color: "#ed6c02",
  },
  {
    label: "Member Since",
    value: new Date(customerData.joinDate).getFullYear(),
    icon: AccessTime,
    color: "#9c27b0",
  },
];

export const communicationPrefsData = [
  {
    key: "email",
    label: "Email Notifications",
    icon: Email,
    enabled: communicationPrefs.email,
  },
  {
    key: "sms",
    label: "SMS Notifications",
    icon: Phone,
    enabled: communicationPrefs.sms,
  },
  {
    key: "push",
    label: "Push Notifications",
    icon: Notifications,
    enabled: communicationPrefs.push,
  },
  {
    key: "marketing",
    label: "Marketing Updates",
    icon: TrendingUp,
    enabled: communicationPrefs.marketing,
  },
];

export const personalDetailsData = [
  {
    icon: Cake,
    label: "Birthday",
    value: customerData.birthday,
  },
  {
    icon: Person,
    label: "Age",
    value: customerData.age,
  },
  {
    icon: Security,
    label: "Gender",
    value: customerData.gender,
  },
  {
    icon: PinDrop,
    label: "Latitude",
    value: customerData.coordinates.lat,
  },
  {
    icon: MyLocation,
    label: "Longitude",
    value: customerData.coordinates.long,
  },
  {
    icon: CalendarIcon,
    label: "First Seen",
    value: customerData.firstSeen,
  },
  {
    icon: AccessTime,
    label: "Last Seen",
    value: customerData.lastSeen,
  },
];

export const quickOverViewdata = [
  {
    title: "Total Orders",
    value: "45",
    subtitle: "Number of purchases made by customer",
    icon: TrendingUp,
    color: "#1976d2",
  },
  {
    title: "Total Spent",
    value: "45",
    subtitle: "Total money customer has spent",
    icon: Star,
    color: "#2e7d32",
  },
  {
    title: "Average Order Value",
    value: "45",
    subtitle: "Spend per order on average",
    icon: CalendarIcon,
    color: "#ed6c02",
  },
  {
    title: "Member Since",
    value: "45",
    subtitle: "Customer join date or signup date",
    icon: AccessTime,
    color: "#9c27b0",
  },
];
