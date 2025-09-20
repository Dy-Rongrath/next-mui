import type { Metadata } from "next";
import "./globals.css";
import ThemeRegistry from "../providers/ThemeRegistry";
import { DefaultLayout } from "@/layout/DefaultLayout";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Coffee Shop POS",
    template: `%s | Coffee Shop POS`,
  },
  description: "A modern point-of-sale and management system for coffee shops.",
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
          <DefaultLayout>{children}</DefaultLayout>
        </ThemeRegistry>
      </body>
    </html>
  );
}

