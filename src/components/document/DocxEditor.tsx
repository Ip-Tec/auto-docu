// src/components/DocxEditor.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import { Editor, EditorState, ContentState } from "draft-js";
import "draft-js/dist/Draft.css";
import SignaturePad from "@/components/document/SignaturePad";
import FloatingToolbox from "@/components/document/FloatingToolbox";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import { IconButton, Card } from "@mui/material";
import CropFreeIcon from "@mui/icons-material/CropFree";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import FloatingToolbar from "@/components/document/FloatingToolbar";

const A4_WIDTH_PX = 793.7; // A4 width in pixels
const A4_HEIGHT_PX = 1122.5; // A4 height in pixels
const PAGE_MARGIN_PX = 20; // Margin between A4 pages
const PAGE_BREAK_HEIGHT_PX = 10; // Height of the page break line

const DocxEditor: React.FC = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [signatures, setSignatures] = useState<
    { id: string; x: number; y: number; width: number; height: number }[]
  >([]);
  const [pageNumber, setPageNumber] = useState(1); // Track current page number
  const editorWrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const searchParams = useSearchParams();
  const file = searchParams.get('file');

  useEffect(() => {
    if (file) {
      // Fetch the document content based on the file name or identifier
      // For simplicity, we assume the document content is fetched as plain text
      const fetchDocumentContent = async () => {
        const response = await fetch(`/api/documents/${file}`);
        const text = await response.text();
        const contentState = ContentState.createFromText(text);
        setEditorState(EditorState.createWithContent(contentState));
      };

      fetchDocumentContent();
    }
  }, [file]);

  // Monitor content height to determine page flow
  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.clientHeight;
      const currentPageHeight = A4_HEIGHT_PX + PAGE_MARGIN_PX;
      const totalPages = Math.ceil(contentHeight / currentPageHeight);
      setPageNumber(totalPages > 0 ? totalPages : 1);
    }
  }, [editorState, signatures]);

  const handleEditorChange = (state: EditorState) => {
    setEditorState(state);
  };

  const addSignatureField = () => {
    const id = `sig-${Date.now()}`;
    const pageOffset = (pageNumber - 1) * (A4_WIDTH_PX + PAGE_MARGIN_PX);
    const initialX = 50 + pageOffset;
    const initialY = 50;
    setSignatures([
      ...signatures,
      {
        id,
        x: initialX,
        y: initialY,
        width: 200,
        height: 50,
      },
    ]);
  };

  const handleDragStart = (id: string, e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("text/plain", id);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text");
    if (id && editorWrapperRef.current) {
      const rect = editorWrapperRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setSignatures((prevSignatures) =>
        prevSignatures.map((sig) => (sig.id === id ? { ...sig, x, y } : sig))
      );
    }
  };

  const updateSignatureSize = (id: string, width: number, height: number) => {
    setSignatures((prevSignatures) =>
      prevSignatures.map((sig) =>
        sig.id === id ? { ...sig, width, height } : sig
      )
    );
  };

  const deleteSignature = (id: string) => {
    setSignatures((prevSignatures) =>
      prevSignatures.filter((sig) => sig.id !== id)
    );
  };

  return (
    <div className="p-4 overflow-y-auto">
      <FloatingToolbar />
      <FloatingToolbox onAddSignature={addSignatureField} />
      <div
        className="relative"
        ref={contentRef}
        style={{ width: `${A4_WIDTH_PX}px`, margin: "auto" }}
      >
        {Array.from({ length: pageNumber }).map((_, index) => (
          <Card
            key={`page-${index + 1}`}
            className="mb-4"
            style={{
              width: `${A4_WIDTH_PX}px`,
              minHeight: `${A4_HEIGHT_PX}px`,
              marginBottom: `${PAGE_MARGIN_PX}px`,
              padding: "1rem",
            }}
          >
            <div className="relative">
              <Editor
                editorState={editorState}
                onChange={handleEditorChange}
                placeholder="Type your document here..."
              />
              {signatures
                .filter(
                  (sig) =>
                    Math.floor(sig.y / A4_HEIGHT_PX) === index &&
                    sig.x >= index * (A4_WIDTH_PX + PAGE_MARGIN_PX) &&
                    sig.x < (index + 1) * (A4_WIDTH_PX + PAGE_MARGIN_PX)
                )
                .map((sig) => (
                  <div
                    key={sig.id}
                    className="absolute border border-gray-300 bg-red-200 z-40"
                    style={{
                      left: sig.x - index * (A4_WIDTH_PX + PAGE_MARGIN_PX),
                      top: sig.y % A4_HEIGHT_PX,
                      width: sig.width,
                      height: sig.height,
                    }}
                  >
                    <ResizableBox
                      width={sig.width}
                      height={sig.height}
                      minConstraints={[100, 50]}
                      maxConstraints={[500, 200]}
                      onResizeStop={(e, data) =>
                        updateSignatureSize(
                          sig.id,
                          data.size.width,
                          data.size.height
                        )
                      }
                      handle={
                        <div
                          className="absolute"
                          style={{
                            width: sig.width,
                            height: sig.height,
                          }}
                        >
                          <div
                            className="absolute -right-8 -top-9 bg-purple-600"
                            style={{
                              cursor: "se-resize",
                            }}
                          >
                            <IconButton size="small">
                              <CropFreeIcon />
                            </IconButton>
                          </div>
                        </div>
                      }
                    >
                      <div className="relative w-full h-full">
                        <SignaturePad
                          key={sig.id}
                          width={sig.width}
                          height={sig.height}
                          onSave={(dataUrl) => {
                            // Save signature data URL if needed
                          }}
                        />
                      </div>
                    </ResizableBox>
                    <div
                      className="absolute top-0 left-0"
                      draggable
                      onDragStart={(e) => handleDragStart(sig.id, e)}
                    >
                      <IconButton
                        size="small"
                        style={{
                          cursor: "grab",
                        }}
                      >
                        <DragHandleIcon />
                      </IconButton>
                    </div>
                    <div className="absolute top-0 right-0">
                      <button
                        className="bg-red-500 text-white px-2"
                        onClick={() => deleteSignature(sig.id)}
                      >
                        ×
                      </button>
                    </div>
                  </div>
                ))}
              {index < pageNumber - 1 && (
                <div
                  className="absolute w-full"
                  style={{
                    top: `${A4_HEIGHT_PX - PAGE_BREAK_HEIGHT_PX}px`,
                    borderBottom: "1px dashed #ccc",
                    pointerEvents: "none",
                  }}
                />
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DocxEditor;
