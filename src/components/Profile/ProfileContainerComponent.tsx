import React from 'react';
import p from "./Profile.module.css";
import {Profile} from "./Profile";
import {connect} from 'react-redux';
import {StoreType} from "../../redux/redux-store";
import {getUserProfile, profileType, setUserProfileAC} from "../../redux/reducers/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";




type ownPropsType = MSTP & MDPT
type MSTP = {
    profile : profileType,
    isAuth:boolean
}
type MDPT = {
    setProfile: (value: profileType) => void,
    getProfile:(userId:string) => void
}
type ParamsType = {
    userId:string
}

type PropsType =  RouteComponentProps<ParamsType> & ownPropsType


class ProfileContainerComponent extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId ='2'
        }
        this.props.getProfile(userId);
    }
    render() {
        return (
            <div className={p.profile}>
                <Profile profile={this.props.profile} isAuth={this.props.isAuth}/>
            </div>

        )
    }
}

let mapStateToProps = (state: StoreType):MSTP => ({
    profile: state.profileReducer.profile,
    isAuth:state.authReducer.isAuth

})
let mapDispatchToProps = {
    setProfile:setUserProfileAC,
    getProfile:getUserProfile
} as MDPT

 let withURLDataContainerComponent = withRouter(ProfileContainerComponent)

export default connect(mapStateToProps, mapDispatchToProps)(withURLDataContainerComponent);
