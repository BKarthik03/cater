import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  ImageBackground,
  Image,
  TextInput,
} from "react-native";

export default function Pass_cater() {
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');

  const handleContinue = () => {
    
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
            <TextInput style={styles.input}
            placeholder="Password "
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            
            />
            <TextInput style={styles.input}
            placeholder="Confirm Password "
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={true}
            
            />
            <Button
              title="Send for Approval"
              onPress={handleContinue}
              color={"black"}
            />
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
    height: "75%", // Adjust as needed
    bottom: -70,
    borderRadius: 60,
  },

  overlayContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center", // Align the overlay content at the bottom
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


 
 
});
