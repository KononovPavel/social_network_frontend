import React from "react";
import F from '../Friends.module.css'
import {sideBarType} from "../../../redux/reducers/sideBarReducer";


export const Friend = (props: sideBarType) => {
    return <div>{
        props.friends.map(f =>
            <div className={F.View} key={f.id}>
                <img className={F.img} src={f.image} alt="" width={30} height={30}/>
                <span className={F.name}>
                        {f.name}
                    </span>
            </div>)
    }
    </div>
}
