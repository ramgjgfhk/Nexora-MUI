import * as React from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Logo from "./Logo";
import MenuContent from "./MenuContent";
import OptionsMenu from "./OptionsMenu";

// const drawerWidth = 300;

// const Drawer = styled(MuiDrawer)({
//   width: drawerWidth,
//   flexShrink: 0,
//   boxSizing: 'border-box',
//   mt: 10,
//   [`& .${drawerClasses.paper}`]: {
//     width: drawerWidth,
//     boxSizing: 'border-box',
//   },
// });

// export default function SideMenu() {
//   return (
//     <Drawer
//       variant="permanent"
//       sx={{border:'1px solid yellow',
//         display: { xs: 'none', md: 'block' },
//         [`& .${drawerClasses.paper}`]: {
//           backgroundColor: "#1E1E2F	",
//         },
//       }}
//     >
//       <Box
//         sx={{
//           display: 'flex',
//           mt: 'calc(var(--template-frame-height, 0px) + 4px)',
//           p: 1.5,
//         }}
//       >
//         <Logo />
//       </Box>
//       <Divider />
//       <Box
//         sx={{
//           overflow: 'auto',
//           height: '100%',
//           display: 'flex',
//           flexDirection: 'column',
//         }}
//       >
//         <MenuContent />
//       </Box>
//       {/* <Stack
//         direction="row"
//         sx={{
//           p: 2,
//           gap: 1,
//           alignItems: 'center',
//           borderTop: '1px solid',
//           borderColor: 'divider',
//         }}
//       >
//         <Avatar
//           sizes="small"
//           alt="Riley Carter"
//           src="/static/images/avatar/7.jpg"
//           sx={{ width: 36, height: 36 }}
//         />
//         <Box sx={{ mr: 'auto' }}>
//           <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: '16px' }}>
//             Riley Carter
//           </Typography>
//           <Typography variant="caption" sx={{ color: 'text.secondary' }}>
//             riley@email.com
//           </Typography>
//         </Box>
//         <OptionsMenu />
//       </Stack> */}
//     </Drawer>
//   );
// }

const drawerWidth = 300;

export default function SideMenu() {
  return (
    <Box
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        bgcolor: "#FCFCFC",
        // bgcolor: "#F0DA77",
        height: "100%",
        display: { xs: "none", md: "block" },
        // border: "10px solid white",
      }}
    >
      {/* <Box sx={{ display: "flex", p: 1.5 }}>
        <Logo />
      </Box> */}
      <Divider />
      <Box
        sx={{
          overflow: "auto",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <MenuContent />
      </Box>
    </Box>
  );
}
