import React from 'react';
import {Router, Scene} from "react-native-router-flux";
import PictureList from "./components/list/PictureList";
import PictureDetail from "./components/PictureDetail";

const RouterComponent = () => {
    return (
        <Router>
            <Scene
                key="main"
                hideTabBar>

                <Scene
                    initial
                    onRight={() => console.log('refresh')}
                    rightTitle="Refresh"
                    key="pictureList"
                    component={PictureList}
                    title="Pictures"/>

                <Scene
                    key="pictureDetail"
                    component={PictureDetail}/>
            </Scene>
        </Router>
    );
};

export default RouterComponent;