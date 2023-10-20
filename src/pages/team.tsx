import DashboardLayout from 'src/common/components/layout/DashboardLayout';
import HeaderSection from 'src/common/components/teamsAndPlayers/HeaderSection';
import LeftSection from 'src/common/components/teamsAndPlayers/LeftSection';

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
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-full md:col-span-5 lg:col-span-4 xl:col-span-3 mt-1">
          <LeftSection />
        </div>
        <div className="col-span-full md:col-span-7 lg:col-span-5 xl:col-span-6 mt-1">
          {/* Middle section  */}
          Hey
        </div>
        <div className="col-span-full lg:col-span-3 mt-1">
          {/* Right section */}
          Hello
        </div>
      </div>
    </DashboardLayout>
  );
}

export default TeamAndPlayers;
