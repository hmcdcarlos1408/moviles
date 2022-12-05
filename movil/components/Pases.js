import React from "react";
import { Alert, Box, Button, Center , Flex, HStack, Input, Slide, Text, VStack} from "native-base";
const Pase=()=>{
    const [copiatext,setCopyText]=React.useState("");
    const [PegaText,setPasteText]=React.useState("");
    return (
        <Box>
           <VStack space={4}>
            <HStack space={4}>
                <Input placeholder="Introduce etexto" onChange={v=setCopyText(v)} value={copiatext}/>
                <Button onPress={()=>setPasteText(copiatext)} w="150" h={"10"}>Copyta Texto</Button>
            </HStack>
            <HStack space={4}>
                <Input placeholder=" Texto Pegar" onChange={v=>setPasteText()} value={PegaText}/>
                <Button onPress={()=>setPasteText(value)} w="150" h={10}>Pega Texto</Button>
            </HStack>
           </VStack>
        </Box>
    );

}
export default Pase;