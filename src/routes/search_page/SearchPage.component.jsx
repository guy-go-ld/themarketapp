import {Component, Fragment} from 'react';
import data from "../../databases/BusinessAllData.json"
import BusinessNameList from "../../Components/business-name-list/buisness-name-list.component";
// import SearchBar from "../../Components/search-bar/search-bar.component";
import GoBack from "../../Components/Tests/BackButton.component";
import {Grid, Input} from "@mui/material";
import "./SearchPage.styles.css";

class SearchPageComponent extends Component {
    constructor() {
        super();
        this.state = {
            businesses: data,
            searchField: ''
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
        this.setState(() => {
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
            return business.name.toLocaleLowerCase().includes(this.state.searchField) | business.title.toLocaleLowerCase().includes(this.state.searchField);
        });

        return (
            <Fragment>
                <div className="top-search-page-wrapper">
                    <Grid container>
                        <Grid item xs = {12} sm={12}>
                            <GoBack/>
                        </Grid>
                        <Grid item xs ={2}>
                        </Grid>
                        <Grid item xs={8} sm={8} className="search-bar-wrap">
                                <Input
                                    autoFocus={true}
                                    className="search-box search-bar-business"
                                    type='search'
                                    onChangeHandler={onSearchChange}
                                    placeholder='search business'
                                    onChange={onSearchChange}
                                    sx={{
                                        height: {
                                            xs: '4rem',
                                            sm: '5rem',
                                            md: '6rem',
                                            lg: '7rem'
                                        },
                                        fontSize: {
                                            xs: '1.7rem',
                                            sm: '2rem',
                                            md: '4rem',
                                            lg: '5rem'
                                        },
                                    }}
                                />
                                {/*<SearchBar*/}
                                {/*    onChangeHandler={onSearchChange}*/}
                                {/*    placeHolder='search business'*/}
                                {/*    className='search-bar-business'*/}
                                {/*/>*/}
                        </Grid>
                    </Grid>
            </div>
        <BusinessNameList
            businesses={filteredBusiness}
        />
    </Fragment>
    )
        ;

    }
}

export default SearchPageComponent;