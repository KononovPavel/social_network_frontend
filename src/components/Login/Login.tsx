import React from 'react';
import p from '../Profile/Profile.module.css'
import l from './login.module.css'

const Login = () => {
    return (
        <div className={`${p.profile}`}>
            <div className={l.loginBLock}>
                <h1>Вход</h1>
                <LoginForm/>
            </div>
        </div>
    );
};


const LoginForm = () => {
    return (
        <React.Fragment>
            <form>
                <div>
                    <input className={l.input} type="text" placeholder={'Логин'}/>
                </div>
                <div>
                    <input className={l.input} type="password" placeholder={'Пароль'}/>
                </div>
                <div>
                    <input type="checkbox"/>
                    <span className={l.span}>Запомнить меня</span>
                </div>
                <div>
                    <button className={l.button}>Войти</button>
                </div>
            </form>
        </React.Fragment>
    )
}


export default Login;
