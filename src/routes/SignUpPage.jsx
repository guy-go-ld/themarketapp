import {StyledPurpleBox, StyledDialogTextFieldReview, StyledAutoComplete, StyledRotatePurpleBox} from "../Styled Components/styledComponents";
import {Stack, Typography} from "@mui/material";
import {palette} from "@mui/system";
import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from "@mui/material/TextField";
import {useState} from "react";
import {CityCircleSmallLogoLogIn} from "../Styled Components/styledCityCircleLogoLogIn";
import Box from "@mui/material/Box";



export default function SignupPage() {
    const [value, setValue] = React.useState(dayjs('2022-04-17'));
    const [chosenSchool, setChosenSchool] = useState("");
    const [chosenNeighborhood, setChosenNeighborhood] = useState("");
    const [chosenHobby, setChosenHobby] = useState("");

    const SchoolsLst = ['HUJI', 'HAC', 'Azrieli', 'Bezalel', 'Shalem', 'David Yalin'];
    const NeighborhoodLst = ['Rehavia', 'City Center', 'Nahlaot', 'Ramot', 'Talabia', 'Beit Hakerem', 'Resko', 'Katamon', 'Gilo'];
    const HobbyLst = ['Sport', 'Art', 'Cooking', 'Travel', 'Music', 'Gaming', 'Design', 'Reading'];


    return(
        <>
        <Typography variant="h1" sx={{color: 'primary.main', textAlign: "start", margin: '1rem'}}>
            Sign Up
        </Typography>
            <Typography variant="h3" sx={{color: 'primary.main', textAlign: "start", margin: '1rem'}}>
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
            <Stack direction="column" margin="1rem" alignItems="start" >
                <Typography variant="h4" textAlign="start">You are a student in..</Typography>
                <StyledAutoComplete
                    disablePortal
                    inputValue={chosenSchool}
                    onInputChange={(event, newInputValue) => {
                        setChosenSchool(newInputValue);
                    }}
                    id="combo-box-demo"
                    options={SchoolsLst}
                    sx={{ width: 250 }}
                    renderInput={(params) => <TextField
                        {...params}
                        label="School"
                    />}
                />
        </Stack>
            <Stack direction="column" margin="1rem" alignItems="start" >
                <Typography variant="h4" textAlign="start">You live in..</Typography>
                <StyledAutoComplete
                    disablePortal
                    inputValue={chosenNeighborhood}
                    onInputChange={(event, newInputValue) => {
                        setChosenNeighborhood(newInputValue);
                    }}
                    id="combo-box-demo"
                    options={NeighborhoodLst}
                    sx={{ width: 250 }}
                    renderInput={(params) => <TextField
                        {...params}
                        label="Neighborhood"
                    />}
                />
            </Stack>

            <Stack direction="column" margin="1rem" alignItems="start" >
                <Typography variant="h4" textAlign="start">Your hobby is.. (for now, you can change it later :))</Typography>
                <StyledAutoComplete
                    disablePortal
                    inputValue={chosenHobby}
                    onInputChange={(event, newInputValue) => {
                        setChosenHobby(newInputValue);
                    }}
                    id="combo-box-demo"
                    options={HobbyLst}
                    sx={{ width: 250 }}
                    renderInput={(params) => <TextField
                        {...params}
                        label="Hobby"
                    />}
                />
            </Stack>

            <Box sx={{position: 'relative'}}>
                <br/>
                <br/>
                <StyledRotatePurpleBox sx={{alignItems: "center", top:-100}}>
                    <CityCircleSmallLogoLogIn sx={{alignSelf: "center", position: "relative"}}/>
                </StyledRotatePurpleBox>
            </Box>

            <br/>
            <br/>
            <br/>
        </>
    )
}