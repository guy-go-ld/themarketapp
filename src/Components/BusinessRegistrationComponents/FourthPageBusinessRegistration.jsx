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
import Checkbox from '@mui/material/Checkbox';

function ControlledCheckbox() {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
        />
    );
}

export default function FourthPageBusinessRegistration({data}) {

    return(
        <div>
          <Typography variant="h4">
              Before approving, please make sure
              that you only upload your business
              once.
          </Typography>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Stack direction="row">
                {ControlledCheckbox()}
                <Typography variant="body1">I approve that all the data is true and I am the business owner</Typography>
            </Stack>

        </div>
    )
}

