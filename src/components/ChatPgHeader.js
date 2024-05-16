import React from 'react'
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image ,StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {GiftedChat} from "react-native-gifted-chat"
import UserChatTile from '../components/UserChatTile'
import { useNavigation } from '@react-navigation/native';
function ChatPgHeader() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
    <View style={styles.headerContainer}>
    <TouchableOpacity style={{flexDirection:'row'}}>
    <TouchableOpacity style={{marginTop:18 , marginRight: 5}} onPress={() => {
    navigation.goBack(); // Navigate back to the previous screen
  }}>
          <Ionicons name="arrow-back" size={25} color="white" />
        </TouchableOpacity>
    <Image source={require('../../assets/man.jpg')} style={styles.profileImage} />
    <View style={{flexDirection: 'column' , marginLeft:15 }}>
  
    < Text style={{ color:"white",fontSize: 18 ,marginTop:8,fontWeight:'bold'}}>Programmer</Text>
    < Text style={{ color:"white",fontSize: 14 ,marginTop:8}}>online</Text>
  </View>
        </TouchableOpacity>
      <View style={styles.headerIcons}>
      <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="videocam" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="call" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.iconButton} 
         
        >
          <FontAwesome name="ellipsis-v" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  </View>
  )
}

export default ChatPgHeader
const styles = StyleSheet.create({
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 60, 
    marginLeft: 2,
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#075E54',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#075E54',
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginHorizontal:15,
  },
});