import React, {Component} from 'react';
import {Image, Text, View} from "react-native";
import {Card} from "../common/Card";

class PictureItem extends Component {

    render() {
        const {title, explanation, url} = this.props.item;

        return (
            <Card>
                <Image
                    source={{uri: url}}
                    style={styles.imageStyle}/>

                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>{title}</Text>
                    <Text style={styles.explanationText}>{explanation}</Text>
                </View>

            </Card>
        )
    }
}

const styles = {
    imageStyle: {
        flex: 1,
        height: 150
    },
    textContainer: {
        padding: 5
    },
    titleText: {
        fontSize: 18
    },
    explanationText: {
        fontSize: 14
    }
};

export default PictureItem;