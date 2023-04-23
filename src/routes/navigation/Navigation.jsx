import {Outlet, Link} from "react-router-dom";
import {Fragment} from "react";
import {ReactComponent as CrwnLogo} from './crown.svg';
import './navigation.styles.css';
const Navigation = () =>
{
    return(
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className = 'logo'/>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        Shop
                    </Link>
                    <p></p>
                    <Link className='nav-link' to='/SearchPage' state = {{id: "barber"}}>
                        SearchPage
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;