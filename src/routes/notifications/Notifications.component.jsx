import './Notifications.styles.css';
import {Component} from "react";
import {Auth} from "../../Components/Auth/auth";
import * as React from "react";
import CreateBusiness from "../../BackEndComponents/CreateBusiness.component";
import CreateUser from "../../BackEndComponents/CreateUser.component";
import BusinessStepper from "../../Components/BusinessRegistrationComponents/Stepper.components";

class Notifications extends Component{
    render() {
        return(
            <div style={{paddingTop: "10rem"}}>
            <Auth/>
            {/*<CreateUser/>*/}
            <CreateBusiness/>
            </div>
        )
    }
}
export default Notifications;