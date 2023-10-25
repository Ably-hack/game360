import Image from 'next/image';
import Link from 'next/link';
import {
  DEFAULT_IMAGE,
  DUMMY_DATA,
  FOOTBALL_TEAMS,
} from 'src/common/constants';
import ClubCard from '../../../shared/Card/ClubCard';
import SelectDropDown from '../../../ui/DropDown';

function TeamsList() {
  return (
    <div className="py-6 px-4 bg-white">
      <div className="flex mb-4" aria-label="header-section">
        <div className="py-1">
          <Image
            className="mr-2"
            src={DEFAULT_IMAGE}
            height={20}
            width={20}
            alt="UEFA logo"
          />
        </div>
        <h2 className="text-neutral-600 uppercase text-md font-semibold">
          Football Teams
        </h2>
      </div>
      <div>
        <SelectDropDown data={FOOTBALL_TEAMS} />
      </div>
      <div>
        {DUMMY_DATA.map((_item, id) => {
          return (
            <Link href={`/team`} passHref key={id}>
              <div className="px-6 py-2">
                <ClubCard showBorderBottom={true} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default TeamsList;
