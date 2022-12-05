import React from "react";
import { Flex, Divider, Text, Box } from "native-base";

const Divisor =() =>{
    return (
        <Box alignItems={"center"}>
            <Flex direction="row">
                <Text> Izquierda</Text>
                <Divider bg="red.500" thickness={"5"} orientation="vertical"/>
                <Text> Centro</Text>
                <Divider bg="green.500" thickness={"5"} orientation="vertical"/>
                <Text> Derecha</Text>
            </Flex>
        </Box>
    );
}

export default Divisor