import type { Metadata } from "next";
import "./globals.css";
import ThemeRegistry from "@/context/ThemeRegistry";
import Layout from "@/components/layout/Layout";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Next.js MUI App",
    template: `%s | Next.js MUI App`,
  },
  description: "A modern web application built with Next.js and Material-UI...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <Layout>{children}</Layout>
        </ThemeRegistry>
      </body>
    </html>
  );
}