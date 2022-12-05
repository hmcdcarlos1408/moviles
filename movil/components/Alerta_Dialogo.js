import React from "react";
import { AlertDialog, Button, Center, Link } from "native-base";

const ADialogo =() =>{
    const [abrir, setIsOpen] = React.useState(false);
    const cerrar =() => setIsOpen(false);
    const cancelar = React.useRef(null);
    return (
        <Center>
            <Button onPress={()=>setIsOpen(!abrir)}>
                Lanzar alerta de dialogo 
            </Button>
            <AlertDialog isOpen={abrir}>
                <AlertDialog.Content>
                    <AlertDialog.Header>
                        Encabezado de componente de alerta de dialogo
                    </AlertDialog.Header>
                    <AlertDialog.Body>
                        Mensaje que tendra nuestra ventana o componenete de alerta de dialogo 
                        no importa el texto que contenga con AlertDialog.Body
                        los ajusta
                    </AlertDialog.Body>
                    <AlertDialog.Footer>
                    <Center>
                        <Button.Group space={3}>                    
                    <Link href="https://www.youtube.com" isExternal>
                        <Button bgColor={"amber.700"}>
                            Youtube
                        </Button>
                    </Link>
                    <Button bgColor={"amber.300"} onPress={cerrar}>
                        cerrar
                    </Button>    
                        </Button.Group>
                    </Center>
                    </AlertDialog.Footer>
                </AlertDialog.Content>
            </AlertDialog>
        </Center>
    );
}
export default ADialogo