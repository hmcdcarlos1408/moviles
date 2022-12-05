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
<<<<<<< HEAD
import PPP from "./screens/Principal";
import Cal from "./screens/Calcular";
import Info from "./screens/Informacion";
=======

>>>>>>> 9e6b32a406a5bf6def515d50796b2fe799a1e312
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform } from "react-native";
import PPP from "./screens/Principal";
import Info from "./screens/Informacion";
import Cal from "./screens/Calcular";

<<<<<<< HEAD
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
=======
const App=()=>{
  return (<NativeBaseProvider>
    <PPP>
      <Info></Info>
<Cal></Cal>
    </PPP> 
  </NativeBaseProvider>)
}
export default App();
>>>>>>> 9e6b32a406a5bf6def515d50796b2fe799a1e312
