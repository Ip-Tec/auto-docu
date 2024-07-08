"use client";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Badge,
  Typography,
} from "@mui/material";
import {
  AccountCircle,
  Notifications,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";

import { useThemeContext } from "@/context/ThemeContext";
import React from "react";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/context/ThemeToggle";

function Topbar() {
  const { toggleTheme, mode } = useThemeContext();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [notificationEl, setNotificationEl] =
    React.useState<null | HTMLElement>(null);

  const pathname = usePathname();
  if (!pathname) {
    return "Auto Docu"; // or return a loading state
  }

  const pageName = pathname.slice(1);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNotificationMenu = (event: React.MouseEvent<HTMLElement>) => {
    setNotificationEl(event.currentTarget);
  };

  const handleNotificationClose = () => {
    setNotificationEl(null);
  };

  return (
    <>
      <AppBar
        position="fixed"
        className="dark:bg-gray-950  bg-blue-700 text-gray-100"
      >
        <Toolbar className="flex justify-between items-center">
          <Typography variant="h6" className="font-bold capitalize text-3xl">
            {pathname.slice(1) == "" ? "Auto Docu": pathname.slice(1)}
          </Typography>
          <div className="flex justify-center items-end">
            <ThemeToggle />
            <IconButton color="inherit" onClick={handleNotificationMenu}>
              <Badge badgeContent={4} color="secondary">
                <Notifications style={{ fontSize: 40 }} />
              </Badge>
            </IconButton>
            <Menu
              anchorEl={notificationEl}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(notificationEl)}
              onClose={handleNotificationClose}
            >
              <MenuItem onClick={handleNotificationClose}>
                Notification 1
              </MenuItem>
              <MenuItem onClick={handleNotificationClose}>
                Notification 2
              </MenuItem>
              <MenuItem onClick={handleNotificationClose}>
                Notification 3
              </MenuItem>
              <MenuItem onClick={handleNotificationClose}>
                Notification 4
              </MenuItem>
            </Menu>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle style={{ fontSize: 40 }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>Settings</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Topbar;
