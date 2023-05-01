import './AroundMe.styles.css';
import {Component} from "react";
import ResizableMap from "../../Components/updatable-map/ResizableMap"

class AroundMe extends Component{
render() {
    return(
        <div>
            <h1>
                Around Me
            </h1>
            <ResizableMap/>
        </div>
    )
}
}
export default AroundMe