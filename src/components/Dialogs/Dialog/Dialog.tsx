import React from "react";
import d from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import { dialogDataType } from "../../../redux/reducers/dialogsReducer";



type DialogPropsType = {
    dialogUsers: Array<dialogDataType>,
}

export const Dialog: React.FC<DialogPropsType> = (props) => {

    return (<div>
        {
            props.dialogUsers.map(dU =>
                <div key={dU.id} className={d.item}>
                    <img src={dU.image} alt="" width={30} height={30}/>
                    <NavLink activeClassName={d.active} to={`/dialogs/${dU.id}`}> {dU.name} </NavLink>
                </div>)
        }
    </div>)
}
