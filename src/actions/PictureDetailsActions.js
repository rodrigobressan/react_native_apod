import PictureRepository from "../data/PictureRepository";
import {ITEM_DETAILS_FETCH_SUCCESS} from "./types";

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
    return () => {
        PictureRepository.favoritePicture(picture)
            .then((response) => {
                //  dispatch()
            })
            .catch(error => console.log('error: ', error));
    }
};

export const removeFavorite = (picture) => {
    return () => {
        PictureRepository.removeFromFavorites(picture)
            .then(response => {
            })
            .catch(error => {
            });
    }
};