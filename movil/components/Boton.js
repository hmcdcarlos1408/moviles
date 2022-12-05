import React from 'react';
import { StyleSheet,View,Text,TouchableOpacity } from 'react-native';
const Boton = (props) =>{

    const { onPress, text } =props
    return(
        <TouchableOpacity 
        style ={styles.buttonContainer}
        onPress={onPress}
                >

            <Text style={styles.buttonText}> 
            { text }
            </Text>
        </TouchableOpacity>
    )
}
const styles =StyleSheet.create({
    buttonContainer:{
        alignItems:'center',
        backgroundColor:'blue',
        marginBottom: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    buttonText:{
        color:'#f9f9f9'
    },

});

export default Boton;

