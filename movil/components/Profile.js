import {StatusBar} from 'expo-status-bar';
import { StyleSheet, TextInput,Text, View,Item } from 'react-native';
import { Center, HStack, Input, Box, Stack,  Button, Menu, 
  Pressable, HamburgerIcon,  IconButton, Icon} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import Boton from "../components/Boton";
import Profile from "./Profile";
import {AppLoading} from 'expo';
import {FontAwesome,}from '@expo/vector-icons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NativeBaseProvider } from 'native-base';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import "react-native-gesture-handler";
import {Calculadora} from "./Calculadora";
import {Informacion} from "./Informacion";

const Menu = createDrawerNavigator()



const Profile = ({navigation}) => {
  return (
    <NavigationContainer>
      <Menu.Navigator>
        <Menu.Screen
          name="Inicio"
          options={{
            headerTitle: "Nuevo titulo",
          }}
          component={Inicio}
        />
        <Menu.Screen name="Contacto" component={Contacto} />
        <Menu.Screen name="Acercade" component={Acercade} />
      </Menu.Navigator>
    </NavigationContainer>
  );
};
export default Profile;
