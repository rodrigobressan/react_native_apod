import React, {Component} from 'react';
import {Image, View} from "react-native";

class Error extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image
                    style={{
                        width: 300,
                        height: 200,
                        resizeMode: 'contain'
                    }}
                    source={{uri: 'https://pics.me.me/houston-we-have-a-problem-14670770.png'}}
                />
            </View>
        );
    }
}

export default Error;