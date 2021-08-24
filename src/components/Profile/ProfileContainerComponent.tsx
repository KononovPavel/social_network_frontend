import React, {ComponentType, useCallback, useEffect} from 'react';
import p from "./Profile.module.css";
import {Profile} from "./Profile";
import {useDispatch, useSelector} from 'react-redux';
import {StoreType} from "../../redux/redux-store";
import {getUserProfile, getUserStatus, InitialStateType, updateStatus} from "../../redux/reducers/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import RedirectHOC from '../../hoc/RedirectHOC';
import {compose} from "redux";


type ParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<ParamsType>


const ProfileContainerComponent: React.FC<PropsType> = (props) => {

    const dispatch = useDispatch();
    useEffect(() => {
        let userId = props.match.params.userId
        if (!userId) {
            userId = '18823'
        }
        dispatch(getUserProfile(userId))
        dispatch(getUserStatus(userId))
    }, [dispatch, props.match.params.userId])
    const profileState = useSelector<StoreType, InitialStateType>(state => state.profileReducer)

    const updateStatusCallback = useCallback((value: string) => {
        dispatch(updateStatus(value))
    }, [dispatch])


    return (
        <div className={p.profile}>
            <Profile
                profile={profileState.profile}
                status={profileState.status}
                updateStatus={updateStatusCallback}
            />
        </div>

    )
}

export default compose<ComponentType>(
    withRouter,
    RedirectHOC
)(ProfileContainerComponent)

