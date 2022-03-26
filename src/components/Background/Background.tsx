import React from 'react';
import {Container} from "@chakra-ui/react";
import daytimeBg from "../../assets/bg-image-daytime.jpg";

const Background = () => {
    return (
        <Container
            maxW='100%'
            zIndex='-1'
            position='absolute'
            height="100vh"
            overflow="auto"
            bgImage={`url(${daytimeBg})`}
            bgSize='cover'
            filter='auto'
            brightness='75%'
        />
    );
};

export default Background;
