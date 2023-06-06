import {StyledPurpleBox, StyledDialogTextFieldReview} from "../Styled Components/styledComponents";
import {Stack, Typography} from "@mui/material";
import {palette} from "@mui/system";
import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



export default function SignupPage() {
    const [value, setValue] = React.useState(dayjs('2022-04-17'));

    return(
        <>
        <Typography variant="h1" sx={{color: 'primary.main', textAlign: "start", margin: '1rem'}}>
            Sign Up
        </Typography>
            <Typography variant="h3 " sx={{color: 'primary.main', textAlign: "start", margin: '1rem'}}>
                Let’s get to know each other
            </Typography>
        <Typography variant="body1" sx={{textAlign: "start", margin: '1rem'}}>
            We are CityCircle nice to meet you! We want your relocation process to be as comfortable as it gets. So... we are going to ask some question! Feel free to answer (you can change your decisions later).
        </Typography>
            <Typography variant="body1" sx={{textAlign: "start", margin: '1rem'}}>
                We want you to chose 3 CityCircles  to be a part of, so we will understand a little more about what you like. The rest will come naturally :)
            </Typography>
            <Typography variant="h3" sx={{color: 'primary.main', textAlign: "start", margin: '1rem'}}>
                So who are you?
            </Typography>
            <Stack direction="column" alignItems="start" margin="1rem">
            <Typography variant="h4">
                Your Name Is..
            </Typography>
            <StyledDialogTextFieldReview/>
            </Stack>
            <Stack direction="column" alignItems="start" margin="1rem">
                <Typography variant="h4">
                    Your Birthday is on..
                </Typography>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker', 'DatePicker']}>
                        <DatePicker
                            label="birthday day"
                            value={value}
                            onChange={(newValue) => setValue(newValue)}
                        />
                    </DemoContainer>
                </LocalizationProvider>

            </Stack>

        </>
    )
}