import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';
import Layout from '@/components/Layout';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Classforce',
  description: 'Aplikacja służąca do współpracy międzyuczniowskiej',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={rubik.className + ' text-dark'}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
