import React, {ComponentType} from 'react';
import {StoreType} from "../redux/redux-store";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

type MSTPType = {
    isAuth: boolean
}

const MSTP = (state: StoreType): MSTPType => {
    return {
        isAuth: state.authReducer.isAuth
    }
}

function RedirectHOC<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MSTPType) => {

        let {isAuth, ...restProps} = props
        if (!props.isAuth) return <Redirect to={'/login'}/>;
        return <Component {...restProps as T}/>
    }
    return connect(MSTP)(RedirectComponent)
}

export default RedirectHOC;
