import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BusinessTypesSelection from "../../BusinessTypeSelect/BusinessTypeSelect.components";
import BasicTextFields from "../TextField.components";
import RowRadioButtonsGroup from "./RadioButton.component";
import {Stack} from "@mui/material";
import {useEffect, useState} from "react";
import {addDoc, collection, deleteDoc, doc, getDocs, updateDoc} from "firebase/firestore";
import {auth, db, storage} from "../../../config/firebase";
import {ref, uploadBytes} from "firebase/storage";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// const businessTypes = ['cosmetics', 'nails', 'barber', 'hair', 'sport', 'art', 'lifestyle', 'music']
export default function FirstPageBusinessRegistration({onNext}) {
    const [ newBusinessName, setNewBusinessName] = useState("");
    const [businessTypes, setBusinessTypes] = useState(() => []);

    const [newPreviewUrl, setNewPreviewUrl] = useState("");
    const [ownerName, setOwnerName] = useState("");

    // Update Business Name State
    // const [businessName, setBusinessName] = useState(""); // TODO: in the future- need to make edit component


    // List of all Users
    const [businessList, setBusinessList] = useState([]);
    const businessesCollectionRef = collection(db, "Business");

    // const getBusinessesList = async () => {
    //     // READ THE DATA
    //     // SET THE MOVIE LIST
    //     try
    //     {
    //         const data = await getDocs(businessesCollectionRef);
    //         const filteredData = data.docs.map((doc) =>
    //             ({...doc.data(), id: doc.id,})
    //         );
    //         setBusinessList(filteredData);
    //         // console.log(filteredData[0]["Name"]);
    //         // console.log(filteredData);
    //     } catch (err){
    //         console.error(err);
    //     }
    // }
    //
    // useEffect(()=>{
    //
    //     getBusinessesList();
    // }, []);



    function BusinessTypesSelection(businesses_types) {


        const handleTypes = (event, newFormats) => {
            setBusinessTypes(newFormats);
            // console.log(businessTypes);
        };

        return (
            <Box sx={{
                maxWidth: 600,
                // bgcolor: "primary.light",
                // borderColor: "secondary.main",
                // border: 2,
                borderRadius: 2}}>
            <ToggleButtonGroup
                value={businessTypes}
                onChange={handleTypes}
                aria-label="business types"
                style={{display: "flex", flexWrap: "wrap", margin: "1rem", justifyContent: "center"}}
            >
                {businesses_types.map(btype =>
                    <ToggleButton value={btype} aria-label={btype} style={{margin: "1rem", width: 100, borderRadius: 6, boxShadow: "1px 2px 4px #000000"}}>
                        {btype}
                    </ToggleButton>)}
            </ToggleButtonGroup>
            </Box>
        );
    }

    const onSubmitBusiness = async () => {
        // let name = GetBusinessName(false);
        // console.log(name);
        try {
            await addDoc(businessesCollectionRef, {
                BusinessType: businessTypes,
                Name: newBusinessName,

                businessId: auth?.currentUser?.uid,
            });
            // let previewImg = document.getElementById("previewImg");
            // previewImg.remove();
            // console.log("Before find");
            // findLatLong();
            // console.log("After find");
            onNext([newBusinessName, businessTypes, newPreviewUrl, ownerName]);

            // getBusinessesList();
        }catch (err)
        {
            console.log(err);
        }
    }
    const handleOnNext = () => {
        onNext([newBusinessName, businessTypes, newPreviewUrl, ownerName]);
    }

    return(
        <div>
            <Box sx={{margin: "1rem"}}>
            <Typography variant="h4" textAlign="start">Category</Typography>
                {BusinessTypesSelection(['cosmetics', 'nails', 'barber', 'hair', 'sport', 'art', 'lifestyle', 'music'])}
            </Box>
            <Stack direction="column" alignItems="start" margin="0.5rem">
                <Typography variant="h4">Business Name</Typography>
                <TextField id="outlined-basic" label="Business Name" variant="outlined" onChange={(e) => setNewBusinessName(e.target.value)} />

                <Typography variant="h4">Owner Name</Typography>
                <TextField fieldName={'Owner Name'} onChange={(e) => setOwnerName(e.target.value)}/>

                <Typography variant="h4">I’ve added businesses in the past</Typography>
                <RowRadioButtonsGroup/>
                <Typography variant="h4">Business owner facebook profile link:</Typography>
                <TextField fieldName={'my profile page'} onChange={(e) => setNewPreviewUrl(e.target.value)}/>
            </Stack>
            <button onClick={onSubmitBusiness}> Sign In!</button>
            <Button onClick={handleOnNext}>
                {'Next'}
            </Button>
        </div>
    )
}