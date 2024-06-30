import React from "react";
import Image from "next/image";

const MediaItem = ({ src }: { src: string }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded shadow">
      <Image
        src={src}
        alt="Media"
        className="w-full h-32 object-cover rounded"
      />
    </div>
  );
};

export default MediaItem;
