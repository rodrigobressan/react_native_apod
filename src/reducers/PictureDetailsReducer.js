import {ITEM_DETAILS_FAVORITE, ITEM_DETAILS_FETCH_SUCCESS, ITEM_DETAILS_REMOVE_FAVORITE} from "../actions/types";

const INITIAL_STATE = {
    picture: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ITEM_DETAILS_FETCH_SUCCESS:
            return {
                ...state,
                picture: action.payload
            };
        case ITEM_DETAILS_FAVORITE:
            return {
                ...state
            };
        case ITEM_DETAILS_REMOVE_FAVORITE:
            return {...state};
        default:
            return state;
    }
}