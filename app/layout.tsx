import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AnchorChain",
  description: "Tamper-evident event infrastructure for verifiable records, receipts, and machine trust.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
