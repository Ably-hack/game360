import Image from 'next/image';
import React, { Fragment } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { applyEvenRowColor } from 'src/common/utils';
import { TEAM_LEAGUE_TABLE_DATA } from 'src/common/constants/tableData';

const MatchLeagueTable = () => {
  return (
    <div className="bg-white py-6 px-4">
      <div className="grid gap-4">
        <h3 className="section-title">UEFA Champions League Table</h3>
        <div className="mt-2 relative overflow-x-auto ">
          <table className="w-full text-sm text-gray-500 dark:text-gray-400 mb-4">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th
                  className="px-2 bg-white font-semibold text-sm text-left capitalize"
                  colSpan={4}>
                  2023-2024
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
              {TEAM_LEAGUE_TABLE_DATA.map((row, idx) => (
                <Fragment key={idx}>
                  {row.body.map((item, index) => (
                    <tr
                      key={index}
                      className={` ${
                        index === 2 && idx === 0
                          ? 'bg-primary-light'
                          : applyEvenRowColor(index)
                      }`}>
                      <td
                        className="table-data py-2 px-2 text-left"
                        colSpan={4}>
                        <div className="flex items-center gap-4">
                          <p className="table-data text-sm text-neutral-800">
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
                            <p className="table-data text-neutral-700 text-xs">
                              {item.name}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="table-data text-neutral-700 py-2 px-2 text-right text-xs">
                        {1}
                      </td>
                      <td className="table-data text-neutral-700 py-2 px-2 text-right text-xs">
                        {2}
                      </td>
                      <td className="table-data text-neutral-700 py-2 px-2 text-right text-xs">
                        {3}
                      </td>
                      <td className="table-data text-neutral-700 py-2 px-2 text-right text-xs">
                        {4}
                      </td>
                      <td className="table-data text-neutral-700 py-2 px-2 text-right text-xs">
                        {5}
                      </td>
                    </tr>
                  ))}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-3 flex items-center cursor-pointer justify-center">
          <p className="text-primary text-xs">Table Preview </p>
          <MdKeyboardArrowUp className="text-primary" size={18} />
        </div>
      </div>
    </div>
  );
};

export default MatchLeagueTable;
