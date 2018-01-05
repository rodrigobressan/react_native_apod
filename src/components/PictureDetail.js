import React, {Component} from 'react';
import {AsyncStorage, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import ParallaxView from "./common/ParallaxView";
import PictureRepository from "../data/PictureRepository";
import {connect} from 'react-redux';
import {favorite, fetchPictureDetails, removeFavorite} from "../actions/PictureDetailsActions";

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
        return (
            <ParallaxView
                ref={component => this._scrollView = component}
                backgroundSource={{uri: this.props.item.url}}
                windowHeight={250}>
                <View style={styles.loremBody}>
                    <Text style={styles.headerText}>
                        {this.props.item.title}

                    </Text>
                    {this.renderFavorite}
                    <Text style={styles.loremText}>
                        {this.props.item.explanation}
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


var styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingVertical: 24
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#353535'
    },
    loremBody: {
        paddingHorizontal: 10,
        paddingVertical: 6
    },
    loremText: {
        marginTop: 10,
        color: '#353535',
        paddingBottom: 10
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

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