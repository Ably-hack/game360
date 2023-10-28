export interface IPredictionBarProps {
  firstClub: {
    name: string;
    logo: string;
    color: string;
  };
  secondClub: {
    name: string;
    logo: string;
    color: string;
  };
}

export interface IRecord {
  title: string;
  data: {
    id: number;
    firstTeamName: string;
    firstTeamLogo: string;
    firstTeamScore: number;
    secondTeamScore: number;
    secondTeamName: string;
    secondTeamLogo: string;

    league: string;
    date: string;
  }[];
}
