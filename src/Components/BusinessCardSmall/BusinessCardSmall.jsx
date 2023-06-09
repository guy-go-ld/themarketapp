import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {styled} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import data from "../../databases/BusinessAllData.json";
import {Link} from "react-router-dom";
import BusinessAvatar from "../BusinessAvatar/business-avatar.component";


const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidth: 400,
}));

// const message = `Truncation should be conditionally applicable on this long line of text
//  as this is a much longer line than what the container can support.`;

// {data.map(businesses =>
//     <Link to={'../BusinessPageComponent'} state={{ from: businesses.id}} className="link-container">
//
//         <div style={{margin: "2px"}}>
//             <ListItem alignItems="flex-start" style={{margin: "2px"}}>
//                 <ListItemAvatar>
//                     <Avatar alt={businesses.name}
//                         // src={businesses.img}
//                             src={`https://robohash.org/${businesses.id}?set=set2&size=180x180`}
//                     />

export default function BusinessCardSmall() {
    return (
        <Box sx={{flexGrow: 1, overflow: 'hidden', px: 3}}>
            {data.map(businesses =>
                <Link to={'../BusinessPageComponent'} state={{from: businesses.id}} className="link-container">
                    <Item
                        sx={{
                            my: 1,
                            mx: 'auto',
                            p: 2,
                        }}>
                        <Stack spacing={2} direction="row" alignItems="center">
                            <BusinessAvatar business={{
                                "name": businesses.name,
                                "id": businesses.id,
                                "profile_img": businesses.profile_img,
                                "size": true
                            }}/>

                            {/*<Avatar alt={businesses.name}*/}
                            {/*         // src={businesses.img}*/}
                            {/*         src={`https://robohash.org/${businesses.id}?set=set2&size=180x180`}></Avatar>*/}
                            <Stack spacing={2} direction="column" alignItems="start">
                                <Typography variant="h5" display="flex" flexWrap="wrap"
                                            textAlign="left">{businesses.name}</Typography>
                                <Typography variant="h6" noWrap>{businesses.title}</Typography>
                                <Typography variant="h7" noWrap>{businesses.distance} meters from your location</Typography>

                            </Stack>

                        </Stack>
                    </Item>
                </Link>
            )};
            {/*<Item*/}
            {/*    sx={{*/}
            {/*        my: 1,*/}
            {/*        mx: 'auto',*/}
            {/*        p: 2,*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <Stack spacing={2} direction="row" alignItems="center">*/}
            {/*        <Avatar>W</Avatar>*/}
            {/*        <Typography noWrap>{message}</Typography>*/}
            {/*    </Stack>*/}
            {/*</Item>*/}
            {/*<Item*/}
            {/*    sx={{*/}
            {/*        my: 1,*/}
            {/*        mx: 'auto',*/}
            {/*        p: 2,*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <Stack spacing={2} direction="row" alignItems="center">*/}
            {/*        <Stack>*/}
            {/*            <Avatar>W</Avatar>*/}
            {/*        </Stack>*/}
            {/*        <Stack sx={{ minWidth: 0 }}>*/}
            {/*            <Typography noWrap>{message}</Typography>*/}
            {/*        </Stack>*/}
            {/*    </Stack>*/}
            {/*</Item>*/}
        </Box>
    );
}