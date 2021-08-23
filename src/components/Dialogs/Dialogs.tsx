import React from "react";
import d from './Dialogs.module.css'
import p from '../Profile/Profile.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import CreateMessage from "./Message/CreateMessage/CreateMessage";
import {DialogDataType} from "../../redux/reducers/dialogsReducer";

type PropsType = {
    DialogData: DialogDataType,
    addMessageCallback: () => void,
    updateMessageCallback: (value: string) => void,

}

export const Dialogs: React.FC<PropsType> = (
    {
        DialogData,
        updateMessageCallback,
        addMessageCallback,
    }) => {

    return (
        <div className={p.profile}>
            <h4 className={d.dialogs}>Dialogs</h4>
            <div className={d.dialogsGrid}>
                <div className={d.items}>
                    <Dialog dialogUsers={DialogData.dialogData}/>
                </div>
                <div className={d.messages}>
                    <Message messages={DialogData.messages}/>
                </div>
            </div>
            <CreateMessage
                newMessage={DialogData.newMessage}
                updateMessageCallback={updateMessageCallback}
                addMessageCallback={addMessageCallback}
            />
        </div>
    )

}
