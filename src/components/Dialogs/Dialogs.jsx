import React from 'react';
import s from './Dialogs.module.sass';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm";

const Dialogs = (props) => {
    let dialogElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messageElements = props.messages
        .map(m => <Message message={m.message} id={m.id}/>);

    const addNewMessage = (values) => {
        props.onMessageClick(values.newMessageText)
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <AddMessageForm onSubmit={addNewMessage} />
            </div>
        </div>
    )
}

export default Dialogs;