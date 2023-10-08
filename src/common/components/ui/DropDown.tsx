'use client';
import { DropDown } from 'src/types/DropDown';

export default function DropDown({ data }: DropDown) {
  return (
    <div className="" id="select">
      <select
        id="football_teams"
        className=" w-full py-2 px-4 text-grey-100 bg-grey-50 rounded-none 
        focus:ring-0 focus:outline-none ring-grey-50 border-0
        font-medium text-sm
        ">
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
