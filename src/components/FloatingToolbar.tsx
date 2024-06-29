// src/components/FloatingToolbar.tsx
import React from "react";

const FloatingToolbar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md border-b z-50 flex items-center p-2">
      <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow mr-2">
        Save
      </button>
      <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow mr-2">
        Print
      </button>
      {/* Add more buttons as needed */}
    </div>
  );
};

export default FloatingToolbar;
