import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore ,doc,setDoc  } from "firebase/firestore";
import { getStorage , ref, putFile, getDownloadURL} from 'firebase/storage';
///import AsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1MNyw16ixArC4W9S1ihuDIDKfQo7ClE4",
  authDomain: "whatsapp-e0bc1.firebaseapp.com",
  projectId: "whatsapp-e0bc1",
  storageBucket: "whatsapp-e0bc1.appspot.com",
  messagingSenderId: "641205544171",
  appId: "1:641205544171:web:01d3032300f23cc60c8aae"
};

// Initialize Firebase only if not already initialized
let app;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}
const firebaseApp = initializeApp(firebaseConfig);
// Initialize Auth with AsyncStorage for persistence
const auth = getAuth(firebaseApp);

const firestore = getFirestore(firebaseApp);
const storage = getStorage();

export { firestore,setDoc ,doc , storage, ref, putFile, getDownloadURL};

export { auth};

