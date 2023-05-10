import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
// import data_on_person from "../../databases/BusinessAllData.json";
import List from "@mui/material/List";
import data from "../../databases/BusinessAllData.json";
import {Link} from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import {Button, Rating, Stack} from "@mui/material";
import {useState} from "react";


function GroupAvatars(businesses) {
    return (
        <AvatarGroup max={4} >
            <Avatar sx={{height: 60, width: 60, boxShadow: 3}} alt={`business ${businesses.name}`} src={`https://robohash.org/${businesses.id}?set=set2&size=180x180`} />
            <Avatar sx={{height: 60, width: 60, boxShadow: 3}} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            {/*<Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />*/}
            {/*<Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />*/}
            {/*<Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />*/}
        </AvatarGroup>
    );
}

export default function AlignItemsList() {
    const [value, setValue] = useState(2);
    return (

        <List sx={{ width: '90%', maxWidth: 550, bgcolor: 'background.paper' }}>
            {data.map(businesses =>

                    <div style={{margin: "2px"}}>
                        <ListItem alignItems="flex-start" style={{margin: "2px"}}>
                            <ListItemAvatar>
                                {GroupAvatars(businesses)}
                                {/*<Avatar alt={businesses.name}*/}
                                {/*    // src={businesses.img}*/}
                                {/*        src={`https://robohash.org/${businesses.id}?set=set2&size=180x180`}*/}
                                {/*/>*/}
                            </ListItemAvatar>
                            <ListItemText
                                primary="Yuval Lavie reviewd 'Michal Nails Boutique'"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {businesses.name}
                                        </Typography>
                                        {/*{" — I'll be in your neighborhood doing errands this…"}*/}
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                        <Stack direction="row" spacing={2} justifyContent="center" marginBottom="1rem">
                            <Button color="primary"
                                    disabled={false}
                                    size="small"
                                    variant="outlined">visit business</Button>
                            <Button color="primary"
                                    disabled={false}
                                    size="small"
                                    variant="outlined"
                                    >see full review</Button>
                        </Stack>
                        <Divider variant="inset" component="li" />
                    </div>
            )}

        </List>
    );
}