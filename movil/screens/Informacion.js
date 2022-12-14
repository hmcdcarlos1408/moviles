import React from "react";
import { Center, Heading, Button, Box, HStack, Text, Modal } from "native-base";

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
          <Box rounded="xl" bgColor="primary.800" height="1" width="300"></Box>
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
          <Box rounded="xl" bgColor="primary.800" height="1" width="300"></Box>
            <br/>
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
