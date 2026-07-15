import type { Metadata } from "next";
import "./globals.css";
import { geist, geistMono, tiempos } from "@/lib/fonts";

const title = "SSAI | Database migrations without blind spots";
const description =
  "SSAI reconstructs your MongoDB system, designs the PostgreSQL target, and uses its Jumpship agent to supervise a deterministic, reversible migration into Supabase.";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "SSAI",
  keywords: [
    "MongoDB migration",
    "PostgreSQL migration",
    "MongoDB Atlas to Supabase",
    "database migration agent",
    "CDC migration",
    "database cutover",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "SSAI",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${tiempos.variable} ${geist.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
