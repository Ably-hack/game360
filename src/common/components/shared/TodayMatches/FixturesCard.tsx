import Image from 'next/image';
import React from 'react';
interface FixturesCardProps {
  time: string;
  firstClubName: string;
  firstClubLogo: string;
  secondClubName: string;
  secondClubLogo: string;
}
const FixturesCard: React.FC<FixturesCardProps> = ({
  time,
  firstClubName,
  firstClubLogo,
  secondClubName,
  secondClubLogo,
}) => {
  return (
    <div className="bg-white p-4 flex  flex-col">
      <p className="text-neutral-400 text-xs">{time}</p>

      <div className="flex items-center gap-1">
        <div className="flex items-center gap-1">
          <p>{firstClubName}</p>
          <div className="max-w-[1.13rem]">
            <Image
              src={`${firstClubLogo}`}
              className="w-full"
              alt={firstClubName}
              width={20}
              height={20}
            />
          </div>
        </div>
        <p className="text-primary text-xxs">VS</p>
        <div className="flex items-center gap-1">
          <p>{secondClubName}</p>
          <div className="max-w-[1.13rem]">
            <Image
              src={secondClubLogo}
              className="w-full"
              alt={secondClubName}
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixturesCard;
