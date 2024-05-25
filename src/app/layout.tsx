import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maulid Alamin",
  description: "Majlis Anti Alafu, Berkah Tumbuh Bersama",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`text-white bg-lime-500 pb-10  ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
