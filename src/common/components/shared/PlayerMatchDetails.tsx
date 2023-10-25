import { CustomButton } from '../ui/Buttons/CustomButton';

type PlayerMatchDetails = {
  name: string;
};

function PlayerMatchDetails({ name }: PlayerMatchDetails) {
  return (
    <div>
      <div className="p-2 flex w-full justify-between bg-primary-light">
        <div className="max-w-[180px]">Received notification about {name}</div>
        <div>
          <CustomButton
            text="Follow"
            rounded={false}
            className="text-primary"
          />
        </div>
      </div>

      <div className=" ">
        <div className="p-2 flex justify-between even:bg-grey-50 odd:bg-white">
          <p className="text-sm">Minutes Played</p>
          <p className="text-xs">30min</p>
        </div>
        <div className="p-2 flex justify-between even:bg-grey-50 odd:bg-white">
          <p className="text-sm">Shots blocked</p>
          <p className="text-xs">0</p>
        </div>
        <div className="p-2 flex justify-between even:bg-grey-50 odd:bg-white">
          <p className="text-sm">Yellow Card</p>
          <p className="text-xs">0</p>
        </div>
        <div className="p-2 flex justify-between even:bg-grey-50 odd:bg-white">
          <p className="text-sm">Red Card</p>
          <p className="text-xs">0</p>
        </div>
        <div className="p-2 flex justify-between even:bg-grey-50 odd:bg-white">
          <p className="text-sm">Fouls against </p>
          <p className="text-xs">0</p>
        </div>
        <div className="p-2 flex justify-between even:bg-grey-50 odd:bg-white">
          <p className="text-sm">Fouls Committed</p>
          <p className="text-xs">1</p>
        </div>
        <div className="p-2 flex justify-between even:bg-grey-50 odd:bg-white">
          <p className="text-sm">Interceptions</p>
          <p className="text-xs">6</p>
        </div>
        <div className="p-2 flex justify-between even:bg-grey-50 odd:bg-white">
          <p className="text-sm">Tackles</p>
          <p className="text-xs">0</p>
        </div>
      </div>
    </div>
  );
}

export default PlayerMatchDetails;
