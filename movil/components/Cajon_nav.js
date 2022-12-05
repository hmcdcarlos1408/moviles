import React from "react";
import { useMediaQuery, HStack, VStack, Center, Skeleton } from "native-base";

const Cajxn =() =>{
    const [isSmallScreen] = useMediaQuery({
        maxHeight: 300,
        maxWidth: 200
    });
    return (
        <Center w="200">
        {isSmallScreen ?  
        <HStack bordewidth="1" space={10} borderColor="green.500">
        </HStack>
            : 
            <HStack w="100%" maxWidth="400">
            <Skeleton flex={"1", h="100"}/>
                <VStack flex={"3"}>
                    <Skeleton/>
                    <Skeleton.Text/>
            <HStack space={"2"} alignItems={"center"}/>
                    <Skeleton/>
                    <Skeleton h="32" flex="2" rounded={"full"}/>
                    <Skeleton h="32" flex="2" rounded={"full"}/>
            </HStack>
                </VStack>
            </HStack>}
            
        </Center>
        );
}
export default Cajxn