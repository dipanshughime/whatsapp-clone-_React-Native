import React ,{ useState,useEffect }from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { auth ,storage, ref,doc,firestore} from '../../config/firebase';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import {   getDownloadURL ,uploadBytes } from "firebase/storage";
import {  getDoc } from "firebase/firestore"
// import { getStorage, ref, putFile, getDownloadURL } from 'firebase/storage';


// const storage = getStorage();
const SettingsScreen = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_8Ndh_6Yi1w8G7Yg5iGtCQQVreP5sWLdUbg&s");

  const handleSignOut = () => {
    auth.signOut()
      .then(() => {
        navigation.navigate('SignIn');
      })
      .catch(error => console.error('Error signing out: ', error));
  };

  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDocRef = doc(firestore, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            setUserName(userDoc.data().username);
          } else {
            console.log('No such document!');
          }
        } else {
          console.log('No user is signed in.');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserName();
  }, []);


  // const uploadImageToStorage = async (imageUri) => {
  //   try {
  //     if (!imageUri) {
  //       throw new Error('Image URI is undefined or empty');
  //     }
  
  //     const filename = imageUri.split('/').pop();
  //     const storageRef = ref(storage, `images/${filename}`);
  //     const uploadTask = uploadBytes(storageRef, imageUri);
  
  //     uploadTask.on('state_changed', 
  //       (snapshot) => {
  //         // Handle progress updates if needed
  //       }, 
  //       (error) => {
  //         console.error('Error uploading image:', error);
  //         throw error;
  //       }, 
  //       async () => {
  //         // Upload completed successfully
  //         const downloadURL = await getDownloadURL(storageRef);
  //         console.log('Image uploaded successfully. Download URL:', downloadURL);
  //         return downloadURL;
  //       }
  //     );
  //   } catch (error) {
  //     console.error('Error uploading image:', error);
  //     throw error;
  //   }
  // };



  async function uploadImageAsync(uri) {
    const response = await fetch(uri);
    const blob = await response.blob();
    const filename = uri.split('/').pop();
    const storageRef = ref(storage, `profile/${filename}`);
    await uploadBytes(storageRef, blob);
    const url = await getDownloadURL(storageRef);
    console.log(url);
  }
  
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    console.log('Image picker result:', result);
  
    if (!result.cancelled && result.assets && result.assets.length > 0 && result.assets[0].uri) {
      setImage(result.assets[0].uri);
      uploadImageAsync(result.assets[0].uri)
        .then(downloadURL => {
          console.log('Image uploaded successfully. Download URL:', downloadURL);
        })
        .catch(error => {
          console.error('Error uploading image:', error);
        });
    } else {
      console.log('Image selection canceled or URI is undefined.');
    }
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={{marginTop:18 , marginRight: 5}} onPress={() => {
          navigation.goBack(); 
        }}>
          <Ionicons name="arrow-back" size={25} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Settings</Text>
      </View>
      <ScrollView>
        {/* Profile section */}
        <View style={styles.container}>
          <View style={{flexDirection: 'row', marginTop:20 , marginBottom:17}}>
            <TouchableOpacity onPress={pickImage}>
              <Image source={{ uri: image }} style={styles.profileImage} />
            </TouchableOpacity>
            <View style={{flexDirection: 'column' , marginLeft:15}}>
              <Text style={{fontSize: 18 ,marginBottom:10,fontWeight:'bold'}}>{userName}</Text>
              <Text style={[styles.profileText,{fontWeight:'bold',color: '#888'}]}>Hey there, I am using WhatsApp.</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity  style={{flexDirection: 'row'}}>
<Image source={require('../../assets/key.png')} style={styles.arrowIcon} />
<View style={styles.settingItem}>
      <Text style={[styles.settingText, styles.mainText]}>Account</Text>
      <Text style={[styles.settingText, styles.subText]}>Privacy, security, change number</Text>
    </View>
        </TouchableOpacity>

        <TouchableOpacity style={{flexDirection:'row'}}>
<Image source={require('../../assets/chat.png')} style={styles.arrowIcon} />
<View style={styles.settingItem}>
  
          <Text  style={[styles.settingText, styles.mainText]}>Chats</Text>
          <Text  style={[styles.settingText, styles.subText]}>Theme, wallpapers, chat history</Text>
  </View>
        </TouchableOpacity>

        <TouchableOpacity style={{flexDirection:'row'}}>
<Image source={require('../../assets/notification.png')} style={styles.arrowIcon} />
        <View style={styles.settingItem}>
  
          <Text  style={[styles.settingText, styles.mainText]}>Notifications</Text>
          <Text  style={[styles.settingText, styles.subText]}>Message,group & call tones</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{flexDirection:'row'}}>
<Image source={require('../../assets/circle.png')} style={styles.arrowIcon} />
<View style={styles.settingItem}>
  
          <Text  style={[styles.settingText, styles.mainText]}>Storage and Data</Text>
          <Text  style={[styles.settingText, styles.subText]}>Network usage, auto-download</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row'}}>
<Image source={require('../../assets/help.png')} style={styles.arrowIcon} />
<View style={styles.settingItem}>
  
          <Text  style={[styles.settingText, styles.mainText]}>Help</Text>
          <Text  style={[styles.settingText, styles.subText]}>Help center,contact us,privacy policy</Text>
          </View>
        </TouchableOpacity>
       

        

        <TouchableOpacity  onPress={handleSignOut} style={{flexDirection:'row'} }>
<Image source={require('../../assets/group.png')} style={styles.arrowIcon} />
<View style={styles.settingItem}>
  
          <Text  style={[styles.settingText, styles.mainText]}>Invite a Friend</Text>
          </View>
        </TouchableOpacity>



        
        <View style={styles.inviteSection}>
        
          <Text >from </Text>
          <Text style={styles.inviteText}>Facebook </Text>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  header: {
    backgroundColor: '#075E54',
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection:'row',
    alignItems:"baseline",

  },
  headerText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft:7
   

  },
  profileSection: {
    padding: 20,
  },
  profileText: {
    fontSize: 16,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50, 
    marginRight: 20,
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
    margin:20,
    width: 23,
    height: 23
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

export default SettingsScreen;  
