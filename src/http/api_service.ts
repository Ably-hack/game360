/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import Endpoints from './endpoints';
import HttpSuccessDataHandler from 'src/utils/http_success_handler';
import HttpErrorHandler from 'src/utils/http_error_handler';
import { getLoggedInUserFromLocalStorage } from 'src/utils/user_utils';
import { User } from 'src/types/User';

export default class APIService {
  static async login(requestBody: any, cb: any) {
    axios
      .post(`${Endpoints.LOGIN}`, requestBody, {
        headers: await this.getRequestHeaders()
      })
      .then((response) => {
        cb(HttpSuccessDataHandler.getSuccessResponseData(response), null);
      })
      .catch((error) => {
        cb(null, HttpErrorHandler.getErrorResponseData(error));
      });
  }

  static async register(requestBody: object, cb: any) {
    axios
      .post(`${Endpoints.REGISTER}`, requestBody, {
        headers: await this.getRequestHeaders()
      })
      .then((response) => {
        cb(HttpSuccessDataHandler.getSuccessResponseData(response), null);
      })
      .catch((error) => {
        cb(null, HttpErrorHandler.getErrorResponseData(error));
      });
  }

  static async fetchLeagues(cb: any) {
    axios.get(`${Endpoints.FETCH_LEAGUES}`, {
      headers: await this.getRequestHeaders()
    })
      .then((response) => {
        cb(HttpSuccessDataHandler.getSuccessResponseData(response), null);
      })
      .catch((error) => {
        cb(null, HttpErrorHandler.getErrorResponseData(error));
      })
  }

  static async fetchLeagueTeams(cb: any) {
    axios.get(`${Endpoints.FETCH_LEAGUE_TEAMS}`, {
      headers: await this.getRequestHeaders()
    })
      .then((response) => {
        cb(HttpSuccessDataHandler.getSuccessResponseData(response), null);
      })
      .catch((error) => {
        cb(null, HttpErrorHandler.getErrorResponseData(error));
      })
  }

  static async fetchTeams(cb: any) {
    axios.get(`${Endpoints.FETCH_TEAM}`, {
      headers: await this.getRequestHeaders()
    })

      .then((response) => {
        cb(HttpSuccessDataHandler.getSuccessResponseData(response), null);
      })
      .catch((error) => {
        cb(null, HttpErrorHandler.getErrorResponseData(error));
      })
  }

  static async fetchLeagueFixtures(cb: any) {
    axios.get(`${Endpoints.FETCH_LEAGUE_FIXTURES}`, {
      headers: await this.getRequestHeaders()
    })
      .then((response) => {
        cb(HttpSuccessDataHandler.getSuccessResponseData(response), null);
      })
      .catch((error) => {
        cb(null, HttpErrorHandler.getErrorResponseData(error));
      })
  }

  static async fetchTeamFixtures(cb: any) {
    axios.get(`${Endpoints.FETCH_TEAM_FIXTURES}`, {
      headers: await this.getRequestHeaders()
    })
      .then((response) => {
        cb(HttpSuccessDataHandler.getSuccessResponseData(response), null);
      })
      .catch((error) => {
        cb(null, HttpErrorHandler.getErrorResponseData(error));
      })
  }

  static async fetchFixtureDetails(cb: any) {
    axios.get(`${Endpoints.FETCH_FIXTURE_DETAILS}`, {
      headers: await this.getRequestHeaders()
    })
      .then((response) => {
        cb(HttpSuccessDataHandler.getSuccessResponseData(response), null);
      })
      .catch((error) => {
        cb(null, HttpErrorHandler.getErrorResponseData(error));
      })
  }

  static async fetchLeagueTable(cb: any) {
    axios.get(`${Endpoints.FETCH_LEAGUE_TABLE}`, {
      headers: await this.getRequestHeaders()
    })
      .then((response) => {
        cb(HttpSuccessDataHandler.getSuccessResponseData(response), null);
      })
      .catch((error) => {
        cb(null, HttpErrorHandler.getErrorResponseData(error));
      })
  }

  static async fetchHead2HeadStatistics(cb: any) {
    axios.get(`${Endpoints.FETCH_HEAD2HEAD_STATISTICS}`, {
      headers: await this.getRequestHeaders()
    })
      .then((response) => {
        cb(HttpSuccessDataHandler.getSuccessResponseData(response), null);
      })
      .catch((error) => {
        cb(null, HttpErrorHandler.getErrorResponseData(error));
      })
  }

  static async getRequestHeaders(moreHeaders = {}) {
    const headers: User = {};
    const loggedInUser = getLoggedInUserFromLocalStorage();
    if (loggedInUser) {
      headers["Bearer"] = loggedInUser["accessToken"];
    }
    const allHeaders = { ...headers, ...moreHeaders };
    return allHeaders;
  }
}
