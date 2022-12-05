import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";
//import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform } from "react-native";
import PPP from "./screens/Principal";
import Info from "./screens/Informacion";
import Cal from "./screens/Calcular";


const App=() =>{
  return (
    <NativeBaseProvider>
<<<<<<< HEAD
   
=======
      <PPP/>
      <br/>
      //ok
      <Cal/>
      <br/>
      <Info/>
>>>>>>> 80b1215fb607a4db6a4b0d38115211075468a248
    </NativeBaseProvider>
    
);
}
export default App;