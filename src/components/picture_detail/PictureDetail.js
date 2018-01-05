import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import ParallaxView from "../common/ParallaxView";
import {connect} from 'react-redux';
import {favorite, fetchPictureDetails, removeFavorite} from "../../actions/PictureDetailsActions";
import styles from "./style/index.style";

class PictureDetail extends Component {

    componentWillMount() {
        this.props.fetchPictureDetails(this.props.item.date);
    }

    onFavoritePress() {
        this.props.favoritePicture(this.props.item);
        this.props.fetchPictureDetails(this.props.item.date);
    }

    onRemoveFavoritePress() {
        this.props.removeFavorite(this.props.item);
        this.props.fetchPictureDetails(this.props.item.date);
    }

    get renderFavorite() {
        if (this.props.picture) {
            return (
                <Text onPress={this.onRemoveFavoritePress.bind(this)}>Remove from favorites</Text>
            );
        } else {
            return (
                <Text onPress={this.onFavoritePress.bind(this)}>Favorite me!</Text>
            );
        }
    }

    render() {

        const {title, url, explanation} = this.props.item;

        return (
            <ParallaxView
                ref={component => this._scrollView = component}
                backgroundSource={{uri: url}}
                windowHeight={250}>

                <View style={styles.loremBody}>

                    <Text style={styles.headerText}>
                        {title}
                    </Text>

                    {this.renderFavorite}

                    <Text style={styles.loremText}>
                        {explanation}
                    </Text>

                    <TouchableOpacity onPress={() => {
                        this._scrollView.scrollTo(0, 0);
                    }}>

                    </TouchableOpacity>
                </View>
            </ParallaxView>

        );
    }
}

const mapStateToProps = state => {
    return {
        picture: state.pictureDetails.picture
    };
};

export default connect(mapStateToProps,
    {
        fetchPictureDetails: fetchPictureDetails,
        favoritePicture: favorite,
        removeFavorite: removeFavorite
    })
(PictureDetail);