import {useState} from "react";
import {
    Box,
    Divider, Drawer, IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar
} from "@mui/material";
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import InboxIcon from "@mui/icons-material/Inbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import DraftsRoundedIcon from '@mui/icons-material/DraftsRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import {Link} from "react-router-dom";
import BusinessRegistration1 from "../../routes/business_registratin_pages/BusinessRegistrationPage1";
import LogoutIcon from '@mui/icons-material/Logout';
import {signOut} from "firebase/auth";
import {auth} from "../../config/firebase";

const drawerWidth = '35%';
function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const logout = async() =>{
        try
        {
            await signOut(auth);
        } catch (err) {
            console.error(err);
        }
    }

    function sendToCreateBusiness() {
        window.location.replace('/BusinessRegistrationPage1');
    }

    const drawer_content = [
        {text: 'Add a new business', path: "/BusinessRegistrationPage1", icon: <AddBoxOutlinedIcon />},
        {text: 'Starred', path: "/", icon: <StarRoundedIcon />},
        {text: 'Drafts', path: "/", icon: <DraftsRoundedIcon />},
        {text: 'Send email', path: "/", icon: <EmailRoundedIcon />},
            ];

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {drawer_content.map((key, index) => (
                    <ListItem key={key.text} disablePadding>

                        <ListItemButton component={Link} to={key.path} >
                            <ListItemIcon>
                                {/*{index % 2 === 0 ? <AddBoxOutlinedIcon /> : <MailIcon />}*/}
                                {key.icon}
                            </ListItemIcon>
                            <ListItemText primary={key.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={logout}>
                        <ListItemIcon>
                            <LogoutIcon/>
                        </ListItemIcon>
                        <ListItemText primary='Log-Out' />
                    </ListItemButton>
                </ListItem>
                {/*{['All mail', 'Trash', 'Spam'].map((text, index) => (*/}
                {/*    <ListItem key={text} disablePadding>*/}
                {/*        <ListItemButton>*/}
                {/*            <ListItemIcon>*/}
                {/*                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
                {/*            </ListItemIcon>*/}
                {/*            <ListItemText primary={text} />*/}
                {/*        </ListItemButton>*/}
                {/*    </ListItem>*/}
                {/*))}*/}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon sx={{
                            fontSize: {
                                xs: '3rem',
                                sm: '4rem',
                                md: '5rem',
                                lg: '6rem'
                            }
                        }} />
                    </IconButton>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: false, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{

                        display:
                            {
                                xs: 'none',
                                sm: 'block',
                            },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, display:"none"},
                    }}

                    open
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

export default ResponsiveDrawer;