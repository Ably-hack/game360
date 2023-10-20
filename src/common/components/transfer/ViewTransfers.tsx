import Image from 'next/image';
import React from 'react';

const transferData = [
  {
    data: '12 Aug',
    player: 'David Raya',
    from: {
      clubLogo: '/images/arsenal.png',
      clubName: 'ARS',
    },
    fee: 'Undisclosed',
  },
  {
    data: '12 Jul',
    player: 'David Raya',
    from: {
      clubLogo: '/images/chelsea.png',
      clubName: 'CHEL',
    },
    fee: 'Loan',
  },
  {
    data: '12 Aug',
    player: 'David Raya',
    from: {
      clubLogo: '/images/arsenal.png',
      clubName: 'ARS',
    },
    fee: '$30m',
  },
  {
    data: '12 Jul',
    player: 'David Raya',
    from: {
      clubLogo: '/images/chelsea.png',
      clubName: 'CHEL',
    },
    fee: 'Loan',
  },
];
const ViewTransfers = () => {
  return (
    <div className="bg-white px-4 pt-[1.5rem] view__transfer-players_contaner">
      <h3 className="font-semibold text-neutral-900">TRANSFER</h3>
      <div className="my-2 grid grid-cols-2 gap-4">
        <div>
          <select
            className=" w-full py-2 px-4 text-grey-100 bg-grey-50 rounded-none 
        focus:ring-0 focus:outline-none ring-grey-50 border-0
        font-medium text-sm
        ">
            <option>UEFA Champions League</option>
            <option>Spanish LALIGA</option>
            <option>Africa Cup of Nations</option>
            <option>English Premier League</option>
            <option>CAF Champions League</option>
            <option>Nigerian Professional League</option>
          </select>
        </div>
        <div>
          <select
            className=" w-full py-2 px-4 text-grey-100 bg-grey-50 rounded-none 
        focus:ring-0 focus:outline-none ring-grey-50 border-0
        font-medium text-sm
        ">
            <option>2020-2021</option>
            <option>2021-2022</option>
            <option>2022-2023</option>
            <option>2023-2024</option>
          </select>
        </div>
      </div>
      <div className="grid gap-4 view__transfer-player_table  ">
        <div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Palyer
                  </th>
                  <th scope="col" className="px-2 py-3">
                    From
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Fee
                  </th>
                </tr>
              </thead>
              <tbody>
                {transferData.map((item, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }  border-b dark:bg-gray-900 dark:border-gray-700`}>
                    <td className="px-6 py-4">{item.data}</td>
                    <td className="px-2 py-4">{item.player}</td>
                    <td className="px-2 py-4">
                      <div className="flex items-center gap-1">
                        <div className="max-w-[1.13rem]">
                          <Image
                            src={`${item.from.clubLogo}`}
                            className="w-full"
                            alt={item.from.clubName}
                            width={20}
                            height={20}
                          />
                        </div>
                        <p>{item.from.clubName}</p>
                      </div>
                    </td>
                    <td className="px-2 py-4">{item.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Date
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Palyer
                  </th>
                  <th scope="col" className="px-2 py-3">
                    From
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Fee
                  </th>
                </tr>
              </thead>
              <tbody>
                {transferData.map((item, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }  border-b dark:bg-gray-900 dark:border-gray-700`}>
                    <td className="px-6 py-4">{item.data}</td>
                    <td className="px-2 py-4">{item.player}</td>
                    <td className="px-2 py-4">
                      <div className="flex items-center gap-1">
                        <div className="max-w-[1.13rem]">
                          <Image
                            src={`${item.from.clubLogo}`}
                            className="w-full"
                            alt={item.from.clubName}
                            width={20}
                            height={20}
                          />
                        </div>
                        <p>{item.from.clubName}</p>
                      </div>
                    </td>
                    <td className="px-2 py-4">{item.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTransfers;
