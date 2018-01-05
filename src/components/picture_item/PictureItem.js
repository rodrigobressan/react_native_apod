import React, {Component} from 'react';
import {ImageBackground, Text, View} from "react-native";
import {Card} from "../common/Card";
import {Actions} from 'react-native-router-flux';
import styles from "./style/index.style";

class PictureItem extends Component {

    onRowPress() {
        Actions.pictureDetail({item: this.props.item});
    }

    render() {
        const {title, explanation, url} = this.props.item;

        return (
            <Card onPress={this.onRowPress.bind(this)}>
                <ImageBackground
                    source={{uri: url}}
                    style={styles.imageStyle}>

                    <View
                        style={styles.blurView}>

                        <View style={styles.textContainer}>
                            <Text style={styles.titleText}>{title}</Text>
                            <Text style={styles.explanationText} numberOfLines={3}>
                                {explanation}
                            </Text>
                        </View>
                    </View>
                </ImageBackground>
            </Card>
        )
    }
}

export default PictureItem;