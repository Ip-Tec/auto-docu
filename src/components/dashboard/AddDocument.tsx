// components/dashboard/AddDocument.tsx
"use client";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button, Typography } from "@mui/material";

const AddDocument = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const onDrop = (acceptedFiles: File[]) => {
    setUploadedFiles([...uploadedFiles, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
      "application/vnd.ms-excel": [".xls"],
    },
  });

  const handleRemoveFile = (index: number) => {
    const newFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(newFiles);
  };

  return (
    <div className="container flex items-center justify-center flex-col mx-auto p-4 w-9/12">
      <Typography variant="h4">Add new document</Typography>
      <Typography variant="body1">
        Click to browse or drop a .pdf, .docx, .doc, or excel file here.
      </Typography>
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-gray-300 p-4 rounded-md mt-4 w-10/12 h-40 flex flex-col items-center justify-center"
      >
        <input {...getInputProps()} />
        <p>Drag &apos;n&apos; drop some files here, or click to select files</p>
        <Button variant="contained" component="span">
          Browse Files
        </Button>
      </div>
      <div className="mt-4 w-full gap-1 justify-center flex flex-wrap">
        {uploadedFiles.map((file, index) => (
          <div
            key={index}
            className="border p-2 mb-2 rounded w-auto flex items-center"
          >
            <span className="mr-2">{file.name}</span>
            <Button
              variant="contained"
              color="error"
              size="small"
              onClick={() => handleRemoveFile(index)}
            >
              Remove
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddDocument;
