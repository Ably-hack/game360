import Image from 'next/image';
import React from 'react';
import { TEAM_SQUAD } from 'src/common/constants';
import { MdKeyboardArrowUp } from 'react-icons/md';
const TeamLeagueTable = () => {
  return (
    <div className="bg-white py-4">
      <h3 className="uppercase font-bold text-neutral-900 mx-4 ">
        League tables
      </h3>

      <div className="mt-2  relative overflow-x-auto ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-1 py-3">
                POS
              </th>
              <th scope="col" className="px-1 py-3">
                AG
              </th>
              <th scope="col" className="px-1 py-3">
                HT
              </th>
              <th scope="col" className="px-1 py-3">
                WT
              </th>
              <th scope="col" className="px-1 py-3">
                NAT
              </th>
            </tr>
          </thead>
          <tbody>
            {TEAM_SQUAD.map((item, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                }  border-b dark:bg-gray-900 dark:border-gray-700`}>
                <td className="px-4 py-2">
                  <div className="flex items-center gap-1">
                    <div className="max-w-[1.13rem]">
                      <Image
                        src={`${item.image}`}
                        className="w-full"
                        alt={item.name}
                        width={20}
                        height={20}
                      />
                    </div>
                    <p>{item.name}</p>
                  </div>
                </td>
                <td className="px-1 py-2">{item.position}</td>
                <td className="px-1 py-2">{item.age}</td>
                <td className="px-1 py-2">{item.height}</td>
                <td className="px-1 py-2">{item.weight}</td>
                <td className="px-1 py-2">{item.nat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="text-center mt-3 flex items-center cursor-pointer justify-center">
        <p className="text-primary text-xs">Table Preview </p>
        <MdKeyboardArrowUp className="text-primary" size={18} />
      </div>
    </div>
  );
};

export default TeamLeagueTable;
