import { DateCard } from 'src/types/DateCard';

function DateCard({ active = false }: DateCard) {
  return (
    <div
      className={` w-[80px] text-[12px] p-2 ${
        active ? 'bg-[#F7EBEB]' : 'bg-game360-light-gray'
      } 
      font-medium
      `}>
      <p>Oct 5 - Thur</p>
    </div>
  );
}

export default DateCard;
