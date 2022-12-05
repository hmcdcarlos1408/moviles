import React from 'react';
import {StatusBar} from 'expo-status-bar';
import { StyleSheet, TextInput,Text, View,Item } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import Boton from "../components/Boton";
import Profile from "./Profile";
import {AppLoading} from 'expo';
import {FontAwesome}from '@expo/vector-icons';

const LoginForm = ({navigation}) => {
    return (
      <View style={styles.container}>
        < Text style={styles.titulo}>¡Hola!</Text>
        <FontAwesome name='user'size={20}></FontAwesome>
    <TextInput placeholder='clajsds@gmail.com'style={styles.TextInput}/>
    <FontAwesome name='lock'size={20}></FontAwesome>
    <TextInput placeholder='password'style={styles.TextInput}
    secureTextEntry={true}/>
    
    <StatusBar style="auto"/>
    <Boton 
  text ="Acceder"
  onPress= {()=>{
    navigation.navigate('Profile'
       
    )}}
  />
      </View>
    );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f1f1f1',
    alingItems:'center',
    justifyContent:'center',
  },
 
  titulo:
  {
    fontSize:80,
    color:'#000',
    fontWeight:'bold',
},
subtitulo:{
  fontSize:20,
  color:'gray',
    fontWeight:'bold',
},
TextInput:{
  borderWidth:1,
  borderColor:'#fff',
  padding:10,
  paddingStart:30,
  width:'80%',
  height:50,
  marginTop:20,
  borderRadius:30,
  backgroundColor:'#fff',

},
});

export default LoginForm;
