import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import data from "../../databases/BusinessAllData.json";
import {Link} from "react-router-dom";


const Item = styled(Paper)(({ theme }) => ({
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

export default function HomePageCards() {
    return (
        <Box sx={{ flexGrow: 1, overflow: 'hidden' }}>
            <Stack spacing={3} direction="row" overflow="scroll">
            {data.map(businesses =>
                <Link to={'../BusinessPageComponent'} state={{ from: businesses.id}} className="home-card-container" >
                    <Item
                        sx={{
                            my: 1,
                            mx: 'auto',
                            // p: 2,
                            justifyContent: "center",
                            width: 100,
                            height: 120,
                            boxShadow: 4,
                            borderRadius: 4,
                        }}>
                        <Stack spacing={2} direction="column" alignItems="center">
                            <Avatar alt={businesses.name}
                                // src={businesses.img}
                                    src={`https://robohash.org/${businesses.id}?set=set2&size=180x180`}></Avatar>
                            <Stack spacing={2} direction="column" alignItems="start">
                                <Typography variant="h6" flexWrap="wrap" display="flex">{businesses.name}</Typography>
                                {/*<Typography variant="h6" noWrap>{businesses.title}</Typography>*/}
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
            </Stack>
            </Box>
    );
}