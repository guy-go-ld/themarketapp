import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BusinessTypesSelection from "../BusinessTypeSelect/BusinessTypeSelect.components";
import BasicTextFields from "./TextField.components";
import RowRadioButtonsGroup from "./FirstPageOfBusinessRegistration/RadioButton.component";
import {Stack} from "@mui/material";
import {useEffect, useState} from "react";
import {addDoc, collection, deleteDoc, doc, getDocs, updateDoc} from "firebase/firestore";
import {auth, db, storage} from "../../config/firebase";
import {ref, uploadBytes} from "firebase/storage";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import TextField from "@mui/material/TextField";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';

export default function SecondPageBusinessRegistration() {

    return(
        <div>
            <Typography variant="h4">Socials (if exists..)</Typography>
            <Stack direction="row">
                <InstagramIcon sx={{fontSize: 56, alignSelf: "center"}}/>
                <BasicTextFields fieldName={'@example'}/>
            </Stack>
            <Stack direction="row">
                <FacebookIcon sx={{fontSize: 56, alignSelf: "center"}}/>
                <BasicTextFields fieldName={'facebook page'}/>
            </Stack>
            <Stack direction="row">
                <LinkedInIcon sx={{fontSize: 56, alignSelf: "center"}}/>
                <BasicTextFields fieldName={'linkedin page'}/>
            </Stack>
            <Stack direction="row">
                <LanguageIcon sx={{fontSize: 56, alignSelf: "center"}}/>
                <BasicTextFields fieldName={'website URL'}/>
            </Stack>

        </div>
    )
}