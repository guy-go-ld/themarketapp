import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import {StyledCircleBox} from "./styledComponents";

export default function StyledCircleReview(){
    return(
        <StyledCircleBox>
            <RateReviewOutlinedIcon sx={{
                fontSize:"3.5rem",
                margin:"auto",
                color:"white",
                width:"3.125rem !important",
                height:"3.125rem",
            }}/>
        </StyledCircleBox>
    );
}