import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
        <View style={styles.cardItem}>
            {props.children}
        </View>
    );

const styles = {
    cardItem: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row', // As row with its contents.
        borderColor: '#ddd',
        position: 'relative',
    }
};

export default CardSection;
