import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { Strings } from "src/constants";

const initialState = {
    logged_in_user: null,
    logged_in: false
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setLoggedInUser: (state, action) => {
            const payload = action.payload;
            let latestUserState = payload;
            if (latestUserState) {
                if (Object.prototype.hasOwnProperty.call(payload, 'message') && Object.prototype.hasOwnProperty.call(payload, 'statusCode')) {
                    latestUserState = payload['data'];
                }
                const user = { ...latestUserState };
                state.logged_in_user = user;
                localStorage.setItem(Strings.LOGGED_IN_USER, JSON.stringify(user));
            } else {
                state.logged_in_user = null;
                localStorage.removeItem(Strings.LOGGED_IN_USER);
            }
        },
        setLoggedIn: (state, action) => {
            state.logged_in = action.payload;
        }
    },
});

export const getLoggedInUser = (state: RootState) => {
    const realTimeLoggedInUser = state.users.logged_in_user;
    if (realTimeLoggedInUser) {
        return realTimeLoggedInUser;
    }
    const localStorageUserString = localStorage.getItem(Strings.LOGGED_IN_USER);
    if (localStorageUserString) {
        return JSON.parse(localStorageUserString);
    }
    return null;
};

export const {
    setLoggedIn,
    setLoggedInUser
} = usersSlice.actions;
export default usersSlice.reducer;
