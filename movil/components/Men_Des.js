import React from "react";
import { Slide, Button, Text, Center, Alert } from "native-base";

const MenuDes=()=>{
   const [Lanza_evento, setIsOpen] = React.useState(false);
   const str = `${Lanza_evento ? "inicializando": "Realiza accion"}`;
    return(
        <Center>
            <Slide in={Lanza_evento} placement="bottom" safeAreaTop={10}>
                <Alert status={"info"} >
                    <Alert.Icon/>
                    <Text color={"error.800"} fontWeight="bold" bg={"blue.300"}>
                        Evento Activado/Lanzado
                    </Text>
                </Alert>
            </Slide>
            <Button onPress={() => setIsOpen(!Lanza_evento)}>
                {str}
            </Button>
        </Center>
    );
}
export default MenuDes