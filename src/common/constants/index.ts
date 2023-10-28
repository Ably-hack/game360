const DEFAULT_IMAGE = '/images/UEFA_Champions_League_1.png';

const FOOTBALL_TEAMS = [
  'UEFA Champions League',
  'Spanish LALIGA',
  'Africa Cup of Nations',
  'English Premier League',
  'CAF Champions League',
  'Nigerian Professional League',
];

const DUMMY_DATA = Array.from({ length: 7 }, () =>
  Math.floor(Math.random() * 6)
);

const COMPETITION = [
  {
    title: 'UEFA Champions League',
    slug: 'UCL',
    teams: ['Manchester United', 'Barcelona', 'FC Bayern Munich'],
  },
  {
    title: 'UEL',
    slug: 'UEL',
    teams: ['Chelsea', 'Barcelona', 'Villareal'],
  },
  {
    title: 'S.Africa Prem',
    slug: 'S.Africa Prem',
    teams: ['Manchester United', 'Barcelona', 'FC Bayern Munich'],
  },
  {
    title: 'Ligue 1',
    slug: 'Ligue 1',
    teams: ['Olympique Marsielle', 'Barcelona', 'PSG'],
  },
  {
    title: 'Prem',
    slug: 'Prem',
    teams: ['Manchester United', 'Barcelona', 'FC Bayern Munich'],
  },
  {
    title: 'Series A',
    slug: 'Series A',
    teams: ['Athletico', 'Barcelona', 'Villareal'],
  },
];

const TeamAndPlayersTabs = ['Fixtures', 'Results'];
const FORMATION_TABS = [
  { title: '4-3-3', teamIcon: '/images/chelsea.png' },
  { title: '4-2-3-1', teamIcon: '/images/arsenal.png' },
];

const PERFORMANCE_DATA = [
  'Longest Winning',
  'Longest Current Winning',
  'Longest Unbeaten',
  'Longest Current Unbeaten',
  'Longest Losing',
  'Longest Current Losing',
  'Longest Winless',
  'Longest Current Winless',
];

const CHELSEA_PlAYERS = [
  {
    playerName: 'David Raya',
    playerNumber: '23',
  },
  {
    playerName: 'William Saliba',
    playerNumber: '62',
  },
  {
    playerName: 'Oleksandr Zinchenko',
    playerNumber: '11',
  },
  {
    playerName: 'Takehiro Tomiyasu',
    playerNumber: '19',
  },
  {
    playerName: 'Emiliano Martínez',
    playerNumber: '25',
  },
  {
    playerName: 'Ben White',
    playerNumber: '80',
  },
];

const ARSENAL_PlAYERS = [
  {
    playerName: 'Ederson',
    playerNumber: '1',
  },
  {
    playerName: 'Dias Walker',
    playerNumber: '3',
  },
  {
    playerName: 'Silva Lewis',
    playerNumber: '4',
  },
  {
    playerName: 'Foden Haaland',
    playerNumber: '15',
  },
  {
    playerName: 'Emiliano Martinez',
    playerNumber: '63',
  },
  {
    playerName: 'Ruben Dias',
    playerNumber: '20',
  },
];

const TEAM_SQUAD = [
  {
    image: '/images/degea-image.png',
    name: ' De Gea',
    age: '30',
    position: 'G',
    height: '1.92',
    weight: '82',
    nat: 'Spain',
  },
  {
    image: '/images/degea-image.png',
    name: ' De Gea',
    age: '30',
    position: 'G',
    height: '1.92',
    weight: '82',
    nat: 'Spain',
  },
  {
    image: '/images/degea-image.png',
    name: ' De Gea',
    age: '30',
    position: 'G',
    height: '1.92',
    weight: '82',
    nat: 'Spain',
  },
  {
    image: '/images/degea-image.png',
    name: ' De Gea',
    age: '30',
    position: 'G',
    height: '1.92',
    weight: '82',
    nat: 'Spain',
  },
  {
    image: '/images/degea-image.png',
    name: ' De Gea',
    age: '30',
    position: 'G',
    height: '1.92',
    weight: '82',
    nat: 'Spain',
  },
];
const PREDICTION_DATA = [
  {
    id: 1,
    name: 'chelsea',
    logo: '/images/chelsea.png',
    color: '#144992',
  },
  {
    id: 3,
    name: 'arsenal',
    logo: '/images/arsenal.png',
    color: '#D00',
  },
];

const HEAD_TO_HEAD_RECORD_DATA = {
  title: '  HEAD TO HEAD record',
  data: [
    {
      id: 1,
      secondTeamName: 'Chelsea',
      secondTeamLogo: '/images/chelsea.png',
      firstTeamName: 'Arsenal',
      firstTeamLogo: '/images/arsenal.png',
      secondTeamScore: 0,
      firstTeamScore: 2,

      league: 'UEFA Champions League',
      date: '3 Oct, 23',
    },
    {
      id: 2,
      firstTeamName: 'Chelsea',
      firstTeamLogo: '/images/chelsea.png',
      secondTeamName: 'Arsenal',
      secondTeamLogo: '/images/arsenal.png',
      firstTeamScore: 2,
      secondTeamScore: 2,

      league: 'UEFA Champions League',
      date: '3 Oct, 23',
    },
    {
      id: 6,
      secondTeamName: 'Chelsea',
      secondTeamLogo: '/images/chelsea.png',
      firstTeamName: 'Arsenal',
      firstTeamLogo: '/images/arsenal.png',
      secondTeamScore: 0,
      firstTeamScore: 2,

      league: 'UEFA Champions League',
      date: '3 Oct, 23',
    },
    {
      id: 9,
      secondTeamName: 'Chelsea',
      secondTeamLogo: '/images/chelsea.png',
      firstTeamName: 'Arsenal',
      firstTeamLogo: '/images/arsenal.png',
      secondTeamScore: 0,
      firstTeamScore: 2,

      league: 'UEFA Champions League',
      date: '3 Oct, 23',
    },
    {
      id: 3,
      firstTeamName: 'Chelsea',
      firstTeamLogo: '/images/chelsea.png',
      secondTeamName: 'Arsenal',
      secondTeamLogo: '/images/arsenal.png',
      firstTeamScore: 0,
      secondTeamScore: 2,

      league: 'UEFA Champions League',
      date: '3 Oct, 23',
    },
  ],
};
export {
  ARSENAL_PlAYERS,
  CHELSEA_PlAYERS,
  COMPETITION,
  DEFAULT_IMAGE,
  DUMMY_DATA,
  FOOTBALL_TEAMS,
  FORMATION_TABS,
  PERFORMANCE_DATA,
  TeamAndPlayersTabs,
  TEAM_SQUAD,
  PREDICTION_DATA,
  HEAD_TO_HEAD_RECORD_DATA,
};
