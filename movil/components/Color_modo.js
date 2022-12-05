
import React from "react";
import { useColorMode, Text, Button, Center, Box } from "native-base";

function ModoColor() {
    const {
        colorMode,
        toggleColorMode} 
        = useColorMode();
        return <Center>
        <Box p="4" flex="10" maxH={50} w="100%" bg={color==="dark" ? "blueGray.500": "yellow.200"} safeArea>
            <Text>
                ACTIVA EL COLOR DE FONDO{" "}
                <Text bold fontSize="lg">
                    {colorMode}
                </Text>
            </Text>

            <Button onPress={toggleColorMode} h={10}>
                Cambia de color 
            </Button>
        </Box>
        </Center>

    }
    export default ModoColor