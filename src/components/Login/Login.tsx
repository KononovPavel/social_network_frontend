import React from 'react';
import p from '../Profile/Profile.module.css'
import l from './login.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import InputForm from "../common/FormsControllers/InputForm/InputForm";
import {maxLengthCreator, required} from "../../utils/formValidators/Posts/validators";
import {useDispatch, useSelector} from "react-redux";
import {LoginThunk} from "../../redux/reducers/authReducer";
import {StoreType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";



const Login: React.FC = () => {
    const dispatch = useDispatch()
    const isAuth = useSelector<StoreType, boolean>(state =>  state.authReducer.isAuth)
    const onSubmit = (formData: FormDataLoginType) => {
      dispatch(LoginThunk(formData))
        console.log(formData)
    }
    if(isAuth){
        return <Redirect to={'/profile'}/>
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

export type FormDataLoginType = {
    email: string,
    password: string,
    rememberMe: boolean
}

const maxLength50 = maxLengthCreator(50)


const LoginForm: React.FC<InjectedFormProps<FormDataLoginType>> = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field
                        className={l.input}
                        type={'text'}
                        placeholder={'Логин'}
                        name={'email'}
                        component={InputForm}
                        validate={[required,maxLength50]}
                    />
                </div>
                <div>
                    <Field
                        className={l.input}
                        type="password"
                        placeholder={'Пароль'}
                        name={'password'}
                        component={InputForm}
                        validate={[required,maxLength50]}
                    />
                </div>
                <div>
                    <Field
                        type="checkbox"
                        component={InputForm}
                        name={'rememberMe'}
                    />
                    <span className={l.span}>Запомнить меня</span>
                </div>
                <div className={l.error}>
                    {props.error ? props.error : ''}
                </div>
                <div>
                    <button  className={l.button}>Войти</button>
                </div>
            </form>
        </div>
    )
}
const LoginReduxForm = reduxForm<FormDataLoginType>({form: 'LOGIN'})(LoginForm)


export default Login;
