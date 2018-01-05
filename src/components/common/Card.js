import React from 'react';
import {TouchableOpacity} from 'react-native';

const Card = (props) => {

    return (
        <TouchableOpacity onPress={props.onPress} style={styles.containerStyle}>
            {props.children}
        </TouchableOpacity>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};
export {Card};