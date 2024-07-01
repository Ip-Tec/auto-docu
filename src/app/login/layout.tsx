// src/app/login/layout.tsx

"use client";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 dark:bg-gray-900 flex items-center justify-center min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
