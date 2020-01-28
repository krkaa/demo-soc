import React from 'react';
import s from './Dialogs.module.sass';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    let dialogElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messageElements = props.messages
        .map(m => <Message message={m.message} id={m.id}/>);

    let onMessageClick = () => {
        props.onMessageClick();
    };

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.onMessageChange(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <form className={s.form}>
                    <div>
                    <textarea onChange={onMessageChange}
                              value={props.newMessageText}
                    />
                    </div>
                    <div>
                        <button onClick={onMessageClick}>Add message</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Dialogs;