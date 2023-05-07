// import * as React from 'react';
import {createTheme, responsiveFontSizes, styled} from '@mui/material/styles';
import {purple} from "@mui/material/colors";
import {BottomNavigation, BottomNavigationAction} from "@mui/material";


let theme = createTheme({
    palette: {
        primary: purple
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
    // typography: {
    //     fontFamily: 'Roboto',
    //     fontSize: 16,
    //     h1: {
    //         fontSize: '6rem',
    //         '@media (max-width:600px)': {
    //             fontSize: '3rem',
    //         },
    //     },
    //     h2: {
    //         fontSize: '3rem',
    //         '@media (max-width:600px)': {
    //             fontSize: '2rem',
    //         },
    //     },
    //     h3: {
    //         fontSize: '2rem',
    //         '@media (max-width:600px)': {
    //             fontSize: '1rem',
    //         },
    //     },
    //     h4: {
    //         fontSize: '1rem',
    //         '@media (max-width:600px)': {
    //             fontSize: '0.75rem',
    //         },
    //     },
    //     h5: {
    //         fontSize: '0.75rem',
    //         '@media (max-width:600px)': {
    //             fontSize: '0.5rem',
    //         },
    //     },
    //     h6: {
    //         fontSize: '0.5rem',
    //         '@media (max-width:600px)': {
    //             fontSize: '2rem',
    //         },
    //     },
    //     p: {
    //         fontSize: '3rem',
    //         '@media (max-width:600px)': {
    //             fontSize: '2rem',
    //         },
    //     },


    // },
});
theme = responsiveFontSizes(theme)

export default theme
