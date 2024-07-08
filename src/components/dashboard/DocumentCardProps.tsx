import React from "react";
import Image from "next/image";

interface DocumentCardProps {
  title: string;
  email: string;
  status: "Waiting" | "Sent";
  fileType: string;
}

const DocumentCard: React.FC<DocumentCardProps> = ({
  title,
  email,
  status,
  fileType,
}) => {
  return (
    <div className="flex items-center p-4 border rounded-lg shadow-md bg-white dark:bg-gray-800 dark:text-white mb-4">
      <div className="w-16 h-16 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-lg mr-4">
        {/* Placeholder for document thumbnail */}
        <Image
          src={`/icons/${fileType}.png`}
          alt="Document Thumbnail"
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="text-sm text-gray-600 dark:text-gray-300">{email}</div>
      </div>
      <div className="flex flex-col items-center">
        <span
          className={`px-2 py-1 rounded-full text-sm font-medium ${
            status === "Waiting"
              ? "bg-yellow-500 text-white"
              : "bg-green-500 text-white"
          }`}
        >
          {status}
        </span>
        <div className="text-sm text-gray-600 dark:text-gray-300 mt-2">
          1st Party
        </div>
      </div>
      <div className="flex items-center ml-4 space-x-2 text-blue-500 dark:text-blue-400">
        <button>Edit</button>
        <button>View</button>
        <button>Download</button>
        <button>Activity</button>
        <button className="text-red-500 dark:text-red-400">Delete</button>
      </div>
    </div>
  );
};

export default DocumentCard;
