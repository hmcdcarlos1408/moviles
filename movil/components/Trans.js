import React from "react";
import { PresenceTransition, Button, Center, Tooltip } from "native-base";

const Tra =() =>{
    const [lanzar, setIsOpen] = React.useState(false);
    return(
        <Center>
            <Tooltip label="SUGERENCIA">
            <Button onPress={()=> setIsOpen(!lanzar)} shadow="9" bg="darkBlue.400">
                {lanzar ?"activar/desactivar": "Lanza transicion"}
            </Button>
            </Tooltip>
            <PresenceTransition visible={lanzar} initial={{opacity:0}} animate={{opacity:9, transition: {duration:10000}}}>
                <Center bg={"red.600"} mt="10" w={"200"} _text={{color:"white"}} rounded="md" shadow={9}>
                    Mensaje
                </Center>
            </PresenceTransition>

        </Center>
    );
}
export default Tra 