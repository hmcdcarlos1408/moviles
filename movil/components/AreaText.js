import React from "react";
import {  TextArea, Box } from "native-base";

const Area = () => {
    return <Box alignItems="center" w="100%">
        <TextArea h={20} placeholder="Area de texto" w="75%" maxW="300" />
      </Box>;
  };

export default Area
