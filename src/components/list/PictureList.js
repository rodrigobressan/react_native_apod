import React, {Component} from 'react';
import {ListView} from "react-native";
import {connect} from 'react-redux';
import PictureItem from "./PictureItem";
import {itemsFetch} from "../../actions/ListItemsActions";

class PictureList extends Component {

    componentWillMount() {
        this.props.itemsFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({items}) {
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = dataSource.cloneWithRows(items);
    }

    renderRow(item) {
        return (
            <PictureItem item={item}/>
        );
    }

    render() {
        return (
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}/>
        );
    }
}

const mapStateToProps = state => {
    const items = state.items;

    return {items};
};

export default connect(mapStateToProps, {itemsFetch})(PictureList);