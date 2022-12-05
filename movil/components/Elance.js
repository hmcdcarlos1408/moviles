import React from "react";
import {
    Text,
    Link,
    Button,
    Box,
    Center
  } from "native-base";
  
const EjemploLink = () => {
  return(
    <Center>
      <Box>
          <br></br>
          <Link href="https://www.youtube.com">    
          <Text> Texto de liga  </Text>
          <br></br>
          <Button> Youtube</Button>
          </Link>    
      </Box>
      </Center>
  );
}
export default EjemploLink
