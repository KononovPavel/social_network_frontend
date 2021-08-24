import React, {ComponentType, useEffect} from 'react';
import p from "./Profile.module.css";
import {Profile} from "./Profile";
import {connect, useDispatch, useSelector} from 'react-redux';
import {StoreType} from "../../redux/redux-store";
import {getUserProfile, profileType, setUserProfileAC} from "../../redux/reducers/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import RedirectHOC from '../../hoc/RedirectHOC';
import {compose} from "redux";



type ParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<ParamsType>


const ProfileContainerComponent: React.FC<PropsType> = (props) => {

    const dispatch = useDispatch();
    const profile = useSelector<StoreType, profileType>(state => state.profileReducer.profile)


    useEffect(() => {
        let userId = props.match.params.userId
        if (!userId) {
            userId = '2'
        }
      dispatch(getUserProfile(userId))
        }, [dispatch])
        return (
            <div className={p.profile}>
                <Profile profile={profile}/>
            </div>

        )
}

export default compose<ComponentType>(
    withRouter,
    RedirectHOC
)(ProfileContainerComponent)

