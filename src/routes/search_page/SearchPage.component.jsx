import {Component, Fragment} from 'react';
import data from "../../databases/BusinessAllData.json"
import BusinessNameList from "../../Components/business-name-list/buisness-name-list.component";
import SearchBar from "../../Components/search-bar/search-bar.component";
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
            return business.name.toLocaleLowerCase().includes(this.state.searchField) | business.title.toLocaleLowerCase().includes(this.state.searchField);
        });

        return (
            <Fragment>
                <div className="top-search-page-wrapper">
                    <div className="close-button-wrapper">
                        <GoBack/>
                    </div>
                    <div className="search-bar-wrapper">
                        <SearchBar
                            onChangeHandler={onSearchChange}
                            placeHolder='search business'
                            className='search-bar-business'
                        />
                    </div>
                </div>
                {(this.state.searchField === "") ?
                    (<div>Nothing</div>)
                    :
                    (filteredBusiness.length === 0)?
                        (<div>Not Exist</div>)
                        :
                        (<BusinessNameList
                            businesses={filteredBusiness}
                        />)
                }

            </Fragment>
        );

    }
}

export default SearchPageComponent;