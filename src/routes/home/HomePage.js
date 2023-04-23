import {Component} from "react";
import './HomePage.css';
import SearchBar from "../../Components/search-bar/search-bar.component";
import BusinessList from "../../Components/business-list/buisness-list.component";
import MyMap from "../../Components/map-main-menu/MyMap";
import BusinessNameList from "../../Components/business-name-list/buisness-name-list.component";
import data from '../../Components/databases/BusinessNameData.json';
class HomePage extends Component{
    constructor(){
        super();
        this.state={
            businesses:data,
            searchField : ''
        };
    }
    // TODO use this later
    // componentDidMount(){
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then((response) => response.json())
    //         .then((users) => this.setState(()=> {
    //                 return{businesses: users}
    //             }
    //         ));
    // }

    onSearchChange = (event) => {
        const searchField = event.target.value.toLocaleLowerCase();
        this.setState(()=>{
            return {searchField};
        });
    }

    render(){
        const {businesses} = this.state;
        const {onSearchChange} = this;
        const filteredBusiness = businesses.filter((business) =>
        {
            if (this.state.searchField === "")
            {
                return [];
            }
            return business.name.toLocaleLowerCase().includes(this.state.searchField);
        });
        return(
            <div>
              <h1 >My Bazzar App</h1>
              <SearchBar
                  onChangeHandler = {onSearchChange}
                  placeHolder = 'search business'
                  className ='search-bar-business'
              />
                <BusinessNameList businesses={filteredBusiness}/>
                <div><MyMap/></div>
            </div>

        );
    }
}

export default HomePage;
