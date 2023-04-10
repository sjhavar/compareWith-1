import React, { useState } from 'react';
import { StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const ThumbnailSelector = (props) => {
  const handleThumbnailSelect = (index) => {
    this.setSeletectedThumbnailIndex(index);
  }
  const [selectedThumbnailIndex, setSeletectedThumbnailIndex] = useState(0);

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
      {props.thumbnails.map((thumbnail, index) => (
        <TouchableOpacity key={index} onPress={() => handleThumbnailSelect(index)}>
          <Image
            source={{ uri: thumbnail }}
            style={[
              styles.thumbnail,
              index === selectedThumbnailIndex && styles.selectedThumbnail,
            ]}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    marginTop: 30,
  },
  thumbnail: {
    width: 120,
    height: 120,
    borderRadius: 5,
    marginRight: 10,
  },
  selectedThumbnail: {
    borderWidth: 2,
    borderColor: 'blue',
  },

  item: {
    width: 150,
    height: 150,
    backgroundColor: '#ccc',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ThumbnailSelector;