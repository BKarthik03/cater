import React, { useState, useRef } from 'react'; // Import useRef
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ImageBackground, Image, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';

const Forgotpsw2 = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [otpBoxes, setOtpBoxes] = useState(Array(6).fill(''));
  const otpRefs = useRef(Array(6).fill(null)); // Create a ref

  const handlePhoneNumberChange = (text) => {
    setPhoneNumber(text);
  };
  
  const handleOtpChange = (text, index) => {
    const newOtpBoxes = [...otpBoxes];
    newOtpBoxes[index] = text;
    setOtpBoxes(newOtpBoxes);
    setOtp(newOtpBoxes.join(''));
  
    // Move focus to the next input
    if (text !== '' && index < otpBoxes.length - 1) {
      // Find the next input element
      const nextIndex = index + 1;
      const nextInputRef = otpRefs.current[nextIndex];
      // If found, focus on it
      if (nextInputRef && nextInputRef.focus) {
        nextInputRef.focus();
      }
    }
  };
  

  const requestOTP = () => {
    // Code to send OTP to the user's phone number
    console.log('Requesting OTP for', phoneNumber);
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
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Phone Number"
        value={phoneNumber}
        onChangeText={handlePhoneNumberChange}
      />
      <TouchableOpacity style={styles.button} onPress={requestOTP}>
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>
      <View style={styles.otpContainer}>
        {otpBoxes.map((value, index) => (
          <TextInput
            key={index}
            ref={(ref) => (otpRefs.current[index] = ref)} // Assign ref here
            style={styles.otpBox}
            maxLength={1}
            keyboardType="numeric"
            value={value}
            onChangeText={(text) => handleOtpChange(text, index)}
          />
        ))}
      </View>
    </View>
    <SafeAreaView style={styles.Text}>
        <Text style={{ fontFamily: "LibreBaskerville-Bold", fontSize: 30, color: "#5e2c04",
                       top: 180, left: 5
      }}>Password Recovery</Text>
      <Text style={{ fontFamily: "LibreBaskerville-Regular", fontSize: 13, color: "#5e2c04",
                       bottom: -190, left: 5
      }}>Enter your phoneNumber to recover password</Text>
      </SafeAreaView>

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mainbackground:{
    flex:1,
    alignItems: "center"
},
overlayimage:{
    position:'absolute',
    width: '100%',
    height: '80%', // Adjust as needed
    bottom:0,
    borderRadius:50,
},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  button: {
    backgroundColor: "#5e2c04",
        padding: 15,
        borderRadius: 20,
        width: 250,
        alignItems: "center",
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  otpContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  otpBox: {
    width: 40,
    height: 40,
    borderColor: "#5e2c04",
    borderWidth: 2,
    borderRadius: 5,
    marginHorizontal: 5,
    textAlign: 'center',
    fontSize: 18,
  },
  Text: {
    position: 'absolute',
    top: 50,
},
});

export default Forgotpsw2;
