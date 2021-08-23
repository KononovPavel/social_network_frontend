import React from 'react';
import {NavLink} from 'react-router-dom';
import {userType} from "../../../redux/reducers/userReducer";
import item from './userItem.module.css';


type PropsType = {
    userItem: userType,
    IS_FOLLOW_PROGRESS: number[],
    unFollowThunk:(value:number)=>void,
    followThunk:(value:number)=>void
}

const UserItem: React.FC<PropsType> = (
    {
        userItem,
        IS_FOLLOW_PROGRESS,
        unFollowThunk,
        followThunk,
    }) => {
    const follow = () => {
       followThunk(userItem.id)
    }
    const unfollow = () => {
     unFollowThunk(userItem.id)
    }
    //className={item.followed}

    return (
        <div className={item.userItemBlock}>
            <div className={item.imageFollowBLock}>
                <NavLink to={'/profile/' + userItem.id} className={item.image}><img className={item.img}
                                                                                    src={userItem.photos.small ? userItem.photos.small : 'https://st4.depositphotos.com/7323516/23928/i/600/depositphotos_239287058-stock-photo-a-sign-can-not-be.jpg'}
                                                                                    alt="avatar" width={100}
                                                                                    height={100}/></NavLink>
                {!userItem.followed &&
                <button onClick={() => follow()}
                        disabled={IS_FOLLOW_PROGRESS.some((id) => id === userItem.id)}>FOLLOW</button>}
                {userItem.followed &&
                <button onClick={() => unfollow()}
                        disabled={IS_FOLLOW_PROGRESS.some((id) => id === userItem.id)}>UNFOLLOW</button>}
            </div>
            <div className={item.INFO}>
                <div className={item.fullName}>{userItem.name}</div>
                <div className={item.status}>{userItem.status}</div>
            </div>
        </div>
    );
};

export default UserItem;
