import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform } from 'react-native';
// import Video from 'react-native-video';
// import { Platform } from 'react-native';
import { Video } from 'expo-av';
import ThumbnailSelector from './components/thumbnail_selector';
import VideoPlayer from './components/video_player';



export default function App() {
  const [serverData, setServerData] = useState('');
  console.log('server data', serverData);


  const videoUri = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';

  const thumbnails =
    ["https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
      "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
      "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
      "https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
      "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
      "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
      "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
      "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
      "https://storage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
      "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
      "https://storage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg"];


  return (
    <View style={styles.container}>
      <ThumbnailSelector thumbnails={thumbnails} />
      <VideoPlayer videoUri={videoUri} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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