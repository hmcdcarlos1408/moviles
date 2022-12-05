import React from "react";
import { Spinner, HStack, Text, Center } from "native-base";

const Pe =() =>{
    return(
        <Center>
        
        <HStack>
        
        <Spinner size="lg"/>
        
    
        </HStack>
        <Text> Procesando su mmda </Text>

        <Spinner color="red.500"/>    
       
        </Center>
    );
}
export default Pe
