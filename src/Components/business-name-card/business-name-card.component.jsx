import {Component} from "react";
import './business-name-card.styles.css';
import {Link} from "react-router-dom";

class BusinessNameCard extends Component{
    render() {
        const {id,name,email}=this.props.business
        return (
            <div>
                <Link className="dataItem" to="/SearchPage" state={{id: name}}>
                    <p>{name}</p>
                </Link>
            </div>
        )
        }
    }

    export default BusinessNameCard;
