import React, {Component} from 'react';
import {Image, View} from "react-native";

class Loading extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                <Image
                    style={{
                        width: 160,
                        height: 140
                    }}
                    source={require('./../../../res/loading.gif')}
                />
            </View>
        );
    }
}

export default Loading;