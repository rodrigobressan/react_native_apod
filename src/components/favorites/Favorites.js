import React, {Component} from 'react';
import {FlatList, View} from "react-native";
import {connect} from 'react-redux';
import PictureItem from "../picture_item/PictureItem";
import Loading from "../common/Loading";
import {STATE_EMPTY_VIEW, STATE_ERROR, STATE_LOADING, STATE_SUCCESS} from "../states";
import Error from "../common/Error";
import Empty from "../common/Empty";
import {fetchFavoriteItems} from "../../actions/FavoriteActions";


class Favorite extends Component {

    componentWillMount() {
        console.log(this.props);
        this.props.fetchFavoriteItems();
    }

    renderItem({item}) {
        return (
            <PictureItem item={item}/>
        );
    }

    renderList() {
        return (
            <FlatList
                data={this.props.items}
                renderItem={(item) => this.renderItem(item)}
                keyExtractor={(item, index) => index}/>
        );
    }

    get renderScreen() {
        switch (this.props.state) {
            case STATE_EMPTY_VIEW:
                return <Empty/>;

            case STATE_ERROR:
                return <Error/>;

            case STATE_LOADING:
                return <Loading/>;

            case STATE_SUCCESS:
                return this.renderList();
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                {this.renderScreen}
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.favoriteItems.items,
        state: state.favoriteItems.state
    };

};

export default connect(mapStateToProps, {fetchFavoriteItems: fetchFavoriteItems})(Favorite);