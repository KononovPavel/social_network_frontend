import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import p from './Profile.module.css'
import MyPostContainerComponent from "./Posts/MyPostsContainer";
import {profileType} from "../../redux/reducers/profileReducer";


type PropsType = {
    profile:profileType,
    status:string,
    updateStatus:(value:string)=> void
}

export const Profile:React.FC<PropsType> = (props) => {
    return (
        <div className={p.profile}>
            <ProfileInfo profileInfo={props.profile} updateStatus={props.updateStatus} status={props.status}/>
            <MyPostContainerComponent/>
        </div>

    )
}
