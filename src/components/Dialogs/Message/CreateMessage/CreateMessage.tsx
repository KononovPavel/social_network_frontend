import React, {ChangeEvent} from 'react';

type PropsType = {
    newMessage: string,
    addMessageCallback:()=>void,
    updateMessageCallback:(value:string)=>void
}

const CreateMessage: React.FC<PropsType> = ({newMessage, addMessageCallback, updateMessageCallback}) => {
    const onSendMessageClick = () => {
       addMessageCallback();
    }
    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    updateMessageCallback(event.currentTarget.value)
    }

    return (
        <form>
            <textarea
                value={newMessage}
                onChange={onChangeHandler}
                placeholder={"Новое сообщение"}
            /><br/>
            <button onClick={onSendMessageClick}>Добавить сообщение</button>
        </form>
    );
}

export default CreateMessage;
