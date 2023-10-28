import MatchFixture from 'src/common/components/dashboard/fixture/MatchFixture';
import MatchHeaderSection from 'src/common/components/dashboard/fixture/components/FixtureHeaderSection';
import DashboardLayout from 'src/common/components/layout/DashboardLayout';

function Fixture() {
  return (
    <DashboardLayout
      beforeMain={
        <MatchHeaderSection
          teamOne="Chelsea"
          teamTwo="Arsenal"
          location="London, England · Stanford Bridge"
          matchDate="21/10"
          matchTime="5:30 PM"
          teamOneImage="/images/chelsea.png"
          teamTwoImage="/images/arsenal.png"
          teamOneSlug="CHE"
          teamTwoSlug="ARS"
        />
      }>
      <MatchFixture />
    </DashboardLayout>
  );
}

export default Fixture;
