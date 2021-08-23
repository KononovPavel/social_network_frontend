import {connect} from "react-redux";
import {Friends} from "./Friends";
import {StoreType} from "../../redux/redux-store";
import {compose} from "redux";
import RedirectHOC from "../../hoc/RedirectHOC";
import React from "react";

const mapStateToProps = (state:StoreType)=>{
    return{
        friends:state.sideBarReducer.friends,
    }
}

export const FriendsContainer =compose<React.ComponentType>(
    connect(mapStateToProps),
    RedirectHOC
)(Friends)


