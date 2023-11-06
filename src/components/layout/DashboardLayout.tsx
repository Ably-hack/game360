import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import TodayMatches from '../dashboard/home/components/TodayMatches';
import { Footer, Header } from '../shared';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});
const DashboardLayout = ({
  children,
  beforeMain,
}: {
  children: ReactNode;
  beforeMain?: ReactNode;
}) => {
  return (
    <>
      <Header />
      <TodayMatches />
      {beforeMain}
      <main
        className={`xl:px-8 px-4 bg-grey-50  mx-auto ${inter.className}`}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default DashboardLayout;
