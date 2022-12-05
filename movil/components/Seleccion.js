import React from "react";
import {Checkbox, HStack, Box} from "native-base";

function Seleccion() {
    return <Box alignItems="center"> 
        <HStack space={6}>
    <Checkbox shadow={2} value="test" accessibilityLabel="Checkbox 1" defaultIsChecked>
      Aqui hay un Checkbox
    </Checkbox>
    <Checkbox shadow={2} value="test" accessibilityLabel="Checkbox 1">
      Aqui hay otro Checkbox
    </Checkbox>
  </HStack>
  </Box>
}
export default Seleccion
