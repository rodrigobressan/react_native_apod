import {combineReducers} from 'redux';
import ListItemsReducer from "./ListItemsReducer";

export default combineReducers({
    listItems: ListItemsReducer
});