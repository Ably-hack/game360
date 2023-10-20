import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { Footer, Header } from '../shared';
import TodayMatches from '../dashboard/home/components/TodayMatches';

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
        className={`xl:container px-4 bg-grey-50  mx-auto ${inter.className}`}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default DashboardLayout;
