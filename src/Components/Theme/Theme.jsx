import {createTheme, responsiveFontSizes} from '@mui/material/styles';
import "../../App.css";


let theme = createTheme({
    palette: {
        primary: {
            main: '#775CDF',
            light: '#937af3',
            dark: '#5d47b1'
        }
    },
    shape: {
        borderRadius: 10
    },
    typography: {
        fontFamily: "Urbanist",
        fontWeightBold: 800,
        fontWeightMedium: 700,
        fontWeightRegular: 600,
        fontWeightLight: 400
    },

});
theme = responsiveFontSizes(theme)

export default theme
