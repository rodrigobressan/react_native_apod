import React from 'react';
import {Router, Scene} from "react-native-router-flux";
import PictureList from "./components/list/Pictures";
import PictureDetail from "./components/PictureDetail";
import {Actions} from 'react-native-router-flux';
import Favorite from "./components/Favorite";

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