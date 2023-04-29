import {Component} from "react";
import './business-name-card.styles.css';
import {Link} from "react-router-dom";

class BusinessNameCard extends Component{
    render() {
        const {id,name,title}=this.props.business
        return (
            <div className="card-contatiner" key={id}>
                <Link to={'../BusinessPageComponent'} state={{ from: id}}>
                <img alt={`business ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
                <h2>{name}</h2>
                <p>{title}</p>
                </Link>
            </div>
        )
    }
    }

    export default BusinessNameCard;
