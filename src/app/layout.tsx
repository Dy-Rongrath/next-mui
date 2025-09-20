// FILE: src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import ThemeRegistry from '@/providers/ThemeProvider';
import { DefaultLayout } from '@/layout/DefaultLayout';
import { NotificationProvider } from '@/providers/NotificationProvider';
import { LanguageProvider } from '@/providers/LanguageProvider';
import { NotificationListProvider } from '@/providers/NotificationListProvider';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Coffee Shop POS',
    template: `%s | Coffee Shop POS`,
  },
  description: 'A modern point-of-sale and management system for coffee shops.',
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
          <LanguageProvider>
            <NotificationProvider>
              <NotificationListProvider>
                <DefaultLayout>{children}</DefaultLayout>
              </NotificationListProvider>
            </NotificationProvider>
          </LanguageProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}

