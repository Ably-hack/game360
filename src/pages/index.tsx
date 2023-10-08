import MatchCardList from 'src/common/components/dashboard/home/MatchCardList';
import DashboardLayout from 'src/common/components/layout/DashboardLayout';

export default function Home() {
  return (
    <DashboardLayout>
      <div className="text-neutral-400">
        <MatchCardList />
      </div>
    </DashboardLayout>
  );
}
