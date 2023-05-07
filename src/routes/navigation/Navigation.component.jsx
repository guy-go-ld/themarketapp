import {Outlet, Link} from "react-router-dom";
import {Fragment, useState} from "react";
import './Navigation.styles.css';
import {
    AppBar,
    BottomNavigation,
    BottomNavigationAction, Input, Toolbar
} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import NotificationImportantRoundedIcon from '@mui/icons-material/NotificationImportantRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import ResponsiveDrawer from "../../Components/Responsive Drawer/ResponsiveDrawer.component";

const NavigationComponent = () =>
{
    const [value, setValue] = useState(0);
    function sendToSearch(){
        window.location.replace('/searchPageComponent');
    }
    return(
        <Fragment>
            <div className="top-nav">
                <AppBar style={{
                    top: "0",
                    position: "fixed",
                }}>
                    <Toolbar >
                        <ResponsiveDrawer/>
                        <Input variant="text" sx={{
                            color:'white',
                            height: {
                                xs:'4rem',
                                sm:'5rem',
                                md:'6rem',
                                lg:'7rem'
                            },
                            fontSize:
                                {
                                    xs:'2rem',
                                    sm:'3rem',
                                    md:'4rem',
                                    lg:'5rem'
                                }
                        }}
                               href='/SearchPageComponent' onClick={sendToSearch} placeholder="Search Businesses">
                            Text</Input>
                    </Toolbar>
                </AppBar>
            </div>
            <Outlet     />
            <div className="bottom-nav">

                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    sx={{
                        height: {
                            xs:"5rem",
                            sm:"7rem"
                        }
                    }}
                >
                    <BottomNavigationAction
                        component={Link} to="/" label="Home" icon={<SearchRoundedIcon
                        sx={{
                        fontSize: {
                            xs:"3rem",
                            sm:"5rem"
                        }
                    }}
                    />
                    }/>
                    <BottomNavigationAction component={Link} to="/CommunityComponent" label="Community" icon={<ApartmentRoundedIcon sx={{
                        fontSize: {
                            xs:"3rem",
                            sm:"5rem"
                        }
                    }}/>}  />
                    <BottomNavigationAction component={Link} to="/AroundMeComponent" label="Around Me" icon={<LocationOnIcon sx={{
                        fontSize: {
                            xs:"3rem",
                            sm:"5rem"
                        }
                    }}/>}  />
                    <BottomNavigationAction component={Link} to="/NotificationsComponent" label="Notifications" icon={<NotificationImportantRoundedIcon sx={{
                        fontSize: {
                            xs:"3rem",
                            sm:"5rem"
                        }
                    }}/>}  />
                    <BottomNavigationAction component={Link} to="/ProfilePageComponent" label="Profile" icon={<PersonRoundedIcon sx={{
                        fontSize: {
                            xs:"3rem",
                            sm:"5rem"
                        }
                    }}/>}  />
                </BottomNavigation>
            </div>
        </Fragment>
    )
};
export default NavigationComponent;