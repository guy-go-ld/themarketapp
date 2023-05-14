import {Component} from "react";
import './business-name-card.styles.css';
import {Link} from "react-router-dom";
import {Card, CardActionArea, CardContent, CardMedia, Rating, Typography} from "@mui/material";
// import {useTheme} from "@mui/material/styles";

// theme = useTheme()
// const styles = theme => ({
//     card: {
//         maxWidth: '400px',
//         [theme.breakpoints.up('sm')]: {
//             display: 'flex',
//         },
//         [theme.breakpoints.up('md')]: {
//             maxWidth: '600px',
//         },
//         [theme.breakpoints.up('lg')]: {
//             maxWidth: '800px',
//         },
//     },
//     cardMedia: {
//         height: '200px',
//         [theme.breakpoints.up('sm')]: {
//             flexBasis: '50%',
//             height: 'auto',
//         },
//     },
//     cardContent: {
//         [theme.breakpoints.up('sm')]: {
//             flexBasis: '50%',
//         },
//     },
// });

class BusinessNameCard extends Component{
    render() {
        const {id,name,title, rating, NumOfPeople}=this.props.business
        return (
            <div className="card-contatiner" key={id}>
                <Link to={'../BusinessPageComponent'} state={{ from: id}} className="link-container">
                    <Card sx={{ width:'100%'}}>
                        <CardActionArea>
                            {(id < 7)
                                ?
                                (<CardMedia
                                    sx ={{width: 60, height: 60, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.50)',
                                        bgcolor: 'white'}}
                                    className = "business-card-media"
                                    component="img"
                                    alt={`business ${name}`}
                                    src={require('../../databases/businessPhotos/' + id + '/profile.jpg')}
                                />) :
                                (<CardMedia
                                    sx ={{width:'3rem', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.50)',
                                        bgcolor: 'white'}}
                                    className = "business-card-media"
                                    component="img"
                                    alt={`business ${name}`}
                                    src={`https://robohash.org/${id}?set=set2&size=180x180`}
                                />)}
                            <CardContent sx={{width:'55%', float:'left'}}>
                                <Typography gutterBottom variant="h4" component="div" sx={{width:'100%', float:'left', textAlign: 'left'}}>
                                    {name}
                                </Typography>
                                <Typography variant="h4" color="text.secondary" sx={{width:'100%', float:'left', textAlign: 'left'}}>
                                    {title}
                                </Typography>
                                <Rating name="simple-controlled"
                                        value={rating}
                                        sx={{width:'100%', float:'left',
                                            '& .MuiRating-iconFilled': {
                                                color: '#C3ED5B',
                                            },
                                            '& .MuiRating-iconHover': {
                                                color: '#C3ED5B'}}}
                                        size = "small"
                                        precision={0.5}
                                />
                                <Typography variant="h6" color="text.secondary" sx={{width:'100%', float:'left', textAlign: 'left'}}>
                                    {NumOfPeople} people visited recently.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Link>
            </div>
        )
    }
    }

    export default BusinessNameCard;
