import Avatar from "@mui/material/Avatar";
import * as React from "react";


export default function BusinessAvatar({business}) {
    const size = business.size;
    const profile_pic_exist = (business.profile_img !== "none");
    return (
        <div>
            {(size) ?
                (profile_pic_exist) ?
                    (<Avatar alt={business.name}
                             src={require('../../databases/businessPhotos/' + business.id + '/profile.jpg')}>
                    </Avatar>) :
                    (<Avatar alt={business.name}
                             src={`https://robohash.org/${business.id}?set=set2&size=180x180`}></Avatar>)
                :
                (profile_pic_exist) ?
                    (<Avatar backgroundColor='background.paper'
                             elevation={3}
                             alt={`business ${business.name}`}
                             src={require('../../databases/businessPhotos/' + business.id + '/profile.jpg')}
                             sx={{ width: 100, height: 100, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.50)',
                                 bgcolor: 'white'}}>
                    </Avatar>) :
                    (<Avatar backgroundColor='background.paper'
                             elevation={3}
                             alt={`business ${business.name}`}
                             src={`https://robohash.org/${business.id}?set=set2&size=180x180`}
                             sx={{ width: 100, height: 100, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.50)',
                                 bgcolor: 'white'}}></Avatar>)
            }
        </div>
    );
}