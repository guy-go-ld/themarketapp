import {styled, ThemeProvider} from "@mui/material/styles";
import {AppBar, Button, Icon, Input} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

export const StyledButtonGray = styled(Button)(({ theme }) => ({
    backgroundColor:theme.palette.info.light,
    color:theme.palette.info.main,
    padding:'10px',
    boxShadow : '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px',
    [theme.breakpoints.up('xs')]: {
        fontSize:'1.25rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize:'2.5rem',
    }
}));

export const StyledAppBarTop = styled(AppBar)(({ theme })=> ({
    backgroundColor:theme.palette.primary.main,
    borderBottom:`0.65rem solid ${theme.palette.secondary.main}`,
    position:"fixed",
    [theme.breakpoints.up('xs')]: {
        height:'6.5rem',
    }
}));
export const StyledSearchBar = styled(Input)(({ theme })=> ({
    backgroundColor:"white",
    color:theme.palette.info.dark,
    marginLeft:"auto",
    marginRight:"auto",
    borderRadius:"10px",
    [theme.breakpoints.up('xs')]: {
        height:'3rem',
    }
}));

export const StyledHamburgerButton = styled(MenuIcon)(({ theme })=> ({
    color:theme.palette.secondary.main,
    [theme.breakpoints.up('xs')]: {
        fontSize:"4.5rem"
    }
}));

export const StyledCircleBox = styled(Box)(({ theme })=> ({
    borderRadius:"50%",
    border:`0.65rem solid ${theme.palette.secondary.main}`,
    backgroundColor:theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('xs')]:{
        width:"5.5rem",
        height:"5.5rem",
    }
}));




