import React from 'react';
import u from "../UserPageComponent/UsersPage.module.css";
import UserItem from "../UserItem/UserItem";
import {userType} from "../../../redux/reducers/userReducer";
import {Redirect} from "react-router-dom";


type PropsType = {
    users: userType[],
    totalCount: number,
    pageSize: number,
    getUsersWithPagination: (page: number) => void,
    currentPage: number,
    followCallback: (userId: number) => void,
    unfollowCallback: (userID: number) => void,
    followingProgress: (value: boolean, userId: number) => void
    IS_FOLLOW_PROGRESS: number[],
    unFollowThunk: (value: number) => void,
    followThunk: (value: number) => void,
    isAuth:boolean
}

const UsersPresentationalComponent: React.FC<PropsType> = (props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    if (!props.isAuth) return <Redirect to={'/login'}/>
    return (
        <>
            <div className={u.pages}>
                {pages.map(page => {
                    return (
                        <span key={page} onClick={(event) => {
                            props.getUsersWithPagination(page)
                        }}
                              className={props.currentPage === page ? u.selected : u.notSelected}>{page}</span>
                    )
                })}
            </div>

            <div>
                {
                    props.users.map(user => <div key={user.id}>
                        <UserItem
                            userItem={user}
                            IS_FOLLOW_PROGRESS={props.IS_FOLLOW_PROGRESS}
                            followThunk={props.followThunk}
                            unFollowThunk={props.unFollowThunk}
                        />
                    </div>)
                }
            </div>
        </>

    )
};

export default UsersPresentationalComponent;
