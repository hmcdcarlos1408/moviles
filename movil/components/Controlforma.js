import React from "react";
import {FormControl, Select, Center } from "native-base";

const Control =() =>{
    return(
        <Center>
        
        <FormControl isRequired>
            <FormControl.Label bgColor={"amber.300"}> Lista desplegable</FormControl.Label>
            <Select placeholder="Lista de Seleccion">
            <Select.Item label="Opcion 1" value="8"/>
            <Select.Item label="Opcion 2" value="2"/>
            <Select.Item label="Opcion 3" value="3"/>
            <FormControl.ErrorMessage leftIcon={<warningOutlineIcon size="xl"/> } >
                Campo Obligatorio
            </FormControl.ErrorMessage>
            </Select>
        </FormControl>
        </Center>
    )
}
export default Control