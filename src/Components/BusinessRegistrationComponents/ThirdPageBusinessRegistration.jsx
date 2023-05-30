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
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function SecondPageBusinessRegistration() {

    return(
        <div>
            <Typography variant="h4">Details</Typography>
            <Stack direction="row">
                <LocationOnIcon sx={{fontSize: 30, alignSelf: "center"}}/>
                <Typography variant="h5">Location</Typography>
            </Stack>
            <BasicTextFields fieldName={'business location'}/>

            <Stack direction="row">
                <AccessTimeIcon sx={{fontSize: 30, alignSelf: "center"}}/>
                <Typography variant="h5">Open Hours</Typography>
            </Stack>
            <BasicTextFields fieldName={'Sunday'}/>
            <BasicTextFields fieldName={'Monday'}/>
            <BasicTextFields fieldName={'Tuesday'}/>
            <BasicTextFields fieldName={'Wednesday'}/>
            <BasicTextFields fieldName={'Thursday'}/>
            <BasicTextFields fieldName={'Friday'}/>
            <BasicTextFields fieldName={'Saturday'}/>

            <Typography variant="h5" textAlign="start">Picture</Typography>
            <button>upload here!</button>

        </div>
    )
}