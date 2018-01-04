import {ITEMS_FETCH_SUCCESS} from "./types";
import axios from 'axios';
import {API_APOD_URL} from "../config/api";

export const itemsFetch = () => {
    return (dispatch) => {
        axios.get(API_APOD_URL)
            .then((response) => {
                console.log('response: ', response);
                dispatch({type: ITEMS_FETCH_SUCCESS, payload: response.data});
            })
            .catch((error) =>
                console.log('error:', error)
            );
    }
};