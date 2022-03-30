import React from 'react';
import {Box, Flex, Spacer} from "@chakra-ui/react";
import {SunIcon} from "./SunIcon";
import {MoonIcon} from './MoonIcon'
import {QuoteType} from "../../models/quote.interface";

interface IProps_TimeLocation{
    isExpanded: boolean
    time: string,
    abbr: string,
    city: string,
    country: string,
    timeOfDay: string,
    isDaytime: boolean
}

const TimeLocation: React.FC<IProps_TimeLocation> = ({ isExpanded, time, abbr, city, country, timeOfDay, isDaytime}) => {
    return (
        <Box p="0 9%" mt={isExpanded ? "20%": "0"}>
            <Flex>
                {isDaytime?  <SunIcon boxSize='1.5rem' mr='3'/> : <MoonIcon boxSize='1.5rem' mr='3'/>}
                <Box  textStyle='h4' fontSize={{base:'0.9375rem', md:'1.125rem'}}>
                    {`Good ${timeOfDay}`}
                    <Box as='span' display={{base:'none', md:'inline'}}>, It is currently</Box>
                </Box>
            </Flex>
            <Flex alignItems='baseline'  gap={{base:'1.875rem', md:'3.125rem'}}>
                <Box textStyle='h2'
                     fontSize={{base:'6.25rem', md:'10.9375rem'}}
                     lineHeight={{base:"9rem", md:'10.9375rem'}}
                     letterSpacing={{base:'-.15625rem', md:'-0.27375rem'}}>
                    {time}
                </Box>
                <Box textStyle='h4'
                     fontSize={{base:'0.9375rem', md:'2rem'}}
                     letterSpacing='0rem'
                     lineHeight='1.75rem'
                >
                    {abbr}
                </Box>
            </Flex>
            <Box textStyle='h3'
                 fontSize={{base:'0.9375rem', md: '1.12rem' }}
                 lineHeight={{base:'0rem', md:'1.75rem'}} >
                {`In ${city}, ${country}`}
            </Box>
        </Box>
    );
};


export default TimeLocation;
