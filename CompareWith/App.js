import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Video } from 'expo-av';
import { VideoPlayer } from 'expo-video-player';

export default function App() {
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
        style={styles.video}
        useNativeControls
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: 200,
  },
});