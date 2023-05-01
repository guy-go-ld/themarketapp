import {Outlet, Link, useNavigate} from "react-router-dom";
import {Fragment, useState} from "react";
import './Navigation.styles.css';
import {
    AppBar,
    BottomNavigation,
    BottomNavigationAction, Button, IconButton, Input, styled, Toolbar
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
    function sendToSearch(event){
        window.location.replace('/searchPageComponent');
    }
    return(
        <Fragment>
            <div className="top-nav">
                {/*<TopMenuComponent/>*/}
                <AppBar position="sticky">
                    <Toolbar>
                        <ResponsiveDrawer/>
                        <Input variant="text" sx={{color:'white'}} href='/SearchPageComponent' onClick={sendToSearch}>
                            Text</Input>
                    </Toolbar>
                </AppBar>
            </div>
            <Outlet/>
            <div className="bottom-nav">
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction component={Link} to="/" label="Home" icon={<SearchRoundedIcon />}/>
                    <BottomNavigationAction component={Link} to="/CommunityComponent" label="Community" icon={<ApartmentRoundedIcon />}  />
                    <BottomNavigationAction component={Link} to="/AroundMeComponent" label="Around Me" icon={<LocationOnIcon />}  />
                    <BottomNavigationAction component={Link} to="/NotificationsComponent" label="Notifications" icon={<NotificationImportantRoundedIcon />}  />
                    <BottomNavigationAction component={Link} to="/ProfilePageComponent" label="Profile" icon={<PersonRoundedIcon />}  />
                </BottomNavigation>
            </div>
        </Fragment>
    )
};
export default NavigationComponent;