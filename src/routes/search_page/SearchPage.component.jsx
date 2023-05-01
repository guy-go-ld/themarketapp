import {Component, Fragment} from 'react';
import data from "../../databases/ListData.json"
import BusinessNameList from "../../Components/business-name-list/buisness-name-list.component";
import SearchBar from "../../Components/search-bar/search-bar.component";
import {Box} from "@mui/material";
import {useNavigate} from "react-router-dom";
import GoBack from "../../Components/Tests/BackButton.component";


class SearchPageComponent extends Component{
    constructor(){
        super();
        this.state={
            businesses:data,
            searchField : ''
        };
    }

    //TODO fix
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

    render() {
        const {businesses} = this.state;
        const {onSearchChange} = this;
        const filteredBusiness = businesses.filter((business) => {
            if (this.state.searchField === "") {
                return;
            }
            return business.name.toLocaleLowerCase().includes(this.state.searchField);
        });

        return (
            <Fragment>
                <Box
                    sx={{
                        width:1,
                        height: 200,
                        backgroundColor: 'primary.light',
                        '&:hover': {
                            backgroundColor: 'primary.dark',
                            opacity: [0.9, 0.8, 0.7],
                        },
                    }}
                >
                    <Box sx={{float:'left'}}>
                        <GoBack/>
                    </Box>
                        <SearchBar
                            onChangeHandler={onSearchChange}
                            placeHolder='search business'
                            className='search-bar-business'
                        />
                </Box>
                <BusinessNameList
                    businesses={filteredBusiness}
                />
            </Fragment>
        );

    }
}

export default SearchPageComponent;