import Team from 'src/components/dashboard/team/Team';
import HeaderSection from 'src/components/dashboard/team/components/HeaderSection';
import DashboardLayout from 'src/components/layout/DashboardLayout';

function TeamAndPlayers() {
  return (
    <DashboardLayout
      beforeMain={
        <HeaderSection
          teamTitle="Chelsea"
          location="London, England · Stanford Bridge"
          averageAge={24}
          totalPlayers={32}
          foreignPlayers={17}
        />
      }>
      <Team />
    </DashboardLayout>
  );
}

export default TeamAndPlayers;
