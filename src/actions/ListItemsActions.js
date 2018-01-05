/**
 * This class is used to store the existent actions of our ListItems component. It is mostly responsible for making
 * requests to our API (currently NASA API, January 2017) and then dispatch the result of the operation to our reducer
 * (ListItemsReducer)
 */

import {ITEMS_FETCH_EMPTY, ITEMS_FETCH_ERROR, ITEMS_FETCH_LOADING, ITEMS_FETCH_SUCCESS} from "./types";
import PictureRepository from "../data/PictureRepository";


/**
 * Fetch items from the API
 * @returns {function(*)} dispatch of the operation
 */
export const fetchItems = () => {

    return (dispatch) => {
        // once the method is called (before the async request is executed), we already
        // dispatch our type as loading, so the user can see some progress on the screen
        dispatch({type: ITEMS_FETCH_LOADING});

        PictureRepository.getPictures()
            .then((pictures) => {
                if (pictures) {
                    dispatch({type: ITEMS_FETCH_SUCCESS, payload: pictures});
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