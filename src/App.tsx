import React, {useEffect} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import ProfileContainerComponent from "./components/Profile/ProfileContainerComponent";
import HeaderContainerComponent from "./components/Header/HeaderContainer/HeaderContainerComponent";
import Login from "./components/Login/Login";
import DialogsContainerComponent from "./components/Dialogs/DialogsContainer";
import UserContainerComponent from "./components/UsersPage/UserContainerComponent";
import {useDispatch, useSelector} from "react-redux";
import {initialize} from "./redux/reducers/appReducer";
import {StoreType} from "./redux/redux-store";
import Preloader from "./components/common/Preloader";


const App = React.memo(() => {


        const dispatch = useDispatch();
        const init = useSelector<StoreType, boolean>(state => state.app.initialized)
        const myId = useSelector<StoreType, string | null>(state => state.authReducer.data.id)
        useEffect(() => {
            dispatch(initialize())
        }, [dispatch])
        if (!init) {
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className={'content'}>
                    <div className='app-wrapper'>
                        <Route path={"/dialogs"} render={() => <DialogsContainerComponent/>}/>
                        <Route path={"/profile/:userId?"} render={() => <ProfileContainerComponent/>}/>
                        <Route path={"/users"} render={() => <UserContainerComponent/>}/>
                        <Route path={'/'} render={() => <Redirect to={'/profile/' + myId}/>}/>
                        <Route path={'/login'} render={() => <Login/>}/>
                        <HeaderContainerComponent/>
                        <Navbar/>
                    </div>
                </div>

            </BrowserRouter>
        )
    }
)

export default App;
