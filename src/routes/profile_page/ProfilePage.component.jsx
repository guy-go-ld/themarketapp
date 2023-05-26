import {Component} from "react";
import {Typography} from "@mui/material";
import {Auth} from "../../Components/Auth/auth";
// import {db, auth, storage} from "../../config/firebase";
// import {getDocs, collection, addDoc, deleteDoc, doc, updateDoc} from "firebase/firestore";
// import {ref, uploadBytes } from "firebase/storage";
import CreateUser from "../../BackEndComponents/CreateUser.component";
// import data from "../../databases/BusinessAllData.json";
import CreateBusiness from "../../BackEndComponents/CreateBusiness.component";


class ProfilePageComponent extends Component{

    constructor(id) {
        super();
        this.state={
            profileID:id
        };
    }
    render(){
        return(
            <div style={{paddingTop: "3.5rem"}}>
                <Typography variant="h2">
                    My Profile Page
                    <Auth/>
                    {/*<CreateUser/>*/}
                    <CreateBusiness/>
                </Typography>
            </div>
        );
    }
}

export default ProfilePageComponent;