import {Component} from "react";
import data from "../../databases/ListData.json";

class ProfilePage extends Component{
    constructor(id) {
        super();
        this.state={
            profileID:id
        };
    }
    render(){
        return(
            <div>
                <h1 >My Profile Page</h1>
            </div>
        );
    }
}

export default ProfilePage;