import React,{useState} from "react";
import {
  StyleSheet,

  View,
  Button,
  ImageBackground,
  Image,

  TextInput
} from "react-native";
import { Dropdown } from 'react-native-element-dropdown';


export default function Caterer_2() {
  
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  
  const dish_data = [
    { label: 'Veg', value: '1' },
    { label: 'Non_Veg', value: '2' },
    { label: 'Veg and Non_Veg', value: '3' },
    
  ];

  const [dish,setDish] = useState(null);

  const handleContinue = () => {
    
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
        placeholder="Catering Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      

      <TextInput
        placeholder="Contact Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        style={styles.input}
      />
   
      <Dropdown
      style={styles. dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        labelField="label"
        valueField="value"
      data={dish_data}
      placeholder="Select Dish Type"
      value={dish}
      onChange={(item) => {
      setDish(item.value);
      }}
     
      
    />
      
      <Button title="Send for Approval" onPress={handleContinue} color={"black"}/>
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
 