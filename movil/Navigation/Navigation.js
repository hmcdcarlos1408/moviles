import React from "react"
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import PPP from "../screens/Principal";







const Stack= createNativeStackNavigator()

const MainStack = () => {
return (
    <NavigationContainer>
        <Stack.Navigator 
                screenOptions={{
                    headerShown:false,
                    }}>

            <Stack.Screen 
            name='PPP'
            component={PPP}
            />
         

          
        </Stack.Navigator>
    </NavigationContainer>
)
}
export default MainStack;