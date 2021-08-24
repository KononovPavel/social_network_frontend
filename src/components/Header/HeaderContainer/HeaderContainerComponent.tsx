import React, {useEffect} from 'react';
import {Header} from "../Header";
import {useDispatch, useSelector} from 'react-redux';
import {StoreType} from "../../../redux/redux-store";
import {getUserData} from "../../../redux/reducers/authReducer";

const HeaderContainerComponent = () => {

    const dispatch = useDispatch();
    const login = useSelector<StoreType, string | null>(state => state.authReducer.data.login)

    useEffect(() => {
        dispatch(getUserData())
    }, [dispatch])

    return <Header login={login}/>

}

export default HeaderContainerComponent;
