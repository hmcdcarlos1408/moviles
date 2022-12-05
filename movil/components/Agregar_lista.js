import React from "react";
import { Input, IconButton, Checkbox, Text, Box, VStack, HStack, Heading, Icon, Center, useToast } from "native-base";
import { Feather, Entypo } from "@expo/vector-icons"

const ALista = () => {
    const instState = [
        { tittle: "Dato 1", isCompleted: true },
        { tittle: "Dato 2", isCompleted: true }];
    const [lista, setList] = React.useState(instState);
    const [entrada_valores, setInputValue] = React.useState("");
    const campo = useToast();
    const addItem = tittle => {
        if (tittle === "") {campo.show({ tittle: "No EXISTE NADA QUE INGRESAR", statusL:"warning" });
        return; }
        setList(prevList => { return [...prevList, {tittle: tittle, isCompleted: false}];
        }); };
        const handleDelete = index => {
            setList(prevList => { const newList = [...prevList]; newList[index].isCompleted = !newList[index].isCompleted;
                return newList; }); };
        return (<Center w="100%">
             <Box maxW="320" w="100%">
                <Heading>
                    Actividades
                </Heading>
                <VStack space={4}>
                    <HStack space={2}>
                    <Input flex={3} onChangeText={v => setInputValue(v)} value={entrada_valores} placeholder="INTRODUCE TEXTO PARA AGREGAR A LISTA"/>
                    <IconButton variant="solid" icon={Feather} name="plus" />
                    </HStack>
                </VStack>
             </Box >
             </Center >) 
}