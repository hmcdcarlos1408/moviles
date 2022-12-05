import React from "react";
import { Button, TextInput, Shock, Factory, Input, Stack} from "native-base";

const Foquito =() =>{
    const Entrada = Factory(Input);
    const EntradaRef = React.useRef(null); 

    return (<Stack space="5">
        <Entrada width="50" placeholder= "Campo invisible" ref={EntradaRef}/>
        <Button onPress={()=>{EntradaRef.current.focus}}>
        Lanza evento
        </Button>

        </Stack>
    );
}
export default Foquito