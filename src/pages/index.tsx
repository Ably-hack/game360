<<<<<<< HEAD
import DashboardLayout from 'src/common/components/layout/DashboardLayout';

export default function Home() {
  return (
    <DashboardLayout>
      <div className="text-neutral-400">Jus here</div>
    </DashboardLayout>
=======
import MatchCardList from 'src/common/components/dashboard/home/MatchCardList';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      {/* <MatchCard /> */}
      <MatchCardList />
    </>
>>>>>>> d66b0b3ed6da263d22fec13b3eefc308e37777b3
  );
}
