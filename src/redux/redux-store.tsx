import {combineReducers, createStore, applyMiddleware} from "redux";
import {profileReducer} from "./reducers/profileReducer";
import {dialogsReducer} from "./reducers/dialogsReducer";
import {sideBarReducer} from "./reducers/sideBarReducer";
import {userReducer} from "./reducers/userReducer";
import {authReducer} from "./reducers/authReducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from "redux-form";


let rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    sideBarReducer,
    userReducer,
    authReducer,
    form:formReducer
})

export type StoreType = ReturnType<typeof rootReducer>
export const reduxStore = createStore(rootReducer,applyMiddleware(thunk));

// @ts-ignore
window.store = reduxStore
