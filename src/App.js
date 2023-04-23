import {Component} from "react";
import './App.css';
import HomePage from './routes/home/HomePage';
import SearchPage from './routes/search_page/SearchPage';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/Navigation';

const Shop = ()=>
{
    return(
        <div>
            <h2>Shop Page</h2>
        </div>
    )
}
class App extends Component{
    render(){
    return(
        <div className="App">
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route index element={<HomePage />} />
                    <Route path="shop" element={<Shop />}/>
                    {/*<Route path="SearchPage" element={<SearchPage />} />*/}
                </Route>
            </Routes>
        </div>

    );
  }
}

export default App;
