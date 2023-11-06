import { Tab } from '@headlessui/react';
import { FOOTBALL_TEAMS, TeamAndPlayersTabs } from 'src/constants';
import SelectDropDown from 'src/common/DropDown';
import FixtureList from './FixtureList';
import ResultList from './ResultList';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function LeftSection() {
  const contents = [<FixtureList key={0} />, <ResultList key={1} />];

  return (
    <div className="bg-white ">
      <div className=" mx-auto sm:mx-auto w-full max-w- px-3 py-6">
        <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-3xl bg-grey-75 p-1">
            {TeamAndPlayersTabs.map((tab, index) => (
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
                {tab}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            <div className="mt-4">
              <SelectDropDown
                data={FOOTBALL_TEAMS}
                textColor="text-neutral-900"
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

export default LeftSection;

export function Example() { }
