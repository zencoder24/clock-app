import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    textStyles: {
        h1: {
            fontSize: "200px",
            fontWeight: "bold",
            lineHeight: "200px",
            letterSpacing: "-5px"
        },
        h2:{
            fontWeight: "bold",
            fontSize: "56px",
            lineHeight: '68px'
        },
        h3:{
            fontWeight: "bold",
            fontSize: "24px",
            lineHeight: "28px",
            letterSpacing: "4.8px",
            textTransform: "uppercase"
        },
        h4:{
            fontWeight: "200",
            lineHeight: "28px",
            letterSpacing: "3.75px",
            textTransform: "uppercase"
        },
        h5:{
            fontWeight: "bold",
            fontSize: "18px",
            lineHeight: "28px"
        },
        h6:{
            fontWeight: "bold",
            fontSize: "15px",
            lineHeight: "28px",
            letterSpacing: "3px",
        },
        body:{
            fontWeight: "regular",
            fontSize: "18px",
            lineHeight: "28px",
        }
    },
    fonts: {
        heading: 'Inter, sans-serif',
        body: 'Inter, sans-serif',
    },
    colors:{
        lightgrey: "#303030"
    },
    breakpoints:{
        sm: "30em", //480px
        md: "48em", //768px
        lg: "64em", //1024px
        xl: "90em", //1440px
        '2xl': "96em" //1536px
    }
})

export default theme;