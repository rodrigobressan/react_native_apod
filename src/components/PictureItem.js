import React, {Component} from 'react';
import {Image, Text, View} from "react-native";

class PictureItem extends Component {

    render() {
        const {title, explanation, url} = this.props.item;

        return (
            <View>
                <Image
                    source={{uri: url}}
                    style={{flex: 1, height: 150}}/>
                <Text>{title}</Text>
            </View>
        )
    }
}

export default PictureItem;