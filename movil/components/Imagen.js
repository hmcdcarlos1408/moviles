import React from "react";
import { Image, Center } from "native-base";

function Imagen() {
    return <Center>
        <Image source={{
            uri: "https://www.caracteristicas.co/wp-content/uploads/2018/09/pradera-3-e1578854186502.jpg"
        }} alt="Aqui debe de haber una imagen" size="xl" />
    </Center>
}
export default Imagen