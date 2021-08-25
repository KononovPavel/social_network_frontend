import React from "react";
import d from './Dialogs.module.css'
import p from '../Profile/Profile.module.css'
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {DialogDataType} from "../../redux/reducers/dialogsReducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import TextArea from "../common/FormsControllers/TextAreaForm/TextArea";
import {maxLengthCreator, required} from "../../utils/formValidators/Posts/validators";

type PropsType = {
    DialogData: DialogDataType,
    addMessageCallback: (newMessage:string) => void,

}

export const Dialogs: React.FC<PropsType> = (
    {
        DialogData,
        addMessageCallback,
    }) => {

    const onSendMessageClick = (value:FormDataDialogsType) => {
        addMessageCallback(value.newMessage)
    }


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
          <AddMessageFormRedux onSubmit={onSendMessageClick}/>
        </div>
    )
}
export type FormDataDialogsType = {
    newMessage:string
}
const maxLength50 = maxLengthCreator(50)

const  AddMessageForm:React.FC<InjectedFormProps<FormDataDialogsType>> = (props)=>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={TextArea}
                    name={'newMessage'}
                    placeholder={'Новое сообщение'}
                    validate={[required,maxLength50]}
                    />
            </div>
            <div>
                <button>Отправить</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm<FormDataDialogsType>({form:'ADD_MESSAGE_FORM'})(AddMessageForm)
