import { ReactDOM } from "react";
import { Avatar, HStack, VStack } from "native-base";

const Avetar=() =>{
return(
    <HStack>
    <Avatar bg={"amber.500"} source={{uri:"https://lh3.googleusercontent.com/gBeuBYOYlpKGYoETIxeuuMAASpYWKHz8kN1YjOlRTGXeazhAw-Tp4uztU8tLdlV9p5AnNC8Z4VlQTrfXPAXd-3PGlxWMk4uV-9sv=rw-e365-w500"}}> 
       1
    </Avatar>

    <Avatar bg={"amber.500"} > 
       2
    </Avatar>

    <Avatar.Group max="2">
        <Avatar bg={"amber.500"} source={{uri:"https://lh3.googleusercontent.com/gBeuBYOYlpKGYoETIxeuuMAASpYWKHz8kN1YjOlRTGXeazhAw-Tp4uztU8tLdlV9p5AnNC8Z4VlQTrfXPAXd-3PGlxWMk4uV-9sv=rw-e365-w500"}}> 
           1
        </Avatar>

        <Avatar bg={"amber.500"} > 
            2
        </Avatar>
        </Avatar.Group>
        <VStack>
        <Avatar bg={"amber.500"} source={{uri:"https://lh3.googleusercontent.com/gBeuBYOYlpKGYoETIxeuuMAASpYWKHz8kN1YjOlRTGXeazhAw-Tp4uztU8tLdlV9p5AnNC8Z4VlQTrfXPAXd-3PGlxWMk4uV-9sv=rw-e365-w500"}}> 
           1
        </Avatar>

        <Avatar bg={"amber.500"} > 
            2
        </Avatar>
        
        </VStack>
    </HStack>
     
)

}
export default Avetar