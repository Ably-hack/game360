import Accordion from 'src/common/components/shared/Accordion';
import PlayerMatchDetails from 'src/common/components/shared/PlayerMatchDetails';
import { DUMMY_DATA } from 'src/common/constants';

function MatchFormation() {
  return (
    <div>
      {DUMMY_DATA.map((item, index) => (
        <div key={index}>
          <Accordion
            playerName="David Raya"
            playerNumber="23"
            numberOfFollowers="2k">
            <PlayerMatchDetails name="Emiliano" />
          </Accordion>
        </div>
      ))}
    </div>
  );
}

export default MatchFormation;
