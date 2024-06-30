// src/components/FloatingToolbox.tsx
import React from "react";
import Draggable from "react-draggable";

interface FloatingToolboxProps {
  onAddSignature: () => void;
}

const FloatingToolbox: React.FC<FloatingToolboxProps> = ({
  onAddSignature,
}) => {
  return (
    <Draggable>
      <div className="fixed top-[6rem] w-[10rem] right-4 p-2 bg-white z-50 shadow-md border rounded">
        <div
          className={`cursor-grabbing ${"mb-2 text-left font-bold cursor-grab text-black "}`}
        >
          Fields
        </div>
        <button
          className="w-full mb-2 p-2 border text-black rounded"
          onClick={onAddSignature}
        >
          Signature
        </button>
        {/* Other buttons for different fields can go here */}
      </div>
    </Draggable>
  );
};

export default FloatingToolbox;
