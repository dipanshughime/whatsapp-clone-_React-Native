import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Text } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { auth,firestore,doc,setDoc } from '../../config/firebase';

function SignUpScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigation = useNavigation();

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      await setDoc(doc(firestore, "users", user.uid), {
        username: username,
        email: email,
      });
  
      console.log('Registered with:', user.email);
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };
  


  return(
    <View style={styles.container}>

<TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity style={styles.signInButton} onPress={handleSignUp}>
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.newUserText}>already a User? Sign-In</Text>
      </TouchableOpacity>
    </View>
  );

 
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: 'white',
    },
    input: {
      width: '100%',
      marginVertical: 10,
      padding: 15,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 25,
      backgroundColor: '#f2f2f2',
    },
    signInButton: {
      width: '100%',
      padding: 15,
      borderRadius: 25,
      backgroundColor: '#075E54',
      alignItems: 'center',
      marginVertical: 10,
    },
    signInButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    newUserText: {
      color: '#075E54',
      marginTop: 20,
    },
  });

export default SignUpScreen;
