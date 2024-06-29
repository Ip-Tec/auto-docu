// src/pages/edit-docx.tsx
import React from "react";
import DocxEditor from "@/components/DocxEditor";

const EditDocxPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit .docx File</h1>
      <DocxEditor />
    </div>
  );
};

export default EditDocxPage;
