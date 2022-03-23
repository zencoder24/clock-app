import * as React from "react"
import {ChakraProvider, Container} from "@chakra-ui/react"
import theme from "./theme/theme"
import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'
//Components
import QuoteData from "./components/QuoteData/QuoteData";
import TimeLocation from "./components/TimeLocation/TimeLocation";
import DataViewToggle from "./components/DataViewToggle/DataViewToggle";
import AdditionalInfo from "./components/AdditionalInfo/AdditionalInfo";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Container maxW='100%'  bg='tomato'>
        <QuoteData/>
        <TimeLocation/>
        <DataViewToggle/>
        <AdditionalInfo/>
    </Container>
  </ChakraProvider>
)
