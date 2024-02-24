import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, TextInput, Button, TouchableOpacity, SafeAreaView, fontsLoaded} from 'react-native';
import { useFonts } from 'expo-font';

const Loginpage = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleButtonPress = () => {
        // Logic for handling login
        console.log('Logging in with:', phoneNumber, password);
      };
    
      const handleForgotPassword = () => {
        // Logic for handling forgot password
        console.log('Forgot password');
      };

      const [fontsLoaded] = useFonts({
        'LibreBaskerville-Bold': require('../assets/fonts/LibreBaskerville-Bold.ttf'),
      })
 
  if (!fontsLoaded) {
    return null; // or a loading indicator
  }

  return (
    <ImageBackground source={require('../assets/Images/mainbg.jpeg')} style={styles.mainbackground}>
      <Image source={require('../assets/Images/bg.jpeg')} style={styles.overlayimage} />

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={text => setPhoneNumber(text)}
          value={phoneNumber}
          placeholder="Phone Number"
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          onChangeText={text => setPassword(text)}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
        />
      
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView style={styles.Text}>
        <Text style={{ fontFamily: "LibreBaskerville-Bold", fontSize: 35, color: "#5e2c04",
                       top: 180, left: 130
      }}>Login</Text>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    mainbackground:{
        flex:1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    overlayimage:{
        position:'absolute',
        width: '100%',
        height: '80%', // Adjust as needed
        bottom:0,
        borderRadius:50,
    },
    input: {
      borderWidth: 2,
      borderColor: "#5e2c04",
      borderRadius: 10,
      paddingVertical: 10, // Adjust vertical padding
      paddingHorizontal: 15, // Adjust horizontal padding
      marginBottom: 20,
      width: 300,
      },
    forgotPassword: {
        marginTop: 10,
        marginRight: -150,
        color: 'brown',
      },
    button: {
        backgroundColor: "#5e2c04",
        padding: 15,
        borderRadius: 20,
        width: 250,
        alignItems: "center",
       },
    buttonText: {
        color: "white",
        fontSize: 16,
      },
    Text: {
        position: 'absolute',
        top: 50,
    },
});
    
export default Loginpage;
