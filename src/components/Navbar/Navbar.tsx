import React from "react";
import {NavLink} from "react-router-dom";
import FriendsContainer from "../Friends/FriendsContainer";
import n from './Navbar.module.css';
import {useSelector} from "react-redux";
import {StoreType} from "../../redux/redux-store";


export const Navbar = React.memo(() => {
    const myId = useSelector<StoreType, string | null>(state => state.authReducer.data.id)
        return (
            <nav className={n.nav}>
                <div className={n.Item}><NavLink activeClassName={n.active} to={`/profile/${myId}`}>Profile</NavLink></div>
                <div className={n.Item}><NavLink activeClassName={n.active} to="/dialogs">Dialogs</NavLink></div>
                <div className={n.Item}><NavLink activeClassName={n.active} to="/news">News</NavLink></div>
                <div className={n.Item}><NavLink activeClassName={n.active} to="/music">Music</NavLink></div>
                <div className={n.Item}><NavLink activeClassName={n.active} to="/settings">Settings</NavLink></div>
                <div className={n.Item}><NavLink activeClassName={n.active} to="/users">Find users</NavLink></div>
                <FriendsContainer/>
            </nav>
        )
    }
)
