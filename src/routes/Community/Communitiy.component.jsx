import {Component} from 'react';
import './Community.styles.css';
import {Container, Typography} from "@mui/material";
import SupervisedUserCircleSharpIcon from '@mui/icons-material/SupervisedUserCircleSharp';
import Avatar from "@mui/material/Avatar";

class CommunitiyComponent extends Component{
    render() {
        return(
            <div style={{paddingTop: "3.5rem"}}>
                <Container sx={{backgroundColor: "primary.main"}}>
                    <Avatar sx={{alignItems: "center", justifyItems: "center", display: "flex"}}>
                        <SupervisedUserCircleSharpIcon />
                    </Avatar>
                </Container>
                <Typography variant="h2">
                    Community
                </Typography>
            </div>
        )
    }
};
export default CommunitiyComponent;