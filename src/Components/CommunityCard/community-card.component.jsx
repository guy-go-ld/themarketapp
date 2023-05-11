import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import Typography from "@mui/material/Typography";
import {Button, Stack} from "@mui/material";
import {Link} from "react-router-dom";
import Divider from "@mui/material/Divider";
import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";
import MyRatingComponent from "../MyRating/my-rating.component";

function GroupAvatars(business) {
    return (
        <AvatarGroup max={4} >
            <Avatar sx={{height: 60, width: 60, boxShadow: 3}} alt={`business ${business.name}`} src={`https://robohash.org/${business.id}?set=set2&size=180x180`} />
            <Avatar sx={{height: 60, width: 60, boxShadow: 3}} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            {/*<Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />*/}
            {/*<Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />*/}
            {/*<Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />*/}
        </AvatarGroup>
    );
}

export default function CommunityCardComponent({business}) {
    return(
        <div style={{margin: "2px"}}>
            <ListItem alignItems="flex-start" style={{margin: "2px"}}>
                <ListItemAvatar>
                    {GroupAvatars(business)}

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
                                {business.name}
                            </Typography>
                            {/*{" — I'll be in your neighborhood doing errands this…"}*/}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <MyRatingComponent personIdAndBusinessRating={{"read_only_rating":business.rating, "rating":business.rating}}/>
            <Stack direction="row" spacing={2} justifyContent="center" marginBottom="1rem">
                <Button color="primary"
                        disabled={false}
                        size="small"
                        variant="outlined">
                    <Link to={'../BusinessPageComponent'} state={{ from: business.id}} className="link-container" >visit business</Link>
                </Button>
                <Button color="primary"
                        disabled={false}
                        size="small"
                        variant="outlined"
                >see full review</Button>
            </Stack>
            <Divider variant="inset" component="li" />
        </div>
    );

}