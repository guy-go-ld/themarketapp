import {Typography} from "@mui/material";
// import {Auth} from "../../Components/Auth/auth";
// import {db, auth, storage} from "../../config/firebase";
// import {getDocs, collection, addDoc, deleteDoc, doc, updateDoc} from "firebase/firestore";
// import {ref, uploadBytes } from "firebase/storage";
// import CreateUser from "../../BackEndComponents/CreateUser.component";
// import data from "../../databases/BusinessAllData.json";
// import CreateBusiness from "../../BackEndComponents/CreateBusiness.component";
import * as React from "react";
import {useLocation} from "react-router-dom";
import data from "../../databases/BusinessAllData.json";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import ProfileTabsBarComponent from "../../Components/profile-tabs-bar/profile-tabs-bar.component";


function ShowProfile(data_on_person)
{
    return(
        <div style={{paddingTop: "5.0rem"}}>
            <Box sx={{
                paddingRight: '1rem',
                paddingLeft: '1rem',
                paddingTop: '6rem',
                paddingBottom: '8rem',
                backgroundColor: 'primary.light',
                position: 'relative',
                borderBottom: 8,
                borderBottomColor: 'secondary.main'

            }}>
                <Box sx={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    display: 'flex',
                    marginTop: '-50px',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Box sx={{flexDirection: 'column', margin: 'auto'}}>
                        <Avatar sx={{
                            color: "primary.main",
                            width: 70,
                            height: 70,
                            margin: '0 50px',
                            background: '#ffffff',
                            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.50)'
                        }}>
                            <SupervisedUserCircleIcon sx={{width: 50, height: 50}}/>
                        </Avatar>
                        <Typography variant="h2" color="white" boxShadow="unset">Username</Typography>
                        <ProfileTabsBarComponent>

                        </ProfileTabsBarComponent>
                    </Box>
                </Box>
            </Box>



        </div>
    );
}

export default function ProfilePageComponent(){
    const location = useLocation()
    const check_null = location.state === null;
    let {from} = (check_null === true) ? 0 : location.state;
    const data_on_person = data.filter((business) => business.id === from)[0]; // TODO better this stuff

    // constructor(id) {
    //     super();
    //     this.state={
    //         profileID:id
    //     };
    // }
        return(
            <div style={{paddingTop: "3.5rem"}}>
                <Typography variant="h2">
                    My Profile Page

                    {(check_null === true) ?
                        (<div><h2> Error - profile page doesn't exists</h2></div>)
                        :
                        (<div>{ShowProfile(data_on_person)}</div>)
                    }
                </Typography>
            </div>
        );
}
