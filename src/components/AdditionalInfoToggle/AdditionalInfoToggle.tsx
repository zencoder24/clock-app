import React from 'react';
import {Box, Button, Icon} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon} from '@chakra-ui/icons'

interface IProps_AdditionalInfo{
    isExpanded: boolean,
    setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>
}

const AdditionalInfoToggle:React.FC<IProps_AdditionalInfo> = ({isExpanded, setIsExpanded}) => {
    return (
        <Box p="0 9%">
            <Button
                onClick={() => setIsExpanded(!isExpanded)}
                textStyle='h4'
                mt='4rem'
                height={{base:'2.4375rem', md:'3.5rem'}}
                width={{base:'7.1875rem', md:'9.125rem'}}
                lineHeight='1.2'
                borderRadius={{base:'1.25rem', md:'2.25rem'}}
                fontSize={{base:'0.75rem', md: '1rem'}}
                fontWeight='bold'
                bg='white'
                color='black'
                rightIcon={ isExpanded? <ChevronUpIcon
                                        padding='0.1875rem'
                                        h={{base:'2rem',md:'2.5rem'}}
                                        w={{base:'2rem',md:'2.5rem'}}
                                        color='white'
                                        fontSize='2.125rem'
                                        borderRadius='1.25rem'
                                        bg='#303030'
                                        mr='-0.9375rem' />
                                        :
                                        <ChevronDownIcon
                                        padding='0.1875rem'
                                        h={{base:'2rem',md:'2.5rem'}}
                                        w={{base:'2rem',md:'2.5rem'}}
                                        color='white'
                                        fontSize='2.125rem'
                                        borderRadius='1.25rem'
                                        bg='#303030'
                                        mr='-0.9375rem' />
                                        }
               >
                {isExpanded? 'Less': 'More'}
            </Button>
        </Box>
    );
};

export default AdditionalInfoToggle;


