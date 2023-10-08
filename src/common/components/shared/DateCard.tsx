import { DateCard } from 'src/types/DateCard';

function DateCard({ active = false }: DateCard) {
  return (
    <div
      className={` w-[85px] text-xs p-2 ${
        active ? ' bg-primary-light' : 'bg-grey-50'
      } 
      font-medium
      `}>
      <p>Oct 5 , Thur</p>
    </div>
  );
}

export default DateCard;
