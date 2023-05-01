import {useNavigate} from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import {IconButton} from "@mui/material";
const GoBack= () =>{
    const navigate = useNavigate();
    const goBack = () => {
        navigate('/',{replace:true});
    }
    return <>
        <IconButton aria-label="delete" size="large" onClick={goBack}>
            <CloseIcon fontSize="inherit"/>
        </IconButton>
    </>;
}
export default GoBack;