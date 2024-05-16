import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const StatusTile = ( {imageUri, userName, time }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUri }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,

  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 39,
    overflow: 'hidden',
    borderColor:'green',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 14,
    color: '#888',
  },
});

export default StatusTile;