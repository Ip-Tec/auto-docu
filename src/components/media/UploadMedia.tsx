// src/components/media/UploadMedia.tsx

"use client";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tsxeysxfhgbhddxbewri.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzeGV5c3hmaGdiaGRkeGJld3JpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk3Nzg0MzcsImV4cCI6MjAzNTM1NDQzN30.W0wHRRSY8lSQ57F2oGPuF1WL1fuAxW8MRsqoLO8bXr0";

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Both NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY must be defined"
  );
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export { supabase };

import { SupabaseClient } from "@supabase/supabase-js";

interface UploadMediaProps {
  onClose: () => void;
}

const UploadMedia: React.FC<UploadMediaProps> = ({ onClose }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length + selectedFiles.length > 4) {
      alert("You can only upload a maximum of 4 files at a time.");
      return;
    }
    setSelectedFiles([...selectedFiles, ...acceptedFiles]);
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) return;

    try {
      setUploading(true);

      const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
      const maxSize = 5 * 1024 * 1024; // 5 MB

      for (const file of selectedFiles) {
        if (!allowedTypes.includes(file.type)) {
          alert(
            `Only JPEG, PNG, and GIF files are allowed. File: ${file.name}`
          );
          continue;
        }

        if (file.size > maxSize) {
          alert(`File size must be less than 5 MB. File: ${file.name}`);
          continue;
        }

        const { data, error } = await (supabase as SupabaseClient).storage
          .from("media")
          .upload(`public/${file.name}`, file);

        if (error) {
          throw error;
        }
      }

      alert("Files uploaded successfully!");
      setSelectedFiles([]);
      onClose();
    } catch (error) {
      console.error("Error uploading files:", error);
      alert("Error uploading files.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div
        {...useDropzone({ onDrop })}
        className="border-2 border-dashed border-gray-300 p-4 rounded-md mb-4 w-full text-center"
      >
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => onDrop(Array.from(e.target.files || []))}
          className="mb-4 hidden"
        />
        <p>
          Drag &apos;n&apos; drop some files here, or click to select files
        </p>
      </div>
      {selectedFiles.length > 0 && (
        <ul className="mb-4">
          {selectedFiles.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={handleUpload}
        disabled={uploading || selectedFiles.length === 0}
      >
        {uploading ? "Uploading..." : "Upload File"}
      </Button>
    </div>
  );
};

export default UploadMedia;
