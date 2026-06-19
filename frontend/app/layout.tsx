import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unpam Space",
  description: "Semua yang kamu butuhkan, dalam satu platform UNPAM SPACE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
