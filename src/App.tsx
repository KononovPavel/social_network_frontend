import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import {UserContainerComponent} from "./components/UsersPage/UserContainerComponent";
import ProfileContainerComponent from "./components/Profile/ProfileContainerComponent";
import HeaderContainerComponent from "./components/Header/HeaderContainer/HeaderContainerComponent";
import Login from "./components/Login/Login";
import DialogsContainerComponent from "./components/Dialogs/DialogsContainer";


const App = () => {
    return (
        <BrowserRouter>
            <div className={'content'}>
                <div className='app-wrapper'>
                    <Route path={"/dialogs"} render={() => <DialogsContainerComponent/>}/>
                    <Route path={"/profile/:userId?"} render={() => <ProfileContainerComponent/>}/>
                    <Route path={"/users"} render={() => <UserContainerComponent/>}/>
                    <Route path={'/'}  render={() => <Redirect to={'/profile'}/>}/>
                    <Route path={'/login'} render={() => <Login/>}/>
                    <HeaderContainerComponent/>
                    <Navbar/>
                </div>
            </div>

        </BrowserRouter>
    )
}

export default App;
