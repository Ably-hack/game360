import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { DEFAULT_IMAGE } from 'src/constants';
import useMediaQuery from 'src/hooks/useMediaQuery';
import { ClubCard } from 'src/types/ClubCard';

const inter = Inter({ subsets: ['latin'] });

function ClubCard({
  imageLink = DEFAULT_IMAGE,
  clubTitle,
  showBorderBottom = false,
}: ClubCard) {
  const isTablet = useMediaQuery('(min-width: 430px)');

  return (
    <div
      className={`w-full py-2 bg-white ${inter.className} ${showBorderBottom && 'border-b border-grey-50'
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
          <h3 className=" text-neutral-600 text-lg">{clubTitle}</h3>
        </div>
      </div>
      <div className="py-1 text-sm text-grey-100">
        <Link href="#" className=" pr-3  hover:underline">
          Squad
        </Link>
        {isTablet && (
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
