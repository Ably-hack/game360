/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import Endpoints from './endpoints';
import HttpSuccessDataHandler from 'src/common/utils/http_success_handler';
import HttpErrorHandler from 'src/common/utils/http_error_handler';

export default class APIService {
  static async login(requestBody: any, cb: any) {
    axios
      .post(`${Endpoints.LOGIN}`, requestBody)
      .then((response) => {
        cb(HttpSuccessDataHandler.getSuccessResponseData(response), null);
      })
      .catch((error) => {
        cb(null, HttpErrorHandler.getErrorResponseData(error));
      });
  }

  static async register(requestBody: object, cb: any) {
    axios
      .post(`${Endpoints.REGISTER}`, requestBody)
      .then((response) => {
        cb(HttpSuccessDataHandler.getSuccessResponseData(response), null);
      })
      .catch((error) => {
        cb(null, HttpErrorHandler.getErrorResponseData(error));
      });
  }

  static async fetchLeagues(cb: any) {
    axios.get(`${Endpoints.FETCH_LEAGUES}`)
      .then((response) => {
        cb(HttpSuccessDataHandler.getSuccessResponseData(response), null);
      })
      .catch((error) => {
        cb(null, HttpErrorHandler.getErrorResponseData(error));
      })
  }

  static async fetchLeagueTeams(cb: any) {
    axios.get(`${Endpoints.FETCH_LEAGUE_TEAMS}`)
      .then((response) => {
        cb(HttpSuccessDataHandler.getSuccessResponseData(response), null);
      })
      .catch((error) => {
        cb(null, HttpErrorHandler.getErrorResponseData(error));
      })
  }

  static async fetchTeams(cb: any) {
    axios.get(`${Endpoints.FETCH_TEAM}`)
      .then((response) => {
        cb(HttpSuccessDataHandler.getSuccessResponseData(response), null);
      })
      .catch((error) => {
        cb(null, HttpErrorHandler.getErrorResponseData(error));
      })
  }

  static async fetchLeagueFixtures(cb: any) {
    axios.get(`${Endpoints.FETCH_LEAGUE_FIXTURES}`)
      .then((response) => {
        cb(HttpSuccessDataHandler.getSuccessResponseData(response), null);
      })
      .catch((error) => {
        cb(null, HttpErrorHandler.getErrorResponseData(error));
      })
  }

  static async fetchTeamFixtures(cb: any) {
    axios.get(`${Endpoints.FETCH_TEAM_FIXTURES}`)
      .then((response) => {
        cb(HttpSuccessDataHandler.getSuccessResponseData(response), null);
      })
      .catch((error) => {
        cb(null, HttpErrorHandler.getErrorResponseData(error));
      })
  }

  static async fetchFixtureDetails(cb: any) {
    axios.get(`${Endpoints.FETCH_FIXTURE_DETAILS}`)
      .then((response) => {
        cb(HttpSuccessDataHandler.getSuccessResponseData(response), null);
      })
      .catch((error) => {
        cb(null, HttpErrorHandler.getErrorResponseData(error));
      })
  }

  static async fetchLeagueTable(cb: any) {
    axios.get(`${Endpoints.FETCH_LEAGUE_TABLE}`)
      .then((response) => {
        cb(HttpSuccessDataHandler.getSuccessResponseData(response), null);
      })
      .catch((error) => {
        cb(null, HttpErrorHandler.getErrorResponseData(error));
      })
  }

  static async fetchHead2HeadStatistics(cb: any) {
    axios.get(`${Endpoints.FETCH_HEAD2HEAD_STATISTICS}`)
      .then((response) => {
        cb(HttpSuccessDataHandler.getSuccessResponseData(response), null);
      })
      .catch((error) => {
        cb(null, HttpErrorHandler.getErrorResponseData(error));
      })
  }
}
