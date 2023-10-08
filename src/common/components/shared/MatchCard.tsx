import { Inter } from 'next/font/google';
import ClubCard from './ClubCard';
import GameDetails from './GameDetails';

const inter = Inter({ subsets: ['latin'] });

function MatchCard() {
  return (
    <div className={`p-2 bg-white ${inter.className}`}>
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
