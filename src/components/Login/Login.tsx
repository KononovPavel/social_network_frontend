import React from 'react';
import p from '../Profile/Profile.module.css'
import l from './login.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";

const Login: React.FC = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div className={`${p.profile}`}>
            <div className={l.loginBLock}>
                <h1>Вход</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
};

type FormDataType = {
    login: string,
    password: string,
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field
                        className={l.input}
                        type={'text'}
                        placeholder={'Логин'}
                        name={'login'}
                        component={'input'}
                    />
                </div>
                <div>
                    <Field
                        className={l.input}
                        type="password"
                        placeholder={'Пароль'}
                        name={'password'}
                        component={'input'}
                    />
                </div>
                <div>
                    <Field
                        type="checkbox"
                        component={'input'}
                        name={'rememberMe'}
                    />
                    <span className={l.span}>Запомнить меня</span>
                </div>
                <div>
                    <button className={l.button}>Войти</button>
                </div>
            </form>
        </div>
    )
}
const LoginReduxForm = React.memo(reduxForm<FormDataType>({form: 'LOGIN'})(LoginForm))


export default Login;
