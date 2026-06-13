import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ShopEase",
  description: "A simple product display app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
