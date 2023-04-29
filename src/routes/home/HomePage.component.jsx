import {Component, useEffect} from "react";
import './HomePage.styles.css';
import MyMap from "../../Components/map-main-menu/MyMap";
import {Link} from "react-router-dom";
import {useMap} from "react-leaflet";

// TODO how to implement hooks in a class?
export const mapHook = (Component) =>
{
    return (props) => {
        const map = useMap()
        useEffect(() => {
            map.flyTo(props.position)
        }, [props.position])

        return null
    }
}

class HomePageComponent extends Component{



    render(){
        const position = [31.777587, 35.215094]; //[this.state.location.lat, this.state.location.lng];

        return(
            <div className="All Home Page">
              <h1 >My Bazzar App</h1>
                <Link to='/SearchPageComponent'>
                    SEARCH_PAGE
                </Link>
                <div><MyMap/></div>
                <button onClick={mapHook}>JumpTo</button>
            </div>
        );
    }
}

export default HomePageComponent;
