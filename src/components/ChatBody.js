import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const ChatBody = () => {
  // Mock data for sender and receiver messages
  const messages = [
    { id: 1, sender: 'sender', message: 'Hello', type: 'sender' },
    { id: 2, sender: 'receiver', message: 'Hi there!', type: 'receiver' },

  
  ];

  return (
    <ImageBackground source={require('../../assets/wallpaper.jpeg')} style={styles.container}>
      <View style={styles.chatContainer}>
        {messages.map((msg) => (
          <View key={msg.id} style={msg.type === 'sender' ? styles.senderMessage : styles.receiverMessage}>
            <Text style={styles.messageText}>{msg.message}</Text>
          </View>
        ))}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    justifyContent: 'center',
  },
  chatContainer: {
    flex: 1,
    padding: 10,
  },
  senderMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6', // Sender message background color
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  receiverMessage: {
    alignSelf: 'flex-start',
    backgroundColor: 'white', // Receiver message background color
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  messageText: {
    fontSize: 16,
    color: 'black',
  },
});

export default ChatBody;
