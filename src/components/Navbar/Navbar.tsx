import React from "react";
import {NavLink} from "react-router-dom";
import FriendsContainer from "../Friends/FriendsContainer";
import n from './Navbar.module.css';



export const Navbar = () => {
    return (
        <nav className={n.nav}>
            <div className={n.Item}><NavLink activeClassName={n.active} to="/profile">Profile</NavLink></div>
            <div className={n.Item}><NavLink activeClassName={n.active} to="/dialogs">Dialogs</NavLink></div>
            <div className={n.Item}><NavLink activeClassName={n.active} to="/news">News</NavLink></div>
            <div className={n.Item}><NavLink activeClassName={n.active} to="/music">Music</NavLink></div>
            <div className={n.Item}><NavLink activeClassName={n.active} to="/settings">Settings</NavLink></div>
            <div className={n.Item}><NavLink activeClassName={n.active} to="/users">Find users</NavLink></div>
            <FriendsContainer/>
        </nav>
    )
}
