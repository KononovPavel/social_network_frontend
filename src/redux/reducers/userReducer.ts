import {Dispatch} from "redux";
import {usersAPI} from "../../API/API";

const FOLLOW = 'FOLLOW'
const UN_FOLLOW = 'UN_FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const IS_PROGRESSING = 'IS_PROGRESSING'
const IS_FOLLOW_PROGRESS = 'IS_FOLLOW_PROGRESS'

export type userType = {
    name: string,
    id: number,
    uniqueUrl: string
    photos: PhotosType,
    status: string,
    followed: boolean,
}
type PhotosType = {
    small:string,
    large: string
}
let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    IS_PROGRESSING: false,
    IS_FOLLOW_PROGRESS: []
}
type InitialStateType = {
    users: userType[],
    pageSize: number,
    totalCount: number,
    currentPage: number,
    IS_PROGRESSING: boolean,
    IS_FOLLOW_PROGRESS: number[]
}
type unfollowActionType = {
    type: typeof UN_FOLLOW,
    userID: number
}
type followActionType = {
    type: typeof FOLLOW,
    userID: number
}
type setUsersActionType = {
    type: typeof SET_USERS,
    users: userType[]
}
type setCurrentPageType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
}
type setTotalCountType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    totalCount: number
}
type setProgressingType = {
    type: typeof IS_PROGRESSING;
    IS_PROGRESSING: boolean
}
type setFollowingProgressType = {
    type: typeof IS_FOLLOW_PROGRESS;
    IS_FETCHING: boolean,
    userId: number
}
type actionType =
    followActionType
    | unfollowActionType
    | setUsersActionType
    | setCurrentPageType
    | setTotalCountType
    | setProgressingType
    | setFollowingProgressType

export const userReducer = (state: InitialStateType = initialState, action: actionType): InitialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => user.id === action.userID ? {...user, followed: true} : user)
            }
        }
        case UN_FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => user.id === action.userID ? {...user, followed: false} : user)
            }
        }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalCount: action.totalCount}
        }
        case IS_PROGRESSING: {
            return {...state, IS_PROGRESSING: action.IS_PROGRESSING}
        }
        case IS_FOLLOW_PROGRESS: {
            return {
                ...state,
                IS_FOLLOW_PROGRESS: action.IS_FETCHING
                    ? [...state.IS_FOLLOW_PROGRESS, action.userId]
                    : [...state.IS_FOLLOW_PROGRESS.filter(id => id !== action.userId)]
            }
        }
        default:
            return state;
    }
}


export const followAC = (userID: number) => ({type: FOLLOW, userID: userID})
export const unfollowAC = (userID: number) => ({type: UN_FOLLOW, userID: userID})
export const setUsersAC = (users: userType[]) => ({type: SET_USERS, users: users})
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage: currentPage})
export const setTotalCountPageAC = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount: totalCount})
export const setIsProgressing = (isProgressing: boolean) => ({type: IS_PROGRESSING, IS_PROGRESSING: isProgressing})
export const setIsFollowingProgress = (isFollowingProgress: boolean, userId: number) => ({
    type: IS_FOLLOW_PROGRESS,
    IS_FETCHING: isFollowingProgress,
    userId: userId
})


//thunk
export const getUsersThunk = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(setIsProgressing(true))
    usersAPI.getUsers_API(currentPage, pageSize).then(data => {
        dispatch(setIsProgressing(false))
        dispatch(setUsersAC(data.items))
        dispatch(setTotalCountPageAC(data.totalCount))
    })
}

export const getUsersWithPaginationThunk = (page: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(setCurrentPageAC(page))
    dispatch(setIsProgressing(true))
    usersAPI.getUsers_API(page, pageSize).then(data => {
        dispatch(setIsProgressing(false))
        dispatch(setUsersAC(data.items))
    })
}

export const followThunk = (userId: number) => (dispatch: Dispatch) => {
    dispatch(setIsFollowingProgress(true, userId));
    usersAPI.follow(userId).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(followAC(userId))
            dispatch(setIsFollowingProgress(false, userId))
        }
    })
}

export const unFollowThunk = (userId: number) => (dispatch: Dispatch) => {
    dispatch(setIsFollowingProgress(true, userId))
    usersAPI.unfollow(userId).then(response=>{
        if(response.data.resultCode ===0){
            dispatch(unfollowAC(userId))
            dispatch(setIsFollowingProgress(false,userId))
        }
    })
}
