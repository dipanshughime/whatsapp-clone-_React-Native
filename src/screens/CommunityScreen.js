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
            <StatusTile imageUri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhABPoXj_XOL-vm9s9VPgvvehwcgaojZbvfw&s" userName = "Alex" time = "Today 1:40" />
            <StatusTile imageUri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkstvneL1UVFnPpjuthvShjgYbPSrdNXIMcw&s" userName = "Alex" time = "Today 1:40" />
          </View>
    
          <Text style = {styles.recentText}>Viewed Updates</Text>
          <View>
            <StatusTile imageUri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA-x12OfPPFFbnEuqRwqzyNu2Sz7xnhAftSg&s" userName = "Dear" time = "Yesterday 10:40" />
            <StatusTile imageUri="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG2W6HmuAOlQQJx44ywb3afUGMmTJfou3Mcg&s" userName = "Dear" time = "Yesterday 10:40" />

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
