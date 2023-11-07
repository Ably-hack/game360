/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  DEFAULT_IMAGE
} from 'src/constants';
import APIService from 'src/http/api_service';
import { setLeagueId, setTeamId } from 'src/store/slices/league_slice';
import { Team } from 'src/types/League';
import ClubCard from '../../../shared/Card/ClubCard';
interface Props {
  leagueList: any[]
}

const TeamsList = ({ leagueList }: Props) => {
  const dispatch = useDispatch();

  const [team, setTeam] = useState<Team[]>([]);
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    APIService.fetchLeagueTeams(value, (response: any, error: any) => {
      if (error) {
        console.log(error);
        return;
      }
      const responseData = response?.data ?? [];
      setTeam(responseData);
    })
  }, [value]);

  return (
    <div className="py-6 px-4 bg-white">
      <div className="flex mb-4" aria-label="header-section">
        <div className="py-1">
          <Image
            className="mr-2"
            src={DEFAULT_IMAGE}
            height={20}
            width={20}
            alt="UEFA logo"
          />
        </div>
        <h2 className="text-neutral-600 uppercase text-md font-semibold">
          Football Teams
        </h2>
      </div>
      <div>
        <select
          id="football_teams"
          className={`w-full py-2 px-4 text-grey-100 bg-grey-50 rounded-none 
        focus:ring-0 focus:outline-none ring-grey-50 border-0
        font-medium text-sm
        `}
          value={value}
          onChange={(e) => {
            const league = e.target.value;
            setValue(league);
            dispatch(setLeagueId(league));
          }}
        >
          {leagueList &&
            leagueList.map((item) => {
              return (
                <option key={item?.id} className="" value={item?.id}>
                  {item?.name}
                </option>
              );
            })
          }
        </select>
      </div>

      <div>{
        value && (
          team?.length > 0 && (
            team.map((item) => {
              return (
                <Link href={`/team`} passHref key={item.id}>
                  <div
                    className="px-6 py-2"
                    onClick={() => {
                      dispatch(setTeamId(item.id))
                    }}>
                    <ClubCard
                      showBorderBottom={true}
                      clubTitle={item.name}
                      imageLink={item.logo} />
                  </div>
                </Link>
              );
            })
          )
        )}
      </div>
    </div>
  );
}

export default TeamsList;
