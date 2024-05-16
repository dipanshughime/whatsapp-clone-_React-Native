import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StatusTile from '../components/StatusTileComp';






const CommunityScreen = () => {
    return (
        <>
    
          <View style = {styles.container}>
            <StatusTile imageUri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_8Ndh_6Yi1w8G7Yg5iGtCQQVreP5sWLdUbg&s" userName = "My Status" time = "Today 12:30 am" />
          </View>
    
          <Text style = {styles.recentText}>Recent Updates</Text>
    
          <View>
            <StatusTile imageUri="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" userName = "Alex" time = "Today 1:40" />
            <StatusTile imageUri="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" userName = "Alex" time = "Today 1:40" />
          </View>
    
          <Text style = {styles.recentText}>Viewed Updates</Text>
          <View>
            <StatusTile imageUri="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" userName = "Dear" time = "Yesterday 10:40" />
            <StatusTile imageUri="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" userName = "Dear" time = "Yesterday 10:40" />

          </View>
        </>
      )
    };

    const styles = StyleSheet.create({
        recentText :{
          color: "gray",
          margin: 10
        },
        container:{
          marginTop: 10,
          borderBottomColor: '#ccc',
        }
      })

export default CommunityScreen;
