import Image from 'next/image';
import React from 'react';

interface IStatisticsBar {
  title: string;
  statistics: {
    id: number;
    name: string;
    points: number;
    logo: string;
    color: string;
    percentage: string;
  }[];
}
const StatisticsBar: React.FC<IStatisticsBar> = (props) => {
  return (
    <div className="mt-[0.5rem] pb-[0.5rem]">
      <h2 className="text-neutral-800 text-sm text-center"> {props.title}</h2>
      <div className="grid grid-flow-col gap-2 px-6 mt-[0.5rem]">
        {props.statistics.map((statistic, index) => (
          <div
            key={index}
            className="w-full flex justify-between bg-gray-50 h-[1.5rem]">
            <div
              className={`${
                index === 0 && 'order-2 place-items-end'
              } w-[60%] h-full grid items-center bg-[${statistic.color}]`}>
              <div className={`${index === 0 ? 'mr-2' : 'ml-2'}  max-w-[1rem]`}>
                <Image
                  src={`${statistic.logo}`}
                  className="w-full"
                  alt={`${statistic.name} logo`}
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <p className={`${index === 0 ? 'order-1 ml-2' : 'mr-2'}`}>
              {statistic.points}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticsBar;
