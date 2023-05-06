import './Notifications.styles.css';
import {Component} from "react";
import {Typography} from "@mui/material";

class Notifications extends Component{
    render() {
        return(
            <div style={{paddingTop: "3.5rem"}}>
                <Typography variant="h2">
                    Notifications
                </Typography>

            </div>
        )
    }
}
export default Notifications;