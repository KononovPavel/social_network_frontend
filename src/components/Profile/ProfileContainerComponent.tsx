import React from 'react';
import p from "./Profile.module.css";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from 'react-redux';
import {StoreType} from "../../redux/redux-store";
import {profileType, setUserProfileAC} from "../../redux/reducers/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";


type ownPropsType = MSTP & MDPT
type MSTP = {
    profile : profileType
}
type MDPT = {
    setProfile: (value: profileType) => void
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
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            console.log(response.data)
            this.props.setProfile(response.data)
        })
    }
    render() {
        return (
            <div className={p.profile}>
                <Profile profile={this.props.profile}/>
            </div>

        )
    }
}

let mapStateToProps = (state: StoreType):MSTP => ({
    profile: state.profileReducer.profile

})
let mapDispatchToProps = {
    setProfile:setUserProfileAC
} as MDPT

 let withURLDataContainerComponent = withRouter(ProfileContainerComponent)

export default connect(mapStateToProps, mapDispatchToProps)(withURLDataContainerComponent);
