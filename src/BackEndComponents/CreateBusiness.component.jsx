import {useEffect, useState} from "react";
import {addDoc, collection, deleteDoc, doc, getDocs, updateDoc} from "firebase/firestore";
import {auth, db, storage} from "../config/firebase";
import {ref, uploadBytes} from "firebase/storage";
import dropdownSocials from "../Components/dropDownBusinessSocial.component";
import * as React from "react";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';
// import dayjs from 'dayjs';


// import Geocode from "react-geocode";

// function ConvertAddressToCoord(address) {
//     Geocode.fromAddress(address).then(
//         (response) => {
//             const { lat, lng } = response.results[0].geometry.location;
//             console.log(lat, lng);
//             return [lat, lng]
//         },
//         (error) => {
//             console.error(error);
//         }
//     );
// }

function GetBusinessName(flag = true)
{
    const [ newBusinessName, setNewBusinessName] = useState("");
    return (flag) ? (
        <input placeholder="Business Name..." onChange={(e) => setNewBusinessName(e.target.value)}/>
    ) : newBusinessName;
}
export default function CreateBusiness()
{
    // New User States
    const [ newBusinessType, setNewBusinessType] = useState([""]);
    const [ newBusinessName, setNewBusinessName] = useState("");
    const [ newBusinessArea, setNewBusinessArea] = useState("");
    const [ newBusinessAddress, setNewBusinessAddress] = useState("");
    const [ newBusinessCoord, setNewBusinessCoord] = useState([0,0]);
    const [ newBusinessRank, setNewBusinessRank] = useState(0);
    const [ newBusinessOpenHours, setNewBusinessOpenHours] = useState({})
    // TODO: how to initialize timestamp??
    const [ newBusinessEmail, setNewBusinessEmail] = useState("");
    const [ newBusinessPhoneNumber, setNewBusinessPhoneNumber] = useState(0);
    const [ newBusinessWeb, setNewBusinessWeb] = useState("");

    const [ newBusinessSocial, setNewBusinessSocial] = useState({"facebook": "", "instagram": ""});
    const [ newBusinessProfilePicture, setNewBusinessProfilePicture] = useState("");
    const [ newBusinessPictures, setNewBusinessPictures] = useState([]);
    const [ newBusinessVisits, setNewBusinessVisits] = useState([""]); // TODO: need to sort it by time, and need to connect to users database

    const [ newBusinessPass, setNewBusinessPass] = useState(0);

    const [newPreviewUrl, setNewPreviewUrl] = useState([null]);


    // Update Business Name State
    const [businessName, setBusinessName] = useState(""); // TODO: in the future- need to make edit component

    // File Upload State
    const [file, setFile] = useState(null);

    // List of all Users
    const [businessList, setBusinessList] = useState([]);
    const businessesCollectionRef = collection(db, "Business");

    const getBusinessesList = async () => {
        // READ THE DATA
        // SET THE MOVIE LIST
        try
        {
            const data = await getDocs(businessesCollectionRef);
            const filteredData = data.docs.map((doc) =>
                ({...doc.data(), id: doc.id,})
            );
            setBusinessList(filteredData);
            console.log(filteredData[0]["Name"]);
            console.log(filteredData);
        } catch (err){
            console.error(err);
        }
    }

    // const findLatLong = () => { // TODO: not working for some reason
    //     console.log("Findings");
    //     Geocode.fromAddress(newBusinessAddress).then(
    //         (response) => {
    //             console.log("Settings");
    //
    //             setNewBusinessCoord(response.results[0].geometry.location) ;
    //             console.log(response.results[0].geometry.location);
    //             // console.log(lat, lng);
    //             // return [lat, lng]
    //         },
    //         (error) => {
    //             console.error(error);
    //             console.log("SettingsERRRORR");
    //         }
    //     );
    // }

    useEffect(()=>{

        getBusinessesList();
    }, []);

    const onSubmitBusiness = async () => {
        // let name = GetBusinessName(false);
        // console.log(name);
        try {

            await addDoc(businessesCollectionRef, {
                BusinessType: newBusinessType,
                Name: newBusinessName,
                BusinessArea: newBusinessArea,
                Address: newBusinessAddress,
                Coordinate: newBusinessCoord,
                OpenHours: newBusinessOpenHours,
                Ranking: newBusinessRank,
                password: newBusinessPass,
                Email: newBusinessEmail,
                PhoneNumber: newBusinessPhoneNumber,
                Website: newBusinessWeb,
                Socials: newBusinessSocial,
                ProfilePicture: newBusinessProfilePicture,
                // Pictures: newBusinessPictures,
                Pictures: newBusinessPictures,

                LastVisits: newBusinessVisits,
                userId: auth?.currentUser?.uid,
            });
            // let previewImg = document.getElementById("previewImg");
            // previewImg.remove();
            // console.log("Before find");
            // findLatLong();
            // console.log("After find");
            getBusinessesList();
        }catch (err)
        {
            console.log(err);
        }

    }

    const deleteBusiness = async (id) => {
        const businessDoc = doc(db, "Business", id);
        await deleteDoc(businessDoc);
        await getBusinessesList();
    }

    const updateBusinessName = async (id) => {
        const businessDoc = doc(db, "Business", id);
        await updateDoc(businessDoc, { Name: businessName });
        await getBusinessesList();
    };


    // update the business coordinate due to the address
    // useEffect(() => {
    //     findLatLong();
    // }, [newBusinessAddress]);

    function BusinessTypesSelection(businesses_types) {
        const [formats, setFormats] = useState(() => []);

        const handleFormat = (event, newFormats) => {
            setFormats(newFormats);
            setNewBusinessType(formats)
            // newBusinessType.push(newFormats)
            // setNewBusinessType(newBusinessType)
        };

        return (
            <ToggleButtonGroup
                value={formats}
                onChange={handleFormat}
                aria-label="business types"
            >
                {businesses_types.map(btype =>
                    <ToggleButton value={btype} aria-label={btype}>
                        {btype}
                    </ToggleButton>)}
            </ToggleButtonGroup>
        );
    }

    function updateOpenHours(day, hours) {
        // if we want that open hour and closing hour will save in different key:

        newBusinessOpenHours[day] = hours;
        setNewBusinessOpenHours(newBusinessOpenHours);

        // if we want to put open and close hours of the same day on array :

        // if (day in newBusinessOpenHours) {
        //     newBusinessOpenHours[day].push(hours);
        // }
        // else {
        //     newBusinessOpenHours[day] = [hours];
        // }
        // setNewBusinessOpenHours(newBusinessOpenHours);
    }

    const handleFileChange = (event) => {
        const file_upload = event.target.files[0];
        setFile(file_upload);

        const reader = new FileReader();
        reader.onload = () => {
            newPreviewUrl.push(reader.result)
            setNewPreviewUrl(newPreviewUrl);
        };
        reader.readAsDataURL(file_upload);
    };

    // useEffect(() => {
    //     handleFileChange();
    // },
    //     [])

    const handleUpload = () => {
        const storageRef = storage.ref();
        const fileRef = storageRef.child(file.name);
        const url_file = URL.createObjectURL(file);
        newBusinessPictures.push(url_file);

        // newBusinessPictures.push(`projectFiles/${file.name}`);
        setNewBusinessPictures(newBusinessPictures);
        fileRef.put(file).then(() => {
            console.log('File uploaded successfully');
            // Perform any additional actions after the upload
        }).catch((error) => {
            console.error('Error uploading file:', error);
        });
    };

    const uploadBusinessPictures = async () => {
        if (!file) return;
        const filesFolderRef = ref(storage, `projectFiles/${file.name}`);
        try{
            await uploadBytes(filesFolderRef, file);
            const url_file = URL.createObjectURL(file);
            newBusinessPictures.push(url_file);

            // newBusinessPictures.push(`projectFiles/${file.name}`);
            setNewBusinessPictures(newBusinessPictures);
            // const url_file = URL.createObjectURL(file);
            // if (newBusinessPictures.target.files.length > 0) {
            //     const file = URL.createObjectURL(newBusinessPictures.target.files[0]);
            //     setNewBusinessPictures(file);
            // }
            console.log(file);
             // return (
             //     newBusinessPictures.map(imageSrc => <img id="previewImg" src={imageSrc}  alt="business pictures"/>)
             // )

        } catch (err){
            console.log(err);
        }

    }

    return(<div>
        <p><input
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}/>
            {/*// onChange={(e) => setFile(e.target.files[0])}/>*/}
            {newPreviewUrl && newPreviewUrl.map(imageSrc => <img id="previewImg" src={imageSrc} alt="Preview" />)}

            <button onClick={uploadBusinessPictures}> Upload Pictures</button>
            {/*{ newBusinessPictures.map(imageSrc => <img id="previewImg" src={imageSrc}  alt="business pictures"/>) }*/}
            {/*TODO: not good, need to find different and better way of doing that*/}
        </p>
        List len: {businessList.length}
        <p></p>
        {/*{GetBusinessName(true)}*/}
        <input placeholder="Business Name..." onChange={(e) => setNewBusinessName(e.target.value)}/>
        <input placeholder="Business Area..." onChange={(e) => setNewBusinessArea(e.target.value)}/>
        <input placeholder="Password..." onChange={(e) => setNewBusinessPass(e.target.value)}/>
        {/*<input placeholder="Business Type..." onChange={(e) => setNewBusinessType(e.target.value)}/>*/}
        <br/>
        {BusinessTypesSelection(['cosmetics', 'nails', 'barber', 'hair'])}

        <br/>
        <label style={{fontSize: 20}}>sunday opening hour
            <input type="time" onChange={(e) => updateOpenHours("Sunday- open", e.target.value)}/>
        </label>
        <br/>
        <label style={{fontSize: 20}}>sunday closing hour
            <input type="time" onChange={(e) => updateOpenHours("Sunday - close", e.target.value)}/>
        </label>
        <br/>
        <label style={{fontSize: 20}}>Monday opening hour
            <input type="time" onChange={(e) => updateOpenHours("Monday- open", e.target.value)}/>
        </label>
        <br/>
        <label style={{fontSize: 20}}>Monday closing hour
            <input type="time" onChange={(e) => updateOpenHours("Monday - close", e.target.value)}/>
        </label>
        <br/>
        <label style={{fontSize: 20}}>Tuesday opening hour
            <input type="time" onChange={(e) => updateOpenHours("Tuesday- open", e.target.value)}/>
        </label>
        <br/>
        <label style={{fontSize: 20}}>Tuesday closing hour
            <input type="time" onChange={(e) => updateOpenHours("Tuesday - close", e.target.value)}/>
        </label>
        <br/>
        <label style={{fontSize: 20}}>Wednesday opening hour
            <input type="time" onChange={(e) => updateOpenHours("Wednesday- open", e.target.value)}/>
        </label>
        <br/>
        <label style={{fontSize: 20}}>Wednesday closing hour
            <input type="time" onChange={(e) => updateOpenHours("Wednesday - close", e.target.value)}/>
        </label>
        <br/>
        <label style={{fontSize: 20}}>Thursday opening hour
            <input type="time" onChange={(e) => updateOpenHours("Thursday- open", e.target.value)}/>
        </label>
        <br/>
        <label style={{fontSize: 20}}>Thursday closing hour
            <input type="time" onChange={(e) => updateOpenHours("Thursday - close", e.target.value)}/>
        </label>
        <br/>

        {/*<input aria-label="Monday open hours: " type="time" onChange={(e) => updateOpenHours("Monday", e.target.value)}/>*/}
        {/*<input aria-label="Tuesday open hours: " type="time" onChange={(e) => updateOpenHours("Tuesday", e.target.value)}/>*/}
        {/*<input aria-label="Wednesday open hours: " type="time" onChange={(e) => updateOpenHours("Wednesday", e.target.value)}/>*/}
        {/*<input aria-label="Thursday open hours: " type="time" onChange={(e) => updateOpenHours("Thursday", e.target.value)}/>*/}
        {/*<input aria-label="Friday open hours: " type="time" onChange={(e) => updateOpenHours("Friday", e.target.value)}/>*/}
        {/*<label>Responsive variant*/}
        {/*    <TimePicker />*/}
        {/*</label>*/}
        <input placeholder="Address..." onChange={(e) => setNewBusinessAddress(e.target.value)}/>
        <input placeholder="Business Ranking..." onChange={(e) => setNewBusinessRank(Number(e.target.value))}/>
        <input placeholder="E-mail..." onChange={(e) => setNewBusinessEmail(e.target.value)}/>
        <input placeholder="Phone Number..." onChange={(e) =>setNewBusinessPhoneNumber(e.target.value)}/>
        <input placeholder="Website..." onChange={(e) => setNewBusinessWeb(e.target.value)}/>
        <dropdownSocials/>
        <button onClick={onSubmitBusiness}> Sign In!</button>
        <p></p>

        {businessList.map((business) => (
            <div>
                <p> Name: {business.Name}
                    <input onChange={(e) => setBusinessName(e.target.value)}/>
                    <button onClick={() => updateBusinessName(business.id)}>update business name</button>
                </p>
                <button onClick={() => deleteBusiness(business.id)}>
                    Delete business?
                </button>
            </div>
        ))}
        <p></p>

    </div>);
}
