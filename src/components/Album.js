import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import CardSection from './CardSection';
import Card from './Card';
import Button from './Button';

// This is a functional component because it shows data only. No access to state.
const Album = ({ album }) => {
    // I need title, artist, thumbnail_image from album.
    const { title, artist, thumbnail_image, image, url } = album;
    // If you wan't to call styles this way, from styles, select thumbnail.
    const { thumbnail } = styles;

    return (
        <Card>
            <CardSection>
                {/* Image column */}
                <View style={styles.thumbnailArea}>
                    <Image source={{ uri: thumbnail_image }} style={thumbnail} />
                </View>
                {/* Text column */}
                <View style={styles.headerTextColumn}> 
                    <Text style={styles.headerText}>{ title }</Text>
                    <Text>{ artist }</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image source={{ uri: image }} style={styles.image} />
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                  Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    thumbnail: {
        width: 50,
        height: 50
    },
    headerText: {
        fontSize: 18,
    },
    headerTextColumn: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    thumbnailArea: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    image: {
        height: 300,
        flex: 1,
        width: null,
    }
};

export default Album;
