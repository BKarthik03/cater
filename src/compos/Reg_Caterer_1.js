import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Button,
  ImageBackground,
  Image,
  TextInput,
} from "react-native";
import { signInWithPhoneNumber,PhoneAuthProvider, signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import Caterer_2 from "./Reg_Caterer_2";
import { auth,db } from "../../firebaseConfig.js";
import { doc, getDoc } from "firebase/firestore";
export default function Caterer_1() {
  
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]); // Array to hold OTP digits
  const [verificationId, setVerificationId] = useState(null);

  // Refs for OTP inputs
  const otpInputs = useRef([]);

  const handleContinue = async () => {
    try {
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber,null);
      setVerificationId(confirmationResult.verificationId);
      console.log("Success")
      }
     catch (error) {
      console.error("Error sending OTP: ", error);
    }
  };

  // const signin=async()=>{
    

        
  //       // const docRef = doc(db, "cities", "LA");
  //       // const docSnap = await getDoc(docRef);
        
  //       // if (docSnap.exists()) {
  //       //   console.log("Document data:", docSnap.data());
  //       // } else {
  //       //   // docSnap.data() will be undefined in this case
  //       //   console.log("No such document!");
  //       // }
    
  //   signInWithEmailAndPassword(auth,name,phoneNumber)
  //   .then((userCrendential)=>{
  //     console.log("Success");
  //     const user = userCrendential.user;
  //   })
  //   .catch((error)=>{
  //     const errorCode=error.code;
  //     const errorMessage=error.message;
  //     console.log(errorCode);
  //     console.log(errorMessage)
  //   })

  // }

  const handleOtpChange = async (index, value) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);
  
    // Automatically move focus to next OTP input box
    if (value.length === 0 && index > 0) {
      otpInputs.current[index - 1].focus();
    } else if (value.length === 1 && index < otpInputs.current.length - 1) {
      otpInputs.current[index + 1].focus();
    }
  
    // Check if all OTP digits are entered and verify OTP
    if (updatedOtp.join('').length === 4) {
      try {
        const credential = PhoneAuthProvider.credential(
          verificationId,
          updatedOtp.join('')
        );
        await signInWithCredential(auth, credential);
        navigateToCaterer2();
      } catch (error) {
        console.error("Error verifying OTP: ", error);
        // Handle OTP verification error
      }
    }
  };

  const navigateToCaterer2 = () => {
    // Navigate to Caterer_2 with name, phone number, and any other necessary props
    // Example: navigation.navigate('Caterer_2', { name, phoneNumber });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/Images/mainbg.jpeg")}
        style={styles.mainbackground}
      >
        <View style={styles.overlayContainer}>
          <Image source={require("../assets/Images/bg.jpeg")} style={styles.overlayimage} />
          <Image source={require("../assets/Images/logo.png")} style={styles.logo} />
          <View style={styles.form}>
        <TextInput
              placeholder="Name"
              keyboardType="email-address"
              value={name}
              onChangeText={setName}
              style={styles.input}
            />
            <TextInput
              placeholder="Phone Number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="visible-password"
              style={styles.input}
            />
            <View style={styles.otpContainer}>
              {otp.map((digit, index) => (
                <TextInput
                  key={index}
                  style={styles.otpInput}
                  value={digit}
                  onChangeText={(value) => handleOtpChange(index, value)}
                  maxLength={1}
                  keyboardType="numeric"
                  ref={(ref) => (otpInputs.current[index] = ref)}
                  autoFocus={index === 0} // Autofocus the first OTP input
                />
              ))}
            </View>
          
            <Button title="Get OTP" onPress={handleContinue} color={"black"} /> 
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainbackground: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  overlayimage: {
    position: "absolute",
    width: "100%",
    height: "75%",
    bottom: -70,
    borderRadius: 60,
  },
  overlayContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    backgroundColor: "white",
    width: 300,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  form: {
    marginBottom: "auto",
    alignItems: "center",
  },
  logo: {
    marginBottom: "auto",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 200,
    marginBottom: 20,
  },
  otpInput: {
    height: 40,
    width: 40,
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    textAlign: "center",
  },
});