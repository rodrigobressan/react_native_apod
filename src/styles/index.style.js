import { StyleSheet } from 'react-native';

export const colors = {
    black: '#1a1917',
    gray: '#888888',
    background2: '#21D4FD'
};

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    scrollview: {
        flex: 1
    },
    scrollviewContentContainer: {
        paddingBottom: 50
    }
});