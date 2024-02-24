import React,{useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";
import { Dropdown } from 'react-native-element-dropdown';


export default function Cn() {
  
    const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const location_data = [
    { label: 'Guruvayanakere', value: '1' },
    { label: 'Ujire', value: '2' },
    { label: 'Belthangady', value: '3' },
    { label: 'Uppinangady', value: '4' },
    { label: 'Puttur', value: '5' },
  ];
  
  const [location,setLocation] = useState(null);

  const handleContinue = () => {
    // Validate fields and proceed
    // if (name && phoneNumber && otp && password) {
    //   // Proceed with registration process
    //   Alert.alert('Registration Successful!', 'Welcome aboard!');
    // } else {
    //   Alert.alert('Error', 'Please fill in all fields.');
    // }
  };
  

  return (
    <View style={styles.container}>
      
      <ImageBackground
        source={require("../assets/Images/mainbg.jpeg")}
        style={styles.mainbackground}
        >
          <View style={styles.overlayContainer}>
          <Image source={require('../assets/Images/bg.jpeg')}
           style={styles.overlayimage}/>
          
          <Image source={require("../assets/Images/logo.png")}
          style={styles.logo}/>
<View style={styles.form}>

<TextInput
        placeholder="Adress Line 1*"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      
      <TextInput
        placeholder="Adress Line 1*"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        style={styles.input}
      />
      <TextInput
        placeholder="Village"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        style={styles.input}
      />
    <Dropdown
      style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        labelField="label"
        valueField="value"
      data={location_data}
      placeholder="Select Your NearBy Town"
      value={location}
      onChange={(item) => {
        setLocation(item.value);
      }}
    />
      
      <Button title="Continue" onPress={handleContinue} color={"black"}/>
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
  overlayimage:{
    position:'absolute',
    width: '100%',
    height: '75%', // Adjust as needed
    bottom:-70,
    borderRadius:60,
},

  overlayContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center", // Align the overlay content at the bottom
    alignItems: "center",

  },
  input: {
    height: 40,
    backgroundColor:'white',
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 15,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  form:{
    marginBottom:"auto",
    alignItems:"center",
  },
  logo:{
    marginBottom:"auto",
  },
  dropdown: {
    backgroundColor:'white',
    width:300,
    height: 40,
    borderColor:"gray",
    borderWidth:1,
    borderRadius: 15,
    marginBottom: 20,
    paddingHorizontal:10
  },

  placeholderStyle: {
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
});