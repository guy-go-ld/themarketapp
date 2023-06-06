import StyledCircleReview from "../../Styled Components/StyledCircleReview";
import StyledTopMenuNew from "../../Styled Components/StyledTopMenuNew";
import {Outlet} from "react-router-dom";
import StyledBottomNavigationBar from "../../Styled Components/StyledBottomNavigationBar";
import {Typography} from "@mui/material";

const NewNavigation = () =>{
    return(
        <>
            <StyledTopMenuNew />
            <Outlet sx={{marginTop:`4.5rem`}}/>
            <StyledBottomNavigationBar/>
        </>

    )
};

export default NewNavigation;