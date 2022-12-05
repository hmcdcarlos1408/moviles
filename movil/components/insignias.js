import React from "react";
import { Box, Badge, HStack, VStack, Button } from "native-base";

function Insignia(){
    return(
        <Box alignItems={"center"}>
        <HStack>
            <Badge colorScheme="danger"> peligro </Badge>
            <Badge colorScheme="black"> Informacion </Badge>
            <Badge colorScheme="red"> Alerta </Badge>
        </HStack>

        <VStack>
            <Badge colorScheme="red" mb="-4" mr="4" alignSelf="flex-end" variant="solid" zIndex={1}  rounded="full" _text={{frontSize:10}}> 9 </Badge>
            <Button> Aviso</Button>
        </VStack>
        </Box>
    );
}

export default Insignia