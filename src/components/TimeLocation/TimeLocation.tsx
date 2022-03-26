import React from 'react';
import {Box, Flex, Spacer} from "@chakra-ui/react";
import {SunIcon} from "./SunIcon";

const TimeLocation = () => {
    return (
        <Box  mt='70%'>
            <Flex>
                <SunIcon boxSize='1.5rem' mr='3'/>
                <Box textStyle='h4' fontSize='0.9375rem'>
                    Good Morning
                </Box>
            </Flex>
            <Flex alignItems='baseline'>
                <Box textStyle='h2' fontSize='6.25rem' lineHeight="9rem">
                    11:37
                </Box>
                <Box textStyle='h4' fontSize='0.9375rem'>
                    BST
                </Box>
            </Flex>
            <Box textStyle='h3' fontSize='0.9375rem' lineHeight='0px' >
                In London, UK
            </Box>
        </Box>
    );
};


export default TimeLocation;
