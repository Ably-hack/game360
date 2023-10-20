import FixtureCard from 'src/common/components/shared/Card/FixtureCard';

function test() {
  return (
    <div>
      <FixtureCard
        teamOne="Chelsea"
        teamTwo="Arsenal"
        league_title="English Premier League"
        matchDate="21/10 5:30 PM"
      />
    </div>
  );
}

export default test;
