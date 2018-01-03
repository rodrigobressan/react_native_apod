import React, {Component} from 'react';
import {ListView, Text, View} from "react-native";
import PictureItem from "./PictureItem";

var items = [
    {
        title: "First item",
        explanation: "Explanation for first item",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png"
    }, {
        title: "Second item",
        explanation: "Explanation for second item",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png"
    }, {
        title: "Third item",
        explanation: "Explanation for third item",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png"
    }
];

class PictureList extends Component {

    componentWillMount() {
        this.createDataSource(items);
    }

    createDataSource(items) {
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

export default PictureList;