import {Component} from "react";
import BusinessCard from "../business-card/business-card.component";
import './business-list.styles.css';

class BusinessList extends Component{
    render() {
        const {businesses} = this.props;
        return (
            <div className="business-list">
                {businesses.map(business =>{
                    return(
                        <BusinessCard business={business}/>
                    )})
                }
            </div>
        );
    }
}
export default BusinessList;