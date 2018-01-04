import React, {Component} from 'react';
import {Text, View} from "react-native";
import PictureList from "./list/PictureList";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';
import Router from "../Router";

class App extends Component {

    render() {

        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router/>
                {/*<View style={{flex: 1}}>*/}
                    {/*<PictureList/>*/}
                {/*</View>*/}
            </Provider>
        );
    }
}

export default App;