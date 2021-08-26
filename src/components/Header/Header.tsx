import React from "react";
import {NavLink, Redirect} from "react-router-dom";
import  h from './Header.module.css';

type PropsType = {
    login:string | null,
     isAuth:boolean
    logoutCallback:()=>void
}

export const Header:React.FC<PropsType> = ({login, isAuth, logoutCallback}) => {
    const onClickHandler = ()=>{
        logoutCallback();
        return <Redirect to={'/login'}/>
    }

    return (
        <header className={h.header}>
            <img
                 src="http://sun9-3.userapi.com/s/v1/if1/lEOc7CUagS6yli7JI6f9nVQE9C30l4Cu94T-LBURG8Vt08Bux9P4xjnLbiREzZbeDdkH-9ge.jpg?size=200x0&quality=96&crop=0,0,500,588&ava=1"
                 alt=""
                 width={80} height={80}/>
            <div className={h.loginBlock}>
                {login? <div>{login}</div>:<NavLink to={'/login'}>Войти</NavLink>}
                {isAuth && <button onClick={()=>onClickHandler()}>Выйти</button>}
            </div>
        </header>
    )
}
