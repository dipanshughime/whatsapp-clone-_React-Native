import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image ,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import React from 'react'

const UserChatTile = ({imageUri}) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity  onPress={() => navigation.navigate('Chat')}>
    <View style={styles.container}>
    <View style={{flexDirection: 'row', marginTop:10,marginBottom:0 }}>
    
      <Image source={{ uri: imageUri }}  style={styles.profileImage} />
    
    <View style={{flexDirection: 'column' , marginLeft:15 }}>

< Text style={{fontSize: 16 ,marginBottom:5,fontWeight:'bold'}}>Programmer</Text>
<Text style={[styles.profileText,{marginBottom:40,fontWeight:'bold',color: '#888'}]}>Hey there, I am using WhatsApp.</Text>
  </View>
  <View style={{flexDirection: 'column' , marginLeft:15 , alignItems:"center"}}>
  < Text style={{fontSize: 16 ,marginBottom:5,fontWeight:'bold', color:'green'}}>12:15</Text>
<View style={styles.circle}>
      <Text style={styles.text}>2</Text>
    </View>

  </View>
  </View>
</View>
</TouchableOpacity>
  )
}

export default UserChatTile
const styles = StyleSheet.create({

    circle: {
        width: 30, 
        height: 30,
        borderRadius: 15,
        backgroundColor: 'green',
        justifyContent: 'center', 
        alignItems: 'center', 
      },
      text: {
        color: 'white', // Text color
        fontWeight: 'bold', // Make the text bold
      },

    container: {
    paddingBottom:0,
      backgroundColor: '#f2f2f2',
      borderBottomWidth: 0.5,
      borderBlockColor:'white'
    
    },
    header: {
      backgroundColor: '#075E54',
      paddingVertical: 15,
      paddingHorizontal: 20,
    },
    headerText: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    profileSection: {
      padding: 20,
    },
    profileText: {
      fontSize: 14,
    },
    profileImage: {
      width: 60,
      height: 60,
      borderRadius: 60, 
      marginLeft: 20,
    },
    settingItem: {
      padding: 17,
      flexDirection: 'column', 
      justifyContent: 'flex-start', 
      alignItems: 'flex-start', 
      marginLeft: 1,
      justifyContent: 'space-between',
      
      borderBottomWidth: 0,
      
     
    },
  
    settingText: {
      fontSize: 16,
    },
    arrowIcon: {
      color: '#888',
      
      width: 50,
      height: 50,
    
     
    },
    inviteSection: {
      padding: 20,
      alignItems: 'center',
    },
    inviteText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    mainText: {
      fontWeight: 'bold', // Make the main text bold for emphasis
      color: '#333', // Set a darker color for better contrast
    },
    subText: {
      color: '#888',
      fontWeight: 'bold' // Set a lighter color for the subtext
    },
  });