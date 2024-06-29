import Image from "next/image";
import Invoice from "@/components/Invoice";

export default function Home() {
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
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Invoice initialInvoice={initialInvoice} />
    </main>
  );
}
