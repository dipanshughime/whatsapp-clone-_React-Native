import React from 'react'
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image ,StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {GiftedChat} from "react-native-gifted-chat"
import UserChatTile from '../components/UserChatTile'
import { useNavigation } from '@react-navigation/native';
import ChatPgHeader from '../components/ChatPgHeader';
import ChatInput from '../components/ChatInput';
import ChatBody from '../components/ChatBody';
function Chat() {

  return (<>
  
  <View style={styles.container}>
    <ChatPgHeader/>
      {/* Main content of the screen */}
      <View style={styles.mainContent}>
        {/* Your chat messages or other content */}
        <ChatBody/>                                                                                             
      </View>
      
      {/* Chat input component positioned at the bottom */}
      <View>
        <ChatInput />
      </View>
    </View>
 
  </>
  )
}

export default Chat

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
    // Add styling for your main content if needed
  },
  chatInputContainer: {
    marginBottom:20,
    borderRadius:40,
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
    padding: 20,
    backgroundColor: 'white',
    // Positioning the chat input component at the bottom
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
