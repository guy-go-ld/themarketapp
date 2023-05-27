import {Component, Fragment, useEffect, useState} from 'react';
import data from "../../databases/BusinessAllData.json"
import BusinessNameList from "../../Components/business-name-list/buisness-name-list.component";
// import SearchBar from "../../Components/search-bar/search-bar.component";
import GoBack from "../../Components/Tests/BackButton.component";
import {Grid, Input} from "@mui/material";
import "./SearchPage.styles.css";
import logoNew from "../../Icons/logo-all-white.png";
import {auth} from "../../config/firebase";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../config/firebase";
import {Link} from "react-router-dom";


export function GetAllUsers()
{
    const [userList, setUserList] = useState([]);
    const usersCollectionRef = collection(db, "Users");

    const getUserList = async () => {
        // READ THE DATA
        // SET THE MOVIE LIST
        try
        {
            const data = await getDocs(usersCollectionRef);
            const filteredData = data.docs.map((doc) =>
                ({...doc.data(), id: doc.id,})
            );
            setUserList(filteredData);
            // console.log(userList);
            // console.log(filteredData);
            // console.log(userList);

        } catch (err){
            console.error(err);
        }
    }

    useEffect(()=>{

        getUserList();
    }, []);

    return (
        <div>
            {userList.map((user) => (
                <div>
                    <Link to={'../ProfilePageComponent'} state={{ from: user.id}}>
                     Name: {user.FirstName} {user.LastName}
                        {/*<input onChange={(e) => setUserFirstName(e.target.value)}/>*/}
                        {/*<button onClick={() => updateUserFirstName(user.id)}>update first name</button>*/}
                    </Link>
                    {/*<button onClick={() => deleteUser(user.id)}>*/}
                    {/*    Delete User?*/}
                    {/*</button>*/}
                </div>
            ))}
    </div>);
}


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
                        <Grid item xs = {6} sm={6}>
                            <GoBack/>
                        </Grid>
                        <Grid item xs ={6} sm={6}>
                            <img src={logoNew} alt={logoNew} className="logo-icon f-right"/>
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
                {(this.state.searchField === "") ?
                    (<div>
                        <h3>What are you looking for?</h3>
                        <div> <GetAllUsers/></div>
                    </div>)
                    :
                    (filteredBusiness.length === 0)?
                        (<div><h3>We couldn't find anything..</h3></div>)
                        :
                        (<BusinessNameList
                            businesses={filteredBusiness}
                        />)
                }
    </Fragment>
    )
        ;

    }
}

export default SearchPageComponent;