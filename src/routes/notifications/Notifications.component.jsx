import './Notifications.styles.css';
import {Component} from "react";
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import ProfileTabsBarComponent from "../../Components/profile-tabs-bar/profile-tabs-bar.component";

class Notifications extends Component{
    render() {
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
                                margin: '0 8px',
                                background: '#ffffff',
                                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.50)'
                            }}>
                                <SupervisedUserCircleIcon sx={{width: 50, height: 50}}/>
                            </Avatar>
                            <Typography variant="h2" color="white" boxShadow="unset">User</Typography>
                        </Box>
                    </Box>
                </Box>
                <ProfileTabsBarComponent>

                </ProfileTabsBarComponent>


            </div>
        )
    }
}
export default Notifications;