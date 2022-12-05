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

import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform } from "react-native";
import PPP from "./screens/Principal";
import Info from "./screens/Informacion";
import Cal from "./screens/Calcular";

const App=()=>{
  return (<NativeBaseProvider>
    <PPP>
      <Info></Info>
<Cal></Cal>
    </PPP> 
  </NativeBaseProvider>)
}
export default App();
