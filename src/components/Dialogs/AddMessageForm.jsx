import React from 'react';
import s from './Dialogs.module.sass';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../Controls/Validators/Validators";
import {Textarea} from "../../common/FormControls/FormControls";

const maxLength30 = maxLengthCreator(30);

export default reduxForm({form: 'dialogAddMessageForm'})(props => {
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <div>
                <label>
                    <Field component={Textarea} name={"newMessageText"} placeholder={"Type message..."}
                           validate={[required, maxLength30]}/>
                </label>
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
});