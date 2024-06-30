// src/components/media/Header.tsx

"use client"
import React, { useState } from "react";
import Modal from "@/components/Modal";
import UploadMedia from "./UploadMedia";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-2xl font-semibold">Media Library</h1>
      <button
        className="bg-blue-600 text-white py-2 px-4 rounded"
        onClick={openModal}
      >
        Add New Media File
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <UploadMedia onClose={closeModal} />
      </Modal>
    </div>
  );
};

export default Header;
