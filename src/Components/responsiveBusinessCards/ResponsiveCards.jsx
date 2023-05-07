import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from "@mui/material/Box";
import AlignItemsList from "../BusinessCardTest/BusinessCardTest";
import BusinessCardLarge from "../bigBusinessCardTest/BigBusinessCard";
function ResponsiveCard() {
    const isSmallScreen = useMediaQuery('(max-width: 600px)');
    // const isMediumScreen = useMediaQuery('(min-width: 601px) and (max-width: 960px)');
    const isMediumScreen = useMediaQuery('(min-width: 601px)');

    // const isLargeScreen = useMediaQuery('(min-width: 961px)');

    return (
        <Box>
            {isSmallScreen && <AlignItemsList/>}
            {/*{isSmallScreen && <Box sx={{ height: 50, width: 100, backgroundColor: "red", flexWrap: "wrap"}}>Small screen version</Box>}*/}
            {isMediumScreen && <BusinessCardLarge/>}
            {/*{isMediumScreen && <Box bgcolor="blue" height="100px" width="200px">Medium screen version</Box>}*/}
            {/*{isLargeScreen && <Box bgcolor="green" height="150px" width="300px">Large screen version</Box>}*/}
        </Box>
    );
}

export default ResponsiveCard