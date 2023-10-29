import Image from 'next/image';
import React from 'react';
import { IPredictionBarProps } from 'src/types/Match';

const PredictionBar: React.FC<IPredictionBarProps> = ({
  firstClub,
  secondClub,
}) => {
  return (
    <div className="bg-white  py-6 px-4">
      <h3 className="text-neutral-900 font-semibold">WHO WILL WIN?</h3>
      <div className="grid grid-flow-col gap-2 mt-4">
        <div
          className={`bg-[${firstClub.color}]  [h-2.5rem] cursor-pointer p-2 grid justify-center items-center`}>
          <div className="max-w-[1.5rem]">
            <Image
              src={`${firstClub.logo}`}
              className="w-full"
              alt={firstClub.name}
              width={20}
              height={20}
            />
          </div>
        </div>
        <div className="bg-neutral-700 cursor-pointer text-neutral-100 p-2 [h-2.5rem] grid justify-center items-center">
          Draw
        </div>
        <div
          className={`bg-[${secondClub.color}]  [h-2.5rem] cursor-pointer p-2 grid justify-center items-center`}>
          <div className="max-w-[1.5rem]">
            <Image
              src={`${secondClub.logo}`}
              className="w-full"
              alt={secondClub.name}
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictionBar;
