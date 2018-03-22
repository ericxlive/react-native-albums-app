import React from 'react';
import { View } from 'react-native';

const Card = (props) => (
        <View style={styles.card}>
            {props.children}
        </View>
    );

const styles = {
    card: {
        borderWidth: 1, // Size
        borderRadius: 2, // Reounded corners
        borderColor: '#ddd', // Background color
        borderBottomWidth: 0, // Hide border at the bottom
        shadowColor: '#000', // Elevation effect
        shadowOffset: { width: 0, height: 2 }, // Shadow size
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5, // Space before the margin.
        marginRight: 5, // Space before the margin.
        marginTop: 10, // Space in between.

    }
};

export default Card;
