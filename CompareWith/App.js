import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform } from 'react-native';
// import Video from 'react-native-video';
// import { Platform } from 'react-native';
import { Video } from 'expo-av';



export default function App() {
  const [serverData, setServerData] = useState('');
  let videos = [];
  // useEffect(() => {
  //   fetch('http://localhost:3000/')
  //     .then(response => response.json())
  //     .then(data => {
  //       setServerData(data);
  //     });
  // }, []);

  const [isPlaying, setIsPlaying] = useState(false);
  const videoUri = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

  const videoRef = React.useRef(null);

  const handleVideoState = (state) => {
    setIsPlaying(state.isPlaying);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={styles.container}>
      <Video
        source={{ uri: videoUri }}
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

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
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