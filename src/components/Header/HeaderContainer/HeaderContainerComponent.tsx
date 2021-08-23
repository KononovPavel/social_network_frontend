import React from 'react';
import {Header} from "../Header";
import {connect} from 'react-redux';
import {StoreType} from "../../../redux/redux-store";
import {dataType, getUserData, setUserDataAuthAC} from "../../../redux/reducers/authReducer";

type PropsType = {
    setAuthUserDataCallback: (userData: dataType) => void,
    isAuth:boolean,
    login:string | null,
    getUserData:()=>void
}


class HeaderContainerComponent extends React.Component<PropsType> {
    componentDidMount() {
       this.props.getUserData()
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
    setAuthUserDataCallback: setUserDataAuthAC,
    getUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainerComponent);
