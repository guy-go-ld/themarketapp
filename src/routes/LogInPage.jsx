import {StyledLogoLogIn} from "../Styled Components/styledCityCircleLogoLogIn";
import {StyledButtonGray} from "../Styled Components/styledComponents";
import Box from "@mui/material/Box";
import {StyledPurpleBox, StyledDialogTextFieldReview} from "../Styled Components/styledComponents";
import {Stack, Typography} from "@mui/material";
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import TextField from "@mui/material/TextField";
import InputAdornment from '@mui/material/InputAdornment';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import React, {useState} from "react";
import User from "../Classes/UserClass";
import {SignIn} from "../Classes/UserClass";
import {signOut} from "firebase/auth";
import {auth} from "../config/firebase";
import {LogIn} from "../Classes/UserClass";
import SignupPage from "../routes/SignUpPage";
import {Link} from "react-router-dom";


export default function FirstPageLogIn () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();
        // console.log("before user");
        // const user = new User(email, password);
        // await user.signIn();
        let check_sign_up = await SignIn({email}, {password});
        // console.log("after user");
        // console.log(auth?.currentUser?.uid);
        // if (check_sign_up)
        // {
        await window.location.replace('/SignupPage');
        // }
        // else
        // {
        //     console.log("ERROR");
        // }
    };
    const logout = async() =>{
        try
        {
            await signOut(auth);
        } catch (err) {
            console.error(err);
        }
    }

    return(
        <>
            <StyledPurpleBox sx={{alignItems: "center", position: 'relative'}}>
                <StyledLogoLogIn sx={{alignSelf: "center"}}/>
            </StyledPurpleBox>
            <Typography variant="h2" marginTop={4   }>
                Sign-Up
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
            <Stack direction="row" justifyContent="center" spacing={3} marginTop={5 }>

                <StyledButtonGray onClick={handleSignUp}>
                    Register
                </StyledButtonGray>

                {/*<StyledButtonGray component={Link} to={'/SignupPage'}>*/}
                {/*    Register*/}
                {/*</StyledButtonGray>*/}
                {/*<StyledButtonGray onClick={LogIn({email}, {password})}>Log In</StyledButtonGray>*/}
            </Stack>

        </>
    )

}