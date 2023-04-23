import {Component} from "react";
import './HomePage.css';
import MyMap from "../../Components/map-main-menu/MyMap";
import {Link} from "react-router-dom";
class HomePage extends Component{
    render(){
        return(
            <div>
              <h1 >My Bazzar App</h1>
                <Link to='/SearchPage'>
                    SEARCH_PAGE
                </Link>
                <div><MyMap/></div>
            </div>
        );
    }
}

export default HomePage;
