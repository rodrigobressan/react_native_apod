import React, {Component} from 'react';
import {Text, View} from "react-native";
import PictureList from "./list/PictureList";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';

class App extends Component {

    render() {

        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <View>
                    <PictureList/>
                </View>
            </Provider>
        );
    }
}

export default App;