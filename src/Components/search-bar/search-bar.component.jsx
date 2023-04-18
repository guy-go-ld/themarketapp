import {Component} from "react";
import './search-bar.styles.css';

class SearchBar extends Component{
    render() {
        return(
            <input
                className ={`search-box ${this.props.className}`}
                type='search'
                placeholder = {this.props.placeHolder}
                onChange={this.props.onChangeHandler}
            />
        );
    }
}
export default SearchBar;