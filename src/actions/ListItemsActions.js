/**
 * This class is used to store the existent actions of our ListItems component. It is mostly responsible for making
 * requests to our API (currently NASA API, January 2017) and then dispatch the result of the operation to our reducer
 * (ListItemsReducer)
 */

import {ITEMS_FETCH_EMPTY, ITEMS_FETCH_ERROR, ITEMS_FETCH_LOADING, ITEMS_FETCH_SUCCESS} from "./types";
import axios from 'axios';
import {API_APOD_URL} from "../config/api";

/**
 * Fetch items from the API
 * @returns {function(*)} dispatch of the operation
 */
export const itemsFetch = () => {

    /**
     * Function to check if the received response from the server is empty or not
     * @param response containing the server response
     * @returns {boolean} true if it's empty, false if there is something to display
     */
    function isEmpty(response) {
        return response.data && response.data.length > 0;
    }

    return (dispatch) => {
        // once the method is called (before the async request is executed), we already
        // dispatch our type as loading, so the user can see some progress on the screen
        dispatch({type: ITEMS_FETCH_LOADING});

        // async request using Axios library
        axios.get(API_APOD_URL)
            .then((response) => {
                // this block is called if the request was done fine
                if (isEmpty(response)) {
                    dispatch({type: ITEMS_FETCH_SUCCESS, payload: response.data});
                } else {
                    dispatch({type: ITEMS_FETCH_EMPTY});
                }
            })
            .catch(() => {
                    // this block is called if some exception was thrown during our request
                    dispatch({type: ITEMS_FETCH_ERROR});
                }
            );
    }
};