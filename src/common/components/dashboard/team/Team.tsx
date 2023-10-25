import LeftSection from './components/LeftSection';
import TeamLeagueTable from './components/TeamLeagueTable';
import TeamPerformance from './components/TeamPerformance';
import TeamSquad from './components/TeamSquad';
import ViewTransfers from './components/transfer/ViewTransfers';

const Team = () => {
  return (
    <div className="grid grid-cols-12 gap-1">
      <div className="col-span-full md:col-span-5 lg:col-span-4 xl:col-span-3 mt-1">
        <LeftSection />
      </div>
      <div className="col-span-full md:col-span-7 lg:col-span-5 xl:col-span-6 mt-1">
        {/* Middle section  */}
        <div className="grid gap-1">
          <TeamPerformance />
          <ViewTransfers />
          <TeamLeagueTable />
        </div>
      </div>
      <div className="col-span-full lg:col-span-3 mt-1">
        {/* Right section */}
        <TeamSquad />
      </div>
    </div>
  );
};

export default Team;
