import Image from 'next/image';
import React, { useState } from 'react';
import { DEFAULT_IMAGE } from 'src/common/constants';

type Accordion = {
  headingStyles?: string;
  contentStyle?: string;
  playerName?: string;
  playerNumber?: string;
  content?: string;
  playerImage?: string;
  numberOfFollowers?: string;
  children?: React.ReactNode;
};

function Accordion({
  headingStyles,
  playerName,
  playerNumber,
  playerImage,
  numberOfFollowers,
  children,
}: Accordion) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const onKeyUpHandler: React.KeyboardEventHandler<HTMLDivElement> = (e: {
    key: string;
  }) => {
    if (e.key === 'Enter') {
      setOpen(!open);
    }
  };

  return (
    <div className=" my-4">
      <div
        onClick={handleOpen}
        onKeyUp={onKeyUpHandler}
        role="button"
        tabIndex={0}
        className={` py-2 px-3 w-full flex justify-between ${headingStyles}`}>
        <div className="flex">
          <div className="my-auto mr-2">
            <Image
              className="mr-1"
              src={playerImage || `/images/player_img.png`}
              height={28}
              width={28}
              alt={'player image'}
            />
          </div>
          <div className="mr-4">
            <p className="text-sm">
              {playerNumber} {playerName}
            </p>
            <p className="text-neutral-500 text-xs">
              {numberOfFollowers} Followers
            </p>
          </div>
          <div className="my-auto">
            <Image
              className="mr-1"
              src={DEFAULT_IMAGE}
              height={20}
              width={20}
              alt={'Goal icon'}
            />
          </div>
        </div>

        <p className={` text-xl h-fit ${open && 'rotate-180'}`}> &#94; </p>
      </div>
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in ${
          open ? 'max-h-100' : 'max-h-0'
        }`}>
        {open && <div>{children}</div>}
      </div>
    </div>
  );
}

export default Accordion;
