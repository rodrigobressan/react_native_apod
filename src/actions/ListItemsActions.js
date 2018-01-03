import {ITEMS_FETCH_SUCCESS} from "./types";
import axios from 'axios';

export const itemsFetch = () => {
    return (dispatch) => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=dUHK1i1WCsZjXAKnUrv7v5ZeXJwrQOg9yOSkg4cN&count=10')
            .then((response) => {
                console.log('response: ', response);
                dispatch({type: ITEMS_FETCH_SUCCESS, payload: response.data});
            })
            .catch((error) =>
                console.log('error:', error)
            );
    }
};