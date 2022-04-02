export const TimeLocationStyle = {
    base: {
        maxW:{base:'80%', md:'75%', lg: '85%', xl: '95%' }

    },

    icon:{
        boxSize:'1.5rem',
        mr:'3'
    },

    greeting:{
        textStyle:'h4',
        fontSize:{base:'0.9375rem', md:'1.125rem'},
        mb:'1rem'
    },

    greeting_tablet:{
        as:'span',
        display:{base:'none', md:'inline'}
    },

    timeContainer:{
        alignItems:'baseline',
        justifyContent:{ base: 'space-between',xl:'normal'},
        maxW: '45%'
    },

    time:{
        textStyle:'h2',
        fontSize:{base:'6.25rem', md:'10.9375rem'},
        lineHeight:{base:"9rem", md:'10.9375rem'},
        letterSpacing:{base:'-.15625rem', md:'-0.27375rem'},
        mr: '1rem'
    },

    timeAbbr:{
        textStyle:'h4',
        fontSize:{base:'0.9375rem', md:'2rem'},
        letterSpacing:'0rem',
        lineHeight:'1.75rem'
    },


    location:{
        textStyle:'h3',
        fontSize:{base:'0.9375rem', md: '1.12rem' },
        lineHeight:{base:'0rem', md:'1.75rem'}
}



}