import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, Container} from '@mui/material';
import data from "../../databases/BusinessAllData.json";
import Avatar    from "@mui/material/Avatar";
import {Link} from "react-router-dom";

// const businesses = data

// {MapLocations.map(mapDat =>
//         <Marker
//             position={[mapDat.Coord.latitude, mapDat.Coord.longitude]}
//             size={[80, 20]}
//             icon={ IconPerson }>
export default function BusinessCardLarge() {
    return (
        <Container sx={{flexWrap: "wrap", display: "flex", m: 1, justifyContent: "center", alignItems: "center"}}>
            {data.map(businesses =>
                <Link to={'../BusinessPageComponent'} state={{ from: businesses.id}}
                      // className="link-container"
                >

                <Card sx={{ maxWidth: 345, m: 2, width: 300 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            // image="businesses.img"
                            src={`https://robohash.org/${businesses.id}?set=set2&size=180x180`}
                            alt={businesses.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {businesses.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {businesses.title}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Link>
            )}

        </Container>
    );
}