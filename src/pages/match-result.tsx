import MatchResult from 'src/common/components/dashboard/matchResult/MatchResult';
import MatchHeaderSection from 'src/common/components/dashboard/matchResult/components/MatchHeaderSection';
import DashboardLayout from 'src/common/components/layout/DashboardLayout';

function Match() {
  return (
    <DashboardLayout
      beforeMain={
        <MatchHeaderSection
          teamOne="Chelsea"
          teamTwo="Arsenal"
          location="London, England · Stanford Bridge"
          matchDate="4:30 PM, 8 October 2023"
          teamOneImage="/images/chelsea.png"
          teamTwoImage="/images/arsenal.png"
          teamOneSlug="CHE"
          teamTwoSlug="ARS"
          teamOneScore="0"
          teamTwoScore="2"
        />
      }>
      <MatchResult />
    </DashboardLayout>
  );
}

export default Match;
