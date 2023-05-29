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
import CommunityComponent from "./routes/Community/Community.component";
import Theme from "./Theme/Theme";
import {ThemeProvider} from "@mui/material/styles";

class App extends Component{
    render(){
    return(
        <div className="App">
            <ThemeProvider theme={Theme}>
            <Routes>
                <Route path="/" element={<NavigationComponent />}>
                    <Route index element={<HomePageComponent />} />
                    <Route path="ProfilePageComponent" element={<ProfilePageComponent/>}/>
                    <Route path="BusinessPageComponent" element={<BusinessPageComponent/>}/>
                    <Route path="AroundMeComponent" element={<AroundMeComponent/>}/>
                    <Route path="NotificationsComponent" element={<NotificationsComponent/>}/>
                    <Route path="CommunityComponent" element={<CommunityComponent/>}/>
                </Route>
                <Route path="SearchPageComponent" element={<SearchPageComponent />} />
            </Routes>
            </ThemeProvider>

        </div>
    );
  }
}

export default App;
