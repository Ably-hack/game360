import { Inter } from 'next/font/google';
import Image from 'next/image';
import { DEFAULT_IMAGE } from 'src/common/constants';
import { ResultCard } from 'src/types/ResultCard';

const inter = Inter({ subsets: ['latin'] });

function ResultCard({
  imageLink = DEFAULT_IMAGE,
  teamOne,
  teamTwo,
  showBorderBottom = false,
  league_title,
  teamOneScore,
  teamTwoScore,
}: ResultCard) {
  return (
    <div
      className={`w-full py-4 px-3 bg-white ${inter.className} ${
        showBorderBottom && 'border-b-2 border-grey-50'
      }`}>
      <div className="flex justify-between">
        <div className={`flex font-medium`}>
          <div className="mr-2 py-1">
            <h3 className=" text-neutral-600 text-md">{teamOne}</h3>
          </div>
          <div className="mr-2 py-2">
            <Image
              className="mr-1"
              src={imageLink}
              height={20}
              width={20}
              alt={teamOne || 'Football Club'}
            />
          </div>
          <div className="mr-2">
            <p className=" text-xl font-semibold"> {teamOneScore}</p>
          </div>
          <div className="mr-2">
            <Image
              className="mr-1"
              src="/svgs/left_triangle_arrow.svg"
              height={6}
              width={10}
              alt={'winner_indicator'}
            />
          </div>
        </div>

        <div className="py-2">
          <p className="text-sm font-medium">FT</p>
        </div>

        <div className={`flex font-medium `}>
          <div className="mr-2">
            <p className=" text-xl font-semibold"> {teamTwoScore}</p>
          </div>
          <div className="mr-1 py-2">
            <Image
              className="mr-1"
              src={imageLink}
              height={20}
              width={20}
              alt={teamTwo || 'Football Club'}
            />
          </div>
          <div className="py-1">
            <h3 className=" text-neutral-600 text-md">{teamTwo}</h3>
          </div>
        </div>
      </div>

      <div className="py-1 mt-4 text-sm text-center text-grey-100">
        <p>{league_title}</p>
      </div>
    </div>
  );
}

export default ResultCard;
