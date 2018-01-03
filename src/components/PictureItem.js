import React, {Component} from 'react';
import {Text, View} from "react-native";

class PictureItem extends Component {

    render() {
        const {title, explanation, url} = this.props.item;

        return (
            <View>
                <Text>{title}</Text>
            </View>
        )
    }
}

export default PictureItem;