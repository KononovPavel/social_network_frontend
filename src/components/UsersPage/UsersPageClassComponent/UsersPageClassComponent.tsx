import React from 'react';
import {unFollowThunk, userType} from "../../../redux/reducers/userReducer";
import UsersPresentationalComponent from "./UsersPresentationalComponent";
import p from "../../Profile/Profile.module.css";
import Preloader from "../../common/Preloader";


type PropsType = {
    users: userType[],
    followCallback: (userId: number) => void,
    unfollowCallback: (userID: number) => void,
    setUserCallback: (users: userType[]) => void,
    totalCount: number,
    pageSize: number,
    currentPage: number
    setCurrentPageCallback: (currenPage: number) => void,
    setTotalCountCallback: (totalCount: number) => void,
    isProgressingCallback: (value: boolean) => void,
    IS_PROGRESSING: boolean,
    followingProgress:(value:boolean, userId:number) => void
    IS_FOLLOW_PROGRESS:number[],
    getUsersWithThunk:(currentPage:number, pageSize:number)=> void,
    getUsersWithPaginationThunk:(currentPage:number, pageSize:number) =>void,
    unFollowThunk:(value:number)=>void,
    followThunk:(value:number)=>void,

}

class UsersPageClassComponent extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getUsersWithThunk(this.props.currentPage, this.props.pageSize)
    }

    getUsersWithPagination = (page: number) => {
        this.props.getUsersWithPaginationThunk(page, this.props.pageSize)
    }

    render() {
        return <div className={p.profile}>
            {this.props.IS_PROGRESSING ?
                <Preloader/> : null}
            <UsersPresentationalComponent
                users={this.props.users}
                unfollowCallback={this.props.unfollowCallback}
                followCallback={this.props.followCallback}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                getUsersWithPagination={this.getUsersWithPagination}
                totalCount={this.props.totalCount}
                followingProgress={this.props.followingProgress}
                IS_FOLLOW_PROGRESS={this.props.IS_FOLLOW_PROGRESS}
                followThunk={this.props.followThunk}
                unFollowThunk={this.props.unFollowThunk}
            />

        </div>

    }
}


export default UsersPageClassComponent;
