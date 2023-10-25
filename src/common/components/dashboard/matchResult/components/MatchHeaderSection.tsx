import { Inter } from 'next/font/google';
import Image from 'next/image';
import { DEFAULT_IMAGE } from 'src/common/constants';
import useMediaQuery from 'src/common/hooks/useMediaQuery';

type MatchHeaderSection = {
  teamOne?: string;
  teamTwo?: string;
  teamOneImage?: string;
  teamTwoImage?: string;
  showBorderBottom?: boolean;
  league_title?: string;
  matchDate?: string;
  location?: string;
  teamOneScore?: string;
  teamTwoScore?: string;
  teamOneSlug?: string;
  teamTwoSlug?: string;
};

const inter = Inter({ subsets: ['latin'] });

function MatchHeaderSection({
  teamOne,
  teamTwo,
  teamOneImage,
  teamTwoImage,
  showBorderBottom = false,
  league_title,
  matchDate,
  location,
  teamOneScore = '0',
  teamTwoScore = '0',
  teamOneSlug,
  teamTwoSlug,
}: MatchHeaderSection) {
  const isMobile = useMediaQuery('(max-width: 430px)');

  return (
    <div
      className={`w-full py-6 px-3 bg-white ${inter.className} ${
        showBorderBottom && 'border-b-2 border-grey-50'
      }`}>
      <div className="flex justify-between">
        <div className={`flex font-medium `}>
          <div className={`flex flex-col-reverse md:flex-row`}>
            <div className="mx-auto md:mr-6 my-auto">
              <h3 className=" text-neutral-600 text-xl md:text-[48px]">
                {isMobile ? teamOneSlug : teamOne}
              </h3>
            </div>
            <div className="my-auto">
              <Image
                className="mr-1"
                src={teamOneImage || DEFAULT_IMAGE}
                height={isMobile ? 40 : 103}
                width={isMobile ? 40 : 103}
                alt={teamOne || 'Football Club'}
              />
            </div>
          </div>
          <div className="my-auto ml-10">
            <p className="text-[48px] font-bold"> {teamOneScore} </p>
          </div>
        </div>

        <div className="my-auto">
          <p className="text-xl text-center font-bold">FT</p>
        </div>
        <div className={`flex font-medium `}>
          <div className="my-auto mr-10">
            <p className="text-[48px] font-bold"> {teamTwoScore} </p>
          </div>
          <div className={`flex flex-col md:flex-row`}>
            <div className="my-auto">
              <Image
                className="mr-1"
                src={teamTwoImage || DEFAULT_IMAGE}
                height={isMobile ? 40 : 103}
                width={isMobile ? 40 : 103}
                alt={teamTwo || 'Football Club'}
              />
            </div>
            <div className="my-auto mx-auto md:ml-6">
              <h3 className=" text-neutral-600 text-xl md:text-[48px]">
                {isMobile ? teamTwoSlug : teamTwo}
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="text-sm text-center">{location}</p>
        <p className="text-sm text-center">{matchDate}</p>
      </div>
      <div className="py-1 mt-4 text-sm text-center text-grey-100">
        <p>{league_title}</p>
      </div>
    </div>
  );
}

export default MatchHeaderSection;
