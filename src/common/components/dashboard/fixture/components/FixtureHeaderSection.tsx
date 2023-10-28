import { Inter } from 'next/font/google';
import Image from 'next/image';
import { DEFAULT_IMAGE } from 'src/common/constants';
import useMediaQuery from 'src/common/hooks/useMediaQuery';

type FixtureHeaderSection = {
  teamOne?: string;
  teamTwo?: string;
  teamOneImage?: string;
  teamTwoImage?: string;
  showBorderBottom?: boolean;
  matchDate?: string;
  matchTime?: string;
  location?: string;
  teamOneSlug?: string;
  teamTwoSlug?: string;
};

const inter = Inter({ subsets: ['latin'] });

function FixtureHeaderSection({
  teamOne,
  teamTwo,
  teamOneImage,
  teamTwoImage,
  showBorderBottom = false,
  matchDate,
  matchTime,
  location,
  teamOneSlug,
  teamTwoSlug,
}: FixtureHeaderSection) {
  const isMobile = useMediaQuery('(max-width: 430px)');

  return (
    <div
      className={`w-full py-6 px-3 bg-white ${inter.className} ${
        showBorderBottom && 'border-b-2 border-grey-50'
      }`}>
      <div className=" max-w-6xl mx-auto">
        <div className="flex justify-between">
          <div className={`flex font-medium `}>
            <div className={`flex md:flex-row`}>
              <div className="my-auto md:mr-6">
                <Image
                  className="mr-1"
                  src={teamOneImage || DEFAULT_IMAGE}
                  height={isMobile ? 40 : 103}
                  width={isMobile ? 40 : 103}
                  alt={teamOne || 'Football Club'}
                />
              </div>

              <div className="mx-auto my-auto">
                <h3 className=" text-neutral-600 text-xl md:text-extra">
                  {isMobile ? teamOneSlug : teamOne}
                </h3>
              </div>
            </div>
          </div>

          <div className="my-auto text-xs md:text-xl text-center font-bold">
            <p className="">{matchDate}</p>
            <p className="">{matchTime}</p>
          </div>

          <div className={`flex font-medium `}>
            <div className={`flex md:flex-row`}>
              <div className="my-auto mx-auto ">
                <h3 className=" text-neutral-600 text-xl md:text-extra">
                  {isMobile ? teamTwoSlug : teamTwo}
                </h3>
              </div>
              <div className="my-auto md:ml-6">
                <Image
                  className="mr-1"
                  src={teamTwoImage || DEFAULT_IMAGE}
                  height={isMobile ? 40 : 103}
                  width={isMobile ? 40 : 103}
                  alt={teamTwo || 'Football Club'}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm text-center">{location}</p>
        </div>
      </div>
    </div>
  );
}

export default FixtureHeaderSection;
