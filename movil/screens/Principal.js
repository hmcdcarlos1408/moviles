import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Center, HStack, Input, Box, Text, Button, Menu, Pressable, HamburgerIcon, StatusBar, IconButton, Icon} from "native-base";

const PPP = () => {
  return (
    //Cabecera 
    <Center>
      <StatusBar bg="#3700B3" barStyle="light-content"/> 
      <Box safeAreaTop bg="blue.400" /> 
      <HStack bg="blue.400" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="350">
        <HStack alignItems="center" justifyContent="space-between">
            <Button bgColor="blue.400" >
            <AntDesign name="bars" style={{ color: 'white', fontSize: 35 }}/>
            </Button>
            
          <Text color="white" fontSize="20" fontWeight="bold">
            Pagina principal 
          </Text>
        </HStack>
        <HStack>
            <Button bgColor="blue.400" >
                <MaterialCommunityIcons name="account" style={{ color: 'white', fontSize: 35 }}/>
            </Button>
        </HStack>
      </HStack>
        <br/>
      <HStack>
        <Input w="100%" flex={1} size="xl" variant="underlined" placeholder="¿Que deseas buscar?"> 
        </Input>
        <Button variant="unstyled" width="20" height="55"> <AntDesign name="search1" style={{ color: 'black', fontSize: 35 }}/> </Button>  
      </HStack>
      <br/>
      <Box p="2" width="350" height="500" bgColor="lightBlue.100" rounded="xl" shadow={2}>
          <Text alignSelf="center"> ¡Bienvenido a MySATapp! </Text>
          <br/>
          <Text alignSelf="center"> Explora por app para aprender sobre el SAT </Text>
      </Box>
    </Center>    
  );
};

export default PPP;

