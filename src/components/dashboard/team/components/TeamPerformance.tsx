import { FOOTBALL_TEAMS, PERFORMANCE_DATA } from 'src/common/constants';
import SelectDropDown from '../../../../common/DropDown';
import { applyEvenRowColor } from 'src/common/utils';

const TeamPerformance = () => {
  return (
    <div className="bg-white">
      <div className=" mx-auto w-full p-6">
        <div className="grid gap-4">
          <h2 className="text-neutral-600 uppercase text-md font-semibold">
            Team Performance
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <SelectDropDown data={FOOTBALL_TEAMS} />
            <SelectDropDown data={['2023-2024']} />
          </div>
          <div className="table-responsive pt-2">
            <div className="flex-justify-between row-border">
              <p className="table-head">Streak</p>
              <p className="table-head">Games</p>
            </div>
            {PERFORMANCE_DATA.map((p, idx) => (
              <div
                className={`flex-justify-between row-border ${applyEvenRowColor(
                  idx
                )}`}
                key={idx}>
                <p className="table-data">{p}</p>
                <div className="table-data">2</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPerformance;
