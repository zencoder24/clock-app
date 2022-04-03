export const Add_InfoStyles = {
    base: {
        backdropFilter:'blur(10px)',
        minW:'100%',
        maxH: {base: '30vh', md:'40vh',lg:"45vh"},
        position:'fixed',
        left:'0rem',
        bottom:'0px',
        p:{base:"3% 15%", md:"8% 10%", lg:"6% 15%"}
    },

    container:{
        flexDirection:{md:"row"},
        justifyContent:{md:"space-between"}
    },

    colStyle:{
        display:{md:'flex'},
        flexDirection:{md:"column"}
    },

    infoContainer:{
        marginBottom:{md:'5rem'} ,
        flexDirection:{base:'row', md:"column"},
        alignItems:'baseline' ,
        justifyContent:"space-between",
        mb:"5%"
    },

    infoLabel:{
        fontSize:{base:'0.625rem', md:'0.8125rem'},
        letterSpacing:{base:'0.125rem', md:'0.1625rem'},
        lineHeight:{base:'0.57142rem', md:'1.75rem'},
        textStyle:'h4'
    },

    infoData:{
        fontSize:{md:'2.5rem'},
        lineHeight:{md:'1.75rem'},
        textStyle:'h5'
    }

}