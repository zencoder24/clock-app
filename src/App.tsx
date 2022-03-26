import * as React from "react"
import {Box, ChakraProvider, Container, Image} from "@chakra-ui/react"
import theme from "./theme/theme"

import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'
//Components

import QuoteData from "./components/QuoteData/QuoteData";
import TimeLocation from "./components/TimeLocation/TimeLocation";
import DataViewToggle from "./components/DataViewToggle/DataViewToggle";
import AdditionalInfo from "./components/AdditionalInfo/AdditionalInfo";
import Background from "./components/Background/Background";

export const App = () => (
  <ChakraProvider theme={theme}>
      <Container
        padding="0px">
        <Background/>
        <QuoteData/>
        <TimeLocation/>
        {/*<DataViewToggle/>*/}
        {/*<AdditionalInfo/>*/}
      </Container>

  </ChakraProvider>
)
