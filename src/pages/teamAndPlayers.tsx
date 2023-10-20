import TeamsAndPlayersLayout from 'src/common/components/layout/TeamsAndPlayersLayout';
import HeaderSection from 'src/common/components/teamsAndPlayers/HeaderSection';
import LeftSection from 'src/common/components/teamsAndPlayers/LeftSection';

function TeamAndPlayers() {
  return (
    <TeamsAndPlayersLayout>
      <div>
        <div>
          <HeaderSection
            teamTitle="Chelsea"
            location="London, England · Stanford Bridge"
            averageAge={24}
            totalPlayers={32}
            foreignPlayers={17}
          />
        </div>
        <main className="px-10">
          <div className="mt-1 md:w-[35%]">
            <LeftSection />
          </div>
        </main>
      </div>
    </TeamsAndPlayersLayout>
  );
}

export default TeamAndPlayers;
