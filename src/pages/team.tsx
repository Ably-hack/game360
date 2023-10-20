import DashboardLayout from 'src/common/components/layout/DashboardLayout';
import HeaderSection from 'src/common/components/dashboard/team/components/HeaderSection';
import Team from 'src/common/components/dashboard/team/Team';

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
