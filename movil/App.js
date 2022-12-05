import React from "react";
import { ImageBackground, StyleSheet, Text, View, Button, SafeAreaView,Alert } from "react-native";
import { CreateNativeStackNavigator } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import Boton from "./components/Boton";
import Home from "./components/Home";
import MainStack from "./navigation/MainStack";


const image = { uri: "https://reactjs.org/logo-og.png" };
const Separator = () => (
  <View style={styles.separator} />
);

function App(){
  return(
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1}}>
 
    
     <MainStack />
   
    
    </SafeAreaView> 
  </View> 
  );
} 
const styles=StyleSheet.create({
  container:{
  
    backgroundColor:'#f0f0f0',
    flex:1,
    justifyContent: 'center'

  },

  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }



})
export default  App;