import React, {Component} from 'react';
import {Image, View} from "react-native";

class Empty extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image
                    style={{
                        width: 300,
                        height: 200,
                        resizeMode: 'contain'
                    }}
                    source={require('./../../../res/empty.gif')}
                />
            </View>
        );
    }
}

export default Empty;