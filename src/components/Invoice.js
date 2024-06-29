"use client";
import React, { useState } from "react";
import ThemeToggle from "@/context/ThemeToggle";
import { saveAsPDF, saveAsDOC, saveAsExcel } from "@/utils/saveInvoice";

const Invoice = ({ initialInvoice }) => {
  const [invoice, setInvoice] = useState(initialInvoice);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvoice({ ...invoice, [name]: value });
  };

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const newItems = [...invoice.items];
    newItems[index][name] = value;
    setInvoice({ ...invoice, items: newItems });
  };

  return (
    <div className="max-w-full mx-auto p-8 bg-white dark:bg-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-4 dark:text-white text-gray-700">INVOICE</h1>
      <div className="mb-4">
        <label className="block">
          <span className="text-gray-700 dark:text-gray-300">Invoice No:</span>
          <input
            type="text"
            name="invoiceNumber"
            value={invoice.invoiceNumber}
            onChange={handleChange}
            className="form-input mt-1 block w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block">
          <span className="text-gray-700 dark:text-gray-300">Date:</span>
          <input
            type="date"
            name="date"
            value={invoice.date}
            onChange={handleChange}
            className="form-input mt-1 block w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
          />
        </label>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block">
            <span className="text-gray-700 dark:text-gray-300 font-bold">
              Billed to:
            </span>
            <textarea
              name="billedTo"
              value={invoice.billedTo}
              onChange={handleChange}
              className="form-textarea mt-1 block w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
              rows={3}
            />
          </label>
        </div>
        <div>
          <label className="block">
            <span className="text-gray-700 dark:text-gray-300 font-bold">
              From:
            </span>
            <textarea
              name="from"
              value={invoice.from}
              onChange={handleChange}
              className="form-textarea mt-1 block w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
              rows={3}
            />
          </label>
        </div>
      </div>
      <table className="w-full mb-4">
        <thead>
          <tr className="bg-gray-200 dark:bg-gray-700">
            <th className="py-2 px-4 text-left">Item</th>
            <th className="py-2 px-4 text-left">Quantity</th>
            <th className="py-2 px-4 text-left">Price</th>
            <th className="py-2 px-4 text-left">Duration</th>
          </tr>
        </thead>
        <tbody>
          {invoice.items.map((item, index) => (
            <tr key={index}>
              <td className="py-2 px-4">
                <input
                  type="text"
                  name="name"
                  value={item.name}
                  onChange={(e) => handleItemChange(index, e)}
                  className="form-input w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                />
              </td>
              <td className="py-2 px-4">
                <input
                  type="number"
                  name="quantity"
                  value={item.quantity}
                  onChange={(e) => handleItemChange(index, e)}
                  className="form-input w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                />
              </td>
              <td className="py-2 px-4">
                <input
                  type="number"
                  name="price"
                  value={item.price}
                  onChange={(e) => handleItemChange(index, e)}
                  className="form-input w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                />
              </td>
              <td className="py-2 px-4">
                <input
                  type="text"
                  name="duration"
                  value={item.duration}
                  onChange={(e) => handleItemChange(index, e)}
                  className="form-input w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex mb-4">
        <div className="w-1/3 mr-4">
          <label className="block">
            <span className="text-gray-700 dark:text-gray-300 font-bold">
              Service fee:
            </span>
            <input
              type="number"
              name="serviceFee"
              value={invoice.serviceFee}
              onChange={handleChange}
              className="form-input mt-1 block w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
            />
          </label>
        </div>
        <div className="w-1/3 mr-4">
          <label className="block">
            <span className="text-gray-700 dark:text-gray-300 font-bold">
              Total:
            </span>
            <input
              type="number"
              name="total"
              value={invoice.total}
              onChange={handleChange}
              className="form-input mt-1 block w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
            />
          </label>
        </div>
        <div className="w-1/3">
          <label className="block">
            <span className="text-gray-700 dark:text-gray-300 font-bold">
              Discount:
            </span>
            <input
              type="text"
              name="discount"
              value={invoice.discount}
              onChange={handleChange}
              className="form-input mt-1 block w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
            />
          </label>
        </div>
      </div>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Note: We appreciate your decision to work with us!
      </p>
      <div className="flex space-x-4">
        <button
          onClick={() => saveAsPDF(invoice)}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
        >
          Save as PDF
        </button>
        <button
          onClick={() => saveAsDOC(invoice)}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
        >
          Save as DOC
        </button>
        <button
          onClick={() => saveAsExcel(invoice)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg"
        >
          Save as Excel
        </button>
      </div>
    </div>
  );
};

export default Invoice;
