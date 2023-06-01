import {styled} from "@mui/material/styles";
import {AppBar, Button, Input, Rating, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";

export const StyledButtonGray = styled(Button)(({ theme }) => ({
    backgroundColor:theme.palette.info.light,
    color:"black",
    padding:'0.5rem',
    boxShadow : '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '15px',
    [theme.breakpoints.up('xs')]: {
        fontSize:'0.8rem',
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

export const StyledAvatarUserFeed = styled(Avatar)(({ theme })=> ({
    boxShadow : "0px 4px 4px rgba(0, 0, 0, 0.25)",
    [theme.breakpoints.up('xs')]:{
        width:"2.5rem",
        height:"2.5rem"
    }
}));

export const StyledSmallCirclesButton = styled(SupervisedUserCircleIcon)(({ theme })=> ({
    color:theme.palette.primary.main,
    [theme.breakpoints.up('xs')]:{
        width:"1.25rem",
        height:"1.25rem"
    }
}));

export const StyledBusinessFeed = styled(Avatar)(({ theme })=> ({
    boxShadow : "0px 4px 4px rgba(0, 0, 0, 0.25)",
    [theme.breakpoints.up('xs')]:{
        width:"4.5rem",
        height:"4.5rem"
    }
}));

export const StyledRating = styled(Rating)(({ theme })=> ({
    color:theme.palette.secondary.dark,
    "&:hover": {
        color: theme.palette.secondary.main,
    },
    [theme.breakpoints.up('xs')]:{
    }
}));

export const StyledTypographyReview = styled(Typography)(({ theme })=> ({
    maxWidth: "100%",
    textAlign: "left",
    maxHeight:"3.2rem",
    textOverflow:"ellipsis",
    overflow: "hidden",
    overflowWrap: "break-word",
    variant:"p",
    "&:after": {
        content: "'...'",
        // position: 'absolute',
        // right: 0,
        // bottom: 0,
        // padding: '0 0.5em',
        // background: 'white',
    },
    [theme.breakpoints.up('xs')]:{
    }
}));
