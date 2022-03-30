import React from 'react';
import {Box, Container, Flex, Text} from "@chakra-ui/react";
import {QuoteType} from "../../models/quote.interface";

interface IProps_AdditionalInfoToggle{
    isExpanded: boolean,
    timezone: string,
    dayOfTheYear: number,
    dayOfTheWeek: number,
    weekNumber: number,
    isDaytime:boolean
}

const AdditionalInfo:React.FC<IProps_AdditionalInfoToggle> = ({isExpanded, timezone,dayOfTheYear,dayOfTheWeek,weekNumber, isDaytime}) => {
    return (
        <Container
             // bgGradient='linear(to-r, rgba(0,0,0,0), rgba(0,0,0,0))'
             bg={isDaytime?"rgba(255, 255, 255, 0.75)":"rgba(0, 0, 0, 0.75)"}
             backdropFilter='blur(10px)'
             color={isDaytime? 'black': 'white'}
             minW='100%'
             position='fixed'
             left='0rem'
             bottom='0px'
             mt="10%"
             p={{base:"8% 10%", md:"15% 10%"}}
             display={isExpanded? 'block': 'none'}>
                <Box display={isExpanded? {md:'flex'}:'none'} flexDirection={{md:"row"}} justifyContent={{md:"space-between"}}>
                    <Box display={{md:'flex'}} flexDirection={{md:"column"}} >
                        <Flex marginBottom={{md:'5rem'}}  flexDirection={{base:'row', md:"column"}} alignItems='baseline' justifyContent="space-between" mb="5%">
                            <Text fontSize={{base:'0.625rem', md:'0.8125rem'}} letterSpacing={{base:'0.125rem', md:'0.1625rem'}} lineHeight={{base:'0.57142rem', md:'1.75rem'}} textStyle='h4'>Current Timezone</Text>
                            <Text fontSize={{md:'2.5rem'}} lineHeight={{md:'1.75rem'}} textStyle='h5'>{timezone}</Text>
                        </Flex>
                        <Flex flexDirection={{md:"column"}} alignItems='baseline' justifyContent="space-between" mb="5%">
                            <Text fontSize={{base:'0.625rem', md:'0.8125rem'}} letterSpacing={{base:'0.125rem', md:'0.1625rem'}} lineHeight={{base:'0.57142rem', md:'1.75rem'}}>Day of the Year</Text>
                            <Text  fontSize={{md:'2.5rem'}} lineHeight={{md:'1.75rem'}} textStyle='h5'>{dayOfTheYear}</Text>
                        </Flex>
                    </Box>
                    <Box>
                        <Flex marginBottom={{md:'5rem'}} flexDirection={{md:"column"}} alignItems='baseline' justifyContent="space-between" mb="5%">
                            <Text  fontSize={{base:'0.625rem', md:'0.8125rem'}} letterSpacing={{base:'0.125rem', md:'0.1625rem'}} lineHeight={{base:'0.57142rem', md:'1.75rem'}}>Day of the Week</Text>
                            <Text fontSize={{md:'2.5rem'}} lineHeight={{md:'1.75rem'}} textStyle='h5'>{dayOfTheWeek}</Text>
                        </Flex>
                        <Flex  flexDirection={{md:"column"}} alignItems='baseline' justifyContent="space-between" mb="5%">
                            <Text fontSize={{base:'0.625rem', md:'0.8125rem'}} letterSpacing={{base:'0.125rem', md:'0.1625rem'}} lineHeight={{base:'0.57142rem', md:'1.75rem'}}>Week Number</Text>
                            <Text fontSize={{md:'2.5rem'}} lineHeight={{md:'1.75rem'}} textStyle='h5'>{weekNumber}</Text>
                        </Flex>
                    </Box>
                </Box>
        </Container>

    );
};

export default AdditionalInfo;
