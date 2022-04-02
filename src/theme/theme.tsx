import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    textStyles: {
        h2:{
            fontWeight: "bold",
        },
        h3:{
            fontWeight: "bold",
            letterSpacing: "4.8px",
            textTransform: "uppercase"
        },
        h4:{
            fontWeight: "200",
            letterSpacing: "0.234375rem",
            textTransform: "uppercase"
        },
        h5:{
            fontWeight: "bold",
        },
    },
    fonts: {
        heading: 'Inter, sans-serif',
        body: 'Inter, sans-serif',
    },
    colors:{
        lightgrey: "#303030"
    },
    breakpoints:{
        sm: "21.875em", //480px
        md: "48em", //768px
        lg: "64em", //1024px
        xl: "90em", //1440px
        '2xl': "96em" //1536px
    }
})

export default theme;