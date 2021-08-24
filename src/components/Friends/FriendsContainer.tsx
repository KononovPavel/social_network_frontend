import {useSelector} from "react-redux";
import {Friends} from "./Friends";
import {StoreType} from "../../redux/redux-store";
import {compose} from "redux";
import RedirectHOC from "../../hoc/RedirectHOC";
import React, {ComponentType} from "react";
import {FriendType} from "../../redux/reducers/sideBarReducer";



const FriendsContainer = () => {
    const friends = useSelector<StoreType,FriendType[] >(state => state.sideBarReducer.friends)
    return <Friends friends={friends}/>
}

export default compose<ComponentType>(RedirectHOC)(FriendsContainer)


