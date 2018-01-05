import PictureRepository from "../data/picture/PictureRepository";
import {ITEM_DETAILS_FAVORITE, ITEM_DETAILS_FETCH_SUCCESS, ITEM_DETAILS_REMOVE_FAVORITE} from "./types";

export const fetchPictureDetails = (pictureDate) => {
    return (dispatch) => {
        PictureRepository.getPicture(pictureDate)
            .then(result => {
                dispatch({type: ITEM_DETAILS_FETCH_SUCCESS, payload: result});
            })
            .catch(error => {
                console.log('fetchPictureDetails error: ', error);
            });
    }
};

export const favorite = (picture) => {
    return (dispatch) => {
        PictureRepository.favoritePicture(picture)
            .then(() => {
                dispatch({type: ITEM_DETAILS_FAVORITE});
            })
            .catch(error => console.log('error: ', error));
    }
};

export const removeFavorite = (picture) => {
    return (dispatch) => {
        PictureRepository.removeFromFavorites(picture)
            .then(() => {
                dispatch({type: ITEM_DETAILS_REMOVE_FAVORITE});
            })
            .catch(error => {
            });
    }
};