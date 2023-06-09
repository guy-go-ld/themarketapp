import {styled} from "@mui/material/styles";
import {
    AppBar,
    Autocomplete,
    BottomNavigation, BottomNavigationAction,
    Button,
    DialogContentText,
    Input,
    Rating,
    Typography
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import DialogTitle from "@mui/material/DialogTitle";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import {ReactComponent as FootprintsIcon} from "../Icons/footprints-svgrepo-com.svg";
import TextField from "@mui/material/TextField";

export const StyledButtonGray = styled(Button)(({theme}) => ({
    backgroundColor: theme.palette.info.light,
    color: "black",
    padding: '0.5rem',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '15px',
    [theme.breakpoints.up('xs')]: {
        fontSize: '0.8rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2.5rem',
    }
}));

export const StyledAppBarTop = styled(AppBar)(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    borderBottom: `0.65rem solid ${theme.palette.secondary.main}`,
    position: "fixed",
    [theme.breakpoints.up('xs')]: {
        height: '6.5rem',
    }
}));

export const StyledPurpleBox = styled(AppBar)(({ theme })=> ({
    backgroundColor:theme.palette.primary.main,
    borderBottom:`0.65rem solid ${theme.palette.secondary.main}`,
    // position:"fixed",
    [theme.breakpoints.up('xs')]: {
        height:'16rem',
    }
}));

export const StyledRotatePurpleBox = styled(AppBar)(({ theme })=> ({
    backgroundColor:theme.palette.primary.main,
    borderTop:`0.65rem solid ${theme.palette.secondary.main}`,
    // position:"fixed",
    [theme.breakpoints.up('xs')]: {
        height:'16rem',
    }
}));

// export const StyledSearchBar = styled(Input)(({ theme })=> ({
//     backgroundColor: "white",
//     color: theme.palette.info.dark,
//     marginLeft: "auto",
//     marginRight: "auto",
//     borderRadius: "10px",
// }));
export const StyledSearchBar = styled(Input)(({theme}) => ({
    backgroundColor: "white",
    color: theme.palette.info.dark,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "10px",
    [theme.breakpoints.up('xs')]: {
        height: '3rem',
    }
}));

export const StyledHamburgerButton = styled(MenuIcon)(({theme}) => ({
    color: theme.palette.secondary.main,
    [theme.breakpoints.up('xs')]: {
        fontSize: "4.5rem"
    }
}));

export const StyledCircleBox = styled(Box)(({theme}) => ({
    borderRadius: "50%",
    boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
    border: `0.65rem solid ${theme.palette.secondary.main}`,
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('xs')]: {
        width: "5.5rem",
        height: "5.5rem",
    }
}));

export const StyledLightCircleBox = styled(Box)(({theme}) => ({
    borderRadius: "50%",
    boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
    border: `0.65rem solid ${theme.palette.secondary.main}`,
    backgroundColor: theme.palette.primary.light,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('xs')]: {
        width: "6rem",
        height: "6rem",
    }
}));

export const StyledLogoBox = styled(Box)(({ theme })=> ({
    borderRadius:"50%",
    boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
    border:`0.65rem solid ${theme.palette.secondary.main}`,
    backgroundColor:'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('xs')]:{
        width:"9.5rem",
        height:"9.5rem",
    }
}));

export const StyledSmallLogoBox = styled(Box)(({ theme })=> ({
    borderRadius:"50%",
    boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px',
    border:`0.65rem solid ${theme.palette.secondary.main}`,
    backgroundColor:'white',
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
// export const StyledAvatarUserFeed = styled(Avatar)(({theme}) => ({
//     boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
//     [theme.breakpoints.up('xs')]: {
//         width: "2.5rem",
//         height: "2.5rem"
//     }
}}));

export const StyledSmallCirclesButton = styled(SupervisedUserCircleIcon)(({theme}) => ({
    color: theme.palette.primary.main,
    [theme.breakpoints.up('xs')]: {
        width: "1.25rem",
        height: "1.25rem"
    }
}));

export const StyledCirclesIcon = styled(SupervisedUserCircleIcon)(({theme}) => ({
    color: theme.palette.primary.main,
    [theme.breakpoints.up('xs')]: {
        width: "3rem",
        height: "3rem"
    }
}));

export const StyledBusinessFeed = styled(Avatar)(({theme}) => ({
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    [theme.breakpoints.up('xs')]: {
        width: "4.5rem",
        height: "4.5rem"
    }
}));

export const StyledRating = styled(Rating)(({theme}) => ({
    color: theme.palette.secondary.dark,
    "&:hover": {
        color: theme.palette.secondary.main,
    },
    [theme.breakpoints.up('xs')]: {}
}));

export const StyledTypographyReview = styled(Typography)(({theme}) => ({
    maxWidth: "100%",
    textAlign: "left",
    maxHeight: "3.2rem",
    textOverflow: "ellipsis",
    overflow: "hidden",
    overflowWrap: "break-word",
    variant: "p",
    "&:after": {
        content: "'...'",
        // position: 'absolute',
        // right: 0,
        // bottom: 0,
        // padding: '0 0.5em',
        // background: 'white',
    },
    [theme.breakpoints.up('xs')]: {}
}));

/*Dialog Components*/
export const StyledDialogTitle = styled(DialogTitle)(({theme}) => ({
    ...theme.typography.h1,
    color: "white",
    padding: "1rem 0.5rem",
    marginLeft: "unset !important",
    [theme.breakpoints.up('xs')]: {}
}));

export const StyledDialogReviewIcon = styled(RateReviewOutlinedIcon)(({theme}) => ({
    color: "white",
    [theme.breakpoints.up('xs')]: {
        width: "3rem",
        height: "3rem",
    }
}));

export const StyledDialogFootprintIcon = styled(FootprintsIcon)(({theme}) => ({
    color: "white",
    [theme.breakpoints.up('xs')]: {
        width: "4rem",
        height: "4rem",
    }
}));

export const StyledDialogSecondTitle = styled(DialogContentText)(({theme}) => ({
    ...theme.typography.h2,
    color: "white",
    textAlign: "left",
    [theme.breakpoints.up('xs')]: {}
}));

export const StyledDialogInputBusiness = styled(Input)(({theme}) => ({
    backgroundColor: 'white',
    ...theme.typography.p,
    color: 'gray',
    padding: '0.1rem',
    borderRadius: '15px',
    [theme.breakpoints.up('xs')]: {}
}));

export const StyledDialogTextFieldReview = styled(TextField)(({theme}) => ({
    backgroundColor: 'white',
    ...theme.typography.p,
    color: 'gray',
    padding: '0.5rem',
    width: "unset !important",
    borderRadius: '15px',
    wordWrap: 'break-word',
    whiteSpace: 'pre-wrap',
    [theme.breakpoints.up('xs')]: {}
}));

export const StyledAutoComplete = styled(Autocomplete)(({theme}) => ({
    backgroundColor: 'white',
    ...theme.typography.p,
    color: 'gray',
    padding: '0.5rem',
    borderRadius: '15px',
    wordWrap: 'break-word',
    whiteSpace: 'pre-wrap',
    [theme.breakpoints.up('xs')]: {}
}));

export const StyledBottomNavigationAction = styled(BottomNavigationAction)(({theme}) => ({
    [theme.breakpoints.up('xs')]: {
        fontSize: "3rem"
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "4rem"
    }
}));

export const StyledBottomNavigation = styled(BottomNavigation)(({theme}) => ({

    [theme.breakpoints.up('xs')]: {
        height: "4.5rem"
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "5rem"
    }
}));
