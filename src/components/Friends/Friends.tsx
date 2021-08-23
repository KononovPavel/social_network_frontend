import React from "react";
import {Friend} from "./Friend/Friend";
import f from './Friends.module.css'
import {sideBarType} from "../../redux/reducers/sideBarReducer";


export const Friends = (props: sideBarType) => {

    return <div>
        <h4 className={f.friends}>Friends</h4>
        <Friend friends={props.friends}/>
    </div>
}
