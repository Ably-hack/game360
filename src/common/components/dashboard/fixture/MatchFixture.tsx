import MatchLeagueTable from '../matchResult/components/MatchLeagueTable';
import LiveChat from './components/LiveChat';

function MatchFixture() {
  return (
    <div className="grid grid-cols-12 gap-1">
      <div className="col-span-full md:col-span-4 lg:col-span-4 xl:col-span-3 mt-1">
        {/* left section */}
      </div>
      <div className="col-span-full md:col-span-4 lg:col-span-4 xl:col-span-6 mt-1">
        {/* Middle section  */}
        <div className="grid gap-1"></div>
      </div>
      <div className="col-span-full md:col-span-4 lg:col-span-3 mt-1">
        {/* Right section */}
        <div className="grid gap-1">
          <LiveChat />
          <MatchLeagueTable />
        </div>
      </div>
    </div>
  );
}

export default MatchFixture;
