import {Component} from "react";
import './business-card.styles.css';

class BusinessCard extends Component{
    render() {
        const {id,name,email}=this.props.business
        return (
            <div className="card-contatiner" key={id}>
                <img alt={`business ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )
        }
    }

    export default BusinessCard;
