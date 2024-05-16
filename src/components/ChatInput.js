import React from 'react';
import { View, Image,TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ChatInput = () => {
  const [inputText, setInputText]=" ";
  return (
    <View style={styles.chatInputContainer}>
    
      <View style={styles.inputBox}>
        <TouchableOpacity style={styles.iconButton}>
        <Image source={require('../../assets/emoji.png')} style={{ color:'grey' ,width:30, height:30}} />

        </TouchableOpacity>
        <TextInput
        style={styles.inputText}
        placeholder="Message"
        
       
        
      />
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="attach" size={30} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.iconButton]}>
          <Ionicons name="camera" size={30} color="grey" />
        </TouchableOpacity>
      </View>

   
      <View style={styles.circle}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="mic" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 40,
    flex: 1,
    marginRight: 10,
  },
  inputText: {
    color: 'grey',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight:100
  },
  iconButton: {
    padding: 10,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChatInput;
