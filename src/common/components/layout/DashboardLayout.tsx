import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { Footer, Header } from '../shared';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});
const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className={`xl:container px-4 bg-grey-50 mt-1 mx-auto ${inter.className}`}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default DashboardLayout;
