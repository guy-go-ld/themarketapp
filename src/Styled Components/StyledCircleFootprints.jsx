import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import {StyledCircleBox} from "./styledComponents";
import {ReactComponent as FootprintsIcon} from "../Icons/footprints-svgrepo-com.svg";

export default function StyledCircleFootprint(){
    return(
        <StyledCircleBox>
            <FootprintsIcon width="3.5rem" height="3.5rem" sx={{
                fontSize:"3rem",
                margin:"auto",
                fill:"white",
            }}/>
        </StyledCircleBox>
    );
}