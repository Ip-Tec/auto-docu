// utils/saveInvoice.js
import jsPDF from "jspdf";
import { Document, Packer, Paragraph, TextRun } from "docx";
import * as XLSX from "xlsx";

export const saveAsPDF = (invoice) => {
  const doc = new jsPDF();
  doc.text(
    `INVOICE\n\nInvoice No: ${invoice.invoiceNumber}\nDate: ${invoice.date}\n\nBilled to:\n${invoice.billedTo}\n\nFrom:\n${invoice.from}\n\nItems:\n`,
    10,
    10
  );
  invoice.items.forEach((item, index) => {
    doc.text(
      `${index + 1}. ${item.name} - ${item.quantity} @ $${item.price} for ${
        item.duration
      }`,
      10,
      40 + index * 10
    );
  });
  doc.text(
    `\nService fee: $${invoice.serviceFee}\nTotal: $${invoice.total}\nDiscount: ${invoice.discount}\n\nNote: We appreciate your decision to work with us!`,
    10,
    60 + invoice.items.length * 10
  );
  doc.save("invoice.pdf");
};

export const saveAsDOC = (invoice) => {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({ children: [new TextRun(`INVOICE`)] }),
          new Paragraph({
            children: [new TextRun(`Invoice No: ${invoice.invoiceNumber}`)],
          }),
          new Paragraph({ children: [new TextRun(`Date: ${invoice.date}`)] }),
          new Paragraph({
            children: [new TextRun(`Billed to:\n${invoice.billedTo}`)],
          }),
          new Paragraph({ children: [new TextRun(`From:\n${invoice.from}`)] }),
          new Paragraph({ children: [new TextRun(`Items:`)] }),
          ...invoice.items.map(
            (item, index) =>
              new Paragraph({
                children: [
                  new TextRun(
                    `${index + 1}. ${item.name} - ${item.quantity} @ $${
                      item.price
                    } for ${item.duration}`
                  ),
                ],
              })
          ),
          new Paragraph({
            children: [new TextRun(`Service fee: $${invoice.serviceFee}`)],
          }),
          new Paragraph({
            children: [new TextRun(`Total: $${invoice.total}`)],
          }),
          new Paragraph({
            children: [new TextRun(`Discount: ${invoice.discount}`)],
          }),
          new Paragraph({
            children: [
              new TextRun(`Note: We appreciate your decision to work with us!`),
            ],
          }),
        ],
      },
    ],
  });

  Packer.toBlob(doc).then((blob) => {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "invoice.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
};

export const saveAsExcel = (invoice) => {
  const worksheet = XLSX.utils.json_to_sheet([
    { A: "INVOICE" },
    { A: `Invoice No: ${invoice.invoiceNumber}` },
    { A: `Date: ${invoice.date}` },
    { A: `Billed to:\n${invoice.billedTo}` },
    { A: `From:\n${invoice.from}` },
    { A: "Items:" },
    ...invoice.items.map((item) => ({
      A: `${item.name}`,
      B: `${item.quantity}`,
      C: `${item.price}`,
      D: `${item.duration}`,
    })),
    { A: `Service fee: $${invoice.serviceFee}` },
    { A: `Total: $${invoice.total}` },
    { A: `Discount: ${invoice.discount}` },
    { A: `Note: We appreciate your decision to work with us!` },
  ]);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Invoice");
  XLSX.writeFile(workbook, "invoice.xlsx");
};
