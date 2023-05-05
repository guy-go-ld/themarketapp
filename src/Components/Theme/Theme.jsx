import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {purple} from "@mui/material/colors";


const theme = createTheme({
    palette: {
        primary: purple
    },
});

export default theme
