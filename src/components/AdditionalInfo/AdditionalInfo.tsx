import React from 'react';
import {Box, Container, Flex, Text} from "@chakra-ui/react";
import {QuoteType} from "../../models/quote.interface";
import {Add_InfoStyles} from "./styles";

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
            sx={Add_InfoStyles.base}
             bg={isDaytime?"rgba(255, 255, 255, 0.75)":"rgba(0, 0, 0, 0.75)"}
             color={isDaytime? 'black': 'white'}
             display={isExpanded? 'block': 'none'}>
                <Box sx={Add_InfoStyles.container} display={isExpanded? {md:'flex'}:'none'} >
                    <Box sx={Add_InfoStyles.colStyle}  >
                        <Flex sx={Add_InfoStyles.infoContainer} >
                            <Text sx={Add_InfoStyles.infoLabel} >Current Timezone</Text>
                            <Text sx={Add_InfoStyles.infoData} >{timezone}</Text>
                        </Flex>
                        <Flex sx={Add_InfoStyles.infoContainer} >
                            <Text sx={Add_InfoStyles.infoLabel}>Day of the Year</Text>
                            <Text sx={Add_InfoStyles.infoData}>{dayOfTheYear}</Text>
                        </Flex>
                    </Box>
                    <Box sx={Add_InfoStyles.colStyle}  >
                        <Flex sx={Add_InfoStyles.infoContainer}>
                            <Text sx={Add_InfoStyles.infoLabel}>Day of the Week</Text>
                            <Text sx={Add_InfoStyles.infoData}>{dayOfTheWeek}</Text>
                        </Flex>
                        <Flex sx={Add_InfoStyles.infoContainer}>
                            <Text sx={Add_InfoStyles.infoLabel}>Week Number</Text>
                            <Text sx={Add_InfoStyles.infoData}>{weekNumber}</Text>
                        </Flex>
                    </Box>
                </Box>
        </Container>

    );
};

export default AdditionalInfo;
