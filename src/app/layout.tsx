import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "David Xu — AI Infrastructure & Data Engineering",
  description: "Building AI systems that actually work. Student at Curtin University.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
