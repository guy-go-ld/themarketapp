import {Component} from "react";
import './business-name-card.styles.css';
import {Link} from "react-router-dom";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";

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
        const {id,name,title}=this.props.business
        return (
            // <div className="card-contatiner" key={id}>
            //     <Link to={'../BusinessPageComponent'} state={{ from: id}}>
            //     <img alt={`business ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
            //     <h2>{name}</h2>
            //     <p>{title}</p>
            //     </Link>
            // </div>
            <div className="card-contatiner" key={id}>
                <Link to={'../BusinessPageComponent'} state={{ from: id}} className="link-container">
                    <Card
                        sx={{ width:'100%'}}
                    >
                        <CardActionArea>
                            <CardMedia
                                sx ={{width:'3rem'}}
                                className = "business-card-media"
                                component="img"
                                alt={`business ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}
                            />
                            <CardContent
                                sx={{width:'55%', float:'left'}}
                            >
                                <Typography gutterBottom variant="h4" component="div" sx={{width:'100%', float:'left', textAlign: 'left'}}>
                                    {name}
                                </Typography>
                                <Typography variant="h4" color="text.secondary" sx={{width:'100%', float:'left', textAlign: 'left'}}>
                                    {title}
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
