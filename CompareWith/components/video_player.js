import React, { useState } from 'react';
import { Video } from 'expo-av';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const VideoPlayer = (props) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handleVideoState = (state) => {
        setIsPlaying(state.isPlaying);
    };

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <View style={styles.container}>
            <Video
                source={{ uri: props.videoUri }}
                style={styles.video}
                resizeMode="contain"
                useNativeControls
                isLooping
                onPlaybackStatusUpdate={handleVideoState}
            />
            <View style={styles.controls}>
                <TouchableOpacity onPress={handlePlayPause}>
                    <Text>{isPlaying ? 'Pause' : 'Play'}</Text>
                </TouchableOpacity>
                <Text>My Video Title</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    video: {
        width: '100%',
        height: '35%',
    },
});

export default VideoPlayer;