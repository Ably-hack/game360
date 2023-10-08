import { ReactNode } from 'react';
import Header from '../shared/Header';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className={`container mx-auto ${inter.className}`}>{children}</main>
    </>
  );
};

export default DashboardLayout;
