import {Outlet, Link} from "react-router-dom";
import {Fragment, useState} from "react";
import {ReactComponent as CrwnLogo} from './crown.svg';
import './navigation.styles.css';
import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Navigation = () =>
{
    const [value, setValue] = useState(0);
    return(
        <Fragment>
            {/*<div className='navigation'>*/}
            {/*    <Link className='logo-container' to='/'>*/}
            {/*        <CrwnLogo className = 'logo'/>*/}
            {/*    </Link>*/}
            {/*    <div className='nav-links-container'>*/}
            {/*        <Link className='nav-link' to='/BusinessPage'>*/}
            {/*            BusinessPage*/}
            {/*        </Link>*/}
            {/*        <Link className='nav-link' to='/SearchPage' state = {{id: "barber"}}>*/}
            {/*            SearchPage*/}
            {/*        </Link>*/}
            {/*        <Link className='nav-link' to='/ProfilePage'>*/}
            {/*            ProfilePage*/}
            {/*        </Link>*/}
            {/*        <Link className='nav-link' to='/shop'>*/}
            {/*            shop*/}
            {/*        </Link>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction component={Link} to="/" label="Recents" icon={<RestoreIcon />}/>
                <BottomNavigationAction component={Link} to="/SearchPage" label="Favorites" icon={<FavoriteIcon />}  />
                <BottomNavigationAction component={Link} to="/BusinessPage" label="Nearby" icon={<LocationOnIcon />}  />
            </BottomNavigation>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;