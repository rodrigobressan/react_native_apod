import {ITEM_DETAILS_FETCH_SUCCESS} from "../actions/types";

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
        default:
            return state;
    }
}