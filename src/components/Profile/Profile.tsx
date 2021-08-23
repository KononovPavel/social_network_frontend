import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import p from './Profile.module.css'
import {MyPostContainerComponent} from "./Posts/MyPostsContainer";
import {profileType} from "../../redux/reducers/profileReducer";
import {Redirect} from "react-router-dom";

type PropsType = {
    profile:profileType,
    isAuth:boolean
}

export const Profile:React.FC<PropsType> = (props) => {
    if(!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={p.profile}>
            <ProfileInfo profileInfo={props.profile}/>
            <MyPostContainerComponent/>
        </div>

    )
}
