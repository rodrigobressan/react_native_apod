/**
 * This file is used to store the existent actions on our application
 */

/** Pictures section **/

// When the fetch was done successfully
export const ITEMS_FETCH_SUCCESS = 'items_fetch_success';

// When some error happened
export const ITEMS_FETCH_ERROR = 'items_fetch_error';

// When there is nothing to show
export const ITEMS_FETCH_EMPTY = 'items_fetch_empty';

// When we are in the middle of some operation
export const ITEMS_FETCH_LOADING = 'items_fetch_loading';


/** Favorite section **/

// When favorite list fetch is done successfully
export const FAVORITE_FETCH_SUCCESS = 'favorite_fetch_success';

// When some error happened
export const FAVORITE_FETCH_ERROR = 'favorite_fetch_error';

// When there is nothing to show
export const FAVORITE_FETCH_EMPTY = 'favorite_fetch_empty';

// When we are in the middle of some operation
export const FAVORITE_FETCH_LOADING = 'favorite_fetch_loading';


/** Picture detail section **/

// When item detail is successfully fetched
export const ITEM_DETAILS_FETCH_SUCCESS = 'item_details_fetch_success';

// When item detail is added to favorites
export const ITEM_DETAILS_FAVORITE = 'item_details_favorite';

// When item detail is removed from favorites
export const ITEM_DETAILS_REMOVE_FAVORITE = 'item_details_remove_favorite';