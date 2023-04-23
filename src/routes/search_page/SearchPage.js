import React from 'react';
import {useLocation, Link } from 'react-router-dom';
import data from "../../Components/databases/ListData.json"

const SearchPage = () => {
    const location = useLocation();

    const newFilter = data.filter((value) => {
        return value.title.toLowerCase() === (location.state.id);
    });

    function sayBye() {
        alert('Bye!');
    }


    console.log(location);
    return (
        <div>
            <div>
                {newFilter.length !== 0 && (
                    <div className="searchDataResult">
                        {/* Slicing in order to show 15 items*/}
                        {newFilter.slice(0,15).map((value, key) => {
                            return ( // TODO add here the new component
                                <p>{value.text}</p>
                            )
                        })}
                    </div>)}
            </div>
            <button onClick={sayBye}>Say bye!</button>
            <p></p><Link to= "/">HomePage</Link>
        </div>
    );
};

export default SearchPage;