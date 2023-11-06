import { Inter } from 'next/font/google';
import GameDetails from '../GameDetails';
import ClubCard from './ClubCard';

const inter = Inter({ subsets: ['latin'] });

function MatchCard() {
  return (
    <div
      className={`px-2 py-[10px] bg-white ${inter.className} border-b border-grey-50`}>
      <p className="text-xs uppercase font-semibold text-grey-100">4:00PM</p>
      <div className="flex justify-between">
        <div>
          <ClubCard />
        </div>
        <div className="w-[35px] text-primary font-medium flex items-center">
          <p className=""> 0 - 1</p>
        </div>
        <div>
          <ClubCard />
        </div>
      </div>
      <GameDetails />
    </div>
  );
}

export default MatchCard;
