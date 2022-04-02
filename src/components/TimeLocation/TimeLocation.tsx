import React from 'react';
import {Box, Flex} from "@chakra-ui/react";
import {SunIcon} from "./SunIcon";
import {MoonIcon} from './MoonIcon'
// import {QuoteType} from "../../models/quote.interface"
import {TimeLocationStyle} from './styles'

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
        <Box sx={TimeLocationStyle.base} mt={{base: isExpanded? '20%':'0', md: isExpanded? '6%': '0', lg:isExpanded? '0%': "0", xl:isExpanded? '7%': "0" }}  >
            <Flex>
                {isDaytime?  <SunIcon sx={TimeLocationStyle.icon} /> : <MoonIcon sx={TimeLocationStyle.icon}/>}
                <Box sx={TimeLocationStyle.greeting}  >
                    {`Good ${timeOfDay}`}
                    <Box sx={TimeLocationStyle.greeting_tablet} >, It is currently</Box>
                </Box>
            </Flex>
            <Flex sx={TimeLocationStyle.timeContainer} >
                <Box sx={TimeLocationStyle.time}>{time}</Box>
                <Box sx={TimeLocationStyle.timeAbbr}>{abbr}</Box>
            </Flex>
            <Box sx={TimeLocationStyle.location} >
                {`In ${city}, ${country}`}
            </Box>
        </Box>
    );
};


export default TimeLocation;
