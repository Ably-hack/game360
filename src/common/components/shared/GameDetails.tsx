import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import useMediaQuery from 'src/common/hooks/useMediaQuery';
import { GameDetails } from 'src/types/GameDetails';

const inter = Inter({ subsets: ['latin'] });

function GameDetails({
  stadium = 'Estádio do Dragão',
  location = 'Porto, Portugal',
}: GameDetails) {
  const isMobile = useMediaQuery('(min-width: 430px)');

  return (
    <div
      className={` p-2 flex justify-between border border-[#EDEDED]  bg-white ${inter.className}`}>
      <div className="flex">
        <Image
          className=""
          src="/images/location_pin.svg"
          height={32}
          width={32}
          alt={'location'}
        />
        <div className="text-sm">
          <p className=" my-1 sm:my-0 text-center text-game360-neutral-900 font-medium">
            {stadium}
          </p>
          {isMobile && <p className=" text-game360-gray">{location}</p>}
        </div>
      </div>

      <div className="text-[#1A1B1C] flex items-center text-sm">
        <Link href="#" className="px-4 hover:underline">
          Summary
        </Link>

        <Link
          href="#"
          className="px-4 border-l border-[#EDEDED] hover:underline">
          Statistics
        </Link>
      </div>
    </div>
  );
}

export default GameDetails;
