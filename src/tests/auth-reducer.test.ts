import {authReducer, dataType, setUserDataAuthAC} from "../redux/reducers/authReducer";

test('auth reducer test', ()=>{
    let startState = {
        data: {
            id: null,
            email: null,
            login: null
        } as dataType,
        isAuth: false
    }
    let user= {
        id: '2',
        email:'test@mail.ru',
        login: 'TestLogin'
    }
    const testAction = setUserDataAuthAC(user, true);
    let endState = authReducer(startState,testAction )

    expect(startState.isAuth).toBe(false)
    expect(endState.data).toBe(user)
    expect(endState.isAuth).toBe(true)
})
