import {Component} from 'react';
import './Community.styles.css';
import {Container, Typography} from "@mui/material";
import SupervisedUserCircleSharpIcon from '@mui/icons-material/SupervisedUserCircleSharp';
import Avatar from "@mui/material/Avatar";
import ComunityCard from "../../Components/AvatarGroup/AvatarGroupComp";
import Box from "@mui/material/Box";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";

class CommunityComponent extends Component {
    render() {
        return (
            <div>
                <Container sx={{backgroundColor: "primary.main"}}>
                    <Avatar sx={{alignItems: "center", justifyItems: "center", display: "flex"}}>
                        <SupervisedUserCircleSharpIcon sx={{fontSize: '4rem'}}/>
                    </Avatar>
                </Container>
                <Box sx={{
                    paddingRight: '1rem',
                    paddingLeft: '1rem',
                    paddingTop: '6rem',
                    paddingBottom: '8rem',
                    backgroundColor: 'primary.light',
                    position: 'relative',
                    borderBottom: 8,
                    borderBottomColor: 'secondary.main'
                }}>
                    <Box sx={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Box sx={{flexDirection: 'column', margin: 'auto'}}>
                            <Avatar sx={{
                                color: "primary.main",
                                width: 70,
                                height: 70,
                                margin: '0 8px',
                                background: '#ffffff',
                                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.50)'
                            }}>
                                <SupervisedUserCircleIcon sx={{width: 50, height: 50}}/>
                            </Avatar>
                            <Typography variant="h2" color="white" boxShadow="unset">Huji</Typography>
                        </Box>
                    </Box>
                </Box>
                {/*<Typography variant="h2">*/}
                {/*    Community*/}
                {/*</Typography>*/}
                <ComunityCard/>
            </div>
        )
    }
}

export default CommunityComponent;