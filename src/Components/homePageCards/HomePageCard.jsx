import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
// import data from "../../databases/BusinessAllData.json";
import {Link} from "react-router-dom";
import BusinessAvatar from "../BusinessAvatar/business-avatar.component";
import Avatar from "@mui/material/Avatar";


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
        <Box sx={{ flexGrow: 1, overflow: 'hidden' }} className="home-page-cards" >
            <Stack spacing={0.7} direction="row" overflow="scroll">

            {/*   TODO: if we want to use json this is the code: */}

            {/*{data.map(businesses =>*/}
            {/*    <Link to={'../BusinessPageComponent'} state={{ from: businesses.id}} className="home-card-container" >*/}
            {/*        <Item*/}
            {/*            sx={{*/}
            {/*                my: 1,*/}
            {/*                mx: 'auto',*/}
            {/*                // p: 2,*/}
            {/*                justifyContent: "center",*/}
            {/*                width: 100,*/}
            {/*                height: 150,*/}
            {/*                boxShadow: 4,*/}
            {/*                borderRadius: 4,*/}
            {/*            }}>*/}
            {/*            <Stack spacing={2} direction="column" alignItems="center">*/}
            {/*                <BusinessAvatar business={{"name":businesses.name,"id":businesses.id,"profile_img":businesses.profile_img,"size":true}} />*/}
            {/*                <Stack spacing={2} direction="column" alignItems="start">*/}
            {/*                    <Typography variant="h6" flexWrap="wrap" display="flex">{businesses.name}</Typography>*/}
            {/*                    /!*<Typography variant="h6" noWrap>{businesses.title}</Typography>*!/*/}
            {/*                </Stack>*/}

            {/*            </Stack>*/}
            {/*        </Item>*/}
            {/*    </Link>*/}
            {/*)};*/}

            {/*TODO: the code for the mockup for milestone 1:*/}

                <Link to={'../BusinessPageComponent'} state={{ from: 1}} className="home-card-container" >
                    <Stack direction="column" spacing={1} alignItems="center">
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Avatar sx={{boxShadow: 4, height: 40, width: 40}}>G</Avatar>
                            <Typography variant="h5">Gal</Typography>
                        </Stack>
                    <Item
                        sx={{
                            my: 1,
                            mx: 'auto',
                            // p: 2,
                            justifyContent: "center",
                            width: 100,
                            height: 150,
                            boxShadow: 4,
                            borderRadius: 2,
                        }}>
                        <Stack spacing={2} direction="column" alignItems="center">
                            <BusinessAvatar business={{"name":"Liat Atias Nails","id":1,"profile_img":"1","size":true}} />
                            <Stack spacing={2} direction="column" alignItems="start">
                                <Typography variant="h6" flexWrap="wrap" display="flex">Liat Atias Nails</Typography>
                                {/*<Typography variant="h6" noWrap>{businesses.title}</Typography>*/}
                            </Stack>

                        </Stack>
                    </Item>
                    </Stack>
                </Link>


                <Link to={'../BusinessPageComponent'} state={{ from: 4}} className="home-card-container" >
                    <Stack direction="column" spacing={1} alignItems="center">
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Avatar sx={{boxShadow: 4, height: 40, width: 40}}>T</Avatar>
                            <Typography variant="h5" >Talia</Typography>
                        </Stack>
                    <Item
                        sx={{
                            my: 1,
                            mx: 'auto',
                            // p: 2,
                            justifyContent: "center",
                            width: 100,
                            height: 150,
                            boxShadow: 4,
                            borderRadius: 2,
                        }}>
                        <Stack spacing={2} direction="column" alignItems="center">
                            <BusinessAvatar business={{"name":"Masperafi","id":4,"profile_img":"4","size":true}} />
                            <Stack spacing={2} direction="column" alignItems="start">
                                <Typography variant="h6" flexWrap="wrap" display="flex">Masperafi</Typography>
                                {/*<Typography variant="h6" noWrap>{businesses.title}</Typography>*/}
                            </Stack>

                        </Stack>
                    </Item>
                    </Stack>
                </Link>

                <Link to={'../BusinessPageComponent'} state={{ from: 5}} className="home-card-container" >
                    <Stack direction="column" spacing={1} alignItems="center">
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Avatar sx={{boxShadow: 4, height: 40, width: 40}}>N</Avatar>
                            <Typography variant="h5" >Noam</Typography>
                        </Stack>
                    <Item
                        sx={{
                            my: 1,
                            mx: 'auto',
                            // p: 2,
                            justifyContent: "center",
                            width: 100,
                            height: 150,
                            boxShadow: 4,
                            borderRadius: 2,
                        }}>
                        <Stack spacing={2} direction="column" alignItems="center">
                            <BusinessAvatar business={{"name":"Handylock","id":5,"profile_img":"5","size":true}} />
                            <Stack spacing={2} direction="column" alignItems="start">
                                <Typography variant="h6" flexWrap="wrap" display="flex">Handylock</Typography>
                                {/*<Typography variant="h6" noWrap>{businesses.title}</Typography>*/}
                            </Stack>

                        </Stack>
                    </Item>
                    </Stack>
                </Link>

                <Link to={'../BusinessPageComponent'} state={{ from: 6}} className="home-card-container" >
                    <Stack direction="column" spacing={1} alignItems="center">
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Avatar sx={{boxShadow: 4, height: 40, width: 40}}>A</Avatar>
                            <Typography variant="h5">Adam</Typography>
                        </Stack>
                    <Item
                        sx={{
                            my: 1,
                            mx: 'auto',
                            // p: 2,
                            justifyContent: "center",
                            width: 100,
                            height: 150,
                            boxShadow: 4,
                            borderRadius: 2,
                        }}>
                        <Stack spacing={2} direction="column" alignItems="center">
                            <BusinessAvatar business={{"name":"Koral Mizrachi Hair Style","id":6,"profile_img":"6","size":true}} />
                            <Stack spacing={2} direction="column" alignItems="start">
                                <Typography variant="h6" flexWrap="wrap" display="flex">Koral Mizrachi Hair Style</Typography>
                                {/*<Typography variant="h6" noWrap>{businesses.title}</Typography>*/}
                            </Stack>

                        </Stack>
                    </Item>
                    </Stack>
                </Link>
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