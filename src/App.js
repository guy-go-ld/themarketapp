import {Component} from "react";
import './App.css';
import HomePageComponent from './routes/home/HomePage.component';
import SearchPageComponent from './routes/search_page/SearchPage.component';
import { Routes, Route } from 'react-router-dom';
import NavigationComponent from './routes/navigation/Navigation.component';
import ProfilePageComponent from "./routes/profile_page/ProfilePage.component";
import BusinessPageComponent from "./routes/business_page/BusinessPage.component";
import AroundMeComponent from "./routes/Around Me/AroundMe.component";
import NotificationsComponent from "./routes/notifications/Notifications.component";
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
                <Route path="/" element={<NavigationComponent />}>
                    <Route index element={<HomePageComponent />} />
                    <Route path="shop" element={<Shop />}/>
                    <Route path="SearchPageComponent" element={<SearchPageComponent />} />
                    <Route path="ProfilePageComponent" element={<ProfilePageComponent/>}/>
                    <Route path="BusinessPageComponent" element={<BusinessPageComponent/>}/>
                    <Route path="AroundMeComponent" element={<AroundMeComponent/>}/>
                    <Route path="NotificationsComponent" element={<NotificationsComponent/>}/>
                </Route>
            </Routes>
        </div>

    );
  }
}

export default App;
