import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

const initialState = {
    team_id: "",
    league_id: "",
};

export const leagueSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setTeamId: (state, action) => {
            state.team_id = action.payload;
        },
        setLeagueId: (state, action) => {
            state.league_id = action.payload;
        }
    },
});

export const getTeamId = (state: RootState) => state.league.team_id;
export const getLeagueId = (state: RootState) => state.league.league_id;

export const {
    setTeamId,
    setLeagueId
} = leagueSlice.actions;

export default leagueSlice.reducer;
