import {ITEMS_FETCH_LOADING, ITEMS_FETCH_SUCCESS} from "./types";
import axios from 'axios';
import {API_APOD_URL} from "../config/api";

export const itemsFetch = () => {
    return (dispatch) => {
        dispatch({type: ITEMS_FETCH_LOADING});
        axios.get(API_APOD_URL)
            .then((response) => {
                dispatch({type: ITEMS_FETCH_SUCCESS, payload: response.data});
            })
            .catch((error) =>
                // dispatch error here
                console.log('error:', error)
            );
    }
};