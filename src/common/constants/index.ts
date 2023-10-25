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

export {
  DEFAULT_IMAGE,
  FOOTBALL_TEAMS,
  DUMMY_DATA,
  COMPETITION,
  TeamAndPlayersTabs,
  PERFORMANCE_DATA,
  TEAM_SQUAD,
};
