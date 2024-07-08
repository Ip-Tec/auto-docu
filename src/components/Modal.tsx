import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 bg-slate-400 flex items-center justify-center z-40" onClick={onClose}>
      <div className="dark:bg-gray-950 dark:text-slate-400 bg-slate-500 text-gray-200 rounded p-4 max-w-md w-full h-40 relative">
        <button
          className="z-50 absolute -top-6 text-4xl -right-6 text-red-900 w-10 rounded-full bg-red-200 hover:bg-red-300"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
