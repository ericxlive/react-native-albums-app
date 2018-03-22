// Import libraries
import React from 'react';
import { Text, View } from 'react-native';
// Make the component

const Header = (props) => (
    <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{ props.headerText }</Text>
    </View>
);

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center', // Vertical Align
        alignItems: 'center', // Horizontal Align
        height: 60, // Size height
        paddingTop: 15, // Space at the top
        shadowColor: '#000', // Shadow color
        shadowOffset: { width: 0, height: 2 }, // Shadow direction
        shadowOpacity: 0.4, // How opaque is this shadow
    },
    
    textStyle: {
        fontSize: 20,
    }
};

    
// Register the component (export)
export default Header;
