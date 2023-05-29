import { createMuiTheme } from '@material-ui/core/styles';

const CityCircleTheme = createMuiTheme({
    palette: {
        primary: {
            main:'#775CDF',
            light:'#F2EFFC',
            dark:'#5B45AE'
        },
        secondary: {
            main: '#C3ED5B',
        },
        // Customizing specific shades
        background: {
            default: '#FFFFFF',
        },
        // Customizing text color
        text: {
            primary: '#000000',
            secondary: '#BFBFBF',
        },
    },
    typography: {
        // Customizing individual components' typography
        fontFamily:"Poppins",
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1: {
            fontSize: 24,
            fontWeight: 'bold',
        },
        h2: {
            fontSize: 20,
        },
        h3: {
            fontSize:16
        },
        p:{
            fontSize:12
        },
    },
    // Customizing spacing
    spacing: 8,
    // Customizing breakpoints
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    // Customizing shadows
    shadows: [
        'none',
        '0px 2px 4px -1px rgba(0,0,0,0.2)',
        '0px 4px 5px 0px rgba(0,0,0,0.14)',
        '0px 1px 10px 0px rgba(0,0,0,0.12)',
    ],
    // Other customizations...
});

export default CityCircleTheme;