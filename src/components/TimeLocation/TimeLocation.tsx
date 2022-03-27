import React from 'react';
import {Box, Flex, Spacer} from "@chakra-ui/react";
import {SunIcon} from "./SunIcon";
import {MoonIcon} from './MoonIcon'
import {QuoteType} from "../../models/quote.interface";

interface IProps_TimeLocation{
    time: string,
    abbr: string,
    city: string,
    country: string,
    timeOfDay: string,
    isDaytime: boolean
}

const TimeLocation: React.FC<IProps_TimeLocation> = ({time, abbr, city, country, timeOfDay, isDaytime}) => {
    return (
        <Box>
            <Flex>
                {isDaytime?  <SunIcon boxSize='1.5rem' mr='3'/> : <MoonIcon boxSize='1.5rem' mr='3'/>}
                <Box textStyle='h4' fontSize='0.9375rem'>
                    {`Good ${timeOfDay}`}
                </Box>
            </Flex>
            <Flex alignItems='baseline' justifyContent='space-between'>
                <Box textStyle='h2' fontSize='6.25rem' lineHeight="9rem" letterSpacing='-.15625rem'>
                    {time}
                </Box>
                <Box textStyle='h4' fontSize='0.9375rem'>
                    {abbr}
                </Box>
            </Flex>
            <Box textStyle='h3' fontSize='0.9375rem' lineHeight='0px' >
                {`In ${city}, ${country}`}
            </Box>
        </Box>
    );
};


export default TimeLocation;
