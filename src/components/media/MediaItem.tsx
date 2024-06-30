import React from "react";

const MediaItem = ({ src }: { src: string }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded shadow">
      <img src={src} alt="Media" className="w-full h-32 object-cover rounded" />
    </div>
  );
};

export default MediaItem;
