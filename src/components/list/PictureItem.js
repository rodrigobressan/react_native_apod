import React, {Component} from 'react';
import {Image, ImageBackground, Text, View} from "react-native";
import {Card} from "../common/Card";

class PictureItem extends Component {

    render() {
        const {title, explanation, url} = this.props.item;

        return (
            <Card>
                <ImageBackground
                    source={{uri: url}}
                    style={styles.imageStyle}>

                    <View
                        style={{backgroundColor: 'rgba(0,0,0,0.4)', flex: 1}}>

                        <View style={styles.textContainer}>
                            <Text style={styles.titleText}>{title}</Text>
                            <Text style={styles.explanationText}
                                  numberOfLines={3}>{explanation}</Text>
                        </View>
                    </View>
                </ImageBackground>


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
        justifyContent: 'flex-end',
        flex: 1,
        padding: 5
    },
    titleText: {
        color: 'white',
        fontSize: 18
    },
    explanationText: {
        color: 'white',
        fontSize: 14
    }
};

export default PictureItem;