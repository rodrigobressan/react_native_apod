export const API_BASE_URL = 'https://api.nasa.gov/planetary/';
export const APOD_PATH = "apod";

export const API_KEY = 'dUHK1i1WCsZjXAKnUrv7v5ZeXJwrQOg9yOSkg4cN';

export const PARAM_KEY = 'api_key=';
export const PARAM_COUNT = 'count=';
export const ITEMS_TO_SHOW = 10;

export const API_APOD_URL = API_BASE_URL + APOD_PATH + '?'
    + PARAM_KEY + API_KEY // api_key
    + "&" + PARAM_COUNT + ITEMS_TO_SHOW; // count
