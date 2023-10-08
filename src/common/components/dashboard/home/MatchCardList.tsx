import Image from 'next/image';
import DateCard from '../../shared/DateCard';
import MatchCard from '../../shared/MatchCard';

const DEFAULT_IMAGE = '/images/UEFA_Champions_League_1.png';

function MatchCardList() {
  return (
    <div className="px-4 py-6 bg-white">
      <div className="my-6">
        <div className="flex mb-4" aria-label="header-section">
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
        <div className="flex">
          <DateCard active={true} />
          <DateCard />
          <DateCard />
        </div>
      </div>
      <div className="text-grey-100 mt-6 text-xs font-semibold uppercase">
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
