import React from "react";
import { Slider, Text, Box, Stack} from "native-base";

const Deslo =() =>{
        const [onChangeEndValue, setOnChangeEndValue] = React.useState(50);
    return(
        <Box>
            <Text> control deslisable </Text>
            <Stack>
                <Text textAlign={"center"}> Valor final - {onChangeEndValue} %</Text>
                <Slider defaultValue={34} onChangeEndValue ={v =>{v && setOnChangeEndValue(Math.floor(v));}}>
                <Slider.Track>
                    <Slider.FilledTrack/>
                </Slider.Track>
                    <Slider.Thumb/>
                </Slider>
            </Stack>
        
        </Box>
    );
}

export default Deslo