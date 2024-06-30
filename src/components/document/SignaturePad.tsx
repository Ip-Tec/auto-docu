// src/components/SignaturePad.tsx
"use client";
import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

interface SignaturePadProps {
  onSave: (dataUrl: string) => void;
  width: number;
  height: number;
}

const SignaturePad: React.FC<SignaturePadProps> = ({
  onSave,
  width,
  height,
}) => {
  const sigCanvas = useRef<SignatureCanvas>(null);

  const clear = () => {
    sigCanvas.current?.clear();
  };

  const save = () => {
    if (sigCanvas.current) {
      const dataUrl = sigCanvas.current
        .getTrimmedCanvas()
        .toDataURL("image/svg+xml");
      onSave(dataUrl);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative"
        style={{ width, height, border: "1px solid #ccc" }}
      >
        <SignatureCanvas
          ref={sigCanvas}
          penColor="black"
          canvasProps={{
            className: "sigCanvas",
            width: width,
            height: height,
          }}
          backgroundColor="white"
        />
      </div>
      <div className="flex justify-center mt-2">
        <button
          onClick={clear}
          className="bg-red-500 cursor-pointer text-white py-2 px-4 rounded m-2"
        >
          Clear
        </button>
        <button
          onClick={save}
          className="bg-green-500 cursor-pointer text-white py-2 px-4 rounded m-2"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default SignaturePad;
