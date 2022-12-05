import React from "react";
import { Center, Heading, Input, Button, Box, HStack, Text } from "native-base";
const Info = () => {
    return (
<Center>   
      <Box p="2" width="350" height="500" bgColor="lightBlue.100" rounded="xl" shadow={2}>
          <Heading alignSelf="center">
            Informacion
          </Heading>
          <Text alignSelf="center">
              Explora la informacion que tenemos para ti
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
              Calcular
            </Button>
          </HStack>
            </Center>
          
      </Box>
</Center>
    )
}

export default Info;
