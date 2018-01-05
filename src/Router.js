import React from 'react';
import {Actions, Router, Scene} from "react-native-router-flux";
import PictureList from "./components/pictures/Pictures";
import PictureDetail from "./components/picture_detail/PictureDetail";
import Favorite from "./components/favorites/Favorites";

const RouterComponent = () => {
    return (
        <Router
            navButtonColor='black'
            >
            <Scene
                key="main"
                hideTabBar>

                <Scene
                    initial
                    onRight={() => {
                        Actions.favoriteList();
                    }}
                    rightTitle="Favorite"
                    key="pictureList"
                    component={PictureList}
                    title="Pictures"/>

                <Scene
                    key="pictureDetail"
                    component={PictureDetail}/>

                <Scene
                    title="Favorites"
                    key="favoriteList"
                    component={Favorite}/>
            </Scene>
        </Router>
    );
};

export default RouterComponent;