import {combineReducers, createStore, applyMiddleware, Action} from "redux";
import {profileReducer} from "./reducers/profileReducer";
import {dialogsReducer} from "./reducers/dialogsReducer";
import {sideBarReducer} from "./reducers/sideBarReducer";
import {userReducer} from "./reducers/userReducer";
import {authReducer} from "./reducers/authReducer";
import thunk, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from "redux-form";
import {AppReducer} from "./reducers/appReducer";


let rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    sideBarReducer,
    userReducer,
    authReducer,
    app:AppReducer,
    form:formReducer
})

export type StoreType = ReturnType<typeof rootReducer>
export const reduxStore = createStore(rootReducer,applyMiddleware(thunk));
export  type ThunkType<TAction extends Action> = ThunkAction<Promise<void>, StoreType, unknown, TAction> ///!!!
// @ts-ignore
window.store = reduxStore
