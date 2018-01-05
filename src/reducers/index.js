import {combineReducers} from 'redux';
import ListItemsReducer from "./ListItemsReducer";
import FavoriteReducer from "./FavoriteReducer";
import PictureDetailsReducer from "./PictureDetailsReducer";

export default combineReducers({
    listItems: ListItemsReducer,
    favoriteItems: FavoriteReducer,
    pictureDetails: PictureDetailsReducer
});