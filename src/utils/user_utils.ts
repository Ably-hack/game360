import { Strings } from "src/constants";

export const getLoggedInUserFromLocalStorage = () => {
    const localStorageUserString = localStorage.getItem(Strings.LOGGED_IN_USER);
    if (localStorageUserString) {
        return JSON.parse(localStorageUserString);
    }
    return null;
}