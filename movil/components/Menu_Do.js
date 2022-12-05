import React from "react";
import { Box, Menu, HamburgerIcon, Divider, Center} from "native-base";
import { Pressable } from "react-native";
const MenuH=()=>{
    return(
        <Center>
    <Box>
        <Menu abrir={()=>console.log("open")} 
        cerrar={()=>console.log("closes")}
        trigger={triggerProps=>{
            return <Pressable {...triggerProps}>
                <HamburgerIcon/>
            </Pressable>
        }}>
            <Menu.OptionGroup title="Primer menu" type="radio">
            <Menu.ItemOption>Opcion 1</Menu.ItemOption>
            <Menu.ItemOption>Opcion 2</Menu.ItemOption>
            </Menu.OptionGroup>
            <Divider/>
            <Menu.OptionGroup title="Segundo menu " type="checkbox">
            <Menu.Item>Opcion 3</Menu.Item>
            <Menu.Item>Opcion 4</Menu.Item>
            </Menu.OptionGroup>
            
        </Menu>
        </Box>
        </Center>

        );
}
export default MenuH