import Link from 'next/link';
import { DUMMY_DATA } from 'src/common/constants';
import ResultCard from '../shared/Card/ResultCard';

function ResultList() {
  return (
    <div className="py-6 bg-white">
      <p className="border-b-2 border-grey-50"></p>
      {DUMMY_DATA.map((_item, id) => {
        return (
          <Link href={`/team`} passHref key={id}>
            <ResultCard
              teamOne="Chelsea"
              teamTwo="Arsenal"
              league_title="English Premier League"
              teamOneScore="1"
              teamTwoScore="0"
              showBorderBottom={true}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default ResultList;
