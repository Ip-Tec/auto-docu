// src/components/media/Stats.tsx

import React from "react";

const Stats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <p>0%</p>
        <p>Space saved</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <p>0%</p>
        <p>Images optimized</p>
      </div>
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <p>Current plan: N/A</p>
        <button className="bg-blue-600 text-white py-2 px-4 rounded mt-2">
          Connect to start
        </button>
      </div>
    </div>
  );
};

export default Stats;
