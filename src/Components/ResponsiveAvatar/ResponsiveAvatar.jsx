import { Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';

const ResponsiveAvatar = styled(Avatar)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    [theme.breakpoints.up('md')]: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
    [theme.breakpoints.up('lg')]: {
        width: theme.spacing(12),
        height: theme.spacing(12),
    },
}));

export default ResponsiveAvatar
// function MyComponent() {
//     return (
//         <ResponsiveAvatar alt="Avatar" src="path/to/avatar.png" />
//     );
// }
