'use client';
import { DropDown } from 'src/types/DropDown';

export default function SelectDropDown({
  data,
  textColor = 'text-grey-100',
}: DropDown) {
  return (
    <div className="" id="select">
      <select
        id="football_teams"
        className={`w-full py-2 px-4 ${textColor} bg-grey-50 rounded-none 
        focus:ring-0 focus:outline-none ring-grey-50 border-0
        font-medium text-sm
        `}>
        {data.map((item, id) => {
          return (
            <option key={id} className="">
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
}
