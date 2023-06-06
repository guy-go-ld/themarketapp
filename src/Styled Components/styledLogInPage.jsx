import StyledLogoLogIn from "./styledCityCircleLogoLogIn";
import Box from "@mui/material/Box";
import {StyledPurpleBox, StyledDialogTextFieldReview} from "./styledComponents";
import {Stack, Typography} from "@mui/material";
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';

export default function LogInPage() {

    return(
        <>
            <StyledPurpleBox sx={{alignItems: "center", position: 'relative'}}>
                <StyledLogoLogIn sx={{alignSelf: "center"}}/>
            </StyledPurpleBox>
            <Typography variant="h2" marginTop={4   }>
                Sign-In
            </Typography>
            <Stack direction="column" spacing={5} marginBottom={4} marginTop={4}>
                <Stack direction="column" spacing={1}>
                <Typography variant="h4">
                    Email
                </Typography>
                    <TextField
                        type={"email"}
                        sx={{width:' 50%', alignSelf: "center"}}
                        id="input-with-icon-textfield"
                        // label="TextField"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonRoundedIcon />
                                </InputAdornment>
                            ),
                        }}
                        variant="standard"
                    />
                </Stack>
                <Stack direction="column" spacing={1}>
                <Typography variant="h4">
                    Password
                </Typography>
                <TextField
                    type={"password"}
                    sx={{width:' 50%', alignSelf: "center"}}
                    id="input-with-icon-textfield"
                    // label="TextField"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <HttpsOutlinedIcon />
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                />
                </Stack>
            </Stack>


        </>
    )

}