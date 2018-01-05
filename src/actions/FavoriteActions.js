import {
    FAVORITE_FETCH_EMPTY, FAVORITE_FETCH_ERROR,
    FAVORITE_FETCH_LOADING, FAVORITE_FETCH_SUCCESS
} from "./types";
import PictureRepository from "../data/PictureRepository";

export const fetchFavoriteItems = () => {

    return (dispatch) => {
        // once the method is called (before the async request is executed), we already
        // dispatch our type as loading, so the user can see some progress on the screen
        dispatch({type: FAVORITE_FETCH_LOADING});

        PictureRepository.getFavoritePictures()
            .then((pictures) => {
                if (pictures) {
                    dispatch({type: FAVORITE_FETCH_SUCCESS, payload: pictures});
                } else {
                    dispatch({type: FAVORITE_FETCH_EMPTY});
                }
            })
            .catch(() => {
                    // this block is called if some exception was thrown during our request
                    dispatch({type: FAVORITE_FETCH_ERROR});
                }
            );
    }
};