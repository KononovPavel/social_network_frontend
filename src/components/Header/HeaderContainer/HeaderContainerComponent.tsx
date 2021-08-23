import React from 'react';
import {Header} from "../Header";
import axios from "axios";
import {connect} from 'react-redux';
import {StoreType} from "../../../redux/redux-store";
import {dataType, setUserDataAuthAC} from "../../../redux/reducers/authReducer";

type PropsType = {
    setAuthUserDataCallback: (userData: dataType) => void,
    isAuth:boolean,
    login:string | null
}


class HeaderContainerComponent extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0) {
                this.props.setAuthUserDataCallback(response.data.data)
                console.log(this.props.login)
            }
            console.log(response)
        })
    }

    render() {
        return <Header login={this.props.login}/>;
    }
}

let mapStateToProps = (state: StoreType) => ({
    isAuth: state.authReducer.isAuth,
    login:state.authReducer.data.login
})

let mapDispatchToProps = {
    setAuthUserDataCallback: setUserDataAuthAC
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainerComponent);
