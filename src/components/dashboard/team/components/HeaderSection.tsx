import Image from 'next/image';
import Chart from 'react-google-charts';
import { CustomButton } from '../../../../common/Buttons/CustomButton';

type HeaderSection = {
  teamTitle?: string | null;
  location?: string | null;
  averageAge: number;
  totalPlayers?: string | null;
  foreignPlayers: number;
  logo?: string | null,
  yearFounded?: string | null,
};

function HeaderSection({
  teamTitle,
  location,
  averageAge,
  totalPlayers,
  logo,
  yearFounded
}: HeaderSection) {
  // const pieChartOneData = [
  //   ['Title', 'Number of Player'],
  //   ['foreign players', foreignPlayers],
  //   ['national players', totalPlayers - foreignPlayers],
  // ];

  // const pieChartOTwoData = [
  //   ['Title', 'Number of Player'],
  //   ['national players', totalPlayers - foreignPlayers],
  //   ['foreign players', foreignPlayers],
  // ];

  // const options = {
  //   colors: ['#DD0000', '#F7EBEB'],
  //   legend: { position: 'none' },
  //   backgroundColor: '#F7F7F7',
  // };

  // #EDEDED

  return (
    <div className={`px-3 py-6 bg-white`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between">
          {/* left section */}
          <div className="flex">
            <div className="mr-6">
              <Image
                className="mr-2"
                src={logo}
                height={147}
                width={147}
                alt="team logo"
              />
            </div>
            <div className=" my-auto">
              <div>
                <h2 className=" text-xl sm:text-extra font-medium">
                  {teamTitle}
                </h2>
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
                <p className="mt-1 text-xs ">Founded in {yearFounded}</p>
                <CustomButton
                  text="Follow"
                  rounded={false}
                  className="text-primary"
                />
              </div>
            </div>
          </div>
          {/* Right section */}
          <div className=" flex my-auto">
            <div className=" justify-between">
              <div className="py-3 px-2 text-left">
                <p className="text-lg font-bold"> {averageAge} </p>
                <p className="text-grey-250"> Average Age </p>
              </div>

              {/* <div className="py-3 px-2 mr-1 text-left flex  bg-grey-50">
                <Chart
                  chartType="PieChart"
                  data={pieChartOneData}
                  options={options}
                  width={'60px'}
                  height={'60px'}
                  className="px-0"
                />
                <div>
                  <p className="text-lg font-bold"> {foreignPlayers} </p>
                  <p className="text-grey-250"> Foreign Players </p>
                </div>
              </div> */}
            </div>
            <div className="">
              <div className="py-3 px-2 text-left">
                <p className="text-lg font-bold"> {totalPlayers} </p>
                <p className="text-grey-250"> Total Players </p>
              </div>

              {/* <div className="py-3 px-2 text-left flex bg-grey-50">
                <Chart
                  chartType="PieChart"
                  data={pieChartOTwoData}
                  options={options}
                  width={'60px'}
                  height={'60px'}
                />
                <div>
                  <p className="text-lg font-bold">
                    {totalPlayers - foreignPlayers}
                  </p>
                  <p className="text-grey-250"> National Players </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
