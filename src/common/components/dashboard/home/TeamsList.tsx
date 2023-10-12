import Image from 'next/image';
import {
  DEFAULT_IMAGE,
  DUMMY_DATA,
  FOOTBALL_TEAMS,
} from 'src/common/constants';
import ClubCard from '../../shared/Card/ClubCard';
import DropDown from '../../ui/DropDown';

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
        <DropDown data={FOOTBALL_TEAMS} />
      </div>
      <div>
        {DUMMY_DATA.map((item, id) => {
          return (
            <div key={id} className="px-6 py-2">
              <ClubCard showBorderBottom={true} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TeamsList;
