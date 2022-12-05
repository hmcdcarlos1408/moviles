import React from "react";
import { Center, Heading, Input, Button, Box, HStack, Text, VStack } from "native-base";
const Info = () => {
    return (
<Center>   
      <Box p="2" width="350" height="500" bgColor="lightBlue.100" rounded="xl" shadow={2}>
          <Heading alignSelf="center">
            Informacion
          </Heading>
          <Text alignSelf="left">
              Impuestos
          </Text>
          
          <Center>
            <br/>
          <HStack space={3}>
            <Button>
              IVA
            </Button>
            <Button>
              IEPS
            </Button>
            <Button>
              ISR
            </Button>
            <Button>
              ISAN
            </Button>
          </HStack>
          </Center>
            <br/>
          <Text alignSelf="left"> Tipos de contribuyentes </Text>
          <Center>
            <Box  ></Box>
          <HStack space={3}>
            <Button>
              Persona Fisica 
            </Button>
            <Button>
              Persona Moral
            </Button>
            </HStack>
          </Center>
          
          
          
      </Box>
</Center>
    )
}

export default Info;
