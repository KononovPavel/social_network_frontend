import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../../API/API";


const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'


export type profileType = {
    aboutMe: string
    contacts: {
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string | undefined,
        large: string | undefined
    }
}


let initialState = {
    posts: [
        {
            name: "Pavel",
            fam: "Kononov",
            avaLink: "https://sun9-88.userapi.com/impf/c855420/v855420426/49c7a/Wv5Up076q58.jpg?size=1080x1620&quality=96&sign=9d3c1952ef7c34a24f0e84d6887d4c28&type=album",
            id: v1(),
            likesCount: 20,
            message: "This is first message"
        },
        {
            name: "Pavel",
            fam: "Kononov",
            avaLink: "https://sun9-88.userapi.com/impf/c855420/v855420426/49c7a/Wv5Up076q58.jpg?size=1080x1620&quality=96&sign=9d3c1952ef7c34a24f0e84d6887d4c28&type=album",
            id: v1(),
            likesCount: 10,
            message: "This is second message"
        }
    ],
    profile: {} as profileType,
    status: ''
}
type addPostAction = {
    type: "ADD_POST",
    newPostText: string
}

type setUserProfileAC = {
    type: typeof SET_USER_PROFILE,
    profile: profileType
}

type setUserStatusType = {
    type: typeof SET_STATUS,
    status: string
}

type actionType = addPostAction | setUserProfileAC | setUserStatusType
export type PostDataType = {
    id: string,
    name: string,
    fam: string,
    avaLink: string,
    message: string,
    likesCount: number
}

export type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: actionType): InitialStateType => {
    switch (action.type) {

        case ADD_POST: {
            let newPost: PostDataType = {
                id: v1(),
                name: "Pavel",
                fam: "Kononov",
                avaLink: state.posts[0].avaLink,
                message: action.newPostText,//сначала я через input меняю значение поста, а затем его пушу в массив постов
                likesCount: Math.round(Math.random() * 100)
            }
            return {...state, posts: [newPost, ...state.posts],}
        }


        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}
export const addPostActionCreator = (newPostText: string): addPostAction => ({type: ADD_POST, newPostText})
export const setUserProfileAC = (profile: profileType) => ({type: SET_USER_PROFILE, profile: profile})
export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfileAC(response.data))
    })
}
export const setUserStatus = (status: string): setUserStatusType => ({type: SET_STATUS, status: status})

export const getUserStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setUserStatus(response.data))
    })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    })
}



