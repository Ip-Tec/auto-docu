// components/dashboard/AddDocument.tsx
"use client";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button, Typography } from "@mui/material";
import { useRouter } from 'next/navigation';

const AddDocument = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const router = useRouter();

  const onDrop = (acceptedFiles: File[]) => {
    setUploadedFiles([...uploadedFiles, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
      "application/vnd.ms-excel": [".xls"],
    },
  });

  const handleRemoveFile = (index: number) => {
    const newFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(newFiles);
  };

  const handleEditFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result;
      if (content) {
        const fileContent = encodeURIComponent(content as string);
        router.push(`/document/edit?fileContent=${fileContent}`);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="container flex items-center justify-center flex-col mx-auto p-4">
      <Typography variant="h4">Add new document</Typography>
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-gray-300 p-4 rounded-md mt-4 w-10/12 h-40 flex flex-col items-center justify-center hover:border-blue-700 hover:bg-blue-200 dark:hover:bg-blue-800 dark:hover:bg-opacity-35"
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
            className="border p-2 mb-2 rounded gap-1 w-auto flex items-center"
          >
            <span className="mr-2">{file.name}</span>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => handleEditFile(file)}
            >
              Edit
            </Button>
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
