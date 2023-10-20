import Link from 'next/link';
import { DUMMY_DATA } from 'src/common/constants';
import FixtureCard from '../../../shared/Card/FixtureCard';

function FixtureList() {
  return (
    <div className="py-6 bg-white">
      <p className="border-b-2 border-grey-50"></p>
      {DUMMY_DATA.map((_item, id) => {
        return (
          <Link href={`/team`} passHref key={id}>
            <FixtureCard
              teamOne="Chelsea"
              teamTwo="Arsenal"
              league_title="English Premier League"
              matchDate="21/10 "
              matchTime="5:30 PM"
              showBorderBottom={true}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default FixtureList;
