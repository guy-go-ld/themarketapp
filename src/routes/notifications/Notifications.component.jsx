import './Notifications.styles.css';
import {Component} from "react";
import {Auth} from "../../Components/Auth/auth";
import * as React from "react";
import CreateBusiness from "../../BackEndComponents/CreateBusiness.component";
import UserRegistrationForm from "../../Components/UserRegistration.component";
// import CreateUser from "../../BackEndComponents/CreateUser.component";
// import BusinessStepper from "../../Components/BusinessRegistrationComponents/Stepper.components";
import LogInPage from "../../Styled Components/styledLogInPage";
import SignupPage from "../../routes/SignUpPage";
import {BottomBoxWithLogo, TopBoxWithLogo} from "../../Styled Components/StyledBoxWithLogo";
import Box from "@mui/material/Box";
import FirstPage from "../LogInPage";
import CreateUser from "../../BackEndComponents/CreateUser.component";


class Notifications extends Component{
    render() {
        return(
            <div style={{paddingTop: "5rem"}}>
            {/*<Auth/>*/}
            {/*    <LogInPage/>*/}
                <FirstPage/>
            {/*    <SignupPage/>*/}
                {/*<UserRegistrationForm/>*/}
                {/*<TopBoxWithLogo/>*/}
                {/*<Box sx={{height: 300}}></Box>*/}
                {/*<BottomBoxWithLogo/>*/}
            {/*    <UserRegistrationForm/>*/}
            {/*<CreateUser/>*/}
            {/*<CreateBusiness/>*/}
            </div>
        )
    }
}
export default Notifications;