// src/components/UserSettings.tsx
"use client";
import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";



const UpgradeNotice = styled("div")(({ theme }) => ({
  marginBottom: "20px",
  padding: "10px",
  backgroundColor: theme.palette.mode === "light" ? "#e0f7fa" : "#004d40",
  borderRadius: "4px",
  textAlign: "center",
}));

const UserSettings = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [timezone, setTimezone] = useState("");
  const [logo, setLogo] = useState(null);

  const theme = useTheme();

  const handleSaveChanges = () => {
    // Add logic to save changes
    console.log({ name, email, timezone, logo });
  };

  return (
    <div className="max-w-[600px] mx-auto my-0 p-[20px] border dark:border-gray-700 rounded-lg bg-slate-300 dark:bg-slate-400 dark:shadow-md">
      <Typography variant="h4" gutterBottom className="dark:text-gray-950">
        User settings
      </Typography>

      <TextField
        fullWidth
        label="Name"
        variant="outlined"
        margin="normal"
        value={name}
        placeholder="Asher Stephens"
        className="border"
        onChange={(e) => setName(e.target.value)}
      />

      <TextField
        fullWidth
        label="Email"
        variant="outlined"
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel>Your timezone</InputLabel>
        <Select
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
          label="Your timezone"
        >
          {/* Add other timezone options here */}
          <MenuItem value="Africa/Lagos">Africa/Lagos</MenuItem>
          <MenuItem value="America/New_York">America/New_York</MenuItem>
          <MenuItem value="Europe/London">Europe/London</MenuItem>
        </Select>
      </FormControl>

      <Typography variant="body2" color="textSecondary" className="dark:text-gray-950" gutterBottom>
        Logo:
      </Typography>
      <Typography variant="body2" color="textSecondary" className="dark:text-gray-950" gutterBottom>
        Displayed on recipient facing emails and signing pages.
      </Typography>
      <UpgradeNotice>
        <Typography variant="body2" className="dark:text-blue-950">
          Upgrade to access this feature,{" "}
          <span className="font-bold">
            starting at $5 for total access per year.
          </span>
        </Typography>
      </UpgradeNotice>

      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleSaveChanges}
      >
        Save changes
      </Button>
    </div>
  );
};

export default UserSettings;
