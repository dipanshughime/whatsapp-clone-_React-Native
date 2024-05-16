import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

import { getFirestore, collection, getDocs } from 'firebase/firestore';
 const firestore = getFirestore();
const ChatBody = () => {

  // Mock data for sender and receiver messages
  // const messages = [
  //   { id: 1, sender: 'sender', message: 'Hello', type: 'sender' },
  //   { id: 2, sender: 'receiver', message: 'Hi there!', type: 'receiver' },

  const senderId='senderId';
  const receiverId ='receiverId';
  // ];

  const [messages, setMessages] = useState([]);

  // Function to fetch chats from Firestore
  const fetchChats = async () => {
    try {
      const senderId = 'senderId'; 
      const receiverId = 'receiverId'; 
  
      const chatRef = collection(firestore, 'demochats', `${senderId}${receiverId}`, 'message');
  
      const querySnapshot = await getDocs(chatRef);
  
      const messages = [];
  
      querySnapshot.forEach((doc) => {
        const { uid , msg } = doc.data();
        
        
  
        messages.push({ id: doc.id, uid, msg });
      });
  
      setMessages(messages);
    } catch (error) {
      console.error('Error fetching chats:', error);
    }
  };
  

  useEffect(() => {
    fetchChats(); // Fetch chats when component mounts
  }, [senderId, receiverId]); // Fetch chats when senderId or receiverId changes


  return (
    <ImageBackground source={require('../../assets/wallpaper.jpeg')} style={styles.container}>
      <View style={styles.chatContainer}>
        {messages.map((msg) => (
          <View key={msg.id} style={msg.uid === senderId ? styles.senderMessage : styles.receiverMessage}>
            <Text style={styles.messageText}>{msg.msg}</Text>
          </View>
        ))}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
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
