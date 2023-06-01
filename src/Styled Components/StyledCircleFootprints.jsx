import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import {StyledCircleBox} from "./styledComponents";
import {ReactComponent as FootprintsIcon} from "../Icons/footprints-svgrepo-com.svg";

export default function StyledCircleFootprint(){
    return(
        <StyledCircleBox>
            <FootprintsIcon sx={{
                fontSize:"3.5rem",
                margin:"auto",
                color:"white",
            }}/>
        </StyledCircleBox>
    );
}