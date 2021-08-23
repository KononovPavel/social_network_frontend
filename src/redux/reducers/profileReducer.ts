import {v1} from "uuid";
import {Dispatch} from "redux";
import {usersAPI} from "../../API/API";


const ADD_POST = "ADD_POST"; // добавить пост
const UPDATE_NEW_POST = "UPDATE_NEW_POST";
const SET_USER_PROFILE = 'SET_USER_PROFILE'
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
    newPostText: "",
    profile: {} as profileType
}
type addPostAction = {
    type: "ADD_POST"
}
type updateNewPostAction = {
    type: "UPDATE_NEW_POST",
    updateText: string
}
type setUserProfileAC = {
    type: typeof SET_USER_PROFILE,
    profile: profileType
}
type actionType = addPostAction | updateNewPostAction | setUserProfileAC
export type PostDataType = {
    id: string,
    name: string,
    fam: string,
    avaLink: string,
    message: string,
    likesCount: number
}

type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: actionType): InitialStateType => {
    switch (action.type) {

        case ADD_POST:
            let newPost: PostDataType = {
                id: v1(),
                name: "Pavel",
                fam: "Kononov",
                avaLink: state.posts[0].avaLink,
                message: state.newPostText,//сначала я через input меняю значение поста, а затем его пушу в массив постов
                likesCount: Math.round(Math.random() * 100)
            }
            return {...state, posts: [newPost, ...state.posts], newPostText: ''}
        case UPDATE_NEW_POST:
            return {...state, newPostText: action.updateText}
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostActionCreator = (newPost: string) => ({type: UPDATE_NEW_POST, updateText: newPost})
export const setUserProfileAC = (profile: profileType) => ({type: SET_USER_PROFILE, profile: profile})
export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfileAC(response.data))
    })
}
