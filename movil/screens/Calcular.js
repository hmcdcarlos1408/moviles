import React from "react";
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Center,StatusBar, Box, HStack, Button, Text,Pressable, HamburgerIcon, Input, Heading, Menu } from "native-base";

const Cal = ({navigation}) =>{
  return(
<Center>   
      <Box p="2" width="350" height="500" bgColor="lightBlue.100" rounded="xl" shadow={2}>
          <Heading alignSelf="center">
            Calculadora
          </Heading>
          <Center>
            <Input w="100%" flex={1} size="xl" variant="underlined" placeholder="Ingresa la cantidad"> 
            </Input>
            <br/>
            <Button>
              Calcular
            </Button>
            </Center>
          
      </Box>
</Center>
  );
}

export default Cal;