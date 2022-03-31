import * as React from "react"
import {Box, ChakraProvider, Container, Flex, Image} from "@chakra-ui/react"
import theme from "./theme/theme"

import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'
//Components

import {baseAppStyles} from "./App_Styles";
import QuoteData from "./components/QuoteData/QuoteData";
import TimeLocation from "./components/TimeLocation/TimeLocation";
import AdditionalInfoToggle from "./components/AdditionalInfoToggle/AdditionalInfoToggle";
import AdditionalInfo from "./components/AdditionalInfo/AdditionalInfo";
import {useCallback, useEffect, useState} from "react";
import {QuoteType} from "./models/quote.interface";
import {TimeInfoType} from "./models/timeInfo.interface";

//API Calls
import {getRandomQuote} from "./api/getQuoteCall";
import {getCurrentTime} from "./api/getTimeCall";
import { getLocation} from "./api/getLocationInfoCall.";
import {LocationInfoType} from "./models/locationInfo.interface";

import daytimeBgMobile from "./assets/images/mobile/bg-image-daytime.jpg";
import nighttimeBgMobile from "./assets/images/mobile/bg-image-nighttime.jpg";
import daytimeBgTablet from "./assets/images/tablet/bg-image-daytime.jpg";
import nighttimeBgTablet from "./assets/images/tablet/bg-image-nighttime.jpg";
import daytimeBgDesktop from "./assets/images/desktop/bg-image-daytime.jpg";
import nighttimeBgDesktop from "./assets/images/desktop/bg-image-nighttime.jpg";


export const App = () => {
    //Quote
    const [dataQuote, setDataQuote] = useState<QuoteType>({
        author: "",
        en: "",
        id: ""
    })
    //Time
    const[timeInfo, setTimeInfo] = useState<TimeInfoType>({
        abbrevTimezone: "",
        dayOfWeek: 0,
        dayOfYear: 0,
        time: "",
        timezone: "",
        weekNum: 0,
        timeOfDay: ""
    })
    const[isDaytime, setIsDaytime] = useState(false)

    //Location Info
    const[locationInfo, setLocationInfo] = useState<LocationInfoType>({city: "", country: ""})
    const[isExpanded, setIsExpanded] = useState(false);

    //Quote API Fetch
    const quoteFetch = useCallback(() => {
            getRandomQuote()
                .then((data) => {
                    setDataQuote({
                        id: data.id,
                        en: data.en,
                        author: data.author
                    })
                })
        }, []);

    //Time/Date API fetch and function
    /*Sources:
    https://www.toptal.com/software/definitive-guide-to-datetime-manipulation
    https://www.tutorialspoint.com/converting-12-hour-format-time-to-24-hour-format-in-javascript
     */
    const convertTime = (timeStr: string) => {
        const [time, modifier] = timeStr.split(' ');
        let [hours, minutes] = timeStr.split(':');
        if (hours === '12') {
            hours = '00';
        }
        if (modifier === 'PM') {
            hours = String(parseInt(hours, 10) + 12);
        }
        minutes = minutes.replace("AM","").replace("PM","")
        return `${hours}:${minutes}`;
    };
    const getTimeOfDay = (timeStr: string) => {
        let [hours, minutes] = timeStr.split(':');
        if (parseInt(hours) >= 5 && parseInt(hours) < 12){
            setIsDaytime(true)
            return 'morning'
        } if (parseInt(hours) >= 12 && parseInt(hours) < 18 ){
            setIsDaytime(true)
            return 'afternoon'
        } else{
            setIsDaytime(false)
            return 'evening'
        }
    };

    const timeFetch = useCallback(() =>{
        getCurrentTime()
            .then((data) => {
                console.log( typeof data)
                const getTime = new Date(data.datetime)
                    .toLocaleTimeString(undefined, {hour:'2-digit', minute:'2-digit' })
                setTimeInfo({
                    time: convertTime(getTime),
                    abbrevTimezone: data.abbreviation,
                    dayOfWeek: data.day_of_week,
                    dayOfYear: data.day_of_year,
                    timezone: data.timezone,
                    weekNum: data.week_number,
                    timeOfDay: getTimeOfDay(convertTime(getTime)),
                })
            })
    },[])

    //LocationInfo Functions
    const locationInfoFetch = useCallback(() => {
        getLocation()
            .then((data) =>{
                setLocationInfo({
                    city: data.city.name,
                    country: data.country.code
                })
            })
    },[])

    //Pulls Quote, Time, and Location Info when the components are mounted
    useEffect(() =>{
        locationInfoFetch();
       quoteFetch();
       // const interval = setInterval(() => {
           timeFetch();
       // },1000)
       //  return () => clearInterval(interval)
    },[timeFetch])


    const darken = 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),'
    return(
    <ChakraProvider theme={theme}>
        <Box
            sx={baseAppStyles}
            background={{
                base:isDaytime? `${darken}url(${daytimeBgMobile})` : `${darken}url(${nighttimeBgMobile})`,
                md:isDaytime?  `${darken}url(${daytimeBgTablet})` : `${darken}url(${nighttimeBgTablet})`,
                lg:isDaytime?  `${darken}url(${daytimeBgDesktop})` : `${darken}url(${nighttimeBgDesktop})`
            }}
        >
            <Container position='relative' minH='100vh' color="white" maxW={{lg:'125ch'}}>
                <Flex p={{base:'5% 3%',xl:"5% 0%"}} mb='35vh' flexDirection={{base:'column', xl:'row'}} alignItems={{xl:'flex-end'}}>
                    <Box as='div' flexGrow='3'>
                        <QuoteData
                            dataQuote={dataQuote}
                            onClick={quoteFetch}
                            isExpanded={isExpanded}/>

                        <TimeLocation
                            isExpanded={isExpanded}
                            timeOfDay={timeInfo.timeOfDay}
                            isDaytime={isDaytime}
                            time={timeInfo.time}
                            abbr={timeInfo.abbrevTimezone}
                            city={locationInfo.city}
                            country={locationInfo.country}/>
                    </Box>
                    <AdditionalInfoToggle
                        isExpanded={isExpanded}
                        setIsExpanded={setIsExpanded}/>
                </Flex>
                <AdditionalInfo
                    isExpanded={isExpanded}
                    timezone={timeInfo.timezone}
                    dayOfTheYear={timeInfo.dayOfYear}
                    dayOfTheWeek={timeInfo.dayOfWeek}
                    weekNumber={timeInfo.weekNum}
                    isDaytime={isDaytime}/>
            </Container>

        </Box>
        {/*<Container*/}
        {/*    margin='0'*/}
        {/*    padding="0rem">*/}
        {/*    <Background isDaytime={isDaytime}>*/}


            {/*</Background>*/}

        {/*</Container>*/}

    </ChakraProvider>
    )


}
