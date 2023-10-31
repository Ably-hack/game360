import Image from 'next/image';
import React from 'react';
import { FOOTBALL_TEAMS } from 'src/common/constants';
import { MdKeyboardArrowUp } from 'react-icons/md';
import SelectDropDown from '../../../ui/DropDown';
import { applyEvenRowColor } from 'src/common/utils';
import { TEAM_LEAGUE_TABLE_DATA } from 'src/common/constants/tableData';
import usePreview from 'src/common/hooks/usePreview';

const TeamLeagueTable = () => {
   const { open, handleOpen, onKeyUpHandler } = usePreview();
   const label = open ? 'Table Preview' : 'Table Full View';
   const data = open ? TEAM_LEAGUE_TABLE_DATA : TEAM_LEAGUE_TABLE_DATA.slice(0, 2);
  return (
    <div className="bg-white py-6 px-5">
      <div className="grid gap-4">
        <h3 className="section-title">League tables</h3>
        <div className="grid grid-cols-2 gap-3">
          <SelectDropDown data={FOOTBALL_TEAMS} />
          <SelectDropDown data={['2023-2024']} />
        </div>
        <div className="mt-2 relative overflow-x-auto ">
          {data.map((row, idx) => (
            <table
              className="w-full text-sm text-gray-500 dark:text-gray-400 mb-4"
              key={idx}>
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th
                    className="px-2 bg-white font-semibold text-sm text-left capitalize"
                    colSpan={2}>
                    {row.title}
                  </th>
                  <th className="px-2 bg-white font-semibold text-sm text-right">
                    GP
                  </th>
                  <th className="px-2 bg-white font-semibold text-sm text-right">
                    W
                  </th>
                  <th className="px-2 bg-white font-semibold text-sm text-right">
                    D
                  </th>
                  <th className="px-2 bg-white font-semibold text-sm text-right">
                    L
                  </th>
                  <th className="px-2 bg-white font-semibold text-sm text-right">
                    P
                  </th>
                </tr>
              </thead>
              <tbody>
                {row.body.map((item, index) => (
                  <tr
                    key={index}
                    className={` ${
                      index === 2 && idx === 0
                        ? 'bg-primary-light'
                        : applyEvenRowColor(index)
                    }`}>
                    <td className="table-data py-2 px-2 text-left" colSpan={2}>
                      <div className="flex items-center gap-4">
                        <p className="table-data text-md text-neutral-800">
                          {item.num}
                        </p>
                        <div className="flex items-center gap-1.5">
                          <div className="max-w-[1.13rem]">
                            <Image
                              src={`${item.image}`}
                              className="w-full"
                              alt={item.name}
                              width={20}
                              height={20}
                            />
                          </div>
                          <p className="table-data text-neutral-700">
                            {item.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="table-data text-neutral-700 py-2 px-2 text-right">
                      {1}
                    </td>
                    <td className="table-data text-neutral-700 py-2 px-2 text-right">
                      {2}
                    </td>
                    <td className="table-data text-neutral-700 py-2 px-2 text-right">
                      {3}
                    </td>
                    <td className="table-data text-neutral-700 py-2 px-2 text-right">
                      {4}
                    </td>
                    <td className="table-data text-neutral-700 py-2 px-2 text-right">
                      {5}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
        </div>

        <div
          onClick={handleOpen}
          onKeyUp={onKeyUpHandler}
          role="button"
          tabIndex={0}
          className="text-center flex space-x-1 cursor-pointer justify-center">
          <p className="text-primary text-xs">{label} </p>
          <MdKeyboardArrowUp
            className="text-primary"
            size={18}
            style={{
              ...(!open && {
                transform: 'rotate(180deg)',
              }),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TeamLeagueTable;
