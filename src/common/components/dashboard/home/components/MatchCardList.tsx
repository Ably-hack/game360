import Image from 'next/image';
import {
  DEFAULT_IMAGE,
  DUMMY_DATA,
  FOOTBALL_TEAMS,
} from 'src/common/constants';
import DateCard from '../../../shared/Card/DateCard';
import MatchCard from '../../../shared/Card/MatchCard';
import DropDown from '../../../ui/DropDown';

function MatchCardList() {
  return (
    <div className="px-4 pt-6 pb-6 bg-white">
      <div className="mb-6">
        <div className=" mb-4 md:flex justify-between">
          <div className="flex mb-4 items-center" aria-label="header-section">
            <div className="py-1">
              <Image
                className="mr-2"
                src={DEFAULT_IMAGE}
                height={20}
                width={20}
                alt="UEFA logo"
              />
            </div>
            <h2 className="text-neutral-600 uppercase text-lg font-semibold">
              UEFA Champions League
            </h2>
          </div>
          <div className=" mx-auto md:mx-0 w-[100%] md:max-w-[200px]">
            <DropDown data={FOOTBALL_TEAMS} />
          </div>
        </div>

        <div className="flex overflow-x-auto">
          <DateCard active={true} />
          {DUMMY_DATA.map((item, id) => {
            return <DateCard key={id} />;
          })}
        </div>
      </div>
      <div className="mb-6 text-grey-100 mt-6 text-xs font-semibold uppercase">
        Thursday , October 5, 2023
      </div>
      <div>
        <MatchCard />
        <MatchCard />
        <MatchCard />
      </div>
    </div>
  );
}

export default MatchCardList;
