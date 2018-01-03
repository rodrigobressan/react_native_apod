import {ITEMS_FETCH_SUCCESS} from "./types";

export const employeesFetch = () => {
    return (dispatch) => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=dUHK1i1WCsZjXAKnUrv7v5ZeXJwrQOg9yOSkg4cN&count=10')
            .then((response) => {
                dispatch({type: ITEMS_FETCH_SUCCESS, payload: response});
            });
    }
};