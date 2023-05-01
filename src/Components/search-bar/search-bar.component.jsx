import {Component} from "react";
import './search-bar.styles.css';
// import TextField from "@mui/material/TextField";
// import SearchIcon from '@mui/icons-material/Search';
// import CloseIcon from '@mui/icons-material/Close';
// import {InputAdornment} from "@mui/material";

class SearchBar extends Component{
    render() {
        return(
            <input
                autoFocus={true}
                className ={`search-box ${this.props.className}`}
                type='search'
                placeholder = {this.props.placeHolder}
                onChange={this.props.onChangeHandler}
            />
        );
    }
}
export default SearchBar;