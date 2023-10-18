import { FootballNews } from 'src/common/components/dashboard/home';
import MatchCardList from 'src/common/components/dashboard/home/MatchCardList';
import TeamsList from 'src/common/components/dashboard/home/TeamsList';
import DashboardLayout from 'src/common/components/layout/DashboardLayout';
import TeamsTab from 'src/common/components/shared/Tabs/TeamsTab';
import { COMPETITION } from 'src/common/constants';
import useMediaQuery from 'src/common/hooks/useMediaQuery';

export default function Home() {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <DashboardLayout>
      <div className="text-neutral-400">
        <div className="grid grid-cols-12">
          {isDesktop ? (
            <div className="col-span-full md:col-span-4 lg:col-span-3  m-1">
              <TeamsList />
            </div>
          ) : (
            <div className="col-span-full">
              <h2 className="mt-8 text-neutral-600 uppercase text-md font-semibold">
                Football Teams
              </h2>
              <TeamsTab data={COMPETITION} />
            </div>
          )}
          <div className="col-span-full md:col-span-8 lg:col-span-6 m-1">
            <MatchCardList />
          </div>
          {isDesktop && (
            <div className="col-span-full lg:col-span-3  m-1">
              <FootballNews />
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}
