import Image from 'next/image';
import React, { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { MATCH_EVENTS_DATA } from 'src/common/constants/matchEventData';

function MatchEvents() {
  const [open, setOpen] = useState(false);
  const label = open ? 'Events Preview' : 'Full Events';
  const data = open ? MATCH_EVENTS_DATA : MATCH_EVENTS_DATA.slice(0, 5);

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
    <div className=" py-6 px-4 bg-white">
      <div className="mb-2 ">
        <h3 className="uppercase font-semibold">major match events</h3>
      </div>
      {data.map((item, index) => (
        <div
          key={index}
          className="px-2 py-4 flex odd:bg-grey-50 even:bg-white">
          <p className="text-sm font-medium w-[20%]">{item.time}</p>
          <div className=" w-[80%] flex">
            {item.image !== '' && (
              <div className="mr-2 my-auto relative w-[15px] h-[13px]">
                <Image
                  src={item.image}
                  // fill
                  width={12}
                  height={12}
                  alt="event image"
                  style={{
                    objectFit: 'contain',
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </div>
            )}
            <p className="text-sm">{item.event}</p>
          </div>
        </div>
      ))}

      <div
        onClick={handleOpen}
        onKeyUp={onKeyUpHandler}
        role="button"
        tabIndex={0}
        className="flex justify-center text-center text-primary">
        <p className="mr-2">{label}</p>
        {open ? (
          <HiChevronUp className="text-lg h-fit my-auto" />
        ) : (
          <HiChevronDown className="text-lg h-fit my-auto" />
        )}
      </div>
    </div>
  );
}

export default MatchEvents;
