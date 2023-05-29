import './AroundMe.styles.css';
import {Component} from "react";
// import ResizableMap from "../../Components/updatable-map/ResizableMap"
import FullWidthTabs from "../../Components/AroundMeTab/TabAroundMe"
// import Box from '@mui/material/Box';
// import {AppBar, Typography} from "@mui/material";
// import { palette } from '@mui/system';
import CityCircleTheme from "../../Theme/CityCircle_theme";


class AroundMe extends Component{
render() {
    return(
        <fragment>
            <CityCircleTheme>
                <h1>h1</h1>
                <h2>h2</h2>
                <h3>h3</h3>
            </CityCircleTheme>
            <div style={{paddingTop: "3.5rem"}}>
                {/*<AppBar>*/}
                {/*<Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText',p: 2}}>*/}
                {/*TODO: 1. apply design like the tab bar. 2. make the h1 tag centered.*/}
                {/*    /!*<Typography variant="h2">Around me</Typography>*!/*/}

                {/*    /!*<h1 style={{justifyContent: 'center', alignItems: 'center', margin: 'auto'}}>*!/*/}
                {/*    /!*    Around Me*!/*/}
                {/*    /!*</h1>*!/*/}
                {/*</Box>*/}
                {/*</AppBar>*/}
                <FullWidthTabs/>
                {/*<ResizableMap/>*/}

            </div>
        </fragment>

    )
}
}
// TODO:
//  1. need to fix the bottom bar in this page- it is not in proportion.
//  2. the bottom bar is also not fixed on the bottom- we have to scroll in order to see it.
export default AroundMe