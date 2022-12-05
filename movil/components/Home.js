import React from "react";
import { ImageBackground, StyleSheet, Text, View, Button, SafeAreaView,Alert } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import Boton from "./Boton";
import LoginForm from "./LoginForm";
import Register from "./Register";


const image = { uri: "https://reactjs.org/logo-og.png" };
const Separator = () => (
  <View style={styles.separator} />
);

const Home = ({ navigation }) => (
  <View style={styles.container}>
  <SafeAreaView style={{ flex: 1}}>
<ImageBackground source={image} resizeMode="cover" style={styles.image}>
  <Text style={styles.text}>My Sat App</Text>
  <Separator />

  <Boton 
  text ="registrarme"
  onPress= {()=>{
    navigation.navigate('Register',
    )
  }}
  />

<Boton 
  text ="Iniciar Sesión"
  onPress= {()=>{
    navigation.navigate('LoginForm',
    )
  }}
  />
  </ImageBackground>
    </SafeAreaView> 
  </View> 
  
    
 
);
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

export default Home ;
