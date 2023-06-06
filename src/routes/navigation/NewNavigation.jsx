import StyledTopMenuNew from "../../Styled Components/StyledTopMenuNew";
import {Outlet} from "react-router-dom";
import StyledBottomNavigationBar from "../../Styled Components/StyledBottomNavigationBar";

const NewNavigation = () => {
    return (
        <>
            <StyledTopMenuNew/>
            <Outlet/>
            <StyledBottomNavigationBar/>
        </  >
    )
};

export default NewNavigation;