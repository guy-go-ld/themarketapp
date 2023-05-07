import {Component} from 'react';
import './Community.styles.css';
import {Container, Typography} from "@mui/material";
import SupervisedUserCircleSharpIcon from '@mui/icons-material/SupervisedUserCircleSharp';
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
class CommunityComponent extends Component{
    render() {
        return(
            <div style={{paddingTop: "3.5rem"}}>
                <Container sx={{backgroundColor: "primary.main"}}>
                    <Avatar sx={{alignItems: "center", justifyItems: "center", display: "flex"}}>
                        <SupervisedUserCircleSharpIcon />
                    </Avatar>
                </Container>
                <Box sx={{ paddingRight: '1rem', paddingLeft: '1rem',paddingTop: '4rem', paddingBottom: '4rem', backgroundColor: 'primary.light', position: 'relative', borderBottom:8, borderBottomColor: 'secondary.main'}} >
                    <Box sx={{position: 'absolute', bottom: -40, left: 0, right: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

                        <Box sx={{flexDirection: 'column', margin: 'auto'}}>
                            <Avatar sx={{color: "primary.main", width: 40, height: 40, margin: '0 8px', background: '#ffffff', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.50)'}}>
                                <SupervisedUserCircleIcon/>
                            </Avatar>
                            <Typography variant="body2" color="text.secondary">Huji</Typography>
                        </Box>

                    </Box>
                </Box>
                <Typography variant="h2">
                    {/*Community*/}
                </Typography>
            </div>
        )
    }
};
export default CommunityComponent;