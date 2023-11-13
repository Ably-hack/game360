import MatchLeagueTable from '../matchResult/components/MatchLeagueTable';
import AboutMatch from './components/AboutMatch';
import ChampionsNews from './components/ChampionsNews';
import LiveChat from './components/LiveChat';
import PredictionBar from './components/PredictionBar';
import Record from './components/Record';
import {
  PREDICTION_DATA,
  ARSENAL_LAST_GAME_RECORD_DATA,
  CHELSEA_LAST_GAME_RECORD_DATA,
  HEAD_TO_HEAD_RECORD_DATA,
} from 'src/common/constants';
import TeamStatistics from './components/TeamStatistics';
function MatchFixture() {
  return (
    <div className="grid grid-cols-12 gap-1">
      <div className="col-span-full md:col-span-4 lg:col-span-4 xl:col-span-3 mt-1">
        {/* left section */}
        <AboutMatch />
        <ChampionsNews />
      </div>
      <div className="col-span-full md:col-span-4 lg:col-span-4 xl:col-span-6 mt-1">
        {/* Middle section  */}
        <PredictionBar
          firstClub={PREDICTION_DATA[0]}
          secondClub={PREDICTION_DATA[1]}
        />
        <TeamStatistics />

        <Record data={HEAD_TO_HEAD_RECORD_DATA} />
        <Record data={CHELSEA_LAST_GAME_RECORD_DATA} />
        <Record data={ARSENAL_LAST_GAME_RECORD_DATA} />

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
