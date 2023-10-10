import { FootballNews } from 'src/common/components/dashboard/home';
import MatchCardList from 'src/common/components/dashboard/home/MatchCardList';
import TeamsList from 'src/common/components/dashboard/home/TeamsList';
import DashboardLayout from 'src/common/components/layout/DashboardLayout';
import useMediaQuery from 'src/common/hooks/useMediaQuery';

export default function Home() {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <DashboardLayout>
      <div className="text-neutral-400">
        <div className="flex">
          {isDesktop && (
            <div className=" md:w-[30%] lg:w-[25%] m-1">
              <TeamsList />
            </div>
          )}
          <div className="w-[100%] md:w-[50%] m-1">
            <MatchCardList />
          </div>
          {isDesktop && (
            <div className=" md:w-[30%] lg:w-[25%] m-1">
              <FootballNews />
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
