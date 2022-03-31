import React from 'react';
import {Box, Button, Icon} from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon} from '@chakra-ui/icons'
import {Add_ToggleStyle} from "./styles";

interface IProps_AdditionalInfo{
    isExpanded: boolean,
    setIsExpanded: React.Dispatch<React.SetStateAction<boolean>>
}

const AdditionalInfoToggle:React.FC<IProps_AdditionalInfo> = ({isExpanded, setIsExpanded}) => {
    return (
        <Box>
            <Button
                onClick={() => setIsExpanded(!isExpanded)}
                sx={Add_ToggleStyle.button}
                rightIcon={ isExpanded? <ChevronUpIcon sx={Add_ToggleStyle.icon}/> : <ChevronDownIcon sx={Add_ToggleStyle.icon}/>}
               >
                {isExpanded? 'Less': 'More'}
            </Button>
        </Box>
    );
};

export default AdditionalInfoToggle;


