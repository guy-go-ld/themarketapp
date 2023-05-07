import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import data from "../../databases/BusinessAllData.json";
import {Link} from "react-router-dom";
// import Card from "@mui/material/Card";
// import {CardActionArea, Container} from "@mui/material";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";


// <Container sx={{flexWrap: "wrap", display: "flex", m: 3, justifyContent: "center", alignItems: "center"}}>
//     {data.map(businesses =>
//         <Card sx={{ maxWidth: 345, m: 4, width: 300 }}>
//             <CardActionArea>
//                 <CardMedia
//                     component="img"
//                     height="140"
//                     // image="businesses.img"
//                     alt={businesses.name}
//                 />
//                 <CardContent>
//                     <Typography gutterBottom variant="h5" component="div">
//                         {businesses.name}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                         {businesses.title}
//                     </Typography>
//                 </CardContent>
//             </CardActionArea>
//         </Card>
//     )}
//
// </Container>
export default function AlignItemsList() {
    return (

        <List sx={{ width: '90%', maxWidth: 550, bgcolor: 'background.paper' }}>
            {data.map(businesses =>
                <Link to={'../BusinessPageComponent'} state={{ from: businesses.id}} className="link-container">

                <div style={{margin: "2px"}}>
                    <ListItem alignItems="flex-start" style={{margin: "2px"}}>
                    <ListItemAvatar>
                        <Avatar alt={businesses.name}
                                // src={businesses.img}
                                src={`https://robohash.org/${businesses.id}?set=set2&size=180x180`}
                        />
                    </ListItemAvatar>
                    <ListItemText
                        primary={businesses.name}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {businesses.title}
                                </Typography>
                                {/*{" — I'll be in your neighborhood doing errands this…"}*/}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                </div>
                </Link>
                )}

        </List>
    );
}

