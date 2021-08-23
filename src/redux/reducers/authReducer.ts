import {Dispatch} from "redux";
import {authAPI} from "../../API/API";


const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
    data: {
        id: null,
        email: null,
        login: null
    } as dataType,
    isAuth: false
}
export type dataType = {
    id: string | null,
    email: string | null,
    login: string | null
}
type InitialStateType = typeof initialState

type setUserDataAuthACType = {
    type: typeof SET_USER_DATA,
    data: dataType
}

type actionType = setUserDataAuthACType


export const authReducer = (state: InitialStateType = initialState, action: actionType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                data: action.data,
                isAuth: true
            }
        }
        default:
            return state;
    }
}
export const setUserDataAuthAC = (data: dataType) => ({type: SET_USER_DATA, data: data})
export const getUserData = () => (dispatch: Dispatch, getState: () => InitialStateType) => {
    authAPI.me().then(
        response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserDataAuthAC(response.data.data))
            }
        })
    console.log(getState().data && getState().data.login ? getState().data.login : '')
}
