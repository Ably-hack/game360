import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import useMediaQuery from 'src/hooks/useMediaQuery';
import { GameDetails } from 'src/types/GameDetails';

const inter = Inter({ subsets: ['latin'] });

function GameDetails({
  stadium = 'Estádio do Dragão',
  location = 'Porto, Portugal',
}: GameDetails) {

  const isMobile = useMediaQuery('(min-width: 430px)');

  return (
    <div
      className={` p-2 flex justify-between border border-grey-75 bg-white ${inter.className}`}>
      <div className="flex">
        <Image
          className=""
          src="/images/location_pin.svg"
          height={32}
          width={32}
          alt={'location'}
        />
        <div className="text-sm">
          <p className=" my-1 sm:my-0 text-center text-neutral-600 font-medium">
            {stadium}
          </p>
          {isMobile && <p className=" text-grey-100">{location}</p>}
        </div>
      </div>

      <div className=" text-neutral-600 flex items-center text-sm">
        <Link href="#" className="px-4 hover:underline">
          Summary
        </Link>

        <Link href="#" className="px-4 border-l border-grey-75 hover:underline">
          Statistics
        </Link>
      </div>
    </div>
  );
}

export default GameDetails;
