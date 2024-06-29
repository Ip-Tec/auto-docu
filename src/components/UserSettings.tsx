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

const UserSettings = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [timezone, setTimezone] = useState("");
  const [logo, setLogo] = useState(null);

  const handleSaveChanges = () => {
    // Add logic to save changes
    console.log({ name, email, timezone, logo });
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h4" gutterBottom>
        User settings
      </Typography>

      <TextField
        fullWidth
        label="Name"
        variant="outlined"
        margin="normal"
        value={name}
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

      <Typography variant="body2" color="textSecondary" gutterBottom>
        Logo:
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        Displayed on recipient facing emails and signing pages.
      </Typography>
      <div
        style={{
          marginBottom: "20px",
          padding: "10px",
          backgroundColor: "#e0f7fa",
          borderRadius: "4px",
          textAlign: "center",
        }}
      >
        <Typography variant="body2">
          Upgrade to access this feature,{" "}
          <span style={{ fontWeight: "bold" }}>
            starting at $5 for total access per year.
          </span>
        </Typography>
      </div>

      <Button
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleSaveChanges}
        className="bg-blue-700 text-white"
      >
        Save changes
      </Button>
    </div>
  );
};

export default UserSettings;
