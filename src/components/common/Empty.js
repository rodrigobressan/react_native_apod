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
                    source={{uri: 'https://i.pinimg.com/originals/57/9f/0e/579f0e9de92280aa94f42164cb0fbf58.gif'}}
                />
            </View>
        );
    }
}

export default Empty;