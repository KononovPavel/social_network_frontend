import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {
    followThunk,
    getUsersThunk,
    getUsersWithPaginationThunk,
    InitialStateType,
    setIsFollowingProgress,
    unFollowThunk,
} from "../../redux/reducers/userReducer";
import RedirectHOC from "../../hoc/RedirectHOC";
import {compose} from "redux";
import React, {ComponentType, useEffect} from "react";
import p from "../Profile/Profile.module.css";
import Preloader from "../common/Preloader";
import UsersPresentationalComponent from "./UsersPageClassComponent/UsersPresentationalComponent";

const UserContainerComponent = () => {

    const dispatch = useDispatch();
    const usersState = useSelector<StoreType, InitialStateType>(state => state.userReducer)
    useEffect(() => {
        dispatch(getUsersThunk(usersState.currentPage, usersState.pageSize))
    }, [dispatch,usersState.currentPage, usersState.pageSize])


    const getUsersWithPagination = (page: number) => {
        dispatch(getUsersWithPaginationThunk(page, usersState.pageSize))
    }

    const followingProgress = (value: boolean, userId: number) => {
        dispatch(setIsFollowingProgress(value, userId))
    }
    const followThunkCallback = (value: number) => {
        dispatch(followThunk(value))
    }
    const unFollowThunkCallback = (value: number) => {
        dispatch(unFollowThunk(value))
    }


    return <div className={p.profile}>
        {usersState.IS_PROGRESSING ?
            <Preloader/> : null}
        <UsersPresentationalComponent
            users={usersState.users}
            currentPage={usersState.currentPage}
            pageSize={usersState.pageSize}
            getUsersWithPagination={getUsersWithPagination}
            totalCount={usersState.totalCount}
            followingProgress={followingProgress}
            IS_FOLLOW_PROGRESS={usersState.IS_FOLLOW_PROGRESS}
            followThunk={followThunkCallback}
            unFollowThunk={unFollowThunkCallback}
        />

    </div>
}

export default compose<ComponentType>(
    RedirectHOC
)(UserContainerComponent);
