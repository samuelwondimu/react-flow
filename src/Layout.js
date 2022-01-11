import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 240;

export default function Layout({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "white",
          color: "black",
          borderBottom: "1px solid #e0e0e0",
        }}
        elevation={0}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Fogg's Automotive
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem>
              <Typography color="GrayText">Business</Typography>
            </ListItem>
            {[
              "Home",
              "Reports",
              "Custoers",
              "Inventory",
              "reviews",
              "Service",
              "Financials",
            ].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
            <ListItem>
              <Typography color="GrayText">Channels</Typography>
            </ListItem>
            {[
              "Webisite",
              "Search",
              "Email Markting",
              "socail Media",
              "Text/SMS",
              "Voice",
              "Journey Mapping",
            ].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, pt: 4, minHeight: "100vh" }}>
        {children}
      </Box>
    </Box>
  );
}
