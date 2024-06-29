// components/Invoice.js
import React, { useState } from "react";
import styles from "./Invoice.module.css";

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
    <div className={styles.invoiceContainer}>
      <h1>INVOICE</h1>
      <label>
        Invoice No:{" "}
        <input
          type="text"
          name="invoiceNumber"
          value={invoice.invoiceNumber}
          onChange={handleChange}
        />
      </label>
      <label>
        Date:{" "}
        <input
          type="date"
          name="date"
          value={invoice.date}
          onChange={handleChange}
        />
      </label>
      <div className={styles.header}>
        <div>
          <label>
            <strong>Billed to:</strong>
            <textarea
              name="billedTo"
              value={invoice.billedTo}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            <strong>From:</strong>
            <textarea
              name="from"
              value={invoice.from}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
      <table className={styles.invoiceTable}>
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {invoice.items.map((item, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  name="name"
                  value={item.name}
                  onChange={(e) => handleItemChange(index, e)}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="quantity"
                  value={item.quantity}
                  onChange={(e) => handleItemChange(index, e)}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="price"
                  value={item.price}
                  onChange={(e) => handleItemChange(index, e)}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="duration"
                  value={item.duration}
                  onChange={(e) => handleItemChange(index, e)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.total}>
        <label>
          <strong>Service fee:</strong>
          <input
            type="number"
            name="serviceFee"
            value={invoice.serviceFee}
            onChange={handleChange}
          />
        </label>
        <label>
          <strong>Total:</strong>
          <input
            type="number"
            name="total"
            value={invoice.total}
            onChange={handleChange}
          />
        </label>
        <label>
          <strong>Discount:</strong>
          <input
            type="text"
            name="discount"
            value={invoice.discount}
            onChange={handleChange}
          />
        </label>
      </div>
      <p>Note: We appreciate your decision to work with us!</p>
    </div>
  );
};

export default Invoice;
