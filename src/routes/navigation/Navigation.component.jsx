import {Outlet, Link} from "react-router-dom";
import {Fragment, useState} from "react";
import {ReactComponent as CrwnLogo} from './crown.svg';
import './Navigation.styles.css';
import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import NotificationImportantRoundedIcon from '@mui/icons-material/NotificationImportantRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
const NavigationComponent = () =>
{
    const [value, setValue] = useState(0);
    return(
        <Fragment>
            {/*<div className='navigation'>*/}
            {/*    <Link className='logo-container' to='/'>*/}
            {/*        <CrwnLogo className = 'logo'/>*/}
            {/*    </Link>*/}
            {/*    <div className='nav-links-container'>*/}
            {/*        <Link className='nav-link' to='/BusinessPageComponent'>*/}
            {/*            BusinessPageComponent*/}
            {/*        </Link>*/}
            {/*        <Link className='nav-link' to='/SearchPageComponent' state = {{id: "barber"}}>*/}
            {/*            SearchPageComponent*/}
            {/*        </Link>*/}
            {/*        <Link className='nav-link' to='/ProfilePageComponent'>*/}
            {/*            ProfilePageComponent*/}
            {/*        </Link>*/}
            {/*        <Link className='nav-link' to='/shop'>*/}
            {/*            shop*/}
            {/*        </Link>*/}
            {/*    </div>*/}
            {/*</div>*/}
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
                    <BottomNavigationAction component={Link} to="/SearchPageComponent" label="Community" icon={<ApartmentRoundedIcon />}  />
                    <BottomNavigationAction component={Link} to="/AroundMeComponent" label="Around Me" icon={<LocationOnIcon />}  />
                    <BottomNavigationAction component={Link} to="/BusinessPageComponent" label="Notifications" icon={<NotificationImportantRoundedIcon />}  />
                    <BottomNavigationAction component={Link} to="/ProfilePageComponent" label="Profile" icon={<PersonRoundedIcon />}  />
                </BottomNavigation>
            </div>
        </Fragment>
    )
}

export default NavigationComponent;