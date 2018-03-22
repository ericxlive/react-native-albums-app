import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Botton = ({ onPress, children }) => {
    const { button, text } = styles;

    return (
        <TouchableOpacity style={button} onPress={onPress} >
            <Text style={text}>
                {children}
            </Text>
        </TouchableOpacity >
    );
};

const styles = {
    button: {
        flex: 1, // Expand as possible.
        alignSelf: 'stretch', // Limits to the container.
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        // Margin Attributes.
        marginLeft: 5,
        marginRight: 5
    },
    text: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        // Bold or thin. This is an enum.
        fontWeight: 'bold', // '600' pretty bold text.
        paddingTop: 10, // Space to the top.
        paddingBottom: 10, // Space bellow the text.
    }
};


export default Botton;
