import './AroundMe.styles.css';
import {Component} from "react";
import FullWidthTabs from "../../Components/AroundMeTab/TabAroundMe"
import CityCircleLogoLogIn from "../../Styled Components/styledCityCircleLogoLogIn";
import theme from "../../Theme/Theme";
import Box from "@mui/material/Box";
import {ThemeProvider} from "@mui/material/styles";


import TopMenuNew from "../../newComponents/TopMenuNew";
import StyledCircleReview from "../../Styled Components/StyledCircleReview";
import StyledCircleFootprints from "../../Styled Components/StyledCircleFootprints";
import {
    StyledAvatarUserFeed,
    StyledBusinessFeed, StyledRating
} from "../../Styled Components/styledComponents";
import StyledSmallCircleButton from "../../Styled Components/StyledSmallCirclesButton";
import StyledFeedItem from "../../Styled Components/StyledFeedItem";
import FeedItemPage from "../../Styled Components/FeedItemPage";
import StyledBottomNavigationBar from "../../Styled Components/StyledBottomNavigationBar";
class AroundMe extends Component{
render() {
    return(
        <fragment>
            <div style={{paddingTop: "3.5rem"}}>
                {/*<AppBar>*/}
                {/*<Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText',p: 2}}>*/}
                {/*TODO: 1. apply design like the tab bar. 2. make the h1 tag centered.*/}
                {/*    /!*<Typography variant="h2">Around me</Typography>*!/*/}
                {/*    /!*<h1 style={{justifyContent: 'center', alignItems: 'center', margin: 'auto'}}>*!/*/}
                {/*    /!*    Around Me*!/*/}
                {/*    /!*</h1>*!/*/}
                {/*</Box>*/}
                {/*</AppBar>*/}
                {/*<FullWidthTabs/>*/}
                {/*<ResizableMap/>*/}
                <ThemeProvider theme={theme}>
                    <CityCircleLogoLogIn/>
                    <TopMenuNew/>
                    <Box sx={{mt:10}}>
                        {/*<StyledCircleReview/>*/}
                        {/*<StyledCircleFootprints/>*/}
                        {/*<StyledAvatarUserFeed/>*/}
                        {/* TODO: add dialog box with user circles*/}
                        {/*<StyledSmallCircleButton userID={"m5UUdxwDFEgDCohPQdKYy6rdjtp1"}/>*/}

                        {/*<StyledBusinessFeed/>*/}
                        {/*<StyledFeedItem user_name={"Yuval Lavie"} profile_photo_url={"https://lh3.googleusercontent.com/a/AAcHTtewmeRi-bILTOrRfsI9IBdm7kXJEYXJjz9VOyKB_Q=s96-c"}*/}
                        {/*circles ={["CoolStuff", "DaBoiz", "DaGirlz"]} time={"10 minutes"}*/}
                        {/*business_name={"Falafel_Mama"} business_photo_url={"none"}*/}
                        {/*rating={4.5} url_to_business={""} review={"Mama mia! it was fantastic and very parent-like."}*/}
                        {/*review_address={""}/>*/}
                        <FeedItemPage/>

                        <StyledBottomNavigationBar/>
                    </Box>
                </ThemeProvider>
            </div>
        </fragment>

    )
}
}
// TODO:
//  1. need to fix the bottom bar in this page- it is not in proportion.
//  2. the bottom bar is also not fixed on the bottom- we have to scroll in order to see it.
export default AroundMe