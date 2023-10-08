import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import useMediaQuery from 'src/common/hooks/useMediaQuery';
import { ClubCard } from 'src/types/ClubCard';

const DEFAULT_IMAGE = '/images/UEFA_Champions_League_1.png';
const inter = Inter({ subsets: ['latin'] });

function ClubCard({
  imageLink = DEFAULT_IMAGE,
  clubTitle,
  showBorderBottom = false,
}: ClubCard) {
  const isMobile = useMediaQuery('(min-width: 430px)');

  return (
    <div
      className={`w-full py-2 bg-white ${inter.className} ${
        showBorderBottom && 'border border-game360-gray'
      }`}>
      <div className={`flex w-full font-medium `}>
        <div className="py-1">
          <Image
            className="mr-1"
            src={imageLink}
            height={20}
            width={20}
            alt={clubTitle || 'Football Club'}
          />
        </div>
        <div>
          <h3 className=" text-game360-neutral-900 text-[18px]">Chelsea</h3>
        </div>
      </div>
      <div className="py-1 text-sm text-game360-gray">
        <Link href="#" className=" pr-3  hover:underline">
          Squad
        </Link>
        {isMobile && (
          <Link href="#" className="pr-3  hover:underline">
            Stats
          </Link>
        )}
        <Link href="#" className="pr-3  hover:underline">
          Fixtures
        </Link>
      </div>
    </div>
  );
}

export default ClubCard;
