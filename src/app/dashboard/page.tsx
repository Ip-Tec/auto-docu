// pages/index.tsx
import React from "react";
import AddDocument from "@/components/dashboard/AddDocument";
import DocumentCardProps from "@/components/dashboard/DocumentCardProps";

const initialInvoice = {
  invoiceNumber: "000001",
  date: "2024-06-22",
  billedTo: "Dr Danel",
  from: "Ip Tec\n1 to 6 Innocent Peter Villar\nBenin City Edo State.",
  items: [
    { name: "Domain name", quantity: 1, price: 70, duration: "year" },
    { name: "Hosting", quantity: 1, price: 53.76, duration: "year" },
  ],
  serviceFee: 125,
  total: 123.76,
  discount: "old_client_1 % 1",
};

const HomePage = () => {
  return (
    <main className="max-w-full mx-auto bg-white dark:bg-gray-900 dark:text-white">
      {/* <div className="flex justify-between items-center p-4 bg-gray-200 text-gray-800 flex-shrink-0 dark:bg-gray-800 dark:text-white">
        <h1 className="text-1xl font-bold mb-4">Dashboard</h1>
      </div> */}
      <div className="flex item-center justify-center">
        <AddDocument />
      </div>
      <div className="flex flex-col items-center justify-center">
        <DocumentCardProps
          title={"NEEDED"}
          email={"ITEMS"}
          status={"Sent"}
          fileType={"od"}
        />
        <DocumentCardProps
          title={"NEEDED"}
          email={"ITEMS"}
          status={"Waiting"}
          fileType={"od"}
        />
      </div>
    </main>
  );
};

export default HomePage;
