import {
} from "../actions/types";
import {STATE_EMPTY_VIEW, STATE_ERROR, STATE_LOADING, STATE_SUCCESS} from "../components/list/states";
import {FAVORITE_FETCH_LOADING} from "../actions/types";
import {FAVORITE_FETCH_SUCCESS} from "../actions/types";
import {FAVORITE_FETCH_ERROR} from "../actions/types";
import {FAVORITE_FETCH_EMPTY} from "../actions/types";

const INITIAL_STATE = {
    items: null,
    state: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FAVORITE_FETCH_LOADING:
            return {
                ...state,
                state: STATE_LOADING
            };

        case FAVORITE_FETCH_SUCCESS:
            return {
                ...state,
                items: action.payload,
                state: STATE_SUCCESS
            };

        case FAVORITE_FETCH_ERROR:
            return {
                ...state,
                ...INITIAL_STATE,
                state: STATE_ERROR
            };

        case FAVORITE_FETCH_EMPTY:
            return {
                ...state,
                state: STATE_EMPTY_VIEW
            };
        default:
            return state;
    }
}