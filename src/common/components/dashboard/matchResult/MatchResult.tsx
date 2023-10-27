import { PREDICTION_DATA } from 'src/common/constants';
import AboutMatch from './components/AboutMatch';
import FormationSection from './components/FormationSection';
import MatchLeagueTable from './components/MatchLeagueTable';
import PredictionBar from './components/PredictionBar';

function MatchResult() {
  return (
    <div className="grid grid-cols-12 gap-1">
      {/* left section */}
      <div className="col-span-full md:col-span-5 lg:col-span-4 xl:col-span-3 mt-1">
        <AboutMatch />
        <FormationSection />
      </div>
      {/* Middle section  */}
      <div className="col-span-full md:col-span-7 lg:col-span-5 xl:col-span-6 mt-1">
        <div className="grid gap-1">
          {/* Start here */}

          <PredictionBar
            firstClub={PREDICTION_DATA[0]}
            secondClub={PREDICTION_DATA[1]}
          />
        </div>
      </div>
      {/* Right section */}
      <div className="col-span-full lg:col-span-3 mt-1">
        <MatchLeagueTable />
      </div>
    </div>
  );
}

export default MatchResult;
