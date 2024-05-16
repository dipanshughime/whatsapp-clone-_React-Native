import React, { Profiler, useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CommunityScreen from './src/screens/CommunityScreen';
import AnotherScreen from './src/screens/AnotherScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SignUpScreen from './src/screens/Signup';
import SignInScreen from './src/screens/SignIn';
import {auth} from './config/firebase';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './src/screens/Profile';
import Chat from './src/screens/Chat';
import { FloatingAction } from "react-native-floating-action";
// import {onAuthStateChanged} from "firebase/auth" ;
const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function MainComponent({ navigation }) {
  const handleSignOut = () => {
    auth.signOut()
      .then(() => {
        navigation.navigate('SignIn');
      })
      .catch(error => console.error('Error signing out: ', error));
  };

  return (
    <>
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>WhatsApp</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="search" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.iconButton} 
            onPress={() => navigation.navigate('Profile')}
          >
            <FontAwesome name="ellipsis-v" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
      <MyTabs />
      <FloatingAction
        actions={[]}
        onPressMain={() => {}}
        color = "#075E54"
        floatingIcon={<Ionicons name="chatbox-ellipses" size={24} color="white" />}
      />
      </>
  );
}



function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12, color: 'white', fontWeight: 'bold' },
        tabBarIndicatorStyle: { backgroundColor: 'white' },
        tabBarStyle: { backgroundColor: '#075E54' },
      }}
    >
      <Tab.Screen 
        name="Camera" 
        component={CommunityScreen} 
        options={{
        
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="camera" size={24} color="white" />  
          ),
        }} 
      />
      <Tab.Screen name="Chats" component={AnotherScreen} 
          options={{
            tabBarShowLabel: false,
            tabBarIcon: () => (
              <View style ={styles.tab}>
                <Text style ={styles.texts}>CHATS</Text>
                <View style={styles.messageCount}>
                  <Text style={styles.messageCountText}>10</Text>
                </View>
              </View>
              
            )
          }}
        />

      <Tab.Screen name="Status" component={CommunityScreen} />
      <Tab.Screen name="Calls" component={CommunityScreen} />
    </Tab.Navigator>
  );
}

function App({ navigation }) {
  const handleSignOut = () => {
    auth.signOut()
      .then(() => {
        navigation.navigate('SignIn');
      })
      .catch(error => console.error('Error signing out: ', error));
  };
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  


    return () => unsubscribe();
  }, []);
  
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.safeArea}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {user ? (
            <>
              <Stack.Screen name="Main" component={MainComponent} />
              <Stack.Screen name="Profile" component={Profile} />
              <Stack.Screen name="Chat" component={Chat} />
            </>
          ) : (
            <>
              <Stack.Screen name="SignIn" component={SignInScreen} />
              <Stack.Screen name="SignUp" component={SignUpScreen} />
            </>
          )}
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>


  );

}

const styles = StyleSheet.create({
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
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginHorizontal: 10,
  },
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
  tab:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  texts:{
    color: 'white',
    fontWeight: 'bold', 
    marginRight:3,
    width: 50,
  },
  messageCount: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 2,
 
  },
  messageCountText: {
    color: 'green',
    fontSize:15,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default App;
