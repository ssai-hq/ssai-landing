import type { Metadata } from "next";
import "./globals.css";
import { geist, jetbrainsMono, tiempos } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "SSAI",
  description: "A cognitive DevOps engineer for teams without a DevOps team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`mode-normal ${tiempos.variable} ${geist.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
