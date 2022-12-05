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
import PPP from "./screens/Principal";
import Cal from "./screens/Calcular";
import Info from "./screens/Informacion";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform } from "react-native";

const App=() =>{
  return (
    <NativeBaseProvider>
      <PPP/>
      <br/>
      <Cal/>
      <br/>
      <Info/>
    </NativeBaseProvider>
    
);
}
export default App;