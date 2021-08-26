import {ThunkType} from "../redux-store";
import {getUserData} from "./authReducer";


type initStateType = {
    initialized: boolean
}
let initState: initStateType = {
    initialized: false
}
type initActionType = {
    type: 'INITIALIZE',
    payload: boolean
}
type actionType = initActionType

export const AppReducer = (state: initStateType = initState, action: actionType): initStateType => {
    switch (action.type) {
        case "INITIALIZE": {
            return {...state, initialized: action.payload}
        }
        default: {
            return state
        }
    }
}

export const initializedAC = (init: boolean): initActionType => ({type: "INITIALIZE", payload: init})

export const initialize = (): ThunkType<initActionType> => async (dispatch) => {
   await dispatch(getUserData())
    setTimeout(()=>{
     dispatch(initializedAC(true))
    }, 1000)

}
