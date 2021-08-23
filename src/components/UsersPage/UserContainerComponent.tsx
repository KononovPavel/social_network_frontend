import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";

import {
    followAC, followThunk, getUsersThunk, getUsersWithPaginationThunk,
    setCurrentPageAC, setIsFollowingProgress,
    setIsProgressing,
    setTotalCountPageAC,
    setUsersAC,
    unfollowAC, unFollowThunk,
} from "../../redux/reducers/userReducer";
import UsersPageClassComponent from "./UsersPageClassComponent/UsersPageClassComponent";
import RedirectHOC from "../../hoc/RedirectHOC";
import {compose} from "redux";
import React from "react";


const mapStateToProps = (state: StoreType) => {
    return {
        users: state.userReducer.users,
        pageSize: state.userReducer.pageSize,
        totalCount: state.userReducer.totalCount,
        currentPage: state.userReducer.currentPage,
        IS_PROGRESSING: state.userReducer.IS_PROGRESSING,
        IS_FOLLOW_PROGRESS:state.userReducer.IS_FOLLOW_PROGRESS,
    }
}
const mapDispatchToProps = {
    followCallback: followAC,
    unfollowCallback: unfollowAC,
    setUserCallback: setUsersAC,
    setCurrentPageCallback: setCurrentPageAC,
    setTotalCountCallback: setTotalCountPageAC,
    isProgressingCallback: setIsProgressing,
    followingProgress:setIsFollowingProgress,
    getUsersWithThunk:getUsersThunk,
    getUsersWithPaginationThunk:getUsersWithPaginationThunk,
    followThunk:followThunk,
    unFollowThunk:unFollowThunk
}
export const  UserContainerComponent = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    RedirectHOC
)(UsersPageClassComponent);
