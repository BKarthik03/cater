import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,View} from 'react-native';
// import Login from './Login';
import Login from './src/compos/Login';
import Cn  from './src/compos/Reg_Caterer_3';
import Caterer_1   from './src/compos/Reg_Caterer_1';
import Caterer_2  from './src/compos/Reg_Caterer_2';
import Pass_cater from './src/compos/Password_Caterer';

export default function App() {
  return (
    <View style={styles.container}>
    <Caterer_1/>
    </View>
    )
  }
const styles = StyleSheet.create({
  container:{
    flex:1
  }
})


// import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
// import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth';
// const firebaseConfig = {
//   apiKey: "AIzaSyAH476IhXz9VSXw5kqve_fJmU3zBKf0iTs",
//   authDomain: "caterconnect-87e6f.firebaseapp.com",
//   projectId: "caterconnect-87e6f",
//   storageBucket: "caterconnect-87e6f.appspot.com",
//   messagingSenderId: "928251296044",
//   appId: "1:928251296044:web:c202f573c0fdc0efa49489",
//   measurementId: "G-24TRSJJWZ8"
// };

// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });

// const app = initializeApp(firebaseConfig);


// const App = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [verificationId, setVerificationId] = useState('');
//   const [code, setCode] = useState('');

//   const handleSignIn = async () => {
//     const phoneProvider = new auth.PhoneAuthProvider();
//     const verificationId = await phoneProvider.verifyPhoneNumber(phoneNumber);
//     setVerificationId(verificationId);
//   };

//   const handleVerifyCode = async () => {
//     const credential = await auth.PhoneAuthProvider.credential(verificationId, code);
//     await auth.signInWithCredential(credential);
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Phone number"
//         value={phoneNumber}
//         onChangeText={setPhoneNumber}
//       />
//       <Button title="Sign in" onPress={handleSignIn} />
//       <TextInput
//         style={styles.input}
//         placeholder="Code"
//         value={code}
//         onChangeText={setCode}
//       />
//       <Button title="Verify code" onPress={handleVerifyCode} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   input: {
//     width: 200,
//     height: 40,
//     margin: 10,
//     padding: 10,
//     borderWidth: 1,
//   },
// });

// export default App;