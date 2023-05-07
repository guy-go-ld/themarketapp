import {Component} from "react";
import {Typography} from "@mui/material";
// import data from "../../databases/BusinessAllData.json";

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
                </Typography>
            </div>
        );
    }
}

export default ProfilePageComponent;