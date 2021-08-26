import {authAPI} from "../../API/API";
import {FormDataLoginType} from "../../components/Login/Login";
import {ThunkType} from "../redux-store";
import {FormAction, stopSubmit} from "redux-form";


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

export type setUserDataAuthACType = {
    type: typeof SET_USER_DATA,
    data: dataType,
    isAuth: boolean
}


type actionType = setUserDataAuthACType


export const authReducer = (state: InitialStateType = initialState, action: actionType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                data: action.data,
                isAuth: action.isAuth
            }
        }
        default:
            return state;
    }
}
export const setUserDataAuthAC = (data: dataType, isAuth: boolean): setUserDataAuthACType => ({
    type: SET_USER_DATA,
    data: data,
    isAuth
})
export const getUserData = (): ThunkType<setUserDataAuthACType> => async (dispatch, getState) => {
    const response = await authAPI.me()
    if (response.data.resultCode === 0) {
       await dispatch(setUserDataAuthAC(response.data.data, true))
    }
}
export const LoginThunk = (user: FormDataLoginType): ThunkType<setUserDataAuthACType | FormAction>  => async (dispatch) => {
    const response = await authAPI.login(user)
    if (response.data.resultCode === 0) {
       await dispatch(getUserData())
        console.log(response.data)
    }
    else{
        const message = response.data.messages[0]
        const actionSubmit = stopSubmit('LOGIN', {_error: message})
        await dispatch(actionSubmit)
    }

}
export const LogoutThunk = (): ThunkType<setUserDataAuthACType> => async (dispatch) => {
    const response  = await authAPI.logout()
    if (response.data.resultCode === 0) {
       await dispatch(setUserDataAuthAC({id: null, email: null, login: null}, false))
    }

}
