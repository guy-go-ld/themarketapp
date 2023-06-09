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
// import data from "../../databases/BusinessAllData.json";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import ProfileTabsBarComponent from "../../Components/profile-tabs-bar/profile-tabs-bar.component";
import {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {auth, db} from "../../config/firebase";


function ShowProfile(data_on_person)
{
    const [user, setUser] = useState(null);
    const usersCollectionRef = collection(db, "Users");

    const getUserList = async () => {
        // READ THE DATA
        // SET THE MOVIE LIST
        try
        {
            const data = await getDocs(usersCollectionRef);
            const filteredData = data.docs.map((doc) =>
                ({...doc.data(), id: doc.id,})
            );
            // console.log(filteredData);
            // TODO make this shit better
            const userData = filteredData.filter((document) =>
                (document.id === data_on_person)
            );
            // console.log(userData);
            setUser(userData[0]);

        } catch (err){
            console.error(err);
        }
    }

    useEffect(()=>{

        getUserList();
    }, []);

    return(
        <div>


            {
                (user != null && auth?.currentUser?.uid === user.id) ?
                    (<div>

                            <div>
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
                                            <Typography variant="h2" color="white" boxShadow="unset">
                                                {
                                                    (user != null) ?
                                                        (<div> {user.FirstName} </div>) :
                                                        (<div> UserName </div>)
                                                }

                                            </Typography>
                                            <ProfileTabsBarComponent>

                                            </ProfileTabsBarComponent>

                                        </Box>
                                    </Box>
                                </Box></div></div>) :
                    (<div>
                        {
                        (auth?.currentUser?.uid !== null) ?
                            (<div></div>) :
                            (<div style={{paddingTop: "5.0rem"}}> It's another one's page!</div>)}
                        </div>)
            }
        </div>
    );
}

export default function ProfilePageComponent(){
    const location = useLocation()
    const check_null = location.state === null;
    let {from} = (check_null === true) ? 0 : location.state;

    // constructor(id) {
    //     super();
    //     this.state={
    //         profileID:id
    //     };
    // }
        return(
            <div>
                <Typography variant="h2">
                    {(check_null === true) ?
                        (<div><h2> Error - profile page doesn't exists</h2></div>)
                        :
                        (<div>{ShowProfile(from)}</div>)
                    }
                </Typography>
            </div>
        );
}
