import React from "react";
import { useToast, Button, VStack, Center } from "native-base";

const Toad =() => {
    const Tos =useToast();
    return (
        <Center>
    <VStack>
        <Button onPress={() => Tos.show({title:"El futuro del arte esta en el...", placement:"bottom"})}> 
        Boton que dice la verdad
        </Button>
        <br>
        </br>
        <Button onPress={() => Tos.show({title:"La derecha", placement:"bottom-right"})}> 
        Boton derecho
        </Button>
        <br>
        </br>
        <Button onPress={() => Tos.show({title:"La izquierda", placement:"bottom-left"})}> 
        Boton izquierdo
        </Button>
        </VStack>
        </Center>
    );
}

export default Toad