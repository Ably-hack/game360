import Image from 'next/image';
import React from 'react';
import { IRecord } from 'src/types/Match';

const Record: React.FC<{ data: IRecord }> = ({ data }) => {
  return (
    <div className="bg-white  py-6 ">
      <h3 className="text-neutral-900 px-4 font-semibold uppercase">
        {data.title}
      </h3>
      <div className="mt">
        {data.data.map((item, index) => (
          <div
            key={item.id}
            className={`${
              index % 2 === 0 ? '' : 'bg-neutral-100/50'
            } grid p-[0.75rem] px-4 text-sm grid-flow-col justify-between items-center gap-3`}>
            <p
              className={`${
                item.firstTeamScore > item.secondTeamScore
                  ? 'text-green-400'
                  : item.firstTeamScore < item.secondTeamScore
                  ? 'text-primary'
                  : 'text-neutral-500'
              }`}>
              {item.firstTeamScore > item.secondTeamScore
                ? 'W'
                : item.firstTeamScore < item.secondTeamScore
                ? 'L'
                : 'D'}
            </p>
            <div className="grid justify-center items-center grid-flow-col gap-2">
              <div className="grid justify-center items-center grid-flow-col gap-1">
                <p className="text-neutral-800 truncate">
                  {item.firstTeamName}
                </p>
                <div className="max-w-[1rem]">
                  <Image
                    src={`${item.firstTeamLogo}`}
                    className="w-full"
                    alt={`${item.firstTeamName} logo`}
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="text-xs text-primary">
                <span>{item.firstTeamScore}</span> -
                <span> {item.secondTeamScore}</span>
              </div>
              <div className="grid justify-center items-center grid-flow-col gap-1">
                <div className="max-w-[1rem]">
                  <Image
                    src={`${item.secondTeamLogo}`}
                    className="w-full"
                    alt={`${item.secondTeamName} logo`}
                    width={20}
                    height={20}
                  />
                </div>
                <p className="text-neutral-800 truncate">
                  {item.secondTeamName}
                </p>
              </div>
            </div>

            <p className="text-neutral-600 text-xs truncate">{item.league}</p>

            <p className="text-neutral-600 text-xs">{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Record;
