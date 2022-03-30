import React from 'react';
import {Container} from "@chakra-ui/react";
import daytimeBgMobile from "../../assets/images/mobile/bg-image-daytime.jpg";
import nighttimeBgMobile from '../../assets/images/mobile/bg-image-nighttime.jpg'
import daytimeBgTablet from '../../assets/images/tablet/bg-image-daytime.jpg'
import nighttimeBgTablet from '../../assets/images/tablet/bg-image-nighttime.jpg'

interface IProps_Background{
    isDaytime: boolean
}

const Background:React.FC<IProps_Background> = ({isDaytime}) => {
    return (
        <Container
            backgroundColor='white'
            m='0px'
            maxW='100%'
            zIndex='-1'
            position='absolute'
            height="100vh"
            overflow="auto"
            bgImage={{
                        sm:isDaytime? `url(${daytimeBgMobile})` : `url(${nighttimeBgMobile})`,
                        md:isDaytime?  `url(${daytimeBgTablet})` : `url(${nighttimeBgTablet})`
                        }}
            bgSize='cover'
            filter='auto'
            brightness='60%'
        />
    );
};

export default Background;
