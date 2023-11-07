/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Team from 'src/components/dashboard/team/Team';
import HeaderSection from 'src/components/dashboard/team/components/HeaderSection';
import DashboardLayout from 'src/components/layout/DashboardLayout';
import APIService from 'src/http/api_service';
import { getTeamId, getLeagueId } from 'src/store/slices/league_slice';
import { TeamDetails } from 'src/types/League';

function TeamAndPlayers() {
  const teamId = useSelector(getTeamId);
  const leagueId = useSelector(getLeagueId);

  const [teamDetail, setTeamDetail] = useState<TeamDetails>();

  useEffect(() => {
    APIService.fetchTeam(teamId, leagueId, (response: any, error: any) => {
      if (error) {
        console.log(error);
        return
      }
      const teamData = response?.data ?? [];
      setTeamDetail({ ...teamData });
    })
  }, []);

  return (
    <DashboardLayout
      beforeMain={
        <HeaderSection
          teamTitle={teamDetail?.info.name}
          location={teamDetail?.venue.stadium}
          averageAge={24}
          yearFounded={teamDetail?.info.founded}
          totalPlayers={teamDetail?.total_players}
          foreignPlayers={17}
          logo={teamDetail?.info.logo}
        />
      }>
      {teamDetail && <Team detail={teamDetail} />}
    </DashboardLayout>
  );
}

export default TeamAndPlayers;
