import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import Header from '../shared/Header';

const inter = Inter({ subsets: ['latin'] });
const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className={`sm:container bg-grey-50 mx-auto ${inter.className}`}>
        {children}
      </main>
    </>
  );
};

export default DashboardLayout;
