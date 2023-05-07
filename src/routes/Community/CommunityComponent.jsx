import {Component} from 'react';
import './Community.styles.css';
import {Container, Typography} from "@mui/material";
import SupervisedUserCircleSharpIcon from '@mui/icons-material/SupervisedUserCircleSharp';
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

class CommunityComponent extends Component{
    render() {
        return(
            <div style={{paddingTop: "3.5rem"}}>
                <Container sx={{backgroundColor: "primary.main"}}>
                    <Avatar sx={{alignItems: "center", justifyItems: "center", display: "flex"}}>
                        <SupervisedUserCircleSharpIcon />
                    </Avatar>
                </Container>
                <Box sx={{ paddingRight: '1rem', paddingLeft: '1rem',paddingTop: '4rem', paddingBottom: '4rem', backgroundColor: 'primary.light', position: 'relative', borderBottom:4, borderBottomColor: 'secondary.main'}} >

                </Box>
                <Typography variant="h2">
                    Community
                </Typography>
            </div>
        )
    }
};
export default CommunityComponent;