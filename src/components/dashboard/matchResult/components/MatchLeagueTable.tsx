import Image from 'next/image';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { applyEvenRowColor } from 'src/common/utils';
import { LEAGUE_TABLE_DATA } from 'src/common/constants/tableData';
import usePreview from 'src/common/hooks/usePreview';

const MatchLeagueTable = () => {
  const { open, handleOpen, onKeyUpHandler } = usePreview();
  const label = open ? 'Table Preview' : 'Table Full View';
  const data = open ? LEAGUE_TABLE_DATA : LEAGUE_TABLE_DATA.slice(0, 7);
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
              {data.map((row, index) => (
                <tr
                  key={index}
                  className={` ${
                    index === 2
                      ? 'bg-primary-light'
                      : applyEvenRowColor(index)
                  }`}>
                  <td className="table-data py-2 px-2 text-left" colSpan={4}>
                    <div className="flex items-center gap-4">
                      <p className="table-data text-sm text-neutral-800">
                        {row.num}
                      </p>
                      <div className="flex items-center gap-1.5">
                        <div className="max-w-[1.13rem]">
                          <Image
                            src={`${row.image}`}
                            className="w-full"
                            alt={row.name}
                            width={20}
                            height={20}
                          />
                        </div>
                        <p className="table-data text-neutral-700 text-xs">
                          {row.name}
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
            </tbody>
          </table>
        </div>

        <div
          onClick={handleOpen}
          onKeyUp={onKeyUpHandler}
          role="button"
          tabIndex={0}
          className="text-center flex cursor-pointer justify-center space-x-1">
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

export default MatchLeagueTable;
