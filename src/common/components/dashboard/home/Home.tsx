import useMediaQuery from "src/common/hooks/useMediaQuery";
import TeamsTab from "../../shared/Tabs/TeamsTab";
import { COMPETITION } from "src/common/constants";
import { FootballNews, MatchCardList, TeamsList } from ".";

const Home = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  return (
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
  );
}

export default Home