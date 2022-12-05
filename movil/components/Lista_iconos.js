import React from "react";
import { Box, Stagger, Icon, IconButton, useDisclose, HStack } from "native-base";
import { MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";

const LI =() => {
    const {isOpen, onToggle} = useDisclose();
    <Box>
        <Box alignItems={"center"}>
            <Stagger
                visible={isOpen}
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                >
                <IconButton variant={"solid"} borderRadius="fulla" size="lg" bg="blue.400"
                icon={<Icon as={MaterialCommunityIcons} size="6" name="microphone" color="amber.200" _dark={{color:'blueGray.100'}} />}
                href=""/>
                <IconButton variant={"solid"} borderRadius="fulla" size="lg" bg="blue.400"
                icon={<Icon as={MaterialCommunityIcons} size="6" name="photo-library" color="amber.200" _dark={{color:'blueGray.100'}} />}/>
                <IconButton variant={"solid"} borderRadius="fulla" size="lg" bg="blue.400"
                icon={<Icon as={MaterialCommunityIcons} size="6" name="video" color="amber.200" _dark={{color:'blueGray.100'}} />}/>
            </Stagger>
        </Box>
        <HStack justifyContent={"center"}>
            <IconButton variant={"solid"} borderRadius="full" borderBottomColor="full" size={"lg"}
            onPress={onToggle} bg="red.300"
            icon={<Icon as={MaterialCommunityIcons} size="6" name="dots-horizontal"
            color="amber.100" _dark={{color:"blue.200"}} onPress="" />}/>
        </HStack>
    </Box>

};
export default LI