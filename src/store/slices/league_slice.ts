import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

const initialState = {
    team_id: "",
    league_id: "",
    leagues: [],
    table_league_id: ""
};

export const leagueSlice = createSlice({
    name: "league",
    initialState,
    reducers: {
        setTeamId: (state, action) => {
            state.team_id = action.payload;
        },
        setLeagueId: (state, action) => {
            state.league_id = action.payload;
        },
        setLeagueData: (state, action) => {
            state.leagues = action.payload;
        },
        setTableLeagueId: (state, action) => {
            state.table_league_id = action.payload;
        }
    },
});

export const getTeamId = (state: RootState) => state.league.team_id;
export const getLeagueId = (state: RootState) => state.league.league_id;
export const getLeagueData = (state: RootState) => state.league.leagues;
export const getTableLeagueId = (state: RootState) => state.league.table_league_id;

export const {
    setTeamId,
    setLeagueId,
    setLeagueData,
    setTableLeagueId
} = leagueSlice.actions;

export default leagueSlice.reducer;
