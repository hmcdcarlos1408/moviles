import React from "react";
import { Switch, HStack, Text } from "native-base";

const NSwitch =() =>{
    return(
        <HStack>
            <Text alignContent={"center"}> Switch ejemplo 1</Text>
            <Switch size="sm"/>

            <Text alignContent={"center"}> Switch ejemplo 2 </Text>
            <Switch size="md"/>

            <Text alignContent={"center"}> Switch ejemplo 3</Text>
            <Switch size="lg"/>

        </HStack>
    );
}

export default NSwitch