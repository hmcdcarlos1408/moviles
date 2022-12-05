import React from 'react';
import {StatusBar} from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Container, Center, Heading, VStack, Box, FormControl, Input, Link, Button, HStack, Image, ScrollView } from "native-base";
import axios from "axios";
import SelectList from 'react-native-dropdown-select-list';
import { useNavigation } from '@react-navigation/native';
import {Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { NativeBaseProvider } from 'native-base';
import Boton from "./Boton";
import LoginForm from "./LoginForm";


const Register = ({ navigation }) => {

  const [selected, setSelected] = React.useState("");
  const [formData, setFormData] = React.useState({});
  const [errors, setErrors] = React.useState({});
  let pattern = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
  )

  //constante de navegacion sin validacion
  const navigate = useNavigation();

  const validate = () => {
      if (!formData.nombre) {
          setErrors({
              ...errors,
              nombre: 'El nombre es requerido'
          });
          return false;
      } else if (formData.nombre.length < 3) {
          setErrors({
              ...errors,
              nombre: 'El nombre es muy corto'
          })
          return false;
      }

      if (!formData.password || formData.password.length < 8) {
          setErrors({
              ...errors,
              password: 'Contraseña muy corta'
          })
          return false;
      }
      else if (!pattern.test(formData.password)) {
          console.log('password', formData.password)
          setErrors({
              ...errors,
              password: "Recuerda que debes agregar almenos un caracter especial, un numero y una mayuscula"
          });
          return false;
      }
      
      if (!formData.email) {
          setErrors({
              ...errors,
              email: "Email incorrecto"
          });
      }
      
      
      setErrors({})
      return true;
  };


  const onSubmit = async () => {
      validate() ? console.log('Submitted', formData) :
          setFormData({
              ...formData,
              action: 'register'
          })
      console.log('FormData', formData)
      const formDataforRequest = new FormData()

      formDataforRequest.append("nombre", formData.nombre)

      formDataforRequest.append("password", formData.password)
      formDataforRequest.append("email", formData.email)
  
      formDataforRequest.append("action", "register")
      console.log('FormDataRequest', formDataforRequest)

      const response = await axios.post(
          'localhost:80/pruebas/api/register.php',  //Si no encuentra el localhost, poner direccion de la maquina
          formDataforRequest,
          {
              Headers: {
                  'Content-Type': 'multipart/form-data',
                  "Access-Control-Allow-Origin": "*"
              },
              transformRequest: formData => formDataforRequest,
          }
      )
      console.log('typeof', typeof (response.data))
      console.log('Object.keys', Object.keys(response.data).length)
      console.log('Object', response.data)

      if (Object.keys(response.data).length >= 1) {
          Alert.alert("Registro", "Se registro el usuario");
          navigation.navigate("LoginForm");
      } else {
          alert("Hay un problema con tus datos verificalo")
      }
  }


  return (
    <NativeBaseProvider>
      <ScrollView>
          <Center w="100%">
           
              <Text color="#1b396a" fontWeight="semibold" fontSize="15">Register</Text>
              <Box px="1" py="8" w="90%" maxW="290">
                  <VStack space={3} mt="5">
                      <FormControl isRequired isInvalid={'email' in errors}>
                          <FormControl.Label>Email</FormControl.Label>
                          <Input p={2} placeholder="example@mail.com" onChangeText={value => setFormData({
                              ...formData,
                              email: value
                          })} borderRadius={30} />
                          {'email' in errors ?
                              <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage> :
                              <FormControl.HelperText>
                                  Enter the email
                              </FormControl.HelperText>
                          }
                      </FormControl>
                      <FormControl isRequired isInvalid={'password' in errors}>
                          <FormControl.Label>Contraseña</FormControl.Label>
                          <Input type="password" p={2} placeholder="Mora than 8 caracters" onChangeText={value => setFormData({
                              ...formData,
                              password: value
                          })} borderRadius={30} />
                          {'password' in errors ?
                              <FormControl.ErrorMessage>{errors.password}</FormControl.ErrorMessage> :
                              <FormControl.HelperText>
                                  The password must have a min of 8, one Capital and One special character
                              </FormControl.HelperText>
                          }
                      </FormControl>
                      <FormControl isRequired isInvalid={'nombre' in errors}>
                          <FormControl.Label>Nombre</FormControl.Label>
                          <Input placeholder="Nombre" onChangeText={value => setFormData({
                              ...formData,
                              nombre: value
                          })} borderRadius={30} />
                          {'nombre' in errors ?
                              <FormControl.ErrorMessage>{errors.nombre}</FormControl.ErrorMessage> :
                              <FormControl.HelperText>
                                  Nombre
                              </FormControl.HelperText>
                          }
                      </FormControl>
                      
                      <Button 
                          mt="2"
                          size="lg"
                          backgroundColor="#1b396a"
                          borderRadius={30}
                          onPress={onSubmit} 
                          >
                          Registrarme
                          
                      </Button>
                      <Link _text={{
                          color: "indigo.500",
                          fontWeight: "medium",
                          fontSize: "sm"
                      }} onPress={() => { navigation.navigate("LoginForm") }}>
                          I have an account
                      </Link>
                  </VStack>
              </Box>
          </Center>
      </ScrollView>
      </NativeBaseProvider>
  )
 
}

export default Register;

