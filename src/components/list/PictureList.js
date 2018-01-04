import React, {Component} from 'react';
import {FlatList, ListView, ScrollView, Text, View} from "react-native";
import {connect} from 'react-redux';
import PictureItem from "./PictureItem";
import {itemsFetch} from "../../actions/ListItemsActions";
import Loading from "../common/Loading";

class PictureList extends Component {

    componentWillMount() {
        this.props.itemsFetch();
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

    renderEmptyView() {
        return (
            <Text>Nothing here :-(</Text>
        );
    }

    renderLoading() {
        return (
            <Loading/>
        );
    }

    get renderScreen() {

        if (this.isLoading()) {
            return this.renderLoading();
        }

        if (this.hasContentToDisplay()) {
            return this.renderList();
        } else {
            return this.renderEmptyView();
        }
    }

    isLoading() {
        return this.props.loading;
    }

    hasContentToDisplay() {
        return this.props.items && this.props.items.length > 0
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
        items: state.listItems.items,
        loading: state.listItems.loading,
        error: state.listItems.loading
    };

};

export default connect(mapStateToProps, {itemsFetch})(PictureList);