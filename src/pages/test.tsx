import Accordion from 'src/common/components/shared/Accordion';
import PlayerMatchDetails from 'src/common/components/shared/PlayerMatchDetails';

function test() {
  return (
    <div>
      <Accordion
        playerName="David Raya"
        playerNumber="23"
        numberOfFollowers="2k">
        <PlayerMatchDetails name="Emiliano" />
      </Accordion>
    </div>
  );
}

export default test;
