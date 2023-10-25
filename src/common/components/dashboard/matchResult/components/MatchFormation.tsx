import Accordion from 'src/common/components/shared/Accordion';
import PlayerMatchDetails from 'src/common/components/shared/PlayerMatchDetails';

type MatchFormation = {
  data: { playerName: string; playerNumber: string }[];
};

function MatchFormation({ data }: MatchFormation) {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <Accordion
            playerName={item.playerName}
            playerNumber={item.playerNumber}
            numberOfFollowers="2k">
            <PlayerMatchDetails name="Emiliano" />
          </Accordion>
        </div>
      ))}
    </div>
  );
}

export default MatchFormation;
