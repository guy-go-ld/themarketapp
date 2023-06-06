import './Notifications.styles.css';
import {Component} from "react";
import {Auth} from "../../Components/Auth/auth";
import * as React from "react";
import CreateBusiness from "../../BackEndComponents/CreateBusiness.component";
import UserRegistrationForm from "../../Components/UserRegistration.component";
// import CreateUser from "../../BackEndComponents/CreateUser.component";
// import BusinessStepper from "../../Components/BusinessRegistrationComponents/Stepper.components";
import LogInPage from "../../Styled Components/styledLogInPage";


class Notifications extends Component{
    render() {
        return(
            <div style={{paddingTop: "5rem"}}>
            {/*<Auth/>*/}
                <LogInPage/>
                <UserRegistrationForm/>

            {/*<CreateUser/>*/}
            {/*<CreateBusiness/>*/}
            </div>
        )
    }
}
export default Notifications;