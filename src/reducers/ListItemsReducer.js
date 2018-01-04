import {ITEMS_FETCH_LOADING, ITEMS_FETCH_SUCCESS} from "../actions/types";

const INITIAL_STATE = {
    items: null,
    loading: false,
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ITEMS_FETCH_LOADING:
            return {
                ...state,
                loading: true,
                error: ''
            };
        case ITEMS_FETCH_SUCCESS:
            return {
                ...state,
                items: action.payload,
                loading: false,
                error: ''
            };
        default:
            return state;
    }
}