// components/dashboard/Document.tsx
"use client";
import React, { useState } from "react";
import {
  Button,
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Typography,
} from "@mui/material";
import {
  Edit,
  FileCopy,
  Visibility,
  GetApp,
  Delete,
} from "@mui/icons-material";
import AddDocument from "@/components/dashboard/AddDocument";
import DocxEditor from "@/components/DocxEditor";

const Document = () => {
  const [open, setOpen] = useState<String>("");
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  // Dummy data to demonstrate functionality
  const documents =
    uploadedFiles.length > 0
      ? [
          { name: "Document 1", status: "Signed" },
          { name: "Document 2", status: "Waiting" },
          { name: "Document 3", status: "Uploaded" },
        ]
      : [];

  return (
    <div className="container mx-auto p-4 w-9/12">
      {uploadedFiles.length === 0 ? (
        <div className="flex items-center justify-center">
          <AddDocument />
        </div>
      ) : (
        <>
          <Typography variant="h4">Your Documents</Typography>
          {["Signed", "Waiting", "Uploaded"].map((status) => (
            <div key={status}>
              <Button
                variant="contained"
                onClick={() => setOpen(open === status ? "" : status)}
                className="my-2"
              >
                {status}
              </Button>
              <Collapse in={open === status}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Document Name</TableCell>
                      <TableCell>Edit</TableCell>
                      <TableCell>Clone</TableCell>
                      <TableCell>View</TableCell>
                      <TableCell>Download</TableCell>
                      <TableCell>Delete</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {documents
                      .filter((doc) => doc.status === status)
                      .map((doc, index) => (
                        <TableRow key={index}>
                          <TableCell>{doc.name}</TableCell>
                          <TableCell>
                            <IconButton>
                              <Edit />
                            </IconButton>
                          </TableCell>
                          <TableCell>
                            <IconButton>
                              <FileCopy />
                            </IconButton>
                          </TableCell>
                          <TableCell>
                            <IconButton>
                              <Visibility />
                            </IconButton>
                          </TableCell>
                          <TableCell>
                            <IconButton>
                              <GetApp />
                            </IconButton>
                          </TableCell>
                          <TableCell>
                            <IconButton>
                              <Delete />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </Collapse>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Document;
