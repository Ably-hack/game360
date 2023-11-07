class EndPoints {
  static API_VERSION = 'v1';
  static LOCAL_BASE_ROOT = 'http://localhost:8000';
  static REMOTE_BASE_ROOT = 'https://game360-backend.vercel.app';
  static LOCAL_BASE = `${this.LOCAL_BASE_ROOT}/${this.API_VERSION}`;
  static REMOTE_BASE = `${this.REMOTE_BASE_ROOT}/${this.API_VERSION}`;
  static BASE_URL = this.LOCAL_BASE;
  static LOGIN = `${this.BASE_URL}/account/login`;
  static REGISTER = `${this.BASE_URL}/account/register`;
  static FETCH_LEAGUES = `${this.BASE_URL}/livescore/get_leagues`;
  static FETCH_LEAGUE_TEAMS = `${this.BASE_URL}/livescore/teams/:league_id`;
  static FETCH_TEAM = `${this.BASE_URL}/livescore/team/:league_id/:team_id`;
  static FETCH_LEAGUE_FIXTURES = `${this.BASE_URL}/livescore/fixtures/:league_id`;
  static FETCH_TEAM_FIXTURES = `${this.BASE_URL}/livescore/fixtures`;
  static FETCH_FIXTURE_DETAILS = `${this.BASE_URL}/livescore/fixture/:match_id`;
  static FETCH_LEAGUE_TABLE = `${this.BASE_URL}/livescore/league/standings/:league_id`;
  static FETCH_HEAD2HEAD_STATISTICS = `${this.BASE_URL}/livescore/match/head_to_head`;
  static FETCH_LIVESCORES = `${this.BASE_URL}/livescore/live_matches/:league_id`;
}

export default EndPoints;
