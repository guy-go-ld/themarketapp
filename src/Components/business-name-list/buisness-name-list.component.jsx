import {Component} from "react";
import './business-name-list.styles.css';
import BusinessNameCard from "../business-name-card/business-name-card.component";

class BusinessNameList extends Component{
    render() {
        const {businesses} = this.props;
        return (
            <div className="dataResult">
                {businesses.map(business =>{
                    return(
                        <BusinessNameCard business={business}/>
                    )})
                }
            </div>
        );
    }
}
export default BusinessNameList;