import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UserChatTile from '../components/UserChatTile'
import { ScrollView } from 'react-native-gesture-handler';
const AnotherScreen = () => {
  return (
    <>
    <ScrollView>

          <UserChatTile/>
          <UserChatTile/>
          <UserChatTile/>
          <UserChatTile/>
          <UserChatTile/>
          <UserChatTile/>
          <UserChatTile/>
          <UserChatTile/>
          <UserChatTile/>
          <UserChatTile/>
          <UserChatTile/>
          <UserChatTile/>
          <UserChatTile/>
          <UserChatTile/>
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

