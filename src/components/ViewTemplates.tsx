// src/components/ViewTemplates.tsx

"use client";
import React, { useState } from "react";

// Example templates data
const templates = [
  {
    id: 1,
    name: "General Business Contract Template",
    type: "Business",
    preview: "/path/to/preview1.png", // Replace with actual image paths
  },
  {
    id: 2,
    name: "Business Coaching Agreement Template",
    type: "Business",
    preview: "/path/to/preview2.png",
  },
  {
    id: 3,
    name: "Non-Disclosure Agreement (NDA) Template",
    type: "Legal",
    preview: "/path/to/preview3.png",
  },
  // Add more templates as needed
];

const ViewTemplates: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const filteredTemplates = templates.filter((template) => {
    return (
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedType === "" || template.type === selectedType)
    );
  });

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">
          Your templates {templates.length}
        </h1>
        <button className="bg-purple-600 text-white px-4 py-2 rounded">
          + Add template
        </button>
      </div>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded p-2 w-full mr-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="border border-gray-300 rounded p-2"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">All Types</option>
          <option value="Business">Business</option>
          <option value="Legal">Legal</option>
          {/* Add more types as needed */}
        </select>
      </div>
      <div className="space-y-4">
        {filteredTemplates.map((template) => (
          <div
            key={template.id}
            className="flex justify-between items-center border border-gray-200 rounded p-4 shadow"
          >
            <div className="flex items-center">
              <img
                src={template.preview}
                alt="Preview"
                className="w-16 h-20 bg-gray-200 mr-4"
              />
              <div>
                <h2 className="text-lg font-semibold text-purple-700">
                  {template.name}
                </h2>
                <p className="text-gray-500">{template.type}</p>
              </div>
            </div>
            <div className="flex items-center">
              <button className="text-purple-600 mr-4">Create Document</button>
              <button className="text-red-500">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewTemplates;
