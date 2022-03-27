import React from 'react';
import {Container} from "@chakra-ui/react";
import daytimeBg from "../../assets/images/mobile/bg-image-daytime.jpg";
import nighttimeBg from '../../assets/images/mobile/bg-image-nighttime.jpg'

interface IProps_Background{
    isDaytime: boolean
}

const Background:React.FC<IProps_Background> = ({isDaytime}) => {
    return (
        <Container
            maxW='100%'
            zIndex='-1'
            position='absolute'
            height="100vh"
            overflow="auto"
            bgImage={isDaytime? `url(${daytimeBg})` : `url(${nighttimeBg})`}
            bgSize='cover'
            filter='auto'
            brightness='60%'
        />
    );
};

export default Background;
