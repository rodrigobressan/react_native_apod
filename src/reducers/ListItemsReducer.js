import {ITEMS_FETCH_EMPTY, ITEMS_FETCH_ERROR, ITEMS_FETCH_LOADING, ITEMS_FETCH_SUCCESS} from "../actions/types";
import {STATE_EMPTY_VIEW, STATE_ERROR, STATE_LOADING, STATE_SUCCESS} from "../components/list/states";

const INITIAL_STATE = {
    items: null,
    state: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ITEMS_FETCH_LOADING:
            return {
                ...state,
                state: STATE_LOADING
            };

        case ITEMS_FETCH_SUCCESS:
            return {
                ...state,
                items: action.payload,
                state: STATE_SUCCESS
            };

        case ITEMS_FETCH_ERROR:
            return {
                ...state,
                ...INITIAL_STATE,
                state: STATE_ERROR
            };

        case ITEMS_FETCH_EMPTY:
            return {
                ...state,
                state: STATE_EMPTY_VIEW
            };
        default:
            return state;
    }
}