import { Inter } from 'next/font/google';
import Image from 'next/image';
import { CustomButton } from '../ui/Buttons/CustomButton';

type HeaderSection = {
  teamTitle: string;
  location: string;
  averageAge: number;
  totalPlayers: number;
};

const inter = Inter({ subsets: ['latin'] });

function HeaderSection({
  teamTitle,
  location,
  averageAge,
  totalPlayers,
}: HeaderSection) {
  return (
    <div
      className={` px-10 py-6 bg-white flex justify-between ${inter.className}`}>
      {/* left section */}
      <div className="flex">
        <div className="mr-6">
          <Image
            className="mr-2"
            src="/images/chelsea.png"
            height={147}
            width={147}
            alt="team logo"
          />
        </div>
        <div className=" my-auto">
          <div>
            <h2 className=" text-xl sm:text-[48px] font-medium">{teamTitle}</h2>
            <div className="flex text-sm text-grey-100">
              <Image
                className=""
                src="/svgs/location_pin_red.svg"
                height={20}
                width={20}
                alt="location pin"
              />
              <p> {location} </p>
            </div>
            <p className="mt-1 text-xs ">Founded in 10 Mar 1904</p>
            <CustomButton
              text="Follow"
              rounded={false}
              className="text-primary"
            />
          </div>
        </div>
      </div>
      {/* Right section */}
      <div className="my-auto">
        <div className="flex">
          <div className="py-3 px-2 text-left">
            <p className="text-lg font-bold"> {averageAge} </p>
            <p className="text-grey-100"> Average Age </p>
          </div>
          <div className="py-3 px-2 text-left">
            <p className="text-lg font-bold"> {totalPlayers} </p>
            <p className="text-grey-100"> Total Players </p>
          </div>
        </div>
        <div className="flex">
          <div className="py-3 px-2 text-left">
            <p className="text-lg font-bold"> {averageAge} </p>
            <p className="text-grey-100"> Foreign Players </p>
          </div>
          <div className="py-3 px-2 text-left">
            <p className="text-lg font-bold"> {totalPlayers} </p>
            <p className="text-grey-100"> National Players </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
