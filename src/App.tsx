import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import {DialogsContainerComponent} from "./components/Dialogs/DialogsContainer";
import {UserContainerComponent} from "./components/UsersPage/UserContainerComponent";
import ProfileContainerComponent from "./components/Profile/ProfileContainerComponent";
import HeaderContainerComponent from "./components/Header/HeaderContainer/HeaderContainerComponent";


const App = () => {
    return (
        <BrowserRouter>
            <div className={'content'}>
                <div className='app-wrapper'>
                    <Route path={"/dialogs"} render={() => <DialogsContainerComponent/>}/>
                    <Route path={"/profile/:userId?"} render={() => <ProfileContainerComponent/>}/>
                    <Route path={"/users"} render={() => <UserContainerComponent/>}/>
                    <Route path={'/'} exact render={() => <Redirect to={'/profile'}/>}/>
                    <HeaderContainerComponent/>
                    <Navbar/>
                </div>
            </div>

        </BrowserRouter>
    )
}

export default App;
