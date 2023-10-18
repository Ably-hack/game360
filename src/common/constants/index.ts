export const DEFAULT_IMAGE = '/images/UEFA_Champions_League_1.png';

export const FOOTBALL_TEAMS = [
  'UEFA Champions League',
  'Spanish LALIGA',
  'Africa Cup of Nations',
  'English Premier League',
  'CAF Champions League',
  'Nigerian Professional League',
];

export const DUMMY_DATA = Array.from({ length: 7 }, () =>
  Math.floor(Math.random() * 6)
);

export const COMPETITION = [
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
