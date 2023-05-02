import './AroundMe.styles.css';
import {Component} from "react";
import ResizableMap from "../../Components/updatable-map/ResizableMap"
import FullWidthTabs from "../../Components/AroundMeTab/TabAroundMe"
import Box from '@mui/material/Box';
// import { palette } from '@mui/system';



class AroundMe extends Component{
render() {
    return(
        <div>
            <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText',p: 2, width: '100%' }}>
                {/*TODO: 1. apply design like the tab bar. 2. make the h1 tag centered.*/}
                <h1 style={{justifyContent: 'center', alignItems: 'center', margin: 'auto'}}>
                    Around Me
                </h1>
            </Box>
            <FullWidthTabs/>
            {/*<ResizableMap/>*/}

        </div>
    )
}
}
// TODO:
//  1. need to fix the bottom bar in this page- it is not in proportion.
//  2. the bottom bar is also not fixed on the bottom- we have to scroll in order to see it.
export default AroundMe