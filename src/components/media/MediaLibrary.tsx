// src/components/media/MediaLibrary.tsx

import React from "react";
import MediaItem from "@/components/media/MediaItem";

const MediaLibrary = () => {
  // Sample media items array
  const mediaItems = [
    "/path/to/image1.jpg",
    "/path/to/image2.jpg",
    "/path/to/image3.jpg",
    // Add more image paths here
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow mb-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl">All media items</h2>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">
          Bulk select
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {mediaItems.map((src, index) => (
          <MediaItem key={index} src={src} />
        ))}
      </div>
    </div>
  );
};

export default MediaLibrary;
