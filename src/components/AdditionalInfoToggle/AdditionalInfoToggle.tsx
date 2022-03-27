import React from 'react';
import {Box, Button, Icon} from "@chakra-ui/react";
import { ChevronDownIcon} from '@chakra-ui/icons'

const AdditionalInfoToggle = () => {
    return (
        <div>
            <Button
                textStyle='h4'
                mt='64px'
                height='39px'
                width='115px'
                lineHeight='1.2'
                borderRadius='20px'
                fontSize='12px'
                fontWeight='bold'
                bg='white'
                color='black'
                rightIcon={<ChevronDownIcon
                                padding='3px'
                                color='white'
                                fontSize='34px'
                                borderRadius='20px'
                                bg='#303030'
                                mr='-15px' />}
               >
                    More
            </Button>
        </div>
    );
};

export default AdditionalInfoToggle;


