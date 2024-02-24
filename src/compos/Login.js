import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TextInput,
  Button,
} from "react-native";

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {      // Handle login logic here
    console.log("Phone Number:", phoneNumber);
    console.log("Password:", password);
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/Images/mainbg.jpeg")}
        style={styles.mainbackground}
      >
        <View style={styles.overlayContainer}>
          {/* Overlayed image */}
          <Image
            source={require("../assets/Images/bg.jpeg")}
            style={styles.overlayimage}
            resizeMode="cover"
          />
          
          {/* Input fields and Login button */}
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            onChangeText={setPhoneNumber}
            value={phoneNumber}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
          />
          <View style={styles.button}>
          <Button title="Login" onPress={handleLogin} 
          color={"black"} 
           borderRadius={30}/>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainbackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlayContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlayimage: {
    position: "absolute",
    bottom: -30,
    width: "100%",
    height: "75%", // Adjust as needed
    borderRadius: 60
  },
  input: {
    height: 40,
    width: 250,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom:15,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  button:{
    marginTop:15,
    width:70,
    borderRadius:200
  }
});
