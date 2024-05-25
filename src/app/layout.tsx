import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SAMAWA - Invitation",
  description: "Online Invitation for Your Special Day",
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
