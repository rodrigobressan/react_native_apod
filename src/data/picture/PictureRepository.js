import React from 'react';
import {AsyncStorage} from 'react-native';
import axios from 'axios';

import {API_APOD_URL} from "../../config/api";

var PictureRepository = {
    getPictures: function () {
        return new Promise((resolve, reject) => {
            axios.get(API_APOD_URL)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        })
    },
    getPicture: function (pictureDate) {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(pictureDate)
                .then(result => resolve(result))
                .catch(error => reject(error));
        });
    },
    getFavoritePictures: function () {
        return new Promise((resolve, reject) => {
            AsyncStorage.getAllKeys()
                .then(keys => {
                    Promise.all(keys.map((key) => {
                            return AsyncStorage.getItem(key)
                                .then(res => JSON.parse(res));
                        })
                    )
                        .then(data => resolve(data))
                        .catch(error => reject(error));
                })
                .catch(error => reject(error));
        });
    },
    favoritePicture: function (picture) {
        return new Promise((resolve, reject) => {
            AsyncStorage.setItem(picture.date, JSON.stringify(picture))
                .then(result => resolve(result))
                .catch(error => reject(error));
        });
    },
    removeFromFavorites: function (picture) {
        return new Promise((resolve, reject) => {
            AsyncStorage.removeItem(picture.date)
                .then((result) => resolve(result))
                .catch((error) => reject(error));
        })
    }
};

export default PictureRepository;