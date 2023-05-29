import {Component} from "react";
import {Auth} from "../../Components/Auth/auth";
import * as React from "react";
import CreateBusiness from "../../BackEndComponents/CreateBusiness.component";
import BusinessStepper from "../../Components/BusinessRegistrationComponents/Stepper.components";
import {render} from "react-dom";

export default function BusinessRegistration1() {
    // render()
    // {
        return(

            <div style={{paddingTop: "8rem", paddingBottom: "7rem"}}>
                <BusinessStepper/>

                {/*<Auth/>*/}
                {/*<CreateUser/>*/}
                {/*<CreateBusiness/>*/}
            </div>
        )
    // }
}
// export default BusinessRegistration1();