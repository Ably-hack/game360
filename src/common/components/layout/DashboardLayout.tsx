import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { Footer, Header } from '../shared';
import TodayMatches from '../shared/TodayMatches/TodayMatches';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});
const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <TodayMatches />
      <main
        className={`xl:container px-4 bg-grey-50  mx-auto ${inter.className}`}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default DashboardLayout;
