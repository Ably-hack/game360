import { DateCard } from 'src/types/DateCard';

function DateCard({ active = false }: DateCard) {
  return (
    <div
      className={` w-[85px] mx-2 text-xs p-1 box-border ${
        active
          ? ' bg-primary-light text-primary border border-primary'
          : 'bg-grey-50'
      } 
      font-medium
      `}>
      <p>Oct 5 , Thur</p>
    </div>
  );
}

export default DateCard;
