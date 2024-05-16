import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UserChatTile from '../components/UserChatTile'
import { ScrollView } from 'react-native-gesture-handler';
const AnotherScreen = () => {

  

  

  return (

    <>
    <ScrollView>

        
       
          <UserChatTile imageUri = "https://i.pinimg.com/736x/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg"/>

          <UserChatTile imageUri = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXOdZN9FwqzYqEL6SJa7uQNAFQAmepwBR3bg&s"/>
          <UserChatTile imageUri = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrFECEYGQ_mAPeIhPbeqqUR1LJ-OHOFxUKhA&s"/>
          <UserChatTile imageUri = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA-x12OfPPFFbnEuqRwqzyNu2Sz7xnhAftSg&s"/>
          <UserChatTile imageUri = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhABPoXj_XOL-vm9s9VPgvvehwcgaojZbvfw&s"/>
          <UserChatTile imageUri = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBuIVuR5ja-jE_wonOuUiIThZNcLn0V0zhdg&s"/>
          <UserChatTile imageUri = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEP-Zqm-B8NV4Gg1g0mYar5IeqEnHoVh9MUg&s"/>
          <UserChatTile imageUri = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHfEF0TdXa2nKqe6z4qa0aOjeb5hyGLNNWtQ&s"/>
          <UserChatTile imageUri = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgWkA3X9cdGn3tggpvy_hnWe0QmRZW-DjwHw&s"/>
          <UserChatTile imageUri = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_99Qr-eNe1Ud3d29Oxf2pipRKTte5BdyZcA&s"/>
          <UserChatTile imageUri = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG2W6HmuAOlQQJx44ywb3afUGMmTJfou3Mcg&s"/>
          <UserChatTile imageUri = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkstvneL1UVFnPpjuthvShjgYbPSrdNXIMcw&s"/>

          
          
    </ScrollView>
    </>

 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AnotherScreen;

