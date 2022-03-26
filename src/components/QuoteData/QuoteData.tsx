import React from 'react';
import {Box, Container, Flex, Icon} from "@chakra-ui/react";

const QuoteData = () => {
    return (
        <Container
            padding="9% 6%"
            color="white"
            >
            <Flex>
                <Box
                    fontWeight="300"
                    fontSize={{base:"12px"}}
                    lineHeight={{base:"22px"}}
                    textStyle="body">
                    “The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”
                </Box>
                <Icon boxSize="24px" >
                    <path
                        d="M7.188 10.667a.208.208 0 01.147.355l-2.344 2.206a5.826 5.826 0 009.578-2.488l2.387.746A8.322 8.322 0 013.17 14.94l-2.149 2.022a.208.208 0 01-.355-.148v-6.148h6.52zm7.617-7.63L16.978.958a.208.208 0 01.355.146v6.23h-6.498a.208.208 0 01-.147-.356L13 4.765A5.825 5.825 0 003.43 7.26l-2.386-.746a8.32 8.32 0 0113.76-3.477z"
                        fill="#FFF"
                        opacity=".5"/>
                </Icon>
            </Flex>
            <Box
                fontWeight="700"
                fontSize={{base:"12px"}}
                lineHeight={{base:"22px"}}
                textStyle="body">
                Ada Lovelace
            </Box>

        </Container>
    );
};

export default QuoteData;
