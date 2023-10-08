import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { Header } from '../shared';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});
const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className={`lg:container mx-auto ${inter.className}`}>
        {children}
      </main>
    </>
  );
};

export default DashboardLayout;
