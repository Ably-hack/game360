import Image from 'next/image';
import React from 'react';
import { DEFAULT_IMAGE } from 'src/common/constants';

type Tabs = {
  color?: string;
  data: {
    title: string;
    slug: string;
    teams: string[];
  }[];
};

type TeamsTabItem = {
  teams: string[];
};

const Tabs = ({ color, data }: Tabs) => {
  const [openTab, setOpenTab] = React.useState(0);

  return (
    <>
      <div className="flex ">
        <div className="w-full overflow-x-auto">
          <ul
            className="flex mb-0 list-none pt-3 pb-2 flex-row overflow-x-auto"
            role="tablist">
            {data.map((item, index) => (
              <li
                key={index}
                className="-mb-px mr-0 whitespace-nowrap flex-auto break-keep text-center">
                <a
                  className={
                    'text-xs font-medium uppercase px-5 pt-3 pb-1 break-keep block leading-normal ' +
                    (openTab === index
                      ? 'text-neutral-600  bg-white border-b-2 border-' + color
                      : 'text-neural-900' + ' bg-white')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(index);
                  }}
                  data-toggle="tab"
                  href={'#link' + index}
                  role="tablist">
                  {item.slug}
                </a>
              </li>
            ))}
          </ul>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded">
            <div className=" flex-auto">
              <div className="tab-content tab-space">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className={openTab === index ? 'block' : 'hidden'}
                    id={'link' + index}>
                    <TabItem teams={item.teams} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export function TabItem({ teams }: TeamsTabItem) {
  return (
    <div className="flex ">
      {teams.map((team, id) => (
        <div
          key={id}
          className=" px-2 py-2 shadow-md whitespace-nowrap bg-white text-sm flex">
          <div className="py-1">
            <Image
              className="mr-2"
              src={DEFAULT_IMAGE}
              height={20}
              width={20}
              alt="Team logo"
            />
          </div>
          <p className="text-neutral-600">{team}</p>
        </div>
      ))}
    </div>
  );
}

export default function TeamsTab({ color, data }: Tabs) {
  if (data?.length < 1) {
    return <></>;
  }

  return (
    <>
      <Tabs color={color || 'primary'} data={data} />
    </>
  );
}
