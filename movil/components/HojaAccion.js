import React from "react";
import { Actionsheet, Button,Text, Box,useDisclose, Center } from "native-base";

function Hoja (){
    const {isOpen, onOpen, onClose} = useDisclose();
        return <Center>
        <Button onPress={onOpen}>=</Button>
        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content>
            <Box w="100%" h={60} px={4} justifyContent="center">
              <Text fontSize="16" color="gray.500" _dark={{
              color: "gray.300"
            }}>
                Accion
              </Text>
            </Box>
            <Actionsheet.Item>Linea 1</Actionsheet.Item>
            <Actionsheet.Item>Linea 2</Actionsheet.Item>
            <Actionsheet.Item>Linea 3</Actionsheet.Item>
            <Actionsheet.Item>Linea 4</Actionsheet.Item>
          </Actionsheet.Content>
        </Actionsheet>
      </Center>;
}
export default Hoja