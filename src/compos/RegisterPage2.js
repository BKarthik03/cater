import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity, Button, SafeAreaView} from 'react-native'
import Buttons from './Buttons';
import { useFonts } from 'expo-font';

export default function RegisterPage2() {
    const handleRegister = () => {
      // Handle register button press
    };
    const handleLogin = () => {
        // Handle register button press
      };

      const [fontsLoaded] = useFonts({
        'LibreBaskerville-Bold': require('../assets/fonts/LibreBaskerville-Bold.ttf'),
        'LibreBaskerville-Regular': require('../assets/fonts/LibreBaskerville-Regular.ttf'),
      })
    
      if (!fontsLoaded) {
        return null; // or a loading indicator
      }
  return (
   <ImageBackground source={require('../assets/Images/mainbg.jpeg')}
   style={styles.mainbackground}>
    <Image source={require('../assets/Images/bg.jpeg')}
    style={styles.overlayimage}
    />
    <View style={styles.registerbutton}>
    <TouchableOpacity style={styles.button1} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
    </TouchableOpacity>
    </View>
    
    <View style={styles.loginbutton}>
        <TouchableOpacity style={styles.button2} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.logocontainer}>
        <Image source={require('../assets/Images/logo.png')}/>
        </View>
        
       
       <SafeAreaView style={styles.Text}>
        <Text style={{ fontFamily: "LibreBaskerville-Regular", fontSize: 13, color: "#5e2c04",
                       bottom: -320, left: 110
      }}>Already have an accout?</Text>
      <Text style={{ fontFamily: "LibreBaskerville-Regular", fontSize: 13, color: "#5e2c04",
                       bottom: -400, left: 110
      }}>Don't have an account?</Text>
       <Text style={{ fontFamily: "LibreBaskerville-Regular", fontSize: 13, color: "#5e2c04",
                       bottom: -700, left: 0
      }}>you agree to have read and accepted our terms of use and privacy policy....</Text>
      
      </SafeAreaView>

    </ImageBackground>

   
  )
}

const styles = StyleSheet.create({
    mainbackground:{
        flex:1,
        alignItems: "center"
    },
    overlayimage:{
        position:'absolute',
        width: '100%',
        height: '65%', // Adjust as needed
        bottom:0,
        borderRadius:50,
    },
    logo: {
        width: '100%',
        height: '100%',
        
    },
    logocontainer: {
        position: 'absolute',
        top: 70,
    },
    registerbutton:{
        position: 'absolute',
        bottom: 300, //up nd down
        display:"grid",
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    loginbutton: {
        position: 'absolute',
        bottom: 400, //up nd down
        display:"grid",
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      button1: {                          //register
        padding:15,
        display:"block",
        width:'70%',
        borderColor: '#5e2c04', // Border color
        borderWidth: 2, // Border width
        marginTop:30,
        borderRadius:20
      },
      button2: {          //login
        borderColor: '#5e2c04', // Border color
        borderWidth: 2, // Border width
        display:"flex",
        padding:15,
        width:'70%',
        marginTop:30,
        borderRadius:20
      },
      buttonText: {
        color: 'brown',
        fontSize: 16,
        textAlign:"center",
        fontWeight: 'bold',
      },
      messageText: {
        position: 'absolute',
        bottom: 50,
       
      },
      cp:{
        color: 'brown',
        fontSize: 14,
        textAlign:"center",
      }
})
