import React, {Component} from 'react';
import {Text, View} from "react-native";
import PictureList from "./PictureList";

class App extends Component {

    render() {
        return (
            <View>
                <PictureList/>
            </View>
        );
    }
}

export default App;