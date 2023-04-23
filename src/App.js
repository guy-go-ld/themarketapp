import {Component} from "react";
import './App.css';
import HomePage from './routes/home/HomePage';
import SearchPage from './routes/search_page/SearchPage';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/Navigation';
import ProfilePage from "./routes/profile_page/ProfilePage";
import BusinessPage from "./routes/business_page/BusinessPage";

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
                    <Route path="SearchPage" element={<SearchPage />} />
                    <Route path="ProfilePage" element={<ProfilePage/>}/>
                    <Route path="BusinessPage" element={<BusinessPage/>}/>
                </Route>
            </Routes>
        </div>

    );
  }
}

export default App;
