import React from "react";
import d from "../Dialogs.module.css";
import {MessageDataType} from "../../../redux/reducers/dialogsReducer";

type MessagePropsType = {
    messages: Array<MessageDataType>
}

export const Message = (props: MessagePropsType) => {

    return (
        <div>
            {
                props.messages.map(m =>
                    <div key={m.id} className={d.message}>
                        <img src={m.image} alt="" height={30} width={30}/>
                        {m.message}
                    </div>)
            }

        </div>)
}
