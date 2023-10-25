import { Tab } from '@headlessui/react';
import Image from 'next/image';
import {
  ARSENAL_PlAYERS,
  CHELSEA_PlAYERS,
  FORMATION_TABS,
} from 'src/common/constants';
import { isEven } from 'src/common/utils';
import MatchFormation from './MatchFormation';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function FormationSection() {
  const contents = [
    <MatchFormation key={0} data={CHELSEA_PlAYERS} />,
    <MatchFormation key={1} data={ARSENAL_PlAYERS} />,
  ];

  return (
    <div className="bg-white ">
      <div className=" mx-auto sm:mx-auto w-full max-w-md px-3 py-6">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-3xl bg-grey-75 p-1">
            {FORMATION_TABS.map((tab, index) => {
              return (
                <Tab
                  key={index}
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-3xl py-2.5 text-sm font-semibold leading-5 text-neutral-600',
                      'ring-white ring-opacity-60 focus:outline-none focus:ring-2',
                      selected
                        ? 'bg-white shadow text-primary'
                        : 'text-neutral-600 hover:bg-white/[0.12]'
                    )
                  }>
                  <div
                    className={` ${
                      !isEven(index) && 'flex-row-reverse'
                    } flex justify-center`}>
                    <div className="mr-2">{tab.title}</div>
                    <div className="my-auto">
                      <Image
                        className="mr-2 py-1"
                        src={tab.teamIcon}
                        height={18}
                        width={18}
                        alt={'team icon'}
                      />
                    </div>
                  </div>
                </Tab>
              );
            })}
          </Tab.List>
          <Tab.Panels className="mt-2">
            <div className=" w-fit mt-8 mb-6 mx-auto">
              <Image
                className="mr-1"
                src={`/images/soccer-field.png`}
                height={195}
                width={328}
                alt={'team icon'}
              />
            </div>

            {contents.map((content, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'rounded-xl bg-white p-3',
                  'ring-white ring-opacity-60 ring-offset-0 ring-offset-blue-400 focus:outline-none focus:ring-2'
                )}>
                {content}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export default FormationSection;
