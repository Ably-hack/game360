import Image from 'next/image';
import DateCard from '../../shared/DateCard';
import MatchCard from '../../shared/MatchCard';

const DEFAULT_IMAGE = '/images/UEFA_Champions_League_1.png';

function MatchCardList() {
  return (
    <div className="px-4 py-6 bg-white">
      <div className="my-6">
        <div className="flex" aria-label="header-section">
          <div className="py-1">
            <Image
              className="mr-2"
              src={DEFAULT_IMAGE}
              height={20}
              width={20}
              alt="UEFA logo"
            />
          </div>
          <h2 className="text-game360-neutral-900 uppercase text-[18px] font-semibold">
            UEFA Champions League
          </h2>
        </div>
        <div>
          <DateCard />
        </div>
      </div>
      <div className="text-game360-gray text-[12px] font-semibold uppercase">
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
