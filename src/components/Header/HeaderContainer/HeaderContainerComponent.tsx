import React, {useEffect} from 'react';
import {Header} from "../Header";
import {useDispatch, useSelector} from 'react-redux';
import {StoreType} from "../../../redux/redux-store";
import {getUserData, LogoutThunk} from "../../../redux/reducers/authReducer";

const HeaderContainerComponent = () => {

    const dispatch = useDispatch();
    const login = useSelector<StoreType, string | null>(state => state.authReducer.data.login)
    const isAuth = useSelector<StoreType, boolean>(state => state.authReducer.isAuth)



    const logoutCallback = () => {
        dispatch(LogoutThunk())
    }

    return <Header login={login} isAuth={isAuth} logoutCallback={logoutCallback}/>

}

export default HeaderContainerComponent;
