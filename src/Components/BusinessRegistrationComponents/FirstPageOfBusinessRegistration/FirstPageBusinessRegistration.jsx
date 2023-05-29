import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BusinessTypesSelection from "../../BusinessTypeSelect/BusinessTypeSelect.components";
import BasicTextFields from "../TextField.components";
import RowRadioButtonsGroup from "./RadioButton.component";
import {Stack} from "@mui/material";

// const businessTypes = ['cosmetics', 'nails', 'barber', 'hair', 'sport', 'art', 'lifestyle', 'music']
export default function firstPageBusinessRegistration() {
    return(
        <div>
            <Box sx={{margin: "1rem"}}>
            <Typography variant="h4" textAlign="start">Category</Typography>
            <BusinessTypesSelection
                businesses_types={['cosmetics', 'nails', 'barber', 'hair', 'sport', 'art', 'lifestyle', 'music']}
                // style={{flexWrap: "wrap", display: "flex", justifyContent: "center"}}
            />
            </Box>
            <Stack direction="column" alignItems="start" margin="0.5rem">
                <Typography variant="h4">Business Name</Typography>
                <BasicTextFields fieldName={'Business Name'}/>
                <Typography variant="h4">Owner Name</Typography>
                <BasicTextFields fieldName={'Owner Name'}/>
                <Typography variant="h4">I’ve added businesses in the past</Typography>
                <RowRadioButtonsGroup/>
                <Typography variant="h4">Business owner facebook profile link:</Typography>
                <BasicTextFields fieldName={'my profile page'}/>
            </Stack>
        </div>
    )
}